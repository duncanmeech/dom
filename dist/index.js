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
	      // normalize the context to remove extraneous white space
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
	        console.log('testing ' + index + ': ' + arg.toString());
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
	      var _this4 = this;
	
	      this.forEach(function (node) {
	        var stack = [node];
	        while (stack.length) {
	          var _stack;
	
	          var element = stack.pop();
	          callback.call(_this4, element);
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
	      var _this5 = this;
	
	      classes.split(' ').filter(function (className) {
	        return className.trim().length;
	      }).forEach(function (className) {
	        _this5.forEach(function (element) {
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
	      var _this6 = this;
	
	      classes.split(' ').filter(function (className) {
	        return className.trim().length;
	      }).forEach(function (className) {
	        _this6.forEach(function (element) {
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
	      var _this7 = this;
	
	      var capture = arguments.length <= 2 || arguments[2] === undefined ? false : arguments[2];
	
	      // ignore if we don't have any listeners
	      if (!this.listeners) {
	        return;
	      }
	      // if no event or handler then remove all registered events
	      if (!event && !handler) {
	        // iterate all events
	        Object.keys(this.listeners).forEach(function (eventName) {
	          _this7.listeners[eventName].forEach(function (record) {
	            _this7.forEach(function (n) {
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
	              _this7.forEach(function (n) {
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
	              _this7.listeners[event].forEach(function (record) {
	                if (record.handler === handler && record.capture === capture) {
	                  matchedRecord = record;
	                }
	              });
	              if (matchedRecord) {
	                _this7.listeners[event].delete(matchedRecord);
	                _this7.forEach(function (n) {
	                  return n.removeEventListener(event, matchedRecord.handler, matchedRecord.capture);
	                });
	              }
	              // remove just this record
	              _this7.listeners[event].delete(matchedRecord);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBmOWUwODAxNzhhYTIyNzkzNzRiYiIsIndlYnBhY2s6Ly8vLi9qYXZhc2NyaXB0cy9kb20uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7bUJDdWJ3QixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTdkeEI7Ozs7QUFJQSxLQUFNLFdBQVcsSUFBSSxNQUFKLENBQVcsY0FBWCxDQUFqQjs7QUFFQTs7Ozs7Ozs7O0FBU0EsS0FBTSxhQUFhO0FBQ2pCO0FBQ0EsZUFGaUIsRUFHakIsY0FIaUIsRUFJakIsYUFKaUIsRUFLakIsZUFMaUIsRUFNakIsbUJBTmlCLEVBT2pCLFlBUGlCLEVBUWpCLFlBUmlCLEVBU2pCLFdBVGlCLEVBVWpCLGlCQVZpQixFQVdqQixpQkFYaUIsRUFZakIsY0FaaUIsRUFhakIsYUFiaUI7QUFjakI7QUFDQSxlQWZpQixFQWdCakIscUJBaEJpQixFQWlCakIsWUFqQmlCLEVBa0JqQixxQkFsQmlCLEVBbUJqQixvQkFuQmlCLEVBb0JqQixhQXBCaUIsRUFxQmpCLFdBckJpQixFQXNCakIsYUF0QmlCLEVBdUJqQixjQXZCaUIsRUF3QmpCLGVBeEJpQixFQXlCakIsZ0JBekJpQixFQTBCakIsSUExQmlCLEVBMkJqQixXQTNCaUIsRUE0QmpCLFdBNUJpQixFQTZCakIs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QWExQjtBQUNGO0FBQ0Y7QUFDRCxjQUFPLElBQVA7QUFDRDs7O3lCQXROUTtBQUNQLGNBQU8sS0FBSyxDQUFMLENBQVA7QUFDRDs7OztzQkF6S29CLEs7O0FBZ1l2Qjs7Ozs7QUFHZSxVQUFTLENBQVQsR0FBYTtBQUMxQiw2Q0FBVyxRQUFYLDJDQUF1QixTQUF2QjtBQUNELEciLCJmaWxlIjoiLi9kaXN0L2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIHtcblx0XHR2YXIgYSA9IGZhY3RvcnkoKTtcblx0XHRmb3IodmFyIGkgaW4gYSkgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyA/IGV4cG9ydHMgOiByb290KVtpXSA9IGFbaV07XG5cdH1cbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuIFxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvblxuICoqLyIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgZjllMDgwMTc4YWEyMjc5Mzc0YmJcbiAqKi8iLCIvKipcbiAqIHNpbXBsZXN0IHJlZ2V4IGZvciBpZGVudGlmeWluZyBhIHRhZyBzdHJpbmcgdmVyc3VzIGEgc2VsZWN0b3Igc3RyaW5nXG4gKiBAdHlwZSB7UmVnRXhwfVxuICovXG5jb25zdCB0YWdSZWdleCA9IG5ldyBSZWdFeHAoJ1xccyo8KFtePl0rKT4nKTtcblxuLyoqXG4gKiBnZXR0ZXJzIGFuZCBzZXR0ZXJzIGFyZSBjcmVhdGVkIGZvciB0aGVzZSBwcm9wZXJ0aWVzLiBUaGUgY2xhc3MgZG9lcyBub3QgYXR0ZW1wdCB0byBkaXN0aW5ndWlzaCBiZXR3ZWVuXG4gKiBOb2RlLCBFbGVtZW50LCBIVE1MRWxlbWVudCBldGMgc28gdGhlc2UgcHJvcGVydGllcyBtYXkgb3IgbWF5IG5vdCBleGlzdCBvbiBhbnkgcGFydGljdWxhciBtZW1iZXIgb2Ygb3VyIGxpc3QuXG4gKiBSZWFkIG9ubHkgcHJvcGVydGllcyBhcmUgcHJlZml4ZWQgd2l0aCAncisnLlxuICogRm9yIERPTUFycmF5J3Mgd2l0aCBleGFjdGx5IG9uZSBpdGVtLCB0aGUgZ2V0dGVyIHJldHVybnMgdGhlIHZhbHVlIHJldHVybmVkIGJ5IHRoZSBuYXRpdmUgcHJvcGVydHkuXG4gKiBGb3IgRE9NQXJyYXkncyBjb250YWluaW5nIG1vcmUgdGhhbiBvbmUgaXRlbSBhbiBhcnJheSBvZiByZXN1bHRzIGlzIHJldHVybmVkLlxuICogRW1wdHkgRE9NQXJyYXkncyByZXR1cm4gbnVsbFxuICogQHR5cGUge3N0cmluZ1tdfVxuICovXG5jb25zdCBwcm9wZXJ0aWVzID0gW1xuICAvLyBOb2RlLCBwcm9wZXJ0aWVzXG4gICdyK2NoaWxkTm9kZXMnLFxuICAncitmaXJzdENoaWxkJyxcbiAgJ3IrbGFzdENoaWxkJyxcbiAgJ3IrbmV4dFNpYmxpbmcnLFxuICAncitwcmV2aW91c1NpYmxpbmcnLFxuICAncitub2RlTmFtZScsXG4gICdyK25vZGVUeXBlJyxcbiAgJ25vZGVWYWx1ZScsXG4gICdyK293bmVyRG9jdW1lbnQnLFxuICAncitwYXJlbnRFbGVtZW50JyxcbiAgJ3IrcGFyZW50Tm9kZScsXG4gICd0ZXh0Q29udGVudCcsXG4gIC8vIEVsZW1lbnQgcHJvcGVydGllc1xuICAncithdHRyaWJ1dGVzJyxcbiAgJ3IrY2hpbGRFbGVtZW50Q291bnQnLFxuICAncitjaGlsZHJlbicsXG4gICdyK2ZpcnN0RWxlbWVudENoaWxkJyxcbiAgJ3IrbGFzdEVsZW1lbnRDaGlsZCcsXG4gICdyK2NsYXNzTGlzdCcsXG4gICdjbGFzc05hbWUnLFxuICAncitjbGllbnRUb3AnLFxuICAncitjbGllbnRMZWZ0JyxcbiAgJ3IrY2xpZW50V2lkdGgnLFxuICAncitjbGllbnRIZWlnaHQnLFxuICAnaWQnLFxuICAnaW5uZXJIVE1MJyxcbiAgJ291dGVySFRNTCcsXG4gICdpbm5lclRleHQnLFxuICAnb3V0ZXJUZXh0JyxcbiAgJ3IrbG9jYWxOYW1lJyxcbiAgJ3Irc2Nyb2xsV2lkdGgnLFxuICAncitzY3JvbGxIZWlnaHQnLFxuICAnc2Nyb2xsVG9wJyxcbiAgJ3Njcm9sbExlZnQnLFxuICAnbmFtZScsXG4gICd0aXRsZScsXG4gICd2YWx1ZScsXG4gICdzdHlsZScsXG5dO1xuXG4vKipcbiAqIG1ldGhvZHMgZm9yIG5hdGl2ZSBOb2RlL0VsZW1lbnQvSFRNTEVsZW1lbnQgb2JqZWN0cyB0aGF0IHdlIGNyZWF0ZSBwYXNzIHRocm91Z2ggZnVuY3Rpb25zIGZvci5cbiAqIFJ1bGVzIGFyZSB0aGUgc2FtZSBhcyBmb3IgZ2V0dGVyIHByb3BlcnRpZXMgaS5lLiBhbiBhcnJheSBpcyByZXR1cm5lZCBmb3IgbGlzdHMgd2l0aCBpdGVtcyA+IDFcbiAqIEB0eXBlIHtBcnJheX1cbiAqL1xuY29uc3QgbWV0aG9kcyA9IFtcbiAgJ2FwcGVuZENoaWxkJyxcbiAgJ3JlbW92ZUNoaWxkJyxcbiAgJ3JlcGxhY2VDaGlsZCcsXG4gICdjbGljaycsXG4gICdjbG9uZU5vZGUnLFxuICAnY29tcGFyZURvY3VtZW50UG9zaXRpb24nLFxuICAnY29udGFpbnMnLFxuICAnaGFzQ2hpbGROb2RlcycsXG4gICdpbnNlcnRCZWZvcmUnLFxuICAnZ2V0Qm91bmRpbmdDbGllbnRSZWN0JyxcbiAgJ2dldEF0dHJpYnV0ZScsXG4gICdnZXRBdHRyaWJ1dGVOUycsXG4gICdzZXRBdHRyaWJ1dGUnLFxuICAnc2V0QXR0cmlidXRlTlMnLFxuICAnYWRkRXZlbnRMaXN0ZW5lcicsXG4gICdyZW1vdmVFdmVudExpc3RlbmVyJyxcbiAgJ25vcm1hbGl6ZScsXG4gICdmb2N1cycsXG4gICdibHVyJyxcbiAgJ3F1ZXJ5U2VsZWN0b3InLFxuICAncXVlcnlTZWxlY3RvckFsbCcsXG5dO1xuXG4vKipcbiAqIHRoZSBhY3R1YWwgZWxlbWVudHMgY2xhc3Mgd2hpY2ggaW5oZXJpdHMgZnJvbSBuYXRpdmUgQXJyYXlcbiAqL1xuXG5jbGFzcyBET01BcnJheSBleHRlbmRzIEFycmF5IHtcbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKCk7XG4gICAgLy8gdGVzdCBmaXJzdCBhcmd1bWVudCB0byBzZWUgaWYgaXRzIGEgc3RyaW5nXG4gICAgY29uc3QgaXNTdHJpbmcgPSB0eXBlb2YoYXJnc1swXSkgPT09ICdzdHJpbmcnO1xuICAgIC8vIGlmIGl0cyBhIHN0cmluZyBzZWUgaWYgaXQgYSB0YWcgZGVmaW5pdGlvblxuICAgIGNvbnN0IGlzVGFnID0gaXNTdHJpbmcgJiYgdGFnUmVnZXguZXhlYyhhcmdzWzBdLnRyaW0oKSk7XG5cbiAgICAvLyBmaXJzdCBhcmd1bWVudCBpcyBhIHN0cmluZyBidXQgbm90IGEgdGFnIGRlZmluaXRpb24gc28gd2UgYXNzdW1lIENTUyBzZWxlY3RvclxuICAgIGlmICgoYXJncy5sZW5ndGggPT09IDEgfHwgYXJncy5sZW5ndGggPT0gMikgJiYgaXNTdHJpbmcgJiYgIWlzVGFnKSB7XG4gICAgICB0aGlzLmNyZWF0ZUZyb21DU1NTZWxlY3RvcihhcmdzWzBdLCBhcmdzWzFdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gc2Vjb25kIG9wdGlvbiBpcyB0aGF0IGFyZ3MgaWYganVzdCBhIHN0cmluZyBlLmcuICc8ZGl2IGNsYXNzPVwieHl6XCI+PHA+VGl0bGU8L3A+PC9kaXY+J1xuICAgICAgLy8gKHdoaXRlIHNwYWNlIGlzIHRyaW1tZWQgdG8gZGV0ZXJtaW5lIGlmIHRoaXMgbWlnaHQgYmUgYSB0YWcpXG4gICAgICBpZiAoYXJncy5sZW5ndGggPT09IDEgJiYgaXNUYWcpIHtcbiAgICAgICAgdGhpcy5jcmVhdGVGcm9tVEFHRGVmaW5pdGlvbihhcmdzWzBdKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIG11c3QgYmUgcmF3IGVsZW1lbnRzIG9yIG90aGVyIERPTUFycmF5IGluc3RhbmNlc1xuICAgICAgICB0aGlzLmNyZWF0ZUZyb21FbGVtZW50cyguLi5hcmdzKTtcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gaW5qZWN0IG5hdGl2ZSBwcm9wZXJ0eSBuYW1lcyBhbmQgZnVuY3Rpb24gbmFtZXMgdG8gdGhlIGxpc3RcbiAgICB0aGlzLmluamVjdE1ldGhvZHNBbmRQcm9wZXJ0aWVzKCk7XG4gIH1cblxuICAvKipcbiAgICogYmluZCB0aGUgcmVhZC93cml0ZSBwcm9wZXJ0aWVzIGNvbW1vbiB0byBtb3N0IEhUTUxFbGVtZW50cyBhbmQgTm9kZSBpbnN0YW5jZXMgdG8gdGhpcyBvYmplY3RcbiAgICovXG4gIGluamVjdE1ldGhvZHNBbmRQcm9wZXJ0aWVzKCkge1xuICAgIC8vIHNldHVwIHJlYWQvd3JpdGUgcHJvcGVydGllc1xuICAgIHByb3BlcnRpZXMuZm9yRWFjaChwID0+IHtcbiAgICAgIC8vIHByb3BlcnR5IGNhbiBiZSBhIG5hbWUgb3IgJ3IrJyBuYW1lIGZvciByZWFkIG9ubHkgcHJvcGVydGllc1xuICAgICAgY29uc3QgdG9rZW5zID0gcC5zcGxpdCgnKycpO1xuICAgICAgY29uc3QgcmVhZE9ubHkgPSB0b2tlbnMubGVuZ3RoID09PSAyICYmIHRva2Vuc1swXSA9PT0gJ3InO1xuICAgICAgY29uc3QgbmFtZSA9IHJlYWRPbmx5ID8gdG9rZW5zWzFdIDogdG9rZW5zWzBdO1xuICAgICAgLy8gY3JlYXRlIGdldHRlciBhbmQgb3B0aW9uYWwgc2V0dGVyXG4gICAgICBjb25zdCBuZXdQcm9wZXJ0eSA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgICBnZXQ6IHRoaXMuZ2VuZXJpY0dldHRlci5iaW5kKHRoaXMsIG5hbWUpLFxuICAgICAgfSwgcmVhZE9ubHkgPyB7fSA6IHtcbiAgICAgICAgc2V0OiB0aGlzLmdlbmVyaWNTZXR0ZXIuYmluZCh0aGlzLCBuYW1lKSxcbiAgICAgIH0pO1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsIG5hbWUsIG5ld1Byb3BlcnR5KTtcbiAgICB9KTtcblxuICAgIC8vIHNldHVwIG1ldGhvZHNcbiAgICBtZXRob2RzLmZvckVhY2gobmFtZSA9PiB7XG4gICAgICB0aGlzW25hbWVdID0gdGhpcy5nZW5lcmljTWV0aG9kLmJpbmQodGhpcywgbmFtZSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogY3JlYXRlIG91ciBlbGVtZW50cyBsaXN0IGZyb20gYSBDU1Mgc2VsZWN0b3IgYW5kIG9wdGlvbiByb290IGVsZW1lbnQgKCBlaXRoZXJcbiAgICogYSBuYXRpdmUgSFRNTEVsZW1lbnQvTm9kZSBvciBhbm90aGVyIERPTUFycmF5IClcbiAgICogQHBhcmFtIHNlbGVjdG9yXG4gICAqIEBwYXJhbSByb290RWxlbWVudFxuICAgKi9cbiAgY3JlYXRlRnJvbUNTU1NlbGVjdG9yKHNlbGVjdG9yLCByb290RWxlbWVudCkge1xuICAgIC8vIHVzZSB0aGUgZ2l2ZW4gcm9vdCBlbGVtZW50IG9yIHRoZSBkb2N1bWVudFxuICAgIGNvbnN0IHJvb3QgPSByb290RWxlbWVudCA/IHRoaXMuZ2V0Tm9kZShyb290RWxlbWVudCkgOiBkb2N1bWVudDtcbiAgICAvLyByZXR1cm4gYSBwcm94eSB1c2luZyB0aGUgcmVzdWx0cyBvZiB0aGUgc2VsZWN0b3IgYXMgdGhlIGluaXRpYWwgYXJyYXlcbiAgICB0aGlzLnB1c2goLi4ucm9vdC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKSk7XG4gIH1cblxuICAvKipcbiAgICogY3JlYXRlIHRoZSBsaXN0IGZyb20gYSB0ZW1wbGF0ZSBzdHJpbmcgZS5nLiAnPGRpdj5BIERJVjxkaXY+PHNwYW4+QSBTcGFuPC9zcGFuPidcbiAgICogQHBhcmFtIHRlbXBsYXRlXG4gICAqL1xuICBjcmVhdGVGcm9tVEFHRGVmaW5pdGlvbih0ZW1wbGF0ZSkge1xuICAgIC8vIHVzZSBhIHRlbXBvcmFyeSBESVYgYW5kIGluc2VydEFkamFjZW50SFRNTCB0byBjb25zdHJ1Y3QgdGhlIERPTVxuICAgIGNvbnN0IGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdESVYnKTtcbiAgICBkLmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJiZWdpbicsIHRlbXBsYXRlKTtcbiAgICAvLyBub3JtYWxpemUgdGhlIGNvbnRleHQgdG8gcmVtb3ZlIGV4dHJhbmVvdXMgd2hpdGUgc3BhY2VcbiAgICBkLm5vcm1hbGl6ZSgpO1xuICAgIC8vIGFkZCBjaGlsZE5vZGUgZGlyZWN0bHkgaW50byBvdXIgbGlzdFxuICAgIHRoaXMucHVzaCguLi5kLmNoaWxkTm9kZXMpO1xuICAgIC8vIHJlbW92ZSBhbGwgdGhlIGNoaWxkcmVuIG9mIHRoZSB0ZW1wb3JhcnkgZGl2LCBzbyB0aGF0IHRoZSBuZXdseSBjcmVhdGVkIHRvcCBsZXZlbCBub2RlcyB3aWxsIGJlIHVucGFyZW50ZWRcbiAgICB3aGlsZSAoZC5maXJzdENoaWxkKSBkLnJlbW92ZUNoaWxkKGQuZmlyc3RDaGlsZCk7XG4gIH1cblxuICAvKipcbiAgICogY3JlYXRlIGZyb20gYSBtaXhlZCBsaXN0IG9mIGVsZW1lbnRzIG9yIG90aGVyIERPTUFycmF5IGluc3RhbmNlcy5cbiAgICogQHBhcmFtIGFyZ3NcbiAgICovXG4gIGNyZWF0ZUZyb21FbGVtZW50cyguLi5hcmdzKSB7XG4gICAgLy8gb25seSByZW1haW5pbmcgb3B0aW9uIGlzIHRoYXQgZWFjaCBhcmd1bWVudCBpcyBhIERPTSBub2RlIG9yIHBvc3NpYmxlIGFub3RoZXIgZWxlbWVudHMgbGlzdFxuICAgIGFyZ3MuZm9yRWFjaCgoYXJnLCBpbmRleCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coYHRlc3RpbmcgJHtpbmRleH06ICR7YXJnLnRvU3RyaW5nKCl9YCk7XG4gICAgICBpZiAoYXJnIGluc3RhbmNlb2YgRE9NQXJyYXkpIHtcbiAgICAgICAgdGhpcy5wdXNoKC4uLmFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnB1c2goYXJnKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBhbGwgZ2VuZXJpYyBtZXRob2RzIHJlZGlyZWN0IGhlcmVcbiAgICogQHBhcmFtIG5hbWVcbiAgICogQHBhcmFtIGFyZ3NcbiAgICovXG4gIGdlbmVyaWNNZXRob2QobmFtZSwgLi4uYXJncykge1xuICAgIGlmICh0aGlzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgaWYgKHRoaXMubGVuZ3RoID09PSAxKSB7XG4gICAgICByZXR1cm4gdGhpcy5lbFtuYW1lXS5jYWxsKHRoaXMuZWwsIC4uLmFyZ3MpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5tYXAobm9kZSA9PiBub2RlW25hbWVdLmNhbGwobm9kZSwgLi4uYXJncykpO1xuICB9XG5cbiAgLyoqXG4gICAqIGdlbmVyaWMgZ2V0dGVyXG4gICAqIEBwYXJhbSBuYW1lIC0gdGhlIHByb3BlcnR5IHRvIHJldHVybi5cbiAgICovXG4gIGdlbmVyaWNHZXR0ZXIobmFtZSkge1xuICAgIGlmICh0aGlzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgaWYgKHRoaXMubGVuZ3RoID09PSAxKSB7XG4gICAgICByZXR1cm4gdGhpcy5lbFtuYW1lXTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMubWFwKG5vZGUgPT4gbm9kZVtuYW1lXSk7XG4gIH1cblxuICAvKipcbiAgICogZ2VuZXJpYyBzZXR0ZXJcbiAgICogQHBhcmFtIG5hbWVcbiAgICogQHBhcmFtIHZhbHVlXG4gICAqL1xuICBnZW5lcmljU2V0dGVyKG5hbWUsIHZhbHVlKSB7XG4gICAgdGhpcy5mb3JFYWNoKG4gPT4gbltuYW1lXSA9IHZhbHVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBhcHBseSB0aGUga2V5L3ZhbHVlIHBhaXJzIGluIGhhc2ggdG8gYWxsIG91ciBlbGVtZW50c1xuICAgKi9cbiAgc2V0U3R5bGVzKGhhc2gpIHtcbiAgICB0aGlzLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICBpZiAoZWxlbWVudC5ub2RlVHlwZSA9PT0gTm9kZS5FTEVNRU5UX05PREUpIHtcbiAgICAgICAgT2JqZWN0LmtleXMoaGFzaCkuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgIGVsZW1lbnQuc3R5bGVba2V5XSA9IGhhc2hba2V5XTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogaWYgdGhlIG9iaiBpcyBhIERPTUFycmF5IHRoZW4gcmV0dXJuIHRoZSBmaXJzdCBtZW1iZXIgb3RoZXJ3aXNlIGFzc3VtZVxuICAgKiB0aGUgb2JqZWN0IGlzIGEgbm9kZSBhbmQgcmV0dXJuIGl0LlxuICAgKi9cbiAgZ2V0Tm9kZShvYmopIHtcbiAgICBpZiAob2JqIGluc3RhbmNlb2YgRE9NQXJyYXkpIHJldHVybiBvYmpbMF07XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIC8qKlxuICAgKiBpZiB0aGUgb2JqIGlzIGEgRE9NQXJyYXkgcmV0dXJuIGl0LCBvdGhlcndpc2Ugd3JhcCB0aGUgbm9kZSBpbiBhIERPTUFycmF5XG4gICAqL1xuICBnZXROb2RlcyhvYmopIHtcbiAgICBpZiAob2JqIGluc3RhbmNlb2YgRE9NQXJyYXkpIHJldHVybiBvYmo7XG4gICAgcmV0dXJuIG5ldyBET01BcnJheShvYmopO1xuICB9XG5cbiAgLyoqXG4gICAqIHJldHVybiB0aGUgbmF0aXZlIGVsIG9mIHRoZSBmaXJzdCBlbGVtZW50IGluIHRoZSBsaXN0XG4gICAqL1xuICBnZXQgZWwoKSB7XG4gICAgcmV0dXJuIHRoaXNbMF07XG4gIH1cblxuICAvKipcbiAgICogcmVtb3ZlIGFsbCBlbGVtZW50cyBmcm9tIHRoZSBlbGVtZW50cyBpbiBvdXIgbGlzdFxuICAgKi9cbiAgZW1wdHkoKSB7XG4gICAgdGhpcy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgd2hpbGUgKGVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgICBlbGVtZW50LnJlbW92ZUNoaWxkKGVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogcmVtb3ZlIGFsbCBvdXIgbm9kZXMgZnJvbSB0aGVpciBwYXJlbnRzXG4gICAqL1xuICByZW1vdmUoKSB7XG4gICAgdGhpcy5mb3JFYWNoKG5vZGUgPT4ge1xuICAgICAgaWYgKG5vZGUucGFyZW50Tm9kZSkge1xuICAgICAgICBub2RlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobm9kZSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogaXRlcmF0ZSBldmVyeSBub2RlIGFuZCBhbGwgdGhlaXIgY2hpbGRyZW4gbG9va2luZyBmb3IgZGF0YS1yZWY9XCJuYW1lXCIgYXR0cmlidXRlcy5cbiAgICogQXNzaWduIHRhcmdldE9iamVjdFtuYW1lXSB0byB0aGUgbWF0Y2hpbmcgRE9NIGVsZW1lbnQuXG4gICAqIEF0IHRoZSBzYW1lIHRpbWUgbG9vayBmb3IgZGF0YS1ldmVudC0qIGF0dHJpYnV0ZXMgYW5kIGFkZCBldmVudCBsaXN0ZW5lcnMuXG4gICAqIGUuZy4gZGF0YS1ldmVudC1pbnB1dD1cIm9uSW5wdXRcIiB3aWxsIGNhbGxcbiAgICogZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIHRhcmdldE9iamVjdFtcIm9uSW5wdXRcIl0uYmluZCh0YXJnZXRPYmplY3QpKVxuICAgKiBOT1RFOiBUaGUgZXZlbnQgaGFuZGxlcnMgYXJlIGp1c3QgbmFtZWQgbWV0aG9kcyBzbyAuYmluZCBpcyBjYWxsZWQgb24gdGhlIG1ldGhvZFxuICAgKiB0byBlbnN1cmUgJ3RoaXMnIGlzIGNvcnJlY3QuXG4gICAqL1xuICB6aXAodGFyZ2V0T2JqZWN0KSB7XG4gICAgLy8gd2UgY291bGQgdXNlIGEgQ1NTIHNlbGVjdG9yIHRvIGZpbmQgdGhlIGRhdGEtcmVmIGF0dHJpYnV0ZXMgYnV0IGZvclxuICAgIC8vIGV2ZW50IGF0dHJpYnV0ZSAoZGF0YS1ldmVudC0qKSB0aGVyZSBpcyBubyBhdmFpbGFibGUgc2VsZWN0b3Igc29cbiAgICAvLyB3ZSB3YWxrIHRoZSB0cmVlIG9mIGVsZW1lbnRzIHVzaW5nIGEgc3RhY2suXG4gICAgdGhpcy50cmF2ZXJzZShlbGVtZW50ID0+IHtcbiAgICAgIC8vIGFkb3B0IHJlZmVyZW5jZXNcbiAgICAgIGNvbnN0IG5hbWUgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1yZWYnKTtcbiAgICAgIGlmIChuYW1lKSB7XG4gICAgICAgIHRhcmdldE9iamVjdFtuYW1lXSA9IG5ldyBET01BcnJheShlbGVtZW50KTtcbiAgICAgIH1cbiAgICAgIC8vIGFkZCBldmVudCBoYW5kbGVyc1xuICAgICAgWy4uLmVsZW1lbnQuYXR0cmlidXRlcyxdLmZvckVhY2goYXR0ciA9PiB7XG4gICAgICAgIGNvbnN0IHRva2VucyA9IGF0dHIubG9jYWxOYW1lLnNwbGl0KCctJyk7XG4gICAgICAgIGlmICh0b2tlbnNbMF0gPT09ICdkYXRhJyAmJiB0b2tlbnNbMV0gPT09ICdldmVudCcpIHtcbiAgICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIodG9rZW5zWzJdLCB0YXJnZXRPYmplY3RbYXR0ci52YWx1ZV0uYmluZCh0YXJnZXRPYmplY3QpKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogcmV2ZXJzZSB0aGUgYWN0aW9ucyBvZiB6aXAuIFJlbW92ZSByZWZlcmVuY2VzIGFuZCByZW1vdmUgZXZlbnQgbGlzdGVuZXJzXG4gICAqL1xuICB1bnppcCh0YXJnZXRPYmplY3QpIHtcbiAgICB0aGlzLnRyYXZlcnNlKGVsZW1lbnQgPT4ge1xuICAgICAgLy8gcmVtb3ZlIHJlZmVyZW5jZXNcbiAgICAgIGNvbnN0IG5hbWUgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1yZWYnKTtcbiAgICAgIGlmIChuYW1lKSB7XG4gICAgICAgIGRlbGV0ZSB0YXJnZXRPYmplY3RbbmFtZV07XG4gICAgICB9XG4gICAgICAvLyByZW1vdmUgZXZlbnQgaGFuZGxlcnNcbiAgICAgIFsuLi5lbGVtZW50LmF0dHJpYnV0ZXMsXS5mb3JFYWNoKGF0dHIgPT4ge1xuICAgICAgICBjb25zdCB0b2tlbnMgPSBhdHRyLmxvY2FsTmFtZS5zcGxpdCgnLScpO1xuICAgICAgICBpZiAodG9rZW5zWzBdID09PSAnZGF0YScgJiYgdG9rZW5zWzFdID09PSAnZXZlbnQnKSB7XG4gICAgICAgICAgZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHRva2Vuc1syXSwgdGFyZ2V0T2JqZWN0W2F0dHIudmFsdWVdKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogdXRpbGl0eSBmdW5jdGlvbi4gVXNlZCBpbiB6aXAsIHVuemlwIGZvciBleGFtcGxlLiBUcmF2ZXJzZXMgYWxsIG5vZGVzIGFuZCB0aGVpclxuICAgKiBjaGlsZHJlbiBpbiB0aGUgbGlzdCBpbnZva2luZyB0aGUgY2FsbGJhY2sgZm9yIGVhY2ggb25lXG4gICAqL1xuICB0cmF2ZXJzZShjYWxsYmFjaykge1xuICAgIHRoaXMuZm9yRWFjaChub2RlID0+IHtcbiAgICAgIGxldCBzdGFjayA9IFtub2RlLF07XG4gICAgICB3aGlsZSAoc3RhY2subGVuZ3RoKSB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBzdGFjay5wb3AoKTtcbiAgICAgICAgY2FsbGJhY2suY2FsbCh0aGlzLCBlbGVtZW50KTtcbiAgICAgICAgc3RhY2sgPSBzdGFjay5jb25jYXQoLi4uZWxlbWVudC5jaGlsZHJlbik7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogYWRkIHdoaXRlIHNwYWNlIHNlcGFyYXRlZCBjbGFzc2VzIHRvIG91ciBlbGVtZW50cyBjbGFzc0xpc3RcbiAgICovXG4gIGFkZENsYXNzZXMoY2xhc3Nlcykge1xuICAgIGNsYXNzZXMuc3BsaXQoJyAnKVxuICAgIC5maWx0ZXIoY2xhc3NOYW1lID0+IGNsYXNzTmFtZS50cmltKCkubGVuZ3RoKVxuICAgIC5mb3JFYWNoKGNsYXNzTmFtZSA9PiB7XG4gICAgICB0aGlzLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogcmVtb3ZlIHdoaXRlIHNwYWNlIHNlcGFyYXRlZCBjbGFzcyBuYW1lcyBmcm9tIHRoZSBjbGFzc0xpc3Qgb2YgZWFjaCBub2RlXG4gICAqIEBwYXJhbSBjbGFzc2VzXG4gICAqIEByZXR1cm5zIHtET01BcnJheX1cbiAgICovXG4gIHJlbW92ZUNsYXNzZXMoY2xhc3Nlcykge1xuICAgIGNsYXNzZXMuc3BsaXQoJyAnKVxuICAgIC5maWx0ZXIoY2xhc3NOYW1lID0+IGNsYXNzTmFtZS50cmltKCkubGVuZ3RoKVxuICAgIC5mb3JFYWNoKGNsYXNzTmFtZSA9PiB7XG4gICAgICB0aGlzLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogYSBjb21tb24gdXNhZ2UgYW5kIHdvcnRoeSBvZiBhIG1ldGhvZC4gQWRkIHRoZSBnaXZlbiBjbGFzc2VzXG4gICAqIHRvIG91ciBpdGVtcyBpZiB0aGUgY29uZGl0aW9uIGlzIHRydXRoeSwgb3RoZXJ3aXNlIHJlbW92ZSB0aGVtXG4gICAqIEBwYXJhbSBjbGFzc2VzXG4gICAqIEBwYXJhbSBjb25kaXRpb25cbiAgICovXG4gIGNsYXNzZXNDb25kaXRpb25hbChjbGFzc2VzLCBjb25kaXRpb24pIHtcbiAgICBpZiAoY29uZGl0aW9uKSB7XG4gICAgICB0aGlzLmFkZENsYXNzZXMoY2xhc3Nlcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVtb3ZlQ2xhc3NlcyhjbGFzc2VzKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogcmV0dXJuIGEgbmV3IERPTUFycmF5IGNvbnRhaW4gYSBkZWVwIGNsb25lZCBjb3B5XG4gICAqIGVhY2ggbm9kZVxuICAgKi9cbiAgY2xvbmUoKSB7XG4gICAgcmV0dXJuIG5ldyBET01BcnJheShbLi4udGhpcy5tYXAobiA9PiBuLmNsb25lTm9kZSh0cnVlKSksXSk7XG4gIH1cblxuICAvKipcbiAgICogY2FsbGVkIGFkZEV2ZW50TGlzdGVuZXIgZm9yIGVhY2ggZWxlbWVudCBpbiB0aGUgbGlzdCxcbiAgICogQHBhcmFtIGV2ZW50XG4gICAqIEBwYXJhbSBoYW5kbGVyXG4gICAqL1xuICBvbihldmVudCwgaGFuZGxlciwgY2FwdHVyZSA9IGZhbHNlKSB7XG4gICAgLy8gbGlzdGVuZXJzIGdyb3VwIGJ5IGV2ZW50IG5hbWUgaXMgYW4gb2JqZWN0ICggc2luY2UgZXZlbnQgaXMgYSBzdHJpbmcgKSBidXQgdGhlXG4gICAgLy8gaGFuZGxlcnMgZm9yIGVhY2ggZXZlbnQgYXJlIHN0b3JlZCBpbiBhIG1hcCB3aGljaCBjYW4gdGFrZSBhIGZ1bmN0aW9uIGFzIGEga2V5LlxuICAgIHRoaXMubGlzdGVuZXJzID0gdGhpcy5saXN0ZW5lcnMgfHwge307XG4gICAgdGhpcy5saXN0ZW5lcnNbZXZlbnRdID0gdGhpcy5saXN0ZW5lcnNbZXZlbnRdIHx8IG5ldyBNYXAoKTtcbiAgICB0aGlzLmxpc3RlbmVyc1tldmVudF0uc2V0KGhhbmRsZXIsIHtoYW5kbGVyLCBjYXB0dXJlLH0pO1xuICAgIHRoaXMuZm9yRWFjaChuID0+IG4uYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgaGFuZGxlciwgY2FwdHVyZSkpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIHJlbW92ZSB0aGUgaGFuZGxlcnMgZnJvbSB0aGUgbGlzdC4gVGhyZWUgd2F5cyB0byBjYWxsLlxuICAgKiAoKSAgICAgICAgICAgICAgICAgICA6IHJlbW92ZSBhbGwgcmVnaXN0ZXJlZCBsaXN0ZW5lcnNcbiAgICogKGV2ZW50TmFtZSkgICAgICAgICAgOiByZW1vdmUgYWxsIGxpc3RlbmVycyBmb3IgdGhhdCBldmVudC5cbiAgICogKGV2ZW50TmFtZSwgaGFuZGxlcikgOiByZW1vdmUgdGhlIHNwZWNpZmljIGhhbmRsZXIgZm9yIGEgc3BlY2lmaWMgZXZlbnQuXG4gICAqL1xuICBvZmYoZXZlbnQsIGhhbmRsZXIsIGNhcHR1cmUgPSBmYWxzZSkge1xuICAgIC8vIGlnbm9yZSBpZiB3ZSBkb24ndCBoYXZlIGFueSBsaXN0ZW5lcnNcbiAgICBpZiAoIXRoaXMubGlzdGVuZXJzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIGlmIG5vIGV2ZW50IG9yIGhhbmRsZXIgdGhlbiByZW1vdmUgYWxsIHJlZ2lzdGVyZWQgZXZlbnRzXG4gICAgaWYgKCFldmVudCAmJiAhaGFuZGxlcikge1xuICAgICAgLy8gaXRlcmF0ZSBhbGwgZXZlbnRzXG4gICAgICBPYmplY3Qua2V5cyh0aGlzLmxpc3RlbmVycykuZm9yRWFjaChldmVudE5hbWUgPT4ge1xuICAgICAgICB0aGlzLmxpc3RlbmVyc1tldmVudE5hbWVdLmZvckVhY2gocmVjb3JkID0+IHtcbiAgICAgICAgICB0aGlzLmZvckVhY2gobiA9PiBuLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCByZWNvcmQuaGFuZGxlciwgcmVjb3JkLmNhcHR1cmUpKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICAgIC8vIHJlc2V0IGFsbCBsaXN0ZW5lcnNcbiAgICAgIGRlbGV0ZSB0aGlzLmxpc3RlbmVycztcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gaWYgb25seSBldmVudCBuYW1lIHNwZWNpZmllZCByZW1vdmUgYWxsIGxpc3RlbmVycyBmb3IgdGhhdCBldmVudFxuICAgICAgaWYgKGV2ZW50ICYmICFoYW5kbGVyKSB7XG4gICAgICAgIGlmICh0aGlzLmxpc3RlbmVyc1tldmVudF0pIHtcbiAgICAgICAgICB0aGlzLmxpc3RlbmVyc1tldmVudF0uZm9yRWFjaChyZWNvcmQgPT4ge1xuICAgICAgICAgICAgdGhpcy5mb3JFYWNoKG4gPT4gbi5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCByZWNvcmQuaGFuZGxlciwgcmVjb3JkLmNhcHR1cmUpKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICAvLyBkZWxldGUgbGlzdGVuZXJzIGZvciB0aGlzIHNwZWNpZmljIGV2ZW50XG4gICAgICAgIGRlbGV0ZSB0aGlzLmxpc3RlbmVyc1tldmVudF07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyByZW1vdmUgdGhlIHNwZWNpZmljIGxpc3RlbmVyIGlmIGl0IGlzIHByZXNlbnQsIGJ5IGZpbmRpbmcgdGhlIHJlY29yZCB3aXRoIHRoZSBoYW5kbGVyXG4gICAgICAgIC8vICggdGhlIGNhcHR1cmUgZmxhZyBtdXN0IG1hdGNoIGFzIHdlbGwgKVxuICAgICAgICBpZiAodGhpcy5saXN0ZW5lcnNbZXZlbnRdKSB7XG4gICAgICAgICAgbGV0IG1hdGNoZWRSZWNvcmQ7XG4gICAgICAgICAgdGhpcy5saXN0ZW5lcnNbZXZlbnRdLmZvckVhY2gocmVjb3JkID0+IHtcbiAgICAgICAgICAgIGlmIChyZWNvcmQuaGFuZGxlciA9PT0gaGFuZGxlciAmJiByZWNvcmQuY2FwdHVyZSA9PT0gY2FwdHVyZSkge1xuICAgICAgICAgICAgICBtYXRjaGVkUmVjb3JkID0gcmVjb3JkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGlmIChtYXRjaGVkUmVjb3JkKSB7XG4gICAgICAgICAgICB0aGlzLmxpc3RlbmVyc1tldmVudF0uZGVsZXRlKG1hdGNoZWRSZWNvcmQpO1xuICAgICAgICAgICAgdGhpcy5mb3JFYWNoKG4gPT4gbi5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBtYXRjaGVkUmVjb3JkLmhhbmRsZXIsIG1hdGNoZWRSZWNvcmQuY2FwdHVyZSkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAvLyByZW1vdmUganVzdCB0aGlzIHJlY29yZFxuICAgICAgICAgIHRoaXMubGlzdGVuZXJzW2V2ZW50XS5kZWxldGUobWF0Y2hlZFJlY29yZCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbn1cblxuLyoqXG4gKiBXZSBleHBvcnQgYSBmYWN0b3J5IGZ1bmN0aW9uIGZvciBET01BcnJheSBzbyB0aGVyZSBpcyBubyBuZWVkIHRvIHRoZSBuZXcgb3BlcmF0b3JcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRCgpIHtcbiAgcmV0dXJuIG5ldyBET01BcnJheSguLi5hcmd1bWVudHMpO1xufTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vamF2YXNjcmlwdHMvZG9tLmpzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==