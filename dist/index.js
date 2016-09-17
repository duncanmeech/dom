!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var r=t();for(var n in r)("object"==typeof exports?exports:e)[n]=r[n]}}(this,function(){return function(e){function t(n){if(r[n])return r[n].exports;var i=r[n]={exports:{},id:n,loaded:!1};return e[n].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var r={};return t.m=e,t.c=r,t.p="",t(0)}([function(e,t){"use strict";function r(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function s(e){function t(){var t=Reflect.construct(e,Array.from(arguments));return Object.setPrototypeOf(t,Object.getPrototypeOf(this)),t}return t.prototype=Object.create(e.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e,t}function a(){return new(Function.prototype.bind.apply(h,[null].concat(Array.prototype.slice.call(arguments))))}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}();t["default"]=a;var c=new RegExp("s*<([^>]+)>"),u=["r+childNodes","r+firstChild","r+lastChild","r+nextSibling","r+previousSibling","r+nodeName","r+nodeType","nodeValue","r+ownerDocument","r+parentElement","r+parentNode","textContent","r+tagName","r+attributes","r+childElementCount","r+children","r+firstElementChild","r+lastElementChild","r+classList","className","r+clientTop","r+clientLeft","r+clientWidth","r+clientHeight","id","innerHTML","outerHTML","innerText","outerText","r+localName","r+scrollWidth","r+scrollHeight","scrollTop","scrollLeft","name","title","value","style"],f=["appendChild","removeChild","replaceChild","click","cloneNode","compareDocumentPosition","contains","hasChildNodes","insertBefore","getBoundingClientRect","getAttribute","getAttributeNS","setAttribute","setAttributeNS","addEventListener","removeEventListener","normalize","focus","blur","querySelector","querySelectorAll"],h=function(e){function t(){n(this,t);for(var e=i(this,Object.getPrototypeOf(t).call(this)),r=arguments.length,o=Array(r),s=0;s<r;s++)o[s]=arguments[s];var a="string"==typeof o[0],l=a&&c.exec(o[0].trim());return 1!==o.length&&2!=o.length||!a||l?1===o.length&&l?e.createFromTAGDefinition(o[0]):e.createFromElements.apply(e,o):e.createFromCSSSelector(o[0],o[1]),e.injectMethodsAndProperties(),e}return o(t,e),l(t,[{key:"injectMethodsAndProperties",value:function(){var e=this;u.forEach(function(t){var r=t.split("+"),n=2===r.length&&"r"===r[0],i=n?r[1]:r[0],o=Object.assign({get:e.genericGetter.bind(e,i)},n?{}:{set:e.genericSetter.bind(e,i)});Object.defineProperty(e,i,o)}),f.forEach(function(t){e[t]=e.genericMethod.bind(e,t)})}},{key:"createFromCSSSelector",value:function(e,t){var n=t?this.getNode(t):document;this.push.apply(this,r(n.querySelectorAll(e)))}},{key:"createFromTAGDefinition",value:function(e){var t=document.createElement("DIV");for(t.insertAdjacentHTML("afterbegin",e),t.normalize(),this.push.apply(this,r(this.getChildren(t)));t.firstChild;)t.removeChild(t.firstChild)}},{key:"createFromElements",value:function(){for(var e=this,n=arguments.length,i=Array(n),o=0;o<n;o++)i[o]=arguments[o];i.forEach(function(n){n instanceof t?e.push.apply(e,r(n)):e.push(n)})}},{key:"genericMethod",value:function(e){for(var t=arguments.length,r=Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];if(0!==this.length){if(1===this.length){var i;return(i=this.el[e]).call.apply(i,[this.el].concat(r))}return this.map(function(t){var n;return(n=t[e]).call.apply(n,[t].concat(r))})}}},{key:"genericGetter",value:function(e){if(0!==this.length)return 1===this.length?this.el[e]:this.map(function(t){return t[e]})}},{key:"genericSetter",value:function(e,t){this.forEach(function(r){return r[e]=t})}},{key:"setStyles",value:function(e){return this.forEach(function(t){t.nodeType===Node.ELEMENT_NODE&&Object.keys(e).forEach(function(r){t.style[r]=e[r]})}),this}},{key:"getNode",value:function(e){return e instanceof t?e[0]:e}},{key:"empty",value:function(){return this.forEach(function(e){for(;e.firstChild;)e.removeChild(e.firstChild)}),this}},{key:"appendTo",value:function(e){var t=this;return this.forEach(function(r){t.getNode(e).appendChild(r)}),this}},{key:"remove",value:function(){return this.forEach(function(e){e.parentNode&&e.parentNode.removeChild(e)}),this}},{key:"zip",value:function(e){var n=this;if(this.zipped)throw new Error("DOMArray has already been zipped");return this.zipped=!0,this.traverse(function(i){var o=i.getAttribute("data-ref");o&&(e[o]=new t(i)),[].concat(r(i.attributes)).forEach(function(t){var r=t.localName.split("-");if("data"===r[0]&&"event"===r[1]){var o={handler:e[t.value].bind(e),event:r[2],capture:!1,element:i};n.zipHandlers=n.zipHandlers||[],n.zipHandlers.push(o),i.addEventListener(o.event,o.handler,o.capture)}})}),this}},{key:"unzip",value:function(e){var t=this;if(!this.zipped)throw new Error("DOMArray instance is not zipped");return this.traverse(function(r){var n=r.getAttribute("data-ref");n&&delete e[n],t.zipHandlers&&(t.zipHandlers.forEach(function(e){e.element.removeEventListener(e.event,e.handler,e.capture)}),t.zipHandlers=null)}),this.zipped=!1,this}},{key:"traverse",value:function(e){var t=this;return this.forEach(function(n){for(var i=[n];i.length;){var o,s=i.pop();e.call(t,s),i=(o=i).concat.apply(o,r(t.getChildren(s)))}}),this}},{key:"getChildren",value:function(e){return e.children?Array.from(e.children):e.childNodes?Array.from(e.childNodes).filter(function(e){return e.nodeType===document.ELEMENT_NODE}):[]}},{key:"addClasses",value:function(e){var t=this;return e.split(" ").filter(function(e){return e.trim().length}).forEach(function(e){t.forEach(function(t){t.classList.add(e)})}),this}},{key:"removeClasses",value:function(e){var t=this;return e.split(" ").filter(function(e){return e.trim().length}).forEach(function(e){t.forEach(function(t){t.classList.remove(e)})}),this}},{key:"classesConditional",value:function(e,t){return t?this.addClasses(e):this.removeClasses(e),this}},{key:"clone",value:function(){var e=this.map(function(e){return e.cloneNode(!0)});return new(Function.prototype.bind.apply(t,[null].concat(r(e))))}},{key:"on",value:function(e,t){var r=!(arguments.length<=2||void 0===arguments[2])&&arguments[2];return this.listeners=this.listeners||{},this.listeners[e]=this.listeners[e]||[],this.listeners[e].push({handler:t,capture:r}),this.forEach(function(n){return n.addEventListener(e,t,r)}),this}},{key:"off",value:function(e,t){var r=this,n=!(arguments.length<=2||void 0===arguments[2])&&arguments[2];if(!this.listeners)return this;if(e||t){if(e&&!t)this.listeners[e]&&this.listeners[e].forEach(function(t){r.forEach(function(r){return r.removeEventListener(e,t.handler,t.capture)})}),delete this.listeners[e];else if(this.listeners[e]){var i=this.listeners[e].findIndex(function(e){return e.handler===t&&e.capture===n});i>=0&&!function(){var t=r.listeners[e][i];r.forEach(function(r){return r.removeEventListener(e,t.handler,t.capture)}),r.listeners[e].splice(i,1)}()}}else Object.keys(this.listeners).forEach(function(e){r.listeners[e].forEach(function(t){r.forEach(function(r){return r.removeEventListener(e,t.handler,t.capture)})})}),delete this.listeners;return this}},{key:"el",get:function(){return this[0]}}]),t}(s(Array))}])});