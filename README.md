# DOMArray
[![Build Status](https://travis-ci.org/duncanmeech/dom.svg?branch=master)](https://travis-ci.org/duncanmeech/dom)
 
https://github.com/duncanmeech/dom

To add to your application
```npm install DOMArray --save```

To use in some module
```javascript
import D from 'DOMArray';
```


DOMArray is a small library that I developed to assist with DOM manipulation in a browser running JavaScript. 

For the types of visualizations and interactive components that I typically develop performance is imperative and
popular libraries such as ReactJS or Angular which attempt to conceal the update/render cycle from the programmer result in
suboptimal performance. For example in ReactJS performance is realized by rendering into a parallel virtual DOM and then
attempting to calculate the delta between the virtual and actual DOM and updating only the minimal changed subset of DOM elements.
This approach is adequate for typical web pages but it fails to deliver satisfactory performance when the component contains a
large number of constantly changing DOM elements.

The alternative is approach is to use the browsers native APIs which deliver optimal performance at the expense of ease of use.
The native APIs suffer from a number of small deficiencies some of which include:
 
1. Relatively simple tasks which can require large, pedantic code blocks e.g. multiple calls to document.createElement/HTMLElement.appendChild etc.
2. Iteration often requires conversion of browser data structures to array e.g. Array.prototype.slice.call(document.querySelectorAll('.some-class')).forEach...
3. Native browser APIs sometimes return static lists but many times return live lists ( e.g.. getElementsByClassName verus querySelectorAll ) which can
   cause subtle bugs if the list is stored for later iteration.
3. No native templating mechanism.
4. No simple mechanism for traversing parent / child hierarchies.
5. Event binding requires careful handling to ensure event listeners are removed when/if the DOM element is removed
   from the DOM. This can either cause memory leaks or exceptions.
   
Historically libraries such as JQuery or its lightweight cousin Zepto were used to circumvent these issues and also smooth out
API inconsistencies between browsers. However, JQuery at 250K uncompressed is a fairly heavy weight solution and also
suffers from poor performance in certain areas. 

# Implementation

DOMArray attempts to address these issues with a very lightweight library ( < 7Kb optimized, < 0.5KLoc ). Fat arrow class methods
are useful in conjunction with DOMArray but it can be used with ES5 with no problems.

To assist with condensing your code the actual export from the module is a function that simply calls the constructor
and passes along your arguments i.e.

```javascript
export default function() {
  return new ElementList(...arguments);
};
```

This simply removes the requirement to use the `new` keyword when creating instances of DOMArray ( which I usually just
import as D ).


# Array Inheritance

The fundamental architecture of DOMArray is to use inheritance of the native Array class to create a specialized Array
type for DOM manipulation. Inheritance of native types is a new feature of ES7. ES7 is not at this time supported
natively by any browsers so you application will need to be compiled with a library such as Babel / Webpack using
additional support for Array inheritance. 

You application will need to configuring similar to this module for 
correct compilation. My webpack configuration is here for reference: https://github.com/duncanmeech/dom/blob/master/webpack.config.js

The considerable benefit of inheriting from the native Array class is that once a instance if constructed all the
native array methods are available to you e.g. forEach, map, reduce, filter. Naturally you can use array indexing to
access the individual elements of a list as well. The following all use a list of DIV tags and array methods.

Using forEach on DOM instance...
```javascript
D('div').forEach(div => {
   console.log(div);
});
```


Using filter on a DOMArray instance...
```javascript
const greenDivs = D('div').filter(div => {
   return div.className = 'green';
});
```


Using array indexing on a DOMArray instance...
```javascript
const list = D('div');
for(let i = 0; i < list.length; i += 1 ) {
    console.log(list[i])
}
```
Also of note is that the resulting Array is NEVER a live list. Subsequent changes to the DOM will not have any 
effect on the items in the array.
Finally, the list is not immutable. You can add/remove elements to the list using push, pop, splice etc.

# Creating instances of DOMArray.

You can construct instances of DOM in three different ways.

### 1. CSS Selectors

Taking a page from the JQuery notebook, you can construct DOMArray instances using any acceptable CSS selector. You may optionally
provide a root element to begin the search from. Otherwise the document object is assumed to be the root of the search.
The following are all examples of using CSS selectors

Select all the DIV tags in the document
```javascript
const list = D('div');
```
Select all the SPAN tags within the first paragraph on the page
```javascript
const list = D('span', D('p')[0]);
```
NOTE: The class provides the read only property `el` to access the first element in a list which often looks cleaner than
[0]. Therefore the following code is identical to the previous block
```javascript
const list = D('span', D('p').el);
```

### 2. DOM Literals

One or more DOM elements can be constructed from a template using either traditional JavaScript strings or better yet
template literal strings from ES6. Internally the DOMArray library uses `insertAdjacentHTML` to create the elements.
Only the top level elements in the template will be part of the list. Using template literal strings has the added
benefit that the templates can be easily parametrized.

The following examples all produce lists with one or more top level elements.

```javascript
\\ list containing a single DIV tag
const list = D(`<div>I am a DIV</div>`);
```

```javascript
\\ list containing a single two DIV tags, each DIV as one child paragraph which is not in the list
const list = D(`<div>
                    <p>Paragraph 1</p>
                </div>
                `<div>
                    <p>Paragraph 2</p>
                </div>`);
```

```javascript
\\ list containing a single DIV with a random number as its inner text content
const list = D(`<p>${Math.random()}</p>`);
```

```javascript
// produce an unorder lists which each word from an array as the items

const words = ["The", "Quick", "Brown", "Fox"];
D(`<ul>${words.reduce((prev, word) => prev + `<li>${word}</li>`, '')}</ul>`)

// produces..."<ul><li>The</li><li>Quick</li><li>Brown</li><li>Fox</li></ul>
// which when passed to the DOMArray constructor returns a list with a single UL tab present.
```

### 3. Passing explicit DOM elements or other D lists.

You can also just pass raw DOM elements to the construct or even other DOMArray instances or a combination of both.
This is often useful since it allows you to aggregate disparate DOM elements that are not related by CSS selector or
DOM position into a single list e.g.

```javascript
// make an array containing the document head and body
const headAndBody = D(document.body, document.head);
```

```javascript
// a D list that concatenates three other lists constructed from CSS attribute selectors and all the inputs on the page.
const list = D(D('[data-button]'), D('[data-anchor]'), D('input'));
```

## Event Binding

Using the native addEventListener and removeEventListener can be problematic if you are dynamically adding and removing
elements to the DOM. Leaving event listeners attached to elements are they are removed from the DOM can cause memory leaks
or worse exceptions when a callback is trigger on an object you thought was disposed. The D library provides a more
robust wrapper to these functions called on and off. 
```javascript

// listen for focus events on the document body
D(document.body).on('focus', event => console.log('body focused'));
```

Since we expect the library to be called from an ES7 app there is no context parameter for the callback since that is
automatic with fat arrow functions. Naturally you can use Function.prototype.bind for explicity bindings e.g.

```javascript
D('#button-one').on('click', function(event, number) {
   // prints 'one'.
   console.log(number);
}.bind(this, 'one')
```

Of course events are added to all the top level members of the list e.g.
```javascript
D('input').on('focus', event => {
    // prints the value in any input element when focused
    console.log(event.target.value);
});
```

There is an optional capture parameter which corresponds to the capture parameter of the add/removeEventListener APIs e.g.
```javascript
D('.user-interface').on('mousedown', event => console.log(event.pageX), true);
```

The real benefit of the on/off methods is that removing event listeners is much more robust. The off method
can be called in two basic ways. The first is with no parameters in which case any event listeners for any event added
with the .on method will be removed.

```javascript
const buttons = D('button');
buttons.on('focus', e => console.log('focused'));
buttons.on('blur', e => console.log('blur'));

// we can remove both handlers from all buttons with
buttons.off();

// alternatively, we could remove just the blur handlers with..
buttons.off('blur');

```

Internally the DOMArray keeps track of all listeners added with the on method, including the state of the capture flag.
When removing handlers, just like the native API, you should use the same capture flag to remove handlers as was used
when adding the handler.

## Accessing native properties and calling native methods.

### Properties

The DOMArray provides accessors for read and read-write properties of DOM element e.g. innerHTML. These accessors are
bound dynamically to the list. If you list contains only one element the return value is identical to the native API.
If you list contains more than one element you will get an array of results, one for each property in the list.

```javascript
const list = D('p');
// if there is only one paragraph tag in the list the following will prints it innerText property
console.log(list.innerText);
// if there is more than one paragraph tag in the list the innerText getter will return an array of strings.
console.log(Array.isArray(list.innerText));
// .. prints true if the list contains more than one element.
console.log(list.innerText.forEach(text => console.log(text);));
// .. prints the inner text of all p tags in the list.

```

Writable properties work in the same fashion except there is no returned values. Writing to a properties
is applied to all elements in the D list e.g.

```javascript
    // give all buttons the class .custom-button
    D('button').className = 'custom-button';
```

### Methods

Methods are implemented in a similar fashion to properties. You can call them directly on the list. If the list
contains a single element then the return value is identical to the native API. If the list contains more than one
element an array of results is returned.

```javascript
console.log(D(document.body).getBoundingClientRect());
// ... prints "[object ClientRect]"
console.log(D(document.head, document.body).getBoundingClientRect());
// ... prints "[[object ClientRect], [object ClientRect]]"
```

### Adding properties and Methods

Rather than hand code each property and method that the native Node and HTMLElement classes expose that are created
on the fly from a list of names of properties and methods in the dom.js file. You should be able to add properties
and method not already supported simply by adding their names to the list. In the case of properties preceed the name
with r+ for read only properties.

### Helper Functions

The intent of DOMArray is to be very lightweight. Hence we incorporate native Array methods with a simple
pass through mechanism to native properties and methods. Occasionally however, it is useful to
add a custom API where it useful in condensing and simplifying your code. The following methods
are available on all DOMArray instances:

1. empty - remove all children from the top level elements in the list
2. remove - remove all top elements from their parents.
3. traverse - invoke a callback for every element and their children, in the list.
4. addClasses - add the space separated list of class names to the elements classList property.
5. removeClass - opposite of above.
6. classesConditional - add/remove classes according to the truthiness of the second parameter.
7. clone - return a new DOMArray instance containing a deep clone of each top level element.
8. setStyles - one of the most useful ( equivalent to the JQuery method .css ). Given an object with
      various key/value pairs, apply them as style properties to the elements in the list e.g.
      
```javascript
    D('<div></div><p></p><span></span>').setStyles({
        marginLeft: '10px',
        color: 'dodgerblue',
        borderRadius: '5px',
    });
```

### Zipping and Unzipping DOMArray instances.

Zipping refers to binding references to DOM elements to another object and adding event handlers in a declarative way.
Zip and Unzip are methods than can be called on any DOMArray. Here is any example of a simple component that constructs itself
from a template literal string and then uses the zip method.

```javascript
    // construct our DOM as a DOMArray
    this.outer = D(
      `<div class="viewer" tabindex="0" data-event-focus="onFocus" data-event-blur="onBlur">
        <div class="menu" data-ref="menu">
          <button data-ref="reverseStrandButton" data-event-click="onReverseStrandClicked">Reverse Strand</button>
          <button data-ref="rulerButton" data-event-click="onRulerClicked">Ruler</button>
          <button data-ref="flattenButton" data-event-click="onFlattenClicked">Flatten</button>
        </div>
        <div class="rows" data-ref="rowsContainer"></div>
       </div>`
    );
    // bind elements and event handlers
    this.outer.zip(this);
    // attach to our parent element
    this.parent.appendChild(this.outer.el);
```

In this example a shallow DOM structure is constructed with an outer DIV element of the class '.viewer'. This viewer
element has DOMArray specific attributes: data-event-focus and data-event-blur. These indicate that we are interested in
binding the events 'focus' and 'blur' to some other object. When we can zip we specific the target object to bind with.
In this case we simple pass 'this' since this method is a class instance method. The DOMArray library then looks for the
matching method(s) (onFocus and onBlur) and calls Node::addEventListener for each event, binding to the named handler.

Any event can be bound to in this way. Just add the name of the event to the end of the attribute ( e.g. data-event-click )
and the name of the method that handles the event on the target object.

An another useful feature of zipping a template is that elements within the list can be bound to named properties on the target object.
In the sample above various buttons include the attribute data-ref with a string value. After zipping to an object those
elements can be accessed directly e.g. this.rulerButton.click();

Unzip reverses that actions of zip. It unbinds event handlers and element bindings ( but not any additional event listeners 
that might have been added with .on

### Putting it all together.

In the following snippet a class instance is constructed and supplied with a parent DOM element. It then constructs
its DOM structure and binds the red span to an instance property and changes to the input element to an instance
method. The resulting components responds to changes to the input by reflecting its content into the red span.

```javascript

  class DOMArrayDemo(parent) {
      
     D(parent).empty();

    // add a style sheet to the head of the document, or we could use a scoped css block directly on the template.
    const css = D(`<style type="text/css">
                       .red { color: red; margin-right: 1rem; } 
                    </style>`);

    document.head.appendChild(css.el);

    const template = D(`<div>
                            <span class="red" data-ref="redSpan">Red Span</span>
                            <input type="text" data-event-input="onInput"/>
                         </div>`);
    parent.appendChild(template.el);
    template.zip(this);
    this.redSpan.setStyles({
      fontSize: '3rem',
    });
  }

  onInput = (event) => {
    this.redSpan.innerText = event.target.value;
  }
  // ... rest of class
```



# Build

First...

```npm install```

..and then for a debuggable, non minified build

```npm run build:dev```

..or for a minified production build

```npm run build:prod```

.. to run all the tests.

```npm run test```
