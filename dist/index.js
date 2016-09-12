(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	exports.default = D;
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	function _extendableBuiltin(cls) {
	  function ExtendableBuiltin() {
	    var instance = Reflect.construct(cls, Array.from(arguments));
	    Object.setPrototypeOf(instance, Object.getPrototypeOf(this));
	    return instance;
	  }
	
	  ExtendableBuiltin.prototype = Object.create(cls.prototype, {
	    constructor: {
	      value: cls,
	      enumerable: false,
	      writable: true,
	      configurable: true
	    }
	  });
	
	  if (Object.setPrototypeOf) {
	    Object.setPrototypeOf(ExtendableBuiltin, cls);
	  } else {
	    ExtendableBuiltin.__proto__ = cls;
	  }
	
	  return ExtendableBuiltin;
	}
	
	/**
	 * simplest regex for identifying a tag string versus a selector string
	 * @type {RegExp}
	 */
	var tagRegex = new RegExp('\s*<([^>]+)>');
	
	/**
	 * getters and setters are created for these properties. The class does not attempt to distinguish between
	 * Node, Element, HTMLElement etc so these properties may or may not exist on any particular member of our list.
	 * Read only properties are prefixed with 'r+'.
	 * For DOMArray's with exactly one item, the getter returns the value returned by the native property.
	 * For DOMArray's containing more than one item an array of results is returned.
	 * Empty DOMArray's return null
	 * @type {string[]}
	 */
	var properties = [
	// Node, properties
	'r+childNodes', 'r+firstChild', 'r+lastChild', 'r+nextSibling', 'r+previousSibling', 'r+nodeName', 'r+nodeType', 'nodeValue', 'r+ownerDocument', 'r+parentElement', 'r+parentNode', 'textContent',
	// Element properties
	'r+attributes', 'r+childElementCount', 'r+children', 'r+firstElementChild', 'r+lastElementChild', 'r+classList', 'className', 'r+clientTop', 'r+clientLeft', 'r+clientWidth', 'r+clientHeight', 'id', 'innerHTML', 'outerHTML', 'innerText', 'outerText', 'r+localName', 'r+scrollWidth', 'r+scrollHeight', 'scrollTop', 'scrollLeft', 'name', 'title', 'value', 'style'];
	
	/**
	 * methods for native Node/Element/HTMLElement objects that we create pass through functions for.
	 * Rules are the same as for getter properties i.e. an array is returned for lists with items > 1
	 * @type {Array}
	 */
	var methods = ['appendChild', 'removeChild', 'replaceChild', 'click', 'cloneNode', 'compareDocumentPosition', 'contains', 'hasChildNodes', 'insertBefore', 'getBoundingClientRect', 'getAttribute', 'getAttributeNS', 'setAttribute', 'setAttributeNS', 'addEventListener', 'removeEventListener', 'normalize', 'focus', 'blur', 'querySelector', 'querySelectorAll'];
	
	/**
	 * the actual elements class which inherits from native Array
	 */
	
	var DOMArray = function (_extendableBuiltin2) {
	  _inherits(DOMArray, _extendableBuiltin2);
	
	  function DOMArray() {
	    _classCallCheck(this, DOMArray);
	
	    // test first argument to see if its a string
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(DOMArray).call(this));
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    var isString = typeof args[0] === 'string';
	    // if its a string see if it a tag definition
	    var isTag = isString && tagRegex.exec(args[0].trim());
	
	    // first argument is a string but not a tag definition so we assume CSS selector
	    if ((args.length === 1 || args.length == 2) && isString && !isTag) {
	      _this.createFromCSSSelector(args[0], args[1]);
	    } else {
	      // second option is that args if just a string e.g. '<div class="xyz"><p>Title</p></div>'
	      // (white space is trimmed to determine if this might be a tag)
	      if (args.length === 1 && isTag) {
	        _this.createFromTAGDefinition(args[0]);
	      } else {
	        // must be raw elements or other DOMArray instances
	        _this.createFromElements.apply(_this, args);
	      }
	    }
	    // inject native property names and function names to the list
	    _this.injectMethodsAndProperties();
	    return _this;
	  }
	
	  /**
	   * bind the read/write properties common to most HTMLElements and Node instances to this object
	   */
	
	
	  _createClass(DOMArray, [{
	    key: 'injectMethodsAndProperties',
	    value: function injectMethodsAndProperties() {
	      var _this2 = this;
	
	      // setup read/write properties
	      properties.forEach(function (p) {
	        // property can be a name or 'r+' name for read only properties
	        var tokens = p.split('+');
	        var readOnly = tokens.length === 2 && tokens[0] === 'r';
	        var name = readOnly ? tokens[1] : tokens[0];
	        // create getter and optional setter
	        var newProperty = Object.assign({
	          get: _this2.genericGetter.bind(_this2, name)
	        }, readOnly ? {} : {
	          set: _this2.genericSetter.bind(_this2, name)
	        });
	        Object.defineProperty(_this2, name, newProperty);
	      });
	
	      // setup methods
	      methods.forEach(function (name) {
	        _this2[name] = _this2.genericMethod.bind(_this2, name);
	      });
	    }
	
	    /**
	     * create our elements list from a CSS selector and option root element ( either
	     * a native HTMLElement/Node or another DOMArray )
	     * @param selector
	     * @param rootElement
	     */
	
	  }, {
	    key: 'createFromCSSSelector',
	    value: function createFromCSSSelector(selector, rootElement) {
	      // use the given root element or the document
	      var root = rootElement ? this.getNode(rootElement) : document;
	      // return a proxy using the results of the selector as the initial array
	      this.push.apply(this, _toConsumableArray(root.querySelectorAll(selector)));
	    }
	
	    /**
	     * create the list from a template string e.g. '<div>A DIV<div><span>A Span</span>'
	     * @param template
	     */
	
	  }, {
	    key: 'createFromTAGDefinition',
	    value: function createFromTAGDefinition(template) {
	      // use a temporary DIV and insertAdjacentHTML to construct the DOM
	      var d = document.createElement('DIV');
	      d.insertAdjacentHTML('afterbegin', template);
	      // normalize the context to remove extraneous white space / text content nodes
	      d.normalize();
	      // add childNode directly into our list
	      this.push.apply(this, _toConsumableArray(d.childNodes));
	      // remove all the children of the temporary div, so that the newly created top level nodes will be unparented
	      while (d.firstChild) {
	        d.removeChild(d.firstChild);
	      }
	    }
	
	    /**
	     * create from a mixed list of elements or other DOMArray instances.
	     * @param args
	     */
	
	  }, {
	    key: 'createFromElements',
	    value: function createFromElements() {
	      var _this3 = this;
	
	      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	        args[_key2] = arguments[_key2];
	      }
	
	      // only remaining option is that each argument is a DOM node or possible another elements list
	      args.forEach(function (arg, index) {
	        if (arg instanceof DOMArray) {
	          _this3.push.apply(_this3, _toConsumableArray(arg));
	        } else {
	          _this3.push(arg);
	        }
	      });
	    }
	
	    /**
	     * all generic methods redirect here
	     * @param name
	     * @param args
	     */
	
	  }, {
	    key: 'genericMethod',
	    value: function genericMethod(name) {
	      for (var _len3 = arguments.length, args = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
	        args[_key3 - 1] = arguments[_key3];
	      }
	
	      if (this.length === 0) {
	        return undefined;
	      }
	      if (this.length === 1) {
	        var _el$name;
	
	        return (_el$name = this.el[name]).call.apply(_el$name, [this.el].concat(args));
	      }
	      return this.map(function (node) {
	        var _node$name;
	
	        return (_node$name = node[name]).call.apply(_node$name, [node].concat(args));
	      });
	    }
	
	    /**
	     * generic getter
	     * @param name - the property to return.
	     */
	
	  }, {
	    key: 'genericGetter',
	    value: function genericGetter(name) {
	      if (this.length === 0) {
	        return undefined;
	      }
	      if (this.length === 1) {
	        return this.el[name];
	      }
	      return this.map(function (node) {
	        return node[name];
	      });
	    }
	
	    /**
	     * generic setter
	     * @param name
	     * @param value
	     */
	
	  }, {
	    key: 'genericSetter',
	    value: function genericSetter(name, value) {
	      this.forEach(function (n) {
	        return n[name] = value;
	      });
	    }
	
	    /**
	     * apply the key/value pairs in hash to all our elements
	     */
	
	  }, {
	    key: 'setStyles',
	    value: function setStyles(hash) {
	      this.forEach(function (element) {
	        if (element.nodeType === Node.ELEMENT_NODE) {
	          Object.keys(hash).forEach(function (key) {
	            element.style[key] = hash[key];
	          });
	        }
	      });
	      return this;
	    }
	
	    /**
	     * if the obj is a DOMArray then return the first member otherwise assume
	     * the object is a node and return it.
	     */
	
	  }, {
	    key: 'getNode',
	    value: function getNode(obj) {
	      if (obj instanceof DOMArray) return obj[0];
	      return obj;
	    }
	
	    /**
	     * if the obj is a DOMArray return it, otherwise wrap the node in a DOMArray
	     */
	
	  }, {
	    key: 'getNodes',
	    value: function getNodes(obj) {
	      if (obj instanceof DOMArray) return obj;
	      return new DOMArray(obj);
	    }
	
	    /**
	     * return the native el of the first element in the list
	     */
	
	  }, {
	    key: 'empty',
	
	
	    /**
	     * remove all elements from the elements in our list
	     */
	    value: function empty() {
	      this.forEach(function (element) {
	        while (element.firstChild) {
	          element.removeChild(element.firstChild);
	        }
	      });
	      return this;
	    }
	
	    /**
	     * appendTo parents all the top level elements in the list to
	     * the given element. Which can be a native element or a DOMArray ( in which case
	     * the elements are append to the first element in the list )
	     */
	
	  }, {
	    key: 'appendTo',
	    value: function appendTo(parent) {
	      var _this4 = this;
	
	      this.forEach(function (node) {
	        _this4.getNode(parent).appendChild(node);
	      });
	      return this;
	    }
	
	    /**
	     * remove all our nodes from their parents
	     */
	
	  }, {
	    key: 'remove',
	    value: function remove() {
	      this.forEach(function (node) {
	        if (node.parentNode) {
	          node.parentNode.removeChild(node);
	        }
	      });
	      return this;
	    }
	
	    /**
	     * iterate every node and all their children looking for data-ref="name" attributes.
	     * Assign targetObject[name] to the matching DOM element.
	     * At the same time look for data-event-* attributes and add event listeners.
	     * e.g. data-event-input="onInput" will call
	     * element.addEventListener('input', targetObject["onInput"].bind(targetObject))
	     * NOTE: The event handlers are just named methods so .bind is called on the method
	     * to ensure 'this' is correct.
	     */
	
	  }, {
	    key: 'zip',
	    value: function zip(targetObject) {
	      // we could use a CSS selector to find the data-ref attributes but for
	      // event attribute (data-event-*) there is no available selector so
	      // we walk the tree of elements using a stack.
	      this.traverse(function (element) {
	        // adopt references
	        var name = element.getAttribute('data-ref');
	        if (name) {
	          targetObject[name] = new DOMArray(element);
	        }
	        // add event handlers
	        [].concat(_toConsumableArray(element.attributes)).forEach(function (attr) {
	          var tokens = attr.localName.split('-');
	          if (tokens[0] === 'data' && tokens[1] === 'event') {
	            element.addEventListener(tokens[2], targetObject[attr.value].bind(targetObject));
	          }
	        });
	      });
	      return this;
	    }
	
	    /**
	     * reverse the actions of zip. Remove references and remove event listeners
	     */
	
	  }, {
	    key: 'unzip',
	    value: function unzip(targetObject) {
	      this.traverse(function (element) {
	        // remove references
	        var name = element.getAttribute('data-ref');
	        if (name) {
	          delete targetObject[name];
	        }
	        // remove event handlers
	        [].concat(_toConsumableArray(element.attributes)).forEach(function (attr) {
	          var tokens = attr.localName.split('-');
	          if (tokens[0] === 'data' && tokens[1] === 'event') {
	            element.removeEventListener(tokens[2], targetObject[attr.value]);
	          }
	        });
	      });
	      return this;
	    }
	
	    /**
	     * utility function. Used in zip, unzip for example. Traverses all nodes and their
	     * children in the list invoking the callback for each one
	     */
	
	  }, {
	    key: 'traverse',
	    value: function traverse(callback) {
	      var _this5 = this;
	
	      this.forEach(function (node) {
	        var stack = [node];
	        while (stack.length) {
	          var _stack;
	
	          var element = stack.pop();
	          callback.call(_this5, element);
	          stack = (_stack = stack).concat.apply(_stack, _toConsumableArray(element.children));
	        }
	      });
	      return this;
	    }
	
	    /**
	     * add white space separated classes to our elements classList
	     */
	
	  }, {
	    key: 'addClasses',
	    value: function addClasses(classes) {
	      var _this6 = this;
	
	      classes.split(' ').filter(function (className) {
	        return className.trim().length;
	      }).forEach(function (className) {
	        _this6.forEach(function (element) {
	          element.classList.add(className);
	        });
	      });
	      return this;
	    }
	
	    /**
	     * remove white space separated class names from the classList of each node
	     * @param classes
	     * @returns {DOMArray}
	     */
	
	  }, {
	    key: 'removeClasses',
	    value: function removeClasses(classes) {
	      var _this7 = this;
	
	      classes.split(' ').filter(function (className) {
	        return className.trim().length;
	      }).forEach(function (className) {
	        _this7.forEach(function (element) {
	          element.classList.remove(className);
	        });
	      });
	      return this;
	    }
	
	    /**
	     * a common usage and worthy of a method. Add the given classes
	     * to our items if the condition is truthy, otherwise remove them
	     * @param classes
	     * @param condition
	     */
	
	  }, {
	    key: 'classesConditional',
	    value: function classesConditional(classes, condition) {
	      if (condition) {
	        this.addClasses(classes);
	      } else {
	        this.removeClasses(classes);
	      }
	      return this;
	    }
	
	    /**
	     * return a new DOMArray contain a deep cloned copy
	     * each node
	     */
	
	  }, {
	    key: 'clone',
	    value: function clone() {
	      return new DOMArray([].concat(_toConsumableArray(this.map(function (n) {
	        return n.cloneNode(true);
	      }))));
	    }
	
	    /**
	     * called addEventListener for each element in the list,
	     * @param event
	     * @param handler
	     */
	
	  }, {
	    key: 'on',
	    value: function on(event, handler) {
	      var capture = arguments.length <= 2 || arguments[2] === undefined ? false : arguments[2];
	
	      // listeners group by event name is an object ( since event is a string ) but the
	      // handlers for each event are stored in a map which can take a function as a key.
	      this.listeners = this.listeners || {};
	      this.listeners[event] = this.listeners[event] || new Map();
	      this.listeners[event].set(handler, { handler: handler, capture: capture });
	      this.forEach(function (n) {
	        return n.addEventListener(event, handler, capture);
	      });
	      return this;
	    }
	
	    /**
	     * remove the handlers from the list. Three ways to call.
	     * ()                   : remove all registered listeners
	     * (eventName)          : remove all listeners for that event.
	     * (eventName, handler) : remove the specific handler for a specific event.
	     */
	
	  }, {
	    key: 'off',
	    value: function off(event, handler) {
	      var _this8 = this;
	
	      var capture = arguments.length <= 2 || arguments[2] === undefined ? false : arguments[2];
	
	      // ignore if we don't have any listeners
	      if (!this.listeners) {
	        return;
	      }
	      // if no event or handler then remove all registered events
	      if (!event && !handler) {
	        // iterate all events
	        Object.keys(this.listeners).forEach(function (eventName) {
	          _this8.listeners[eventName].forEach(function (record) {
	            _this8.forEach(function (n) {
	              return n.removeEventListener(eventName, record.handler, record.capture);
	            });
	          });
	        });
	        // reset all listeners
	        delete this.listeners;
	      } else {
	        // if only event name specified remove all listeners for that event
	        if (event && !handler) {
	          if (this.listeners[event]) {
	            this.listeners[event].forEach(function (record) {
	              _this8.forEach(function (n) {
	                return n.removeEventListener(event, record.handler, record.capture);
	              });
	            });
	          }
	          // delete listeners for this specific event
	          delete this.listeners[event];
	        } else {
	          // remove the specific listener if it is present, by finding the record with the handler
	          // ( the capture flag must match as well )
	          if (this.listeners[event]) {
	            (function () {
	              var matchedRecord = void 0;
	              _this8.listeners[event].forEach(function (record) {
	                if (record.handler === handler && record.capture === capture) {
	                  matchedRecord = record;
	                }
	              });
	              if (matchedRecord) {
	                _this8.listeners[event].delete(matchedRecord);
	                _this8.forEach(function (n) {
	                  return n.removeEventListener(event, matchedRecord.handler, matchedRecord.capture);
	                });
	              }
	              // remove just this record
	              _this8.listeners[event].delete(matchedRecord);
	            })();
	          }
	        }
	      }
	      return this;
	    }
	  }, {
	    key: 'el',
	    get: function get() {
	      return this[0];
	    }
	  }]);
	
	  return DOMArray;
	}(_extendableBuiltin(Array));
	
	/**
	 * We export a factory function for DOMArray so there is no need to the new operator
	 */
	
	
	function D() {
	  return new (Function.prototype.bind.apply(DOMArray, [null].concat(Array.prototype.slice.call(arguments))))();
	};

/***/ }
/******/ ])
});
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA2ZjY0ZDY3NDYzMTQ3ZGRiZmM0NyIsIndlYnBhY2s6Ly8vLi9qYXZhc2NyaXB0cy9kb20uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7bUJDa2N3QixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXhleEI7Ozs7QUFJQSxLQUFNLFdBQVcsSUFBSSxNQUFKLENBQVcsY0FBWCxDQUFqQjs7QUFFQTs7Ozs7Ozs7O0FBU0EsS0FBTSxhQUFhO0FBQ2pCO0FBQ0EsZUFGaUIsRUFHakIsY0FIaUIsRUFJakIsYUFKaUIsRUFLakIsZUFMaUIsRUFNakIsbUJBTmlCLEVBT2pCLFlBUGlCLEVBUWpCLFlBUmlCLEVBU2pCLFdBVGlCLEVBVWpCLGlCQVZpQixFQVdqQixpQkFYaUIsRUFZakIsY0FaaUIsRUFhakIsYUFiaUI7QUFjakI7QUFDQSxlQWZpQixFQWdCakIscUJBaEJpQixFQWlCakIsWUFqQmlCLEVBa0JqQixxQkFsQmlCLEVBbUJqQixvQkFuQmlCLEVBb0JqQixhQXBCaUIsRUFxQmpCLFdBckJpQixFQXNCakIsYUF0QmlCLEVBdUJqQixjQXZCaUIsRUF3QmpCLGVBeEJpQixFQXlCakIsZ0JBekJpQixFQTBCakIsSUExQmlCLEVBMkJqQixXQTNCaUIsRUE0QmpCLFdBNUJpQixFQTZCakIsV0E3QmlCLEVBOEJqQixXQTlCaUIsRUErQmpCLGFBL0JpQixFQWdDakIsZUFoQ2lCLEVBaUNqQixnQkFqQ2lCLEVBa0NqQixXQWxDaUIsRUFtQ2pCLFlBbkNpQixFQW9DakIsTUFwQ2lCLEVBcUNqQixPQXJDaUIsRUFzQ2pCLE9BdENpQixFQXVDakIsT0F2Q2lCLENBQW5COztBQTBDQTs7Ozs7QUFLQSxLQUFNLFVBQVUsQ0FDZCxhQURjLEVBRWQsYUFGYyxFQUdkLGNBSGMsRUFJZCxPQUpjLEVBS2QsV0FMYyxFQU1kLHlCQU5jLEVBT2QsVUFQYyxFQVFkLGVBUmMsRUFTZCxjQVRjLEVBVWQsdUJBVmMsRUFXZCxjQVhjLEVBWWQsZ0JBWmMsRUFhZCxjQWJjLEVBY2QsZ0JBZGMsRUFlZCxrQkFmYyxFQWdCZCxxQkFoQmMsRUFpQmQsV0FqQmMsRUFrQmQsT0FsQmMsRUFtQmQsTUFuQmMsRUFvQmQsZUFwQmMsRUFxQmQsa0JBckJjLENBQWhCOztBQXdCQTs7OztLQUlNLFE7OztBQUNKLHVCQUFxQjtBQUFBOztBQUVuQjtBQUZtQjs7QUFBQSx1Q0FBTixJQUFNO0FBQU4sV0FBTTtBQUFBOztBQUduQixTQUFNLFdBQVcsT0FBTyxLQUFLLENBQUwsQ0FBUCxLQUFvQixRQUFyQztBQUNBO0FBQ0EsU0FBTSxRQUFRLFlBQVksU0FBUyxJQUFULENBQWMsS0FBSyxDQUFMLEVBQVEsSUFBUixFQUFkLENBQTFCOztBQUVBO0FBQ0EsU0FBSSxDQUFDLEtBQUssTUFBTCxLQUFnQixDQUFoQixJQUFxQixLQUFLLE1BQUwsSUFBZSxDQUFyQyxLQUEyQyxRQUEzQyxJQUF1RCxDQUFDLEtBQTVELEVBQW1FO0FBQ2pFLGFBQUsscUJBQUwsQ0FBMkIsS0FBSyxDQUFMLENBQTNCLEVBQW9DLEtBQUssQ0FBTCxDQUFwQztBQUNELE1BRkQsTUFFTztBQUNMO0FBQ0E7QUFDQSxXQUFJLEtBQUssTUFBTCxLQUFnQixDQUFoQixJQUFxQixLQUF6QixFQUFnQztBQUM5QixlQUFLLHVCQUFMLENBQTZCLEtBQUssQ0FBTCxDQUE3QjtBQUNELFFBRkQsTUFFTztBQUNMO0FBQ0EsZUFBSyxrQkFBTCxjQUEyQixJQUEzQjtBQUNEO0FBQ0Y7QUFDRDtBQUNBLFdBQUssMEJBQUw7QUFyQm1CO0FBc0JwQjs7QUFFRDs7Ozs7OztrREFHNkI7QUFBQTs7QUFDM0I7QUFDQSxrQkFBVyxPQUFYLENBQW1CLGFBQUs7QUFDdEI7QUFDQSxhQUFNLFNBQVMsRUFBRSxLQUFGLENBQVEsR0FBUixDQUFmO0FBQ0EsYUFBTSxXQUFXLE9BQU8sTUFBUCxLQUFrQixDQUFsQixJQUF1QixPQUFPLENBQVAsTUFBYyxHQUF0RDtBQUNBLGFBQU0sT0FBTyxXQUFXLE9BQU8sQ0FBUCxDQUFYLEdBQXVCLE9BQU8sQ0FBUCxDQUFwQztBQUNBO0FBQ0EsYUFBTSxjQUFjLE9BQU8sTUFBUCxDQUFjO0FBQ2hDLGdCQUFLLE9BQUssYUFBTCxDQUFtQixJQUFuQixTQUE4QixJQUE5QjtBQUQyQixVQUFkLEVBRWpCLFdBQVcsRUFBWCxHQUFnQjtBQUNqQixnQkFBSyxPQUFLLGFBQUwsQ0FBbUIsSUFBbkIsU0FBOEIsSUFBOUI7QUFEWSxVQUZDLENBQXBCO0FBS0EsZ0JBQU8sY0FBUCxTQUE0QixJQUE1QixFQUFrQyxXQUFsQztBQUNELFFBWkQ7O0FBY0E7QUFDQSxlQUFRLE9BQVIsQ0FBZ0IsZ0JBQVE7QUFDdEIsZ0JBQUssSUFBTCxJQUFhLE9BQUssYUFBTCxDQUFtQixJQUFuQixTQUE4QixJQUE5QixDQUFiO0FBQ0QsUUFGRDtBQUdEOztBQUVEOzs7Ozs7Ozs7MkNBTXNCLFEsRUFBVSxXLEVBQWE7QUFDM0M7QUFDQSxXQUFNLE9BQU8sY0FBYyxLQUFLLE9BQUwsQ0FBYSxXQUFiLENBQWQsR0FBMEMsUUFBdkQ7QUFDQTtBQUNBLFlBQUssSUFBTCxnQ0FBYSxLQUFLLGdCQUFMLENBQXNCLFFBQXRCLENBQWI7QUFDRDs7QUFFRDs7Ozs7Ozs2Q0FJd0IsUSxFQUFVO0FBQ2hDO0FBQ0EsV0FBTSxJQUFJLFNBQVMsYUFBVCxDQUF1QixLQUF2QixDQUFWO0FBQ0EsU0FBRSxrQkFBRixDQUFxQixZQUFyQixFQUFtQyxRQUFuQztBQUNBO0FBQ0EsU0FBRSxTQUFGO0FBQ0E7QUFDQSxZQUFLLElBQUwsZ0NBQWEsRUFBRSxVQUFmO0FBQ0E7QUFDQSxjQUFPLEVBQUUsVUFBVDtBQUFxQixXQUFFLFdBQUYsQ0FBYyxFQUFFLFVBQWhCO0FBQXJCO0FBQ0Q7O0FBRUQ7Ozs7Ozs7MENBSTRCO0FBQUE7O0FBQUEsMENBQU4sSUFBTTtBQUFOLGFBQU07QUFBQTs7QUFDMUI7QUFDQSxZQUFLLE9BQUwsQ0FBYSxVQUFDLEdBQUQsRUFBTSxLQUFOLEVBQWdCO0FBQzNCLGFBQUksZUFBZSxRQUFuQixFQUE2QjtBQUMzQixrQkFBSyxJQUFMLGtDQUFhLEdBQWI7QUFDRCxVQUZELE1BRU87QUFDTCxrQkFBSyxJQUFMLENBQVUsR0FBVjtBQUNEO0FBQ0YsUUFORDtBQU9EOztBQUVEOzs7Ozs7OzttQ0FLYyxJLEVBQWU7QUFBQSwwQ0FBTixJQUFNO0FBQU4sYUFBTTtBQUFBOztBQUMzQixXQUFJLEtBQUssTUFBTCxLQUFnQixDQUFwQixFQUF1QjtBQUNyQixnQkFBTyxTQUFQO0FBQ0Q7QUFDRCxXQUFJLEtBQUssTUFBTCxLQUFnQixDQUFwQixFQUF1QjtBQUFBOztBQUNyQixnQkFBTyxpQkFBSyxFQUFMLENBQVEsSUFBUixHQUFjLElBQWQsa0JBQW1CLEtBQUssRUFBeEIsU0FBK0IsSUFBL0IsRUFBUDtBQUNEO0FBQ0QsY0FBTyxLQUFLLEdBQUwsQ0FBUztBQUFBOztBQUFBLGdCQUFRLG1CQUFLLElBQUwsR0FBVyxJQUFYLG9CQUFnQixJQUFoQixTQUF5QixJQUF6QixFQUFSO0FBQUEsUUFBVCxDQUFQO0FBQ0Q7O0FBRUQ7Ozs7Ozs7bUNBSWMsSSxFQUFNO0FBQ2xCLFdBQUksS0FBSyxNQUFMLEtBQWdCLENBQXBCLEVBQXVCO0FBQ3JCLGdCQUFPLFNBQVA7QUFDRDtBQUNELFdBQUksS0FBSyxNQUFMLEtBQWdCLENBQXBCLEVBQXVCO0FBQ3JCLGdCQUFPLEtBQUssRUFBTCxDQUFRLElBQVIsQ0FBUDtBQUNEO0FBQ0QsY0FBTyxLQUFLLEdBQUwsQ0FBUztBQUFBLGdCQUFRLEtBQUssSUFBTCxDQUFSO0FBQUEsUUFBVCxDQUFQO0FBQ0Q7O0FBRUQ7Ozs7Ozs7O21DQUtjLEksRUFBTSxLLEVBQU87QUFDekIsWUFBSyxPQUFMLENBQWE7QUFBQSxnQkFBSyxFQUFFLElBQUYsSUFBVSxLQUFmO0FBQUEsUUFBYjtBQUNEOztBQUVEOzs7Ozs7K0JBR1UsSSxFQUFNO0FBQ2QsWUFBSyxPQUFMLENBQWEsbUJBQVc7QUFDdEIsYUFBSSxRQUFRLFFBQVIsS0FBcUIsS0FBSyxZQUE5QixFQUE0QztBQUMxQyxrQkFBTyxJQUFQLENBQVksSUFBWixFQUFrQixPQUFsQixDQUEwQixlQUFPO0FBQy9CLHFCQUFRLEtBQVIsQ0FBYyxHQUFkLElBQXFCLEtBQUssR0FBTCxDQUFyQjtBQUNELFlBRkQ7QUFHRDtBQUNGLFFBTkQ7QUFPQSxjQUFPLElBQVA7QUFDRDs7QUFFRDs7Ozs7Ozs2QkFJUSxHLEVBQUs7QUFDWCxXQUFJLGVBQWUsUUFBbkIsRUFBNkIsT0FBTyxJQUFJLENBQUosQ0FBUDtBQUM3QixjQUFPLEdBQVA7QUFDRDs7QUFFRDs7Ozs7OzhCQUdTLEcsRUFBSztBQUNaLFdBQUksZUFBZSxRQUFuQixFQUE2QixPQUFPLEdBQVA7QUFDN0IsY0FBTyxJQUFJLFFBQUosQ0FBYSxHQUFiLENBQVA7QUFDRDs7QUFFRDs7Ozs7Ozs7QUFPQTs7OzZCQUdRO0FBQ04sWUFBSyxPQUFMLENBQWEsbUJBQVc7QUFDdEIsZ0JBQU8sUUFBUSxVQUFmLEVBQTJCO0FBQ3pCLG1CQUFRLFdBQVIsQ0FBb0IsUUFBUSxVQUE1QjtBQUNEO0FBQ0YsUUFKRDtBQUtBLGNBQU8sSUFBUDtBQUNEOztBQUVEOzs7Ozs7Ozs4QkFLUyxNLEVBQVE7QUFBQTs7QUFDZixZQUFLLE9BQUwsQ0FBYSxnQkFBUTtBQUNuQixnQkFBSyxPQUFMLENBQWEsTUFBYixFQUFxQixXQUFyQixDQUFpQyxJQUFqQztBQUNELFFBRkQ7QUFHQSxjQUFPLElBQVA7QUFDRDs7QUFFRDs7Ozs7OzhCQUdTO0FBQ1AsWUFBSyxPQUFMLENBQWEsZ0JBQVE7QUFDbkIsYUFBSSxLQUFLLFVBQVQsRUFBcUI7QUFDbkIsZ0JBQUssVUFBTCxDQUFnQixXQUFoQixDQUE0QixJQUE1QjtBQUNEO0FBQ0YsUUFKRDtBQUtBLGNBQU8sSUFBUDtBQUNEOztBQUVEOzs7Ozs7Ozs7Ozs7eUJBU0ksWSxFQUFjO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBLFlBQUssUUFBTCxDQUFjLG1CQUFXO0FBQ3ZCO0FBQ0EsYUFBTSxPQUFPLFFBQVEsWUFBUixDQUFxQixVQUFyQixDQUFiO0FBQ0EsYUFBSSxJQUFKLEVBQVU7QUFDUix3QkFBYSxJQUFiLElBQXFCLElBQUksUUFBSixDQUFhLE9BQWIsQ0FBckI7QUFDRDtBQUNEO0FBQ0Esc0NBQUksUUFBUSxVQUFaLEdBQXlCLE9BQXpCLENBQWlDLGdCQUFRO0FBQ3ZDLGVBQU0sU0FBUyxLQUFLLFNBQUwsQ0FBZSxLQUFmLENBQXFCLEdBQXJCLENBQWY7QUFDQSxlQUFJLE9BQU8sQ0FBUCxNQUFjLE1BQWQsSUFBd0IsT0FBTyxDQUFQLE1BQWMsT0FBMUMsRUFBbUQ7QUFDakQscUJBQVEsZ0JBQVIsQ0FBeUIsT0FBTyxDQUFQLENBQXpCLEVBQW9DLGFBQWEsS0FBSyxLQUFsQixFQUF5QixJQUF6QixDQUE4QixZQUE5QixDQUFwQztBQUNEO0FBQ0YsVUFMRDtBQU1ELFFBYkQ7QUFjQSxjQUFPLElBQVA7QUFDRDs7QUFFRDs7Ozs7OzJCQUdNLFksRUFBYztBQUNsQixZQUFLLFFBQUwsQ0FBYyxtQkFBVztBQUN2QjtBQUNBLGFBQU0sT0FBTyxRQUFRLFlBQVIsQ0FBcUIsVUFBckIsQ0FBYjtBQUNBLGFBQUksSUFBSixFQUFVO0FBQ1Isa0JBQU8sYUFBYSxJQUFiLENBQVA7QUFDRDtBQUNEO0FBQ0Esc0NBQUksUUFBUSxVQUFaLEdBQXlCLE9BQXpCLENBQWlDLGdCQUFRO0FBQ3ZDLGVBQU0sU0FBUyxLQUFLLFNBQUwsQ0FBZSxLQUFmLENBQXFCLEdBQXJCLENBQWY7QUFDQSxlQUFJLE9BQU8sQ0FBUCxNQUFjLE1BQWQsSUFBd0IsT0FBTyxDQUFQLE1BQWMsT0FBMUMsRUFBbUQ7QUFDakQscUJBQVEsbUJBQVIsQ0FBNEIsT0FBTyxDQUFQLENBQTVCLEVBQXVDLGFBQWEsS0FBSyxLQUFsQixDQUF2QztBQUNEO0FBQ0YsVUFMRDtBQU1ELFFBYkQ7QUFjQSxjQUFPLElBQVA7QUFDRDs7QUFFRDs7Ozs7Ozs4QkFJUyxRLEVBQVU7QUFBQTs7QUFDakIsWUFBSyxPQUFMLENBQWEsZ0JBQVE7QUFDbkIsYUFBSSxRQUFRLENBQUMsSUFBRCxDQUFaO0FBQ0EsZ0JBQU8sTUFBTSxNQUFiLEVBQXFCO0FBQUE7O0FBQ25CLGVBQU0sVUFBVSxNQUFNLEdBQU4sRUFBaEI7QUFDQSxvQkFBUyxJQUFULFNBQW9CLE9BQXBCO0FBQ0EsbUJBQVEsaUJBQU0sTUFBTixrQ0FBZ0IsUUFBUSxRQUF4QixFQUFSO0FBQ0Q7QUFDRixRQVBEO0FBUUEsY0FBTyxJQUFQO0FBQ0Q7O0FBRUQ7Ozs7OztnQ0FHVyxPLEVBQVM7QUFBQTs7QUFDbEIsZUFBUSxLQUFSLENBQWMsR0FBZCxFQUNDLE1BREQsQ0FDUTtBQUFBLGdCQUFhLFVBQVUsSUFBVixHQUFpQixNQUE5QjtBQUFBLFFBRFIsRUFFQyxPQUZELENBRVMscUJBQWE7QUFDcEIsZ0JBQUssT0FBTCxDQUFhLG1CQUFXO0FBQ3RCLG1CQUFRLFNBQVIsQ0FBa0IsR0FBbEIsQ0FBc0IsU0FBdEI7QUFDRCxVQUZEO0FBR0QsUUFORDtBQU9BLGNBQU8sSUFBUDtBQUNEOztBQUVEOzs7Ozs7OzttQ0FLYyxPLEVBQVM7QUFBQTs7QUFDckIsZUFBUSxLQUFSLENBQWMsR0FBZCxFQUNDLE1BREQsQ0FDUTtBQUFBLGdCQUFhLFVBQVUsSUFBVixHQUFpQixNQUE5QjtBQUFBLFFBRFIsRUFFQyxPQUZELENBRVMscUJBQWE7QUFDcEIsZ0JBQUssT0FBTCxDQUFhLG1CQUFXO0FBQ3RCLG1CQUFRLFNBQVIsQ0FBa0IsTUFBbEIsQ0FBeUIsU0FBekI7QUFDRCxVQUZEO0FBR0QsUUFORDtBQU9BLGNBQU8sSUFBUDtBQUNEOztBQUVEOzs7Ozs7Ozs7d0NBTW1CLE8sRUFBUyxTLEVBQVc7QUFDckMsV0FBSSxTQUFKLEVBQWU7QUFDYixjQUFLLFVBQUwsQ0FBZ0IsT0FBaEI7QUFDRCxRQUZELE1BRU87QUFDTCxjQUFLLGFBQUwsQ0FBbUIsT0FBbkI7QUFDRDtBQUNELGNBQU8sSUFBUDtBQUNEOztBQUVEOzs7Ozs7OzZCQUlRO0FBQ04sY0FBTyxJQUFJLFFBQUosOEJBQWlCLEtBQUssR0FBTCxDQUFTO0FBQUEsZ0JBQUssRUFBRSxTQUFGLENBQVksSUFBWixDQUFMO0FBQUEsUUFBVCxDQUFqQixHQUFQO0FBQ0Q7O0FBRUQ7Ozs7Ozs7O3dCQUtHLEssRUFBTyxPLEVBQTBCO0FBQUEsV0FBakIsT0FBaUIseURBQVAsS0FBTzs7QUFDbEM7QUFDQTtBQUNBLFlBQUssU0FBTCxHQUFpQixLQUFLLFNBQUwsSUFBa0IsRUFBbkM7QUFDQSxZQUFLLFNBQUwsQ0FBZSxLQUFmLElBQXdCLEtBQUssU0FBTCxDQUFlLEtBQWYsS0FBeUIsSUFBSSxHQUFKLEVBQWpEO0FBQ0EsWUFBSyxTQUFMLENBQWUsS0FBZixFQUFzQixHQUF0QixDQUEwQixPQUExQixFQUFtQyxFQUFDLGdCQUFELEVBQVUsZ0JBQVYsRUFBbkM7QUFDQSxZQUFLLE9BQUwsQ0FBYTtBQUFBLGdCQUFLLEVBQUUsZ0JBQUYsQ0FBbUIsS0FBbkIsRUFBMEIsT0FBMUIsRUFBbUMsT0FBbkMsQ0FBTDtBQUFBLFFBQWI7QUFDQSxjQUFPLElBQVA7QUFDRDs7QUFFRDs7Ozs7Ozs7O3lCQU1JLEssRUFBTyxPLEVBQTBCO0FBQUE7O0FBQUEsV0FBakIsT0FBaUIseURBQVAsS0FBTzs7QUFDbkM7QUFDQSxXQUFJLENBQUMsS0FBSyxTQUFWLEVBQXFCO0FBQ25CO0FBQ0Q7QUFDRDtBQUNBLFdBQUksQ0FBQyxLQUFELElBQVUsQ0FBQyxPQUFmLEVBQXdCO0FBQ3RCO0FBQ0EsZ0JBQU8sSUFBUCxDQUFZLEtBQUssU0FBakIsRUFBNEIsT0FBNUIsQ0FBb0MscUJBQWE7QUFDL0Msa0JBQUssU0FBTCxDQUFlLFNBQWYsRUFBMEIsT0FBMUIsQ0FBa0Msa0JBQVU7QUFDMUMsb0JBQUssT0FBTCxDQUFhO0FBQUEsc0JBQUssRUFBRSxtQkFBRixDQUFzQixTQUF0QixFQUFpQyxPQUFPLE9BQXhDLEVBQWlELE9BQU8sT0FBeEQsQ0FBTDtBQUFBLGNBQWI7QUFDRCxZQUZEO0FBR0QsVUFKRDtBQUtBO0FBQ0EsZ0JBQU8sS0FBSyxTQUFaO0FBQ0QsUUFURCxNQVNPO0FBQ0w7QUFDQSxhQUFJLFNBQVMsQ0FBQyxPQUFkLEVBQXVCO0FBQ3JCLGVBQUksS0FBSyxTQUFMLENBQWUsS0FBZixDQUFKLEVBQTJCO0FBQ3pCLGtCQUFLLFNBQUwsQ0FBZSxLQUFmLEVBQXNCLE9BQXRCLENBQThCLGtCQUFVO0FBQ3RDLHNCQUFLLE9BQUwsQ0FBYTtBQUFBLHdCQUFLLEVBQUUsbUJBQUYsQ0FBc0IsS0FBdEIsRUFBNkIsT0FBTyxPQUFwQyxFQUE2QyxPQUFPLE9BQXBELENBQUw7QUFBQSxnQkFBYjtBQUNELGNBRkQ7QUFHRDtBQUNEO0FBQ0Esa0JBQU8sS0FBSyxTQUFMLENBQWUsS0FBZixDQUFQO0FBQ0QsVUFSRCxNQVFPO0FBQ0w7QUFDQTtBQUNBLGVBQUksS0FBSyxTQUFMLENBQWUsS0FBZixDQUFKLEVBQTJCO0FBQUE7QUFDekIsbUJBQUksc0JBQUo7QUFDQSxzQkFBSyxTQUFMLENBQWUsS0FBZixFQUFzQixPQUF0QixDQUE4QixrQkFBVTtBQUN0QyxxQkFBSSxPQUFPLE9BQVAsS0FBbUIsT0FBbkIsSUFBOEIsT0FBTyxPQUFQLEtBQW1CLE9BQXJELEVBQThEO0FBQzVELG1DQUFnQixNQUFoQjtBQUNEO0FBQ0YsZ0JBSkQ7QUFLQSxtQkFBSSxhQUFKLEVBQW1CO0FBQ2pCLHdCQUFLLFNBQUwsQ0FBZSxLQUFmLEVBQXNCLE1BQXRCLENBQTZCLGFBQTdCO0FBQ0Esd0JBQUssT0FBTCxDQUFhO0FBQUEsMEJBQUssRUFBRSxtQkFBRixDQUFzQixLQUF0QixFQUE2QixjQUFjLE9BQTNDLEVBQW9ELGNBQWMsT0FBbEUsQ0FBTDtBQUFBLGtCQUFiO0FBQ0Q7QUFDRDtBQUNBLHNCQUFLLFNBQUwsQ0FBZSxLQUFmLEVBQXNCLE1BQXRCLENBQTZCLGFBQTdCO0FBWnlCO0FBYTFCO0FBQ0Y7QUFDRjtBQUNELGNBQU8sSUFBUDtBQUNEOzs7eUJBbE9RO0FBQ1AsY0FBTyxLQUFLLENBQUwsQ0FBUDtBQUNEOzs7O3NCQXhLb0IsSzs7QUEyWXZCOzs7OztBQUdlLFVBQVMsQ0FBVCxHQUFhO0FBQzFCLDZDQUFXLFFBQVgsMkNBQXVCLFNBQXZCO0FBQ0QsRyIsImZpbGUiOiIuL2Rpc3QvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2Uge1xuXHRcdHZhciBhID0gZmFjdG9yeSgpO1xuXHRcdGZvcih2YXIgaSBpbiBhKSAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnID8gZXhwb3J0cyA6IHJvb3QpW2ldID0gYVtpXTtcblx0fVxufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uXG4gKiovIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCA2ZjY0ZDY3NDYzMTQ3ZGRiZmM0N1xuICoqLyIsIi8qKlxuICogc2ltcGxlc3QgcmVnZXggZm9yIGlkZW50aWZ5aW5nIGEgdGFnIHN0cmluZyB2ZXJzdXMgYSBzZWxlY3RvciBzdHJpbmdcbiAqIEB0eXBlIHtSZWdFeHB9XG4gKi9cbmNvbnN0IHRhZ1JlZ2V4ID0gbmV3IFJlZ0V4cCgnXFxzKjwoW14+XSspPicpO1xuXG4vKipcbiAqIGdldHRlcnMgYW5kIHNldHRlcnMgYXJlIGNyZWF0ZWQgZm9yIHRoZXNlIHByb3BlcnRpZXMuIFRoZSBjbGFzcyBkb2VzIG5vdCBhdHRlbXB0IHRvIGRpc3Rpbmd1aXNoIGJldHdlZW5cbiAqIE5vZGUsIEVsZW1lbnQsIEhUTUxFbGVtZW50IGV0YyBzbyB0aGVzZSBwcm9wZXJ0aWVzIG1heSBvciBtYXkgbm90IGV4aXN0IG9uIGFueSBwYXJ0aWN1bGFyIG1lbWJlciBvZiBvdXIgbGlzdC5cbiAqIFJlYWQgb25seSBwcm9wZXJ0aWVzIGFyZSBwcmVmaXhlZCB3aXRoICdyKycuXG4gKiBGb3IgRE9NQXJyYXkncyB3aXRoIGV4YWN0bHkgb25lIGl0ZW0sIHRoZSBnZXR0ZXIgcmV0dXJucyB0aGUgdmFsdWUgcmV0dXJuZWQgYnkgdGhlIG5hdGl2ZSBwcm9wZXJ0eS5cbiAqIEZvciBET01BcnJheSdzIGNvbnRhaW5pbmcgbW9yZSB0aGFuIG9uZSBpdGVtIGFuIGFycmF5IG9mIHJlc3VsdHMgaXMgcmV0dXJuZWQuXG4gKiBFbXB0eSBET01BcnJheSdzIHJldHVybiBudWxsXG4gKiBAdHlwZSB7c3RyaW5nW119XG4gKi9cbmNvbnN0IHByb3BlcnRpZXMgPSBbXG4gIC8vIE5vZGUsIHByb3BlcnRpZXNcbiAgJ3IrY2hpbGROb2RlcycsXG4gICdyK2ZpcnN0Q2hpbGQnLFxuICAncitsYXN0Q2hpbGQnLFxuICAncituZXh0U2libGluZycsXG4gICdyK3ByZXZpb3VzU2libGluZycsXG4gICdyK25vZGVOYW1lJyxcbiAgJ3Irbm9kZVR5cGUnLFxuICAnbm9kZVZhbHVlJyxcbiAgJ3Irb3duZXJEb2N1bWVudCcsXG4gICdyK3BhcmVudEVsZW1lbnQnLFxuICAncitwYXJlbnROb2RlJyxcbiAgJ3RleHRDb250ZW50JyxcbiAgLy8gRWxlbWVudCBwcm9wZXJ0aWVzXG4gICdyK2F0dHJpYnV0ZXMnLFxuICAncitjaGlsZEVsZW1lbnRDb3VudCcsXG4gICdyK2NoaWxkcmVuJyxcbiAgJ3IrZmlyc3RFbGVtZW50Q2hpbGQnLFxuICAncitsYXN0RWxlbWVudENoaWxkJyxcbiAgJ3IrY2xhc3NMaXN0JyxcbiAgJ2NsYXNzTmFtZScsXG4gICdyK2NsaWVudFRvcCcsXG4gICdyK2NsaWVudExlZnQnLFxuICAncitjbGllbnRXaWR0aCcsXG4gICdyK2NsaWVudEhlaWdodCcsXG4gICdpZCcsXG4gICdpbm5lckhUTUwnLFxuICAnb3V0ZXJIVE1MJyxcbiAgJ2lubmVyVGV4dCcsXG4gICdvdXRlclRleHQnLFxuICAncitsb2NhbE5hbWUnLFxuICAncitzY3JvbGxXaWR0aCcsXG4gICdyK3Njcm9sbEhlaWdodCcsXG4gICdzY3JvbGxUb3AnLFxuICAnc2Nyb2xsTGVmdCcsXG4gICduYW1lJyxcbiAgJ3RpdGxlJyxcbiAgJ3ZhbHVlJyxcbiAgJ3N0eWxlJyxcbl07XG5cbi8qKlxuICogbWV0aG9kcyBmb3IgbmF0aXZlIE5vZGUvRWxlbWVudC9IVE1MRWxlbWVudCBvYmplY3RzIHRoYXQgd2UgY3JlYXRlIHBhc3MgdGhyb3VnaCBmdW5jdGlvbnMgZm9yLlxuICogUnVsZXMgYXJlIHRoZSBzYW1lIGFzIGZvciBnZXR0ZXIgcHJvcGVydGllcyBpLmUuIGFuIGFycmF5IGlzIHJldHVybmVkIGZvciBsaXN0cyB3aXRoIGl0ZW1zID4gMVxuICogQHR5cGUge0FycmF5fVxuICovXG5jb25zdCBtZXRob2RzID0gW1xuICAnYXBwZW5kQ2hpbGQnLFxuICAncmVtb3ZlQ2hpbGQnLFxuICAncmVwbGFjZUNoaWxkJyxcbiAgJ2NsaWNrJyxcbiAgJ2Nsb25lTm9kZScsXG4gICdjb21wYXJlRG9jdW1lbnRQb3NpdGlvbicsXG4gICdjb250YWlucycsXG4gICdoYXNDaGlsZE5vZGVzJyxcbiAgJ2luc2VydEJlZm9yZScsXG4gICdnZXRCb3VuZGluZ0NsaWVudFJlY3QnLFxuICAnZ2V0QXR0cmlidXRlJyxcbiAgJ2dldEF0dHJpYnV0ZU5TJyxcbiAgJ3NldEF0dHJpYnV0ZScsXG4gICdzZXRBdHRyaWJ1dGVOUycsXG4gICdhZGRFdmVudExpc3RlbmVyJyxcbiAgJ3JlbW92ZUV2ZW50TGlzdGVuZXInLFxuICAnbm9ybWFsaXplJyxcbiAgJ2ZvY3VzJyxcbiAgJ2JsdXInLFxuICAncXVlcnlTZWxlY3RvcicsXG4gICdxdWVyeVNlbGVjdG9yQWxsJyxcbl07XG5cbi8qKlxuICogdGhlIGFjdHVhbCBlbGVtZW50cyBjbGFzcyB3aGljaCBpbmhlcml0cyBmcm9tIG5hdGl2ZSBBcnJheVxuICovXG5cbmNsYXNzIERPTUFycmF5IGV4dGVuZHMgQXJyYXkge1xuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoKTtcbiAgICAvLyB0ZXN0IGZpcnN0IGFyZ3VtZW50IHRvIHNlZSBpZiBpdHMgYSBzdHJpbmdcbiAgICBjb25zdCBpc1N0cmluZyA9IHR5cGVvZihhcmdzWzBdKSA9PT0gJ3N0cmluZyc7XG4gICAgLy8gaWYgaXRzIGEgc3RyaW5nIHNlZSBpZiBpdCBhIHRhZyBkZWZpbml0aW9uXG4gICAgY29uc3QgaXNUYWcgPSBpc1N0cmluZyAmJiB0YWdSZWdleC5leGVjKGFyZ3NbMF0udHJpbSgpKTtcblxuICAgIC8vIGZpcnN0IGFyZ3VtZW50IGlzIGEgc3RyaW5nIGJ1dCBub3QgYSB0YWcgZGVmaW5pdGlvbiBzbyB3ZSBhc3N1bWUgQ1NTIHNlbGVjdG9yXG4gICAgaWYgKChhcmdzLmxlbmd0aCA9PT0gMSB8fCBhcmdzLmxlbmd0aCA9PSAyKSAmJiBpc1N0cmluZyAmJiAhaXNUYWcpIHtcbiAgICAgIHRoaXMuY3JlYXRlRnJvbUNTU1NlbGVjdG9yKGFyZ3NbMF0sIGFyZ3NbMV0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBzZWNvbmQgb3B0aW9uIGlzIHRoYXQgYXJncyBpZiBqdXN0IGEgc3RyaW5nIGUuZy4gJzxkaXYgY2xhc3M9XCJ4eXpcIj48cD5UaXRsZTwvcD48L2Rpdj4nXG4gICAgICAvLyAod2hpdGUgc3BhY2UgaXMgdHJpbW1lZCB0byBkZXRlcm1pbmUgaWYgdGhpcyBtaWdodCBiZSBhIHRhZylcbiAgICAgIGlmIChhcmdzLmxlbmd0aCA9PT0gMSAmJiBpc1RhZykge1xuICAgICAgICB0aGlzLmNyZWF0ZUZyb21UQUdEZWZpbml0aW9uKGFyZ3NbMF0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gbXVzdCBiZSByYXcgZWxlbWVudHMgb3Igb3RoZXIgRE9NQXJyYXkgaW5zdGFuY2VzXG4gICAgICAgIHRoaXMuY3JlYXRlRnJvbUVsZW1lbnRzKC4uLmFyZ3MpO1xuICAgICAgfVxuICAgIH1cbiAgICAvLyBpbmplY3QgbmF0aXZlIHByb3BlcnR5IG5hbWVzIGFuZCBmdW5jdGlvbiBuYW1lcyB0byB0aGUgbGlzdFxuICAgIHRoaXMuaW5qZWN0TWV0aG9kc0FuZFByb3BlcnRpZXMoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBiaW5kIHRoZSByZWFkL3dyaXRlIHByb3BlcnRpZXMgY29tbW9uIHRvIG1vc3QgSFRNTEVsZW1lbnRzIGFuZCBOb2RlIGluc3RhbmNlcyB0byB0aGlzIG9iamVjdFxuICAgKi9cbiAgaW5qZWN0TWV0aG9kc0FuZFByb3BlcnRpZXMoKSB7XG4gICAgLy8gc2V0dXAgcmVhZC93cml0ZSBwcm9wZXJ0aWVzXG4gICAgcHJvcGVydGllcy5mb3JFYWNoKHAgPT4ge1xuICAgICAgLy8gcHJvcGVydHkgY2FuIGJlIGEgbmFtZSBvciAncisnIG5hbWUgZm9yIHJlYWQgb25seSBwcm9wZXJ0aWVzXG4gICAgICBjb25zdCB0b2tlbnMgPSBwLnNwbGl0KCcrJyk7XG4gICAgICBjb25zdCByZWFkT25seSA9IHRva2Vucy5sZW5ndGggPT09IDIgJiYgdG9rZW5zWzBdID09PSAncic7XG4gICAgICBjb25zdCBuYW1lID0gcmVhZE9ubHkgPyB0b2tlbnNbMV0gOiB0b2tlbnNbMF07XG4gICAgICAvLyBjcmVhdGUgZ2V0dGVyIGFuZCBvcHRpb25hbCBzZXR0ZXJcbiAgICAgIGNvbnN0IG5ld1Byb3BlcnR5ID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICAgIGdldDogdGhpcy5nZW5lcmljR2V0dGVyLmJpbmQodGhpcywgbmFtZSksXG4gICAgICB9LCByZWFkT25seSA/IHt9IDoge1xuICAgICAgICBzZXQ6IHRoaXMuZ2VuZXJpY1NldHRlci5iaW5kKHRoaXMsIG5hbWUpLFxuICAgICAgfSk7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgbmFtZSwgbmV3UHJvcGVydHkpO1xuICAgIH0pO1xuXG4gICAgLy8gc2V0dXAgbWV0aG9kc1xuICAgIG1ldGhvZHMuZm9yRWFjaChuYW1lID0+IHtcbiAgICAgIHRoaXNbbmFtZV0gPSB0aGlzLmdlbmVyaWNNZXRob2QuYmluZCh0aGlzLCBuYW1lKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBjcmVhdGUgb3VyIGVsZW1lbnRzIGxpc3QgZnJvbSBhIENTUyBzZWxlY3RvciBhbmQgb3B0aW9uIHJvb3QgZWxlbWVudCAoIGVpdGhlclxuICAgKiBhIG5hdGl2ZSBIVE1MRWxlbWVudC9Ob2RlIG9yIGFub3RoZXIgRE9NQXJyYXkgKVxuICAgKiBAcGFyYW0gc2VsZWN0b3JcbiAgICogQHBhcmFtIHJvb3RFbGVtZW50XG4gICAqL1xuICBjcmVhdGVGcm9tQ1NTU2VsZWN0b3Ioc2VsZWN0b3IsIHJvb3RFbGVtZW50KSB7XG4gICAgLy8gdXNlIHRoZSBnaXZlbiByb290IGVsZW1lbnQgb3IgdGhlIGRvY3VtZW50XG4gICAgY29uc3Qgcm9vdCA9IHJvb3RFbGVtZW50ID8gdGhpcy5nZXROb2RlKHJvb3RFbGVtZW50KSA6IGRvY3VtZW50O1xuICAgIC8vIHJldHVybiBhIHByb3h5IHVzaW5nIHRoZSByZXN1bHRzIG9mIHRoZSBzZWxlY3RvciBhcyB0aGUgaW5pdGlhbCBhcnJheVxuICAgIHRoaXMucHVzaCguLi5yb290LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBjcmVhdGUgdGhlIGxpc3QgZnJvbSBhIHRlbXBsYXRlIHN0cmluZyBlLmcuICc8ZGl2PkEgRElWPGRpdj48c3Bhbj5BIFNwYW48L3NwYW4+J1xuICAgKiBAcGFyYW0gdGVtcGxhdGVcbiAgICovXG4gIGNyZWF0ZUZyb21UQUdEZWZpbml0aW9uKHRlbXBsYXRlKSB7XG4gICAgLy8gdXNlIGEgdGVtcG9yYXJ5IERJViBhbmQgaW5zZXJ0QWRqYWNlbnRIVE1MIHRvIGNvbnN0cnVjdCB0aGUgRE9NXG4gICAgY29uc3QgZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0RJVicpO1xuICAgIGQuaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmJlZ2luJywgdGVtcGxhdGUpO1xuICAgIC8vIG5vcm1hbGl6ZSB0aGUgY29udGV4dCB0byByZW1vdmUgZXh0cmFuZW91cyB3aGl0ZSBzcGFjZSAvIHRleHQgY29udGVudCBub2Rlc1xuICAgIGQubm9ybWFsaXplKCk7XG4gICAgLy8gYWRkIGNoaWxkTm9kZSBkaXJlY3RseSBpbnRvIG91ciBsaXN0XG4gICAgdGhpcy5wdXNoKC4uLmQuY2hpbGROb2Rlcyk7XG4gICAgLy8gcmVtb3ZlIGFsbCB0aGUgY2hpbGRyZW4gb2YgdGhlIHRlbXBvcmFyeSBkaXYsIHNvIHRoYXQgdGhlIG5ld2x5IGNyZWF0ZWQgdG9wIGxldmVsIG5vZGVzIHdpbGwgYmUgdW5wYXJlbnRlZFxuICAgIHdoaWxlIChkLmZpcnN0Q2hpbGQpIGQucmVtb3ZlQ2hpbGQoZC5maXJzdENoaWxkKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBjcmVhdGUgZnJvbSBhIG1peGVkIGxpc3Qgb2YgZWxlbWVudHMgb3Igb3RoZXIgRE9NQXJyYXkgaW5zdGFuY2VzLlxuICAgKiBAcGFyYW0gYXJnc1xuICAgKi9cbiAgY3JlYXRlRnJvbUVsZW1lbnRzKC4uLmFyZ3MpIHtcbiAgICAvLyBvbmx5IHJlbWFpbmluZyBvcHRpb24gaXMgdGhhdCBlYWNoIGFyZ3VtZW50IGlzIGEgRE9NIG5vZGUgb3IgcG9zc2libGUgYW5vdGhlciBlbGVtZW50cyBsaXN0XG4gICAgYXJncy5mb3JFYWNoKChhcmcsIGluZGV4KSA9PiB7XG4gICAgICBpZiAoYXJnIGluc3RhbmNlb2YgRE9NQXJyYXkpIHtcbiAgICAgICAgdGhpcy5wdXNoKC4uLmFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnB1c2goYXJnKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBhbGwgZ2VuZXJpYyBtZXRob2RzIHJlZGlyZWN0IGhlcmVcbiAgICogQHBhcmFtIG5hbWVcbiAgICogQHBhcmFtIGFyZ3NcbiAgICovXG4gIGdlbmVyaWNNZXRob2QobmFtZSwgLi4uYXJncykge1xuICAgIGlmICh0aGlzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgaWYgKHRoaXMubGVuZ3RoID09PSAxKSB7XG4gICAgICByZXR1cm4gdGhpcy5lbFtuYW1lXS5jYWxsKHRoaXMuZWwsIC4uLmFyZ3MpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5tYXAobm9kZSA9PiBub2RlW25hbWVdLmNhbGwobm9kZSwgLi4uYXJncykpO1xuICB9XG5cbiAgLyoqXG4gICAqIGdlbmVyaWMgZ2V0dGVyXG4gICAqIEBwYXJhbSBuYW1lIC0gdGhlIHByb3BlcnR5IHRvIHJldHVybi5cbiAgICovXG4gIGdlbmVyaWNHZXR0ZXIobmFtZSkge1xuICAgIGlmICh0aGlzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgaWYgKHRoaXMubGVuZ3RoID09PSAxKSB7XG4gICAgICByZXR1cm4gdGhpcy5lbFtuYW1lXTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMubWFwKG5vZGUgPT4gbm9kZVtuYW1lXSk7XG4gIH1cblxuICAvKipcbiAgICogZ2VuZXJpYyBzZXR0ZXJcbiAgICogQHBhcmFtIG5hbWVcbiAgICogQHBhcmFtIHZhbHVlXG4gICAqL1xuICBnZW5lcmljU2V0dGVyKG5hbWUsIHZhbHVlKSB7XG4gICAgdGhpcy5mb3JFYWNoKG4gPT4gbltuYW1lXSA9IHZhbHVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBhcHBseSB0aGUga2V5L3ZhbHVlIHBhaXJzIGluIGhhc2ggdG8gYWxsIG91ciBlbGVtZW50c1xuICAgKi9cbiAgc2V0U3R5bGVzKGhhc2gpIHtcbiAgICB0aGlzLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICBpZiAoZWxlbWVudC5ub2RlVHlwZSA9PT0gTm9kZS5FTEVNRU5UX05PREUpIHtcbiAgICAgICAgT2JqZWN0LmtleXMoaGFzaCkuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgIGVsZW1lbnQuc3R5bGVba2V5XSA9IGhhc2hba2V5XTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogaWYgdGhlIG9iaiBpcyBhIERPTUFycmF5IHRoZW4gcmV0dXJuIHRoZSBmaXJzdCBtZW1iZXIgb3RoZXJ3aXNlIGFzc3VtZVxuICAgKiB0aGUgb2JqZWN0IGlzIGEgbm9kZSBhbmQgcmV0dXJuIGl0LlxuICAgKi9cbiAgZ2V0Tm9kZShvYmopIHtcbiAgICBpZiAob2JqIGluc3RhbmNlb2YgRE9NQXJyYXkpIHJldHVybiBvYmpbMF07XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIC8qKlxuICAgKiBpZiB0aGUgb2JqIGlzIGEgRE9NQXJyYXkgcmV0dXJuIGl0LCBvdGhlcndpc2Ugd3JhcCB0aGUgbm9kZSBpbiBhIERPTUFycmF5XG4gICAqL1xuICBnZXROb2RlcyhvYmopIHtcbiAgICBpZiAob2JqIGluc3RhbmNlb2YgRE9NQXJyYXkpIHJldHVybiBvYmo7XG4gICAgcmV0dXJuIG5ldyBET01BcnJheShvYmopO1xuICB9XG5cbiAgLyoqXG4gICAqIHJldHVybiB0aGUgbmF0aXZlIGVsIG9mIHRoZSBmaXJzdCBlbGVtZW50IGluIHRoZSBsaXN0XG4gICAqL1xuICBnZXQgZWwoKSB7XG4gICAgcmV0dXJuIHRoaXNbMF07XG4gIH1cblxuICAvKipcbiAgICogcmVtb3ZlIGFsbCBlbGVtZW50cyBmcm9tIHRoZSBlbGVtZW50cyBpbiBvdXIgbGlzdFxuICAgKi9cbiAgZW1wdHkoKSB7XG4gICAgdGhpcy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgd2hpbGUgKGVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgICBlbGVtZW50LnJlbW92ZUNoaWxkKGVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogYXBwZW5kVG8gcGFyZW50cyBhbGwgdGhlIHRvcCBsZXZlbCBlbGVtZW50cyBpbiB0aGUgbGlzdCB0b1xuICAgKiB0aGUgZ2l2ZW4gZWxlbWVudC4gV2hpY2ggY2FuIGJlIGEgbmF0aXZlIGVsZW1lbnQgb3IgYSBET01BcnJheSAoIGluIHdoaWNoIGNhc2VcbiAgICogdGhlIGVsZW1lbnRzIGFyZSBhcHBlbmQgdG8gdGhlIGZpcnN0IGVsZW1lbnQgaW4gdGhlIGxpc3QgKVxuICAgKi9cbiAgYXBwZW5kVG8ocGFyZW50KSB7XG4gICAgdGhpcy5mb3JFYWNoKG5vZGUgPT4ge1xuICAgICAgdGhpcy5nZXROb2RlKHBhcmVudCkuYXBwZW5kQ2hpbGQobm9kZSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogcmVtb3ZlIGFsbCBvdXIgbm9kZXMgZnJvbSB0aGVpciBwYXJlbnRzXG4gICAqL1xuICByZW1vdmUoKSB7XG4gICAgdGhpcy5mb3JFYWNoKG5vZGUgPT4ge1xuICAgICAgaWYgKG5vZGUucGFyZW50Tm9kZSkge1xuICAgICAgICBub2RlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobm9kZSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogaXRlcmF0ZSBldmVyeSBub2RlIGFuZCBhbGwgdGhlaXIgY2hpbGRyZW4gbG9va2luZyBmb3IgZGF0YS1yZWY9XCJuYW1lXCIgYXR0cmlidXRlcy5cbiAgICogQXNzaWduIHRhcmdldE9iamVjdFtuYW1lXSB0byB0aGUgbWF0Y2hpbmcgRE9NIGVsZW1lbnQuXG4gICAqIEF0IHRoZSBzYW1lIHRpbWUgbG9vayBmb3IgZGF0YS1ldmVudC0qIGF0dHJpYnV0ZXMgYW5kIGFkZCBldmVudCBsaXN0ZW5lcnMuXG4gICAqIGUuZy4gZGF0YS1ldmVudC1pbnB1dD1cIm9uSW5wdXRcIiB3aWxsIGNhbGxcbiAgICogZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIHRhcmdldE9iamVjdFtcIm9uSW5wdXRcIl0uYmluZCh0YXJnZXRPYmplY3QpKVxuICAgKiBOT1RFOiBUaGUgZXZlbnQgaGFuZGxlcnMgYXJlIGp1c3QgbmFtZWQgbWV0aG9kcyBzbyAuYmluZCBpcyBjYWxsZWQgb24gdGhlIG1ldGhvZFxuICAgKiB0byBlbnN1cmUgJ3RoaXMnIGlzIGNvcnJlY3QuXG4gICAqL1xuICB6aXAodGFyZ2V0T2JqZWN0KSB7XG4gICAgLy8gd2UgY291bGQgdXNlIGEgQ1NTIHNlbGVjdG9yIHRvIGZpbmQgdGhlIGRhdGEtcmVmIGF0dHJpYnV0ZXMgYnV0IGZvclxuICAgIC8vIGV2ZW50IGF0dHJpYnV0ZSAoZGF0YS1ldmVudC0qKSB0aGVyZSBpcyBubyBhdmFpbGFibGUgc2VsZWN0b3Igc29cbiAgICAvLyB3ZSB3YWxrIHRoZSB0cmVlIG9mIGVsZW1lbnRzIHVzaW5nIGEgc3RhY2suXG4gICAgdGhpcy50cmF2ZXJzZShlbGVtZW50ID0+IHtcbiAgICAgIC8vIGFkb3B0IHJlZmVyZW5jZXNcbiAgICAgIGNvbnN0IG5hbWUgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1yZWYnKTtcbiAgICAgIGlmIChuYW1lKSB7XG4gICAgICAgIHRhcmdldE9iamVjdFtuYW1lXSA9IG5ldyBET01BcnJheShlbGVtZW50KTtcbiAgICAgIH1cbiAgICAgIC8vIGFkZCBldmVudCBoYW5kbGVyc1xuICAgICAgWy4uLmVsZW1lbnQuYXR0cmlidXRlcyxdLmZvckVhY2goYXR0ciA9PiB7XG4gICAgICAgIGNvbnN0IHRva2VucyA9IGF0dHIubG9jYWxOYW1lLnNwbGl0KCctJyk7XG4gICAgICAgIGlmICh0b2tlbnNbMF0gPT09ICdkYXRhJyAmJiB0b2tlbnNbMV0gPT09ICdldmVudCcpIHtcbiAgICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIodG9rZW5zWzJdLCB0YXJnZXRPYmplY3RbYXR0ci52YWx1ZV0uYmluZCh0YXJnZXRPYmplY3QpKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogcmV2ZXJzZSB0aGUgYWN0aW9ucyBvZiB6aXAuIFJlbW92ZSByZWZlcmVuY2VzIGFuZCByZW1vdmUgZXZlbnQgbGlzdGVuZXJzXG4gICAqL1xuICB1bnppcCh0YXJnZXRPYmplY3QpIHtcbiAgICB0aGlzLnRyYXZlcnNlKGVsZW1lbnQgPT4ge1xuICAgICAgLy8gcmVtb3ZlIHJlZmVyZW5jZXNcbiAgICAgIGNvbnN0IG5hbWUgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1yZWYnKTtcbiAgICAgIGlmIChuYW1lKSB7XG4gICAgICAgIGRlbGV0ZSB0YXJnZXRPYmplY3RbbmFtZV07XG4gICAgICB9XG4gICAgICAvLyByZW1vdmUgZXZlbnQgaGFuZGxlcnNcbiAgICAgIFsuLi5lbGVtZW50LmF0dHJpYnV0ZXMsXS5mb3JFYWNoKGF0dHIgPT4ge1xuICAgICAgICBjb25zdCB0b2tlbnMgPSBhdHRyLmxvY2FsTmFtZS5zcGxpdCgnLScpO1xuICAgICAgICBpZiAodG9rZW5zWzBdID09PSAnZGF0YScgJiYgdG9rZW5zWzFdID09PSAnZXZlbnQnKSB7XG4gICAgICAgICAgZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHRva2Vuc1syXSwgdGFyZ2V0T2JqZWN0W2F0dHIudmFsdWVdKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogdXRpbGl0eSBmdW5jdGlvbi4gVXNlZCBpbiB6aXAsIHVuemlwIGZvciBleGFtcGxlLiBUcmF2ZXJzZXMgYWxsIG5vZGVzIGFuZCB0aGVpclxuICAgKiBjaGlsZHJlbiBpbiB0aGUgbGlzdCBpbnZva2luZyB0aGUgY2FsbGJhY2sgZm9yIGVhY2ggb25lXG4gICAqL1xuICB0cmF2ZXJzZShjYWxsYmFjaykge1xuICAgIHRoaXMuZm9yRWFjaChub2RlID0+IHtcbiAgICAgIGxldCBzdGFjayA9IFtub2RlLF07XG4gICAgICB3aGlsZSAoc3RhY2subGVuZ3RoKSB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBzdGFjay5wb3AoKTtcbiAgICAgICAgY2FsbGJhY2suY2FsbCh0aGlzLCBlbGVtZW50KTtcbiAgICAgICAgc3RhY2sgPSBzdGFjay5jb25jYXQoLi4uZWxlbWVudC5jaGlsZHJlbik7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogYWRkIHdoaXRlIHNwYWNlIHNlcGFyYXRlZCBjbGFzc2VzIHRvIG91ciBlbGVtZW50cyBjbGFzc0xpc3RcbiAgICovXG4gIGFkZENsYXNzZXMoY2xhc3Nlcykge1xuICAgIGNsYXNzZXMuc3BsaXQoJyAnKVxuICAgIC5maWx0ZXIoY2xhc3NOYW1lID0+IGNsYXNzTmFtZS50cmltKCkubGVuZ3RoKVxuICAgIC5mb3JFYWNoKGNsYXNzTmFtZSA9PiB7XG4gICAgICB0aGlzLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogcmVtb3ZlIHdoaXRlIHNwYWNlIHNlcGFyYXRlZCBjbGFzcyBuYW1lcyBmcm9tIHRoZSBjbGFzc0xpc3Qgb2YgZWFjaCBub2RlXG4gICAqIEBwYXJhbSBjbGFzc2VzXG4gICAqIEByZXR1cm5zIHtET01BcnJheX1cbiAgICovXG4gIHJlbW92ZUNsYXNzZXMoY2xhc3Nlcykge1xuICAgIGNsYXNzZXMuc3BsaXQoJyAnKVxuICAgIC5maWx0ZXIoY2xhc3NOYW1lID0+IGNsYXNzTmFtZS50cmltKCkubGVuZ3RoKVxuICAgIC5mb3JFYWNoKGNsYXNzTmFtZSA9PiB7XG4gICAgICB0aGlzLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogYSBjb21tb24gdXNhZ2UgYW5kIHdvcnRoeSBvZiBhIG1ldGhvZC4gQWRkIHRoZSBnaXZlbiBjbGFzc2VzXG4gICAqIHRvIG91ciBpdGVtcyBpZiB0aGUgY29uZGl0aW9uIGlzIHRydXRoeSwgb3RoZXJ3aXNlIHJlbW92ZSB0aGVtXG4gICAqIEBwYXJhbSBjbGFzc2VzXG4gICAqIEBwYXJhbSBjb25kaXRpb25cbiAgICovXG4gIGNsYXNzZXNDb25kaXRpb25hbChjbGFzc2VzLCBjb25kaXRpb24pIHtcbiAgICBpZiAoY29uZGl0aW9uKSB7XG4gICAgICB0aGlzLmFkZENsYXNzZXMoY2xhc3Nlcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVtb3ZlQ2xhc3NlcyhjbGFzc2VzKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogcmV0dXJuIGEgbmV3IERPTUFycmF5IGNvbnRhaW4gYSBkZWVwIGNsb25lZCBjb3B5XG4gICAqIGVhY2ggbm9kZVxuICAgKi9cbiAgY2xvbmUoKSB7XG4gICAgcmV0dXJuIG5ldyBET01BcnJheShbLi4udGhpcy5tYXAobiA9PiBuLmNsb25lTm9kZSh0cnVlKSksXSk7XG4gIH1cblxuICAvKipcbiAgICogY2FsbGVkIGFkZEV2ZW50TGlzdGVuZXIgZm9yIGVhY2ggZWxlbWVudCBpbiB0aGUgbGlzdCxcbiAgICogQHBhcmFtIGV2ZW50XG4gICAqIEBwYXJhbSBoYW5kbGVyXG4gICAqL1xuICBvbihldmVudCwgaGFuZGxlciwgY2FwdHVyZSA9IGZhbHNlKSB7XG4gICAgLy8gbGlzdGVuZXJzIGdyb3VwIGJ5IGV2ZW50IG5hbWUgaXMgYW4gb2JqZWN0ICggc2luY2UgZXZlbnQgaXMgYSBzdHJpbmcgKSBidXQgdGhlXG4gICAgLy8gaGFuZGxlcnMgZm9yIGVhY2ggZXZlbnQgYXJlIHN0b3JlZCBpbiBhIG1hcCB3aGljaCBjYW4gdGFrZSBhIGZ1bmN0aW9uIGFzIGEga2V5LlxuICAgIHRoaXMubGlzdGVuZXJzID0gdGhpcy5saXN0ZW5lcnMgfHwge307XG4gICAgdGhpcy5saXN0ZW5lcnNbZXZlbnRdID0gdGhpcy5saXN0ZW5lcnNbZXZlbnRdIHx8IG5ldyBNYXAoKTtcbiAgICB0aGlzLmxpc3RlbmVyc1tldmVudF0uc2V0KGhhbmRsZXIsIHtoYW5kbGVyLCBjYXB0dXJlLH0pO1xuICAgIHRoaXMuZm9yRWFjaChuID0+IG4uYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgaGFuZGxlciwgY2FwdHVyZSkpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIHJlbW92ZSB0aGUgaGFuZGxlcnMgZnJvbSB0aGUgbGlzdC4gVGhyZWUgd2F5cyB0byBjYWxsLlxuICAgKiAoKSAgICAgICAgICAgICAgICAgICA6IHJlbW92ZSBhbGwgcmVnaXN0ZXJlZCBsaXN0ZW5lcnNcbiAgICogKGV2ZW50TmFtZSkgICAgICAgICAgOiByZW1vdmUgYWxsIGxpc3RlbmVycyBmb3IgdGhhdCBldmVudC5cbiAgICogKGV2ZW50TmFtZSwgaGFuZGxlcikgOiByZW1vdmUgdGhlIHNwZWNpZmljIGhhbmRsZXIgZm9yIGEgc3BlY2lmaWMgZXZlbnQuXG4gICAqL1xuICBvZmYoZXZlbnQsIGhhbmRsZXIsIGNhcHR1cmUgPSBmYWxzZSkge1xuICAgIC8vIGlnbm9yZSBpZiB3ZSBkb24ndCBoYXZlIGFueSBsaXN0ZW5lcnNcbiAgICBpZiAoIXRoaXMubGlzdGVuZXJzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIGlmIG5vIGV2ZW50IG9yIGhhbmRsZXIgdGhlbiByZW1vdmUgYWxsIHJlZ2lzdGVyZWQgZXZlbnRzXG4gICAgaWYgKCFldmVudCAmJiAhaGFuZGxlcikge1xuICAgICAgLy8gaXRlcmF0ZSBhbGwgZXZlbnRzXG4gICAgICBPYmplY3Qua2V5cyh0aGlzLmxpc3RlbmVycykuZm9yRWFjaChldmVudE5hbWUgPT4ge1xuICAgICAgICB0aGlzLmxpc3RlbmVyc1tldmVudE5hbWVdLmZvckVhY2gocmVjb3JkID0+IHtcbiAgICAgICAgICB0aGlzLmZvckVhY2gobiA9PiBuLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCByZWNvcmQuaGFuZGxlciwgcmVjb3JkLmNhcHR1cmUpKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICAgIC8vIHJlc2V0IGFsbCBsaXN0ZW5lcnNcbiAgICAgIGRlbGV0ZSB0aGlzLmxpc3RlbmVycztcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gaWYgb25seSBldmVudCBuYW1lIHNwZWNpZmllZCByZW1vdmUgYWxsIGxpc3RlbmVycyBmb3IgdGhhdCBldmVudFxuICAgICAgaWYgKGV2ZW50ICYmICFoYW5kbGVyKSB7XG4gICAgICAgIGlmICh0aGlzLmxpc3RlbmVyc1tldmVudF0pIHtcbiAgICAgICAgICB0aGlzLmxpc3RlbmVyc1tldmVudF0uZm9yRWFjaChyZWNvcmQgPT4ge1xuICAgICAgICAgICAgdGhpcy5mb3JFYWNoKG4gPT4gbi5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCByZWNvcmQuaGFuZGxlciwgcmVjb3JkLmNhcHR1cmUpKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICAvLyBkZWxldGUgbGlzdGVuZXJzIGZvciB0aGlzIHNwZWNpZmljIGV2ZW50XG4gICAgICAgIGRlbGV0ZSB0aGlzLmxpc3RlbmVyc1tldmVudF07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyByZW1vdmUgdGhlIHNwZWNpZmljIGxpc3RlbmVyIGlmIGl0IGlzIHByZXNlbnQsIGJ5IGZpbmRpbmcgdGhlIHJlY29yZCB3aXRoIHRoZSBoYW5kbGVyXG4gICAgICAgIC8vICggdGhlIGNhcHR1cmUgZmxhZyBtdXN0IG1hdGNoIGFzIHdlbGwgKVxuICAgICAgICBpZiAodGhpcy5saXN0ZW5lcnNbZXZlbnRdKSB7XG4gICAgICAgICAgbGV0IG1hdGNoZWRSZWNvcmQ7XG4gICAgICAgICAgdGhpcy5saXN0ZW5lcnNbZXZlbnRdLmZvckVhY2gocmVjb3JkID0+IHtcbiAgICAgICAgICAgIGlmIChyZWNvcmQuaGFuZGxlciA9PT0gaGFuZGxlciAmJiByZWNvcmQuY2FwdHVyZSA9PT0gY2FwdHVyZSkge1xuICAgICAgICAgICAgICBtYXRjaGVkUmVjb3JkID0gcmVjb3JkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGlmIChtYXRjaGVkUmVjb3JkKSB7XG4gICAgICAgICAgICB0aGlzLmxpc3RlbmVyc1tldmVudF0uZGVsZXRlKG1hdGNoZWRSZWNvcmQpO1xuICAgICAgICAgICAgdGhpcy5mb3JFYWNoKG4gPT4gbi5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBtYXRjaGVkUmVjb3JkLmhhbmRsZXIsIG1hdGNoZWRSZWNvcmQuY2FwdHVyZSkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAvLyByZW1vdmUganVzdCB0aGlzIHJlY29yZFxuICAgICAgICAgIHRoaXMubGlzdGVuZXJzW2V2ZW50XS5kZWxldGUobWF0Y2hlZFJlY29yZCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbn1cblxuLyoqXG4gKiBXZSBleHBvcnQgYSBmYWN0b3J5IGZ1bmN0aW9uIGZvciBET01BcnJheSBzbyB0aGVyZSBpcyBubyBuZWVkIHRvIHRoZSBuZXcgb3BlcmF0b3JcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRCgpIHtcbiAgcmV0dXJuIG5ldyBET01BcnJheSguLi5hcmd1bWVudHMpO1xufTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vamF2YXNjcmlwdHMvZG9tLmpzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==