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

`import D from '../dom/dom';`

To assist with condensing your code the actual export from the module is a function that simply calls the constructor
and passes along your arguments i.e.

`export default function() {
  return new ElementList(...arguments);
};`


# Array Inheritance





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
