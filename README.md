# DOM 
https://github.com/duncanmeech/dom

DOM is a small library that I developed to assist with DOM manipulation in a browser running JavaScript. 

For the types of visualizations and interactive components that I typically develop performance is imperative and
popular libraries such as ReactJS or Angular which attempt to conceal the update/render cycle from the programmer result in
suboptimal performance. For example in ReactJS performance is realized by rendering into a parallel virtual DOM and then
attempting to calculate the delta between the virtual and actual DOM and updating only the minimal changed subset of DOM elements.
This approach is adequate for typical web pages but it fails to deliver satisfactory performance when the component contains a
large number of constantly changing DOM elements.

The alternative is approach is to use the browsers native APIs which deliver optimal performance at the expense of ease of use.
The native APIs suffer from a number of small deficiencies some of which include:
 
1. Relatively simple tasks which can require large, pedantic code blocks e.g. multiple calls to document.createElement/HTMLElement.appendChild.
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

DOM attempts to address these issues with a very lightweight library ( < 7Kb optimized, < 0.5KLoc ). DOM is written for
applications developed in ES7 since it takes advantage of several advances in the JavaScript standard.

Although the library will shortly be converted to an NPM module the best way to use it right now is to just
take dom.js into your app and require or import it e.g.

```javascript
import D from '../dom/dom';
```

To assist with condensing your code the actual export from the module is a function that simply calls the constructor
and passes along your arguments i.e.

```javascript
export default function() {
  return new ElementList(...arguments);
};
```

This simply removes the requirement to use the `new` keyword when creating instances of DOM ( which I usually just
import as D ).


# Array Inheritance

The fundamental architecture of DOM is to use inheritance of the native Array class to create a specialized Array
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


Using filter on a DOM instance...
```javascript
const greenDivs = D('div').filter(div => {
   return div.className = 'green';
});
```


Using array indexing on a DOM instance...
```javascript
const list = D('div');
for(let i = 0; i < list.length; i += 1 ) {
    console.log(list[i])
}
```
Also of note is that the resulting Array is NEVER a live list. Subsequent changes to the DOM will not have any 
effect on the items in the array.
Finally, the list is not immutable. You can add/remove elements to the list using push, pop, splice etc.

# Creating instances of DOM.

You can construct instances of DOM in three different ways.

### 1. CSS Selectors

Taking a page from the JQuery notebook, you can construct DOM instances using any acceptable CSS selector. You may optionally
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
template literal strings from ES6. Internally the DOM library uses `insertAdjacentHTML` to create the elements.
Only the top level elements in the template will be part of the list. Using template literal strings has the added
benefit that the templates can be easily parameterized.

The following examples all produce lists with one or more top level elements.

```javascript
\\ list containing a single DIV tag
const list = D(`<div>I am a DIV</div>`);
```

```javascript
\\ list containing a single two DIV tags, each DIV as one child paragraph which is not in the list
const list = D(
                `<div>
                    <p>Paragraph 1</p>
                </div>
                `<div>
                    <p>Paragraph 2</p>
                </div>`);
```




# Build

First...

```npm install```

..and then for a debuggable, non minified build

```npm run debug```

..or for a minified production build

```npm run release```

This will build ./dist/index.js
The resulting bundle contains the entire extension including the CSS which is added to the document programmatically.

# Development

For fast development, use...

```npm run watch```
