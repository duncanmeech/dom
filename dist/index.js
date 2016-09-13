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
	'r+childNodes', 'r+firstChild', 'r+lastChild', 'r+nextSibling', 'r+previousSibling', 'r+nodeName', 'r+nodeType', 'nodeValue', 'r+ownerDocument', 'r+parentElement', 'r+parentNode', 'textContent', 'r+tagName',
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
	      // add children directly into our list ( we avoid childNodes because that would pick
	      // up empty text nodes which is a problem when using multiline template strings
	      this.push.apply(this, _toConsumableArray(d.children));
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
	      args.forEach(function (arg) {
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
	      var _this5 = this;
	
	      // zipping/unzipping should occur serially and once
	      if (this.zipped) {
	        throw new Error('DOMArray has already been zipped');
	      }
	      this.zipped = true;
	
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
	            // create a record of each handler added so we can remove when unzip is called
	            var record = {
	              handler: targetObject[attr.value].bind(targetObject),
	              event: tokens[2],
	              capture: false,
	              element: element
	            };
	            _this5.zipHandlers = _this5.zipHandlers || [];
	            _this5.zipHandlers.push(record);
	
	            element.addEventListener(record.event, record.handler, record.capture);
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
	      var _this6 = this;
	
	      if (!this.zipped) {
	        throw new Error('DOMArray instance is not zipped');
	      }
	      this.traverse(function (element) {
	        // remove references
	        var name = element.getAttribute('data-ref');
	        if (name) {
	          delete targetObject[name];
	        }
	        // remove event handlers
	        if (_this6.zipHandlers) {
	          _this6.zipHandlers.forEach(function (record) {
	            record.element.removeEventListener(record.event, record.handler, record.capture);
	          });
	          _this6.zipHandlers = null;
	        }
	      });
	      this.zipped = false;
	      return this;
	    }
	
	    /**
	     * utility function. Used in zip, unzip for example. Traverses all nodes and their
	     * children in the list invoking the callback for each one
	     */
	
	  }, {
	    key: 'traverse',
	    value: function traverse(callback) {
	      var _this7 = this;
	
	      this.forEach(function (node) {
	        var stack = [node];
	        while (stack.length) {
	          var _stack;
	
	          var element = stack.pop();
	          callback.call(_this7, element);
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
	      var _this8 = this;
	
	      classes.split(' ').filter(function (className) {
	        return className.trim().length;
	      }).forEach(function (className) {
	        _this8.forEach(function (element) {
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
	      var _this9 = this;
	
	      classes.split(' ').filter(function (className) {
	        return className.trim().length;
	      }).forEach(function (className) {
	        _this9.forEach(function (element) {
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
	      var clones = this.map(function (n) {
	        return n.cloneNode(true);
	      });
	      return new (Function.prototype.bind.apply(DOMArray, [null].concat(_toConsumableArray(clones))))();
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
	      this.listeners[event] = this.listeners[event] || [];
	      this.listeners[event].push({ handler: handler, capture: capture });
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
	      var _this10 = this;
	
	      var capture = arguments.length <= 2 || arguments[2] === undefined ? false : arguments[2];
	
	      // ignore if we don't have any listeners
	      if (!this.listeners) {
	        return this;
	      }
	      // if no event or handler then remove all registered events
	      if (!event && !handler) {
	        // iterate all events
	        Object.keys(this.listeners).forEach(function (eventName) {
	          _this10.listeners[eventName].forEach(function (record) {
	            _this10.forEach(function (n) {
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
	              _this10.forEach(function (n) {
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
	            var index = this.listeners[event].findIndex(function (record) {
	              return record.handler === handler && record.capture === capture;
	            });
	            if (index >= 0) {
	              (function () {
	                var record = _this10.listeners[event][index];
	                _this10.forEach(function (n) {
	                  return n.removeEventListener(event, record.handler, record.capture);
	                });
	                _this10.listeners[event].splice(index, 1);
	              })();
	            }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBiY2IyYzI1ZjQ5MzJhODExMzBlZSIsIndlYnBhY2s6Ly8vLi9qYXZhc2NyaXB0cy9kb20uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7bUJDc2R3QixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTVmeEI7Ozs7QUFJQSxLQUFNLFdBQVcsSUFBSSxNQUFKLENBQVcsY0FBWCxDQUFqQjs7QUFFQTs7Ozs7Ozs7O0FBU0EsS0FBTSxhQUFhO0FBQ2pCO0FBQ0EsZUFGaUIsRUFHakIsY0FIaUIsRUFJakIsYUFKaUIsRUFLakIsZUFMaUIsRUFNakIsbUJBTmlCLEVBT2pCLFlBUGlCLEVBUWpCLFlBUmlCLEVBU2pCLFdBVGlCLEVBVWpCLGlCQVZpQixFQVdqQixpQkFYaUIsRUFZakIsY0FaaUIsRUFhakIsYUFiaUIsRUFjakIsV0FkaUI7QUFlakI7QUFDQSxlQWhCaUIsRUFpQmpCLHFCQWpCaUIsRUFrQmpCLFlBbEJpQixFQW1CakIscUJBbkJpQixFQW9CakIsb0JBcEJpQixFQXFCakIsYUFyQmlCLEVBc0JqQixXQXRCaUIsRUF1QmpCLGFBdkJpQixFQXdCakIsY0F4QmlCLEVBeUJqQixlQXpCaUIsRUEwQmpCLGdCQTFCaUIsRUEyQmpCLElBM0JpQixFQTRCakIsV0E1QmlCLEVBNkJqQixXQTdCaUIsRUE4QmpCLFdBOUJpQixFQStCakIsV0EvQmlCLEVBZ0NqQixhQWhDaUIsRUFpQ2pCLGVBakNpQixFQWtDakIsZ0JBbENpQixFQW1DakIsV0FuQ2lCLEVBb0NqQixZQXBDaUIsRUFxQ2pCLE1BckNpQixFQXNDakIsT0F0Q2lCLEVBdUNqQixPQXZDaUIsRUF3Q2pCLE9BeENpQixDQUFuQjs7QUEyQ0E7Ozs7O0FBS0EsS0FBTSxVQUFVLENBQ2QsYUFEYyxFQUVkLGFBRmMsRUFHZCxjQUhjLEVBSWQsT0FKYyxFQUtkLFdBTGMsRUFNZCx5QkFOYyxFQU9kLFVBUGMsRUFRZCxlQVJjLEVBU2QsY0FUYyxFQVVkLHVCQVZjLEVBV2QsY0FYYyxFQVlkLGdCQVpjLEVBYWQsY0FiYyxFQWNkLGdCQWRjLEVBZWQsa0JBZmMsRUFnQmQscUJBaEJjLEVBaUJkLFdBakJjLEVBa0JkLE9BbEJjLEVBbUJkLE1BbkJjLEVBb0JkLGVBcEJjLEVBcUJkLGtCQXJCYyxDQUFoQjs7QUF3QkE7Ozs7S0FJTSxROzs7QUFDSix1QkFBcUI7QUFBQTs7QUFFbkI7QUFGbUI7O0FBQUEsdUNBQU4sSUFBTTtBQUFOLFdBQU07QUFBQTs7QUFHbkIsU0FBTSxXQUFXLE9BQU8sS0FBSyxDQUFMLENBQVAsS0FBb0IsUUFBckM7QUFDQTtBQUNBLFNBQU0sUUFBUSxZQUFZLFNBQVMsSUFBVCxDQUFjLEtBQUssQ0FBTCxFQUFRLElBQVIsRUFBZCxDQUExQjs7QUFFQTtBQUNBLFNBQUksQ0FBQyxLQUFLLE1BQUwsS0FBZ0IsQ0FBaEIsSUFBcUIsS0FBSyxNQUFMLElBQWUsQ0FBckMsS0FBMkMsUUFBM0MsSUFBdUQsQ0FBQyxLQUE1RCxFQUFtRTtBQUNqRSxhQUFLLHFCQUFMLENBQTJCLEtBQUssQ0FBTCxDQUEzQixFQUFvQyxLQUFLLENBQUwsQ0FBcEM7QUFDRCxNQUZELE1BRU87QUFDTDtBQUNBO0FBQ0EsV0FBSSxLQUFLLE1BQUwsS0FBZ0IsQ0FBaEIsSUFBcUIsS0FBekIsRUFBZ0M7QUFDOUIsZUFBSyx1QkFBTCxDQUE2QixLQUFLLENBQUwsQ0FBN0I7QUFDRCxRQUZELE1BRU87QUFDTDtBQUNBLGVBQUssa0JBQUwsY0FBMkIsSUFBM0I7QUFDRDtBQUNGO0FBQ0Q7QUFDQSxXQUFLLDBCQUFMO0FBckJtQjtBQXNCcEI7O0FBRUQ7Ozs7Ozs7a0RBRzZCO0FBQUE7O0FBQzNCO0FBQ0Esa0JBQVcsT0FBWCxDQUFtQixhQUFLO0FBQ3RCO0FBQ0EsYUFBTSxTQUFTLEVBQUUsS0FBRixDQUFRLEdBQVIsQ0FBZjtBQUNBLGFBQU0sV0FBVyxPQUFPLE1BQVAsS0FBa0IsQ0FBbEIsSUFBdUIsT0FBTyxDQUFQLE1BQWMsR0FBdEQ7QUFDQSxhQUFNLE9BQU8sV0FBVyxPQUFPLENBQVAsQ0FBWCxHQUF1QixPQUFPLENBQVAsQ0FBcEM7QUFDQTtBQUNBLGFBQU0sY0FBYyxPQUFPLE1BQVAsQ0FBYztBQUNoQyxnQkFBSyxPQUFLLGFBQUwsQ0FBbUIsSUFBbkIsU0FBOEIsSUFBOUI7QUFEMkIsVUFBZCxFQUVqQixXQUFXLEVBQVgsR0FBZ0I7QUFDakIsZ0JBQUssT0FBSyxhQUFMLENBQW1CLElBQW5CLFNBQThCLElBQTlCO0FBRFksVUFGQyxDQUFwQjtBQUtBLGdCQUFPLGNBQVAsU0FBNEIsSUFBNUIsRUFBa0MsV0FBbEM7QUFDRCxRQVpEOztBQWNBO0FBQ0EsZUFBUSxPQUFSLENBQWdCLGdCQUFRO0FBQ3RCLGdCQUFLLElBQUwsSUFBYSxPQUFLLGFBQUwsQ0FBbUIsSUFBbkIsU0FBOEIsSUFBOUIsQ0FBYjtBQUNELFFBRkQ7QUFHRDs7QUFFRDs7Ozs7Ozs7OzJDQU1zQixRLEVBQVUsVyxFQUFhO0FBQzNDO0FBQ0EsV0FBTSxPQUFPLGNBQWMsS0FBSyxPQUFMLENBQWEsV0FBYixDQUFkLEdBQTBDLFFBQXZEO0FBQ0E7QUFDQSxZQUFLLElBQUwsZ0NBQWEsS0FBSyxnQkFBTCxDQUFzQixRQUF0QixDQUFiO0FBQ0Q7O0FBRUQ7Ozs7Ozs7NkNBSXdCLFEsRUFBVTtBQUNoQztBQUNBLFdBQU0sSUFBSSxTQUFTLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBVjtBQUNBLFNBQUUsa0JBQUYsQ0FBcUIsWUFBckIsRUFBbUMsUUFBbkM7QUFDQTtBQUNBLFNBQUUsU0FBRjtBQUNBO0FBQ0E7QUFDQSxZQUFLLElBQUwsZ0NBQWEsRUFBRSxRQUFmO0FBQ0E7QUFDQSxjQUFPLEVBQUUsVUFBVDtBQUFxQixXQUFFLFdBQUYsQ0FBYyxFQUFFLFVBQWhCO0FBQXJCO0FBQ0Q7O0FBRUQ7Ozs7Ozs7MENBSTRCO0FBQUE7O0FBQUEsMENBQU4sSUFBTTtBQUFOLGFBQU07QUFBQTs7QUFDMUI7QUFDQSxZQUFLLE9BQUwsQ0FBYSxlQUFPO0FBQ2xCLGFBQUksZUFBZSxRQUFuQixFQUE2QjtBQUMzQixrQkFBSyxJQUFMLGtDQUFhLEdBQWI7QUFDRCxVQUZELE1BRU87QUFDTCxrQkFBSyxJQUFMLENBQVUsR0FBVjtBQUNEO0FBQ0YsUUFORDtBQU9EOztBQUVEOzs7Ozs7OzttQ0FLYyxJLEVBQWU7QUFBQSwwQ0FBTixJQUFNO0FBQU4sYUFBTTtBQUFBOztBQUMzQixXQUFJLEtBQUssTUFBTCxLQUFnQixDQUFwQixFQUF1QjtBQUNyQixnQkFBTyxTQUFQO0FBQ0Q7QUFDRCxXQUFJLEtBQUssTUFBTCxLQUFnQixDQUFwQixFQUF1QjtBQUFBOztBQUNyQixnQkFBTyxpQkFBSyxFQUFMLENBQVEsSUFBUixHQUFjLElBQWQsa0JBQW1CLEtBQUssRUFBeEIsU0FBK0IsSUFBL0IsRUFBUDtBQUNEO0FBQ0QsY0FBTyxLQUFLLEdBQUwsQ0FBUztBQUFBOztBQUFBLGdCQUFRLG1CQUFLLElBQUwsR0FBVyxJQUFYLG9CQUFnQixJQUFoQixTQUF5QixJQUF6QixFQUFSO0FBQUEsUUFBVCxDQUFQO0FBQ0Q7O0FBRUQ7Ozs7Ozs7bUNBSWMsSSxFQUFNO0FBQ2xCLFdBQUksS0FBSyxNQUFMLEtBQWdCLENBQXBCLEVBQXVCO0FBQ3JCLGdCQUFPLFNBQVA7QUFDRDtBQUNELFdBQUksS0FBSyxNQUFMLEtBQWdCLENBQXBCLEVBQXVCO0FBQ3JCLGdCQUFPLEtBQUssRUFBTCxDQUFRLElBQVIsQ0FBUDtBQUNEO0FBQ0QsY0FBTyxLQUFLLEdBQUwsQ0FBUztBQUFBLGdCQUFRLEtBQUssSUFBTCxDQUFSO0FBQUEsUUFBVCxDQUFQO0FBQ0Q7O0FBRUQ7Ozs7Ozs7O21DQUtjLEksRUFBTSxLLEVBQU87QUFDekIsWUFBSyxPQUFMLENBQWE7QUFBQSxnQkFBSyxFQUFFLElBQUYsSUFBVSxLQUFmO0FBQUEsUUFBYjtBQUNEOztBQUVEOzs7Ozs7K0JBR1UsSSxFQUFNO0FBQ2QsWUFBSyxPQUFMLENBQWEsbUJBQVc7QUFDdEIsYUFBSSxRQUFRLFFBQVIsS0FBcUIsS0FBSyxZQUE5QixFQUE0QztBQUMxQyxrQkFBTyxJQUFQLENBQVksSUFBWixFQUFrQixPQUFsQixDQUEwQixlQUFPO0FBQy9CLHFCQUFRLEtBQVIsQ0FBYyxHQUFkLElBQXFCLEtBQUssR0FBTCxDQUFyQjtBQUNELFlBRkQ7QUFHRDtBQUNGLFFBTkQ7QUFPQSxjQUFPLElBQVA7QUFDRDs7QUFFRDs7Ozs7Ozs2QkFJUSxHLEVBQUs7QUFDWCxXQUFJLGVBQWUsUUFBbkIsRUFBNkIsT0FBTyxJQUFJLENBQUosQ0FBUDtBQUM3QixjQUFPLEdBQVA7QUFDRDs7QUFFRDs7Ozs7OzhCQUdTLEcsRUFBSztBQUNaLFdBQUksZUFBZSxRQUFuQixFQUE2QixPQUFPLEdBQVA7QUFDN0IsY0FBTyxJQUFJLFFBQUosQ0FBYSxHQUFiLENBQVA7QUFDRDs7QUFFRDs7Ozs7Ozs7QUFPQTs7OzZCQUdRO0FBQ04sWUFBSyxPQUFMLENBQWEsbUJBQVc7QUFDdEIsZ0JBQU8sUUFBUSxVQUFmLEVBQTJCO0FBQ3pCLG1CQUFRLFdBQVIsQ0FBb0IsUUFBUSxVQUE1QjtBQUNEO0FBQ0YsUUFKRDtBQUtBLGNBQU8sSUFBUDtBQUNEOztBQUVEOzs7Ozs7Ozs4QkFLUyxNLEVBQVE7QUFBQTs7QUFDZixZQUFLLE9BQUwsQ0FBYSxnQkFBUTtBQUNuQixnQkFBSyxPQUFMLENBQWEsTUFBYixFQUFxQixXQUFyQixDQUFpQyxJQUFqQztBQUNELFFBRkQ7QUFHQSxjQUFPLElBQVA7QUFDRDs7QUFFRDs7Ozs7OzhCQUdTO0FBQ1AsWUFBSyxPQUFMLENBQWEsZ0JBQVE7QUFDbkIsYUFBSSxLQUFLLFVBQVQsRUFBcUI7QUFDbkIsZ0JBQUssVUFBTCxDQUFnQixXQUFoQixDQUE0QixJQUE1QjtBQUNEO0FBQ0YsUUFKRDtBQUtBLGNBQU8sSUFBUDtBQUNEOztBQUVEOzs7Ozs7Ozs7Ozs7eUJBU0ksWSxFQUFjO0FBQUE7O0FBQ2hCO0FBQ0EsV0FBSSxLQUFLLE1BQVQsRUFBaUI7QUFDZixlQUFNLElBQUksS0FBSixDQUFVLGtDQUFWLENBQU47QUFDRDtBQUNELFlBQUssTUFBTCxHQUFjLElBQWQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBSyxRQUFMLENBQWMsbUJBQVc7QUFDdkI7QUFDQSxhQUFNLE9BQU8sUUFBUSxZQUFSLENBQXFCLFVBQXJCLENBQWI7QUFDQSxhQUFJLElBQUosRUFBVTtBQUNSLHdCQUFhLElBQWIsSUFBcUIsSUFBSSxRQUFKLENBQWEsT0FBYixDQUFyQjtBQUNEO0FBQ0Q7QUFDQSxzQ0FBSSxRQUFRLFVBQVosR0FBeUIsT0FBekIsQ0FBaUMsZ0JBQVE7QUFDdkMsZUFBTSxTQUFTLEtBQUssU0FBTCxDQUFlLEtBQWYsQ0FBcUIsR0FBckIsQ0FBZjtBQUNBLGVBQUksT0FBTyxDQUFQLE1BQWMsTUFBZCxJQUF3QixPQUFPLENBQVAsTUFBYyxPQUExQyxFQUFtRDtBQUNqRDtBQUNBLGlCQUFNLFNBQVM7QUFDYix3QkFBUyxhQUFhLEtBQUssS0FBbEIsRUFBeUIsSUFBekIsQ0FBOEIsWUFBOUIsQ0FESTtBQUViLHNCQUFPLE9BQU8sQ0FBUCxDQUZNO0FBR2Isd0JBQVMsS0FISTtBQUliO0FBSmEsY0FBZjtBQU1BLG9CQUFLLFdBQUwsR0FBbUIsT0FBSyxXQUFMLElBQW9CLEVBQXZDO0FBQ0Esb0JBQUssV0FBTCxDQUFpQixJQUFqQixDQUFzQixNQUF0Qjs7QUFFQSxxQkFBUSxnQkFBUixDQUF5QixPQUFPLEtBQWhDLEVBQXVDLE9BQU8sT0FBOUMsRUFBdUQsT0FBTyxPQUE5RDtBQUNEO0FBQ0YsVUFmRDtBQWdCRCxRQXZCRDtBQXdCQSxjQUFPLElBQVA7QUFDRDs7QUFFRDs7Ozs7OzJCQUdNLFksRUFBYztBQUFBOztBQUNsQixXQUFJLENBQUMsS0FBSyxNQUFWLEVBQWtCO0FBQ2hCLGVBQU0sSUFBSSxLQUFKLENBQVUsaUNBQVYsQ0FBTjtBQUNEO0FBQ0QsWUFBSyxRQUFMLENBQWMsbUJBQVc7QUFDdkI7QUFDQSxhQUFNLE9BQU8sUUFBUSxZQUFSLENBQXFCLFVBQXJCLENBQWI7QUFDQSxhQUFJLElBQUosRUFBVTtBQUNSLGtCQUFPLGFBQWEsSUFBYixDQUFQO0FBQ0Q7QUFDRDtBQUNBLGFBQUksT0FBSyxXQUFULEVBQXNCO0FBQ3BCLGtCQUFLLFdBQUwsQ0FBaUIsT0FBakIsQ0FBeUIsa0JBQVU7QUFDakMsb0JBQU8sT0FBUCxDQUFlLG1CQUFmLENBQW1DLE9BQU8sS0FBMUMsRUFBaUQsT0FBTyxPQUF4RCxFQUFpRSxPQUFPLE9BQXhFO0FBQ0QsWUFGRDtBQUdBLGtCQUFLLFdBQUwsR0FBbUIsSUFBbkI7QUFDRDtBQUVGLFFBZEQ7QUFlQSxZQUFLLE1BQUwsR0FBYyxLQUFkO0FBQ0EsY0FBTyxJQUFQO0FBQ0Q7O0FBRUQ7Ozs7Ozs7OEJBSVMsUSxFQUFVO0FBQUE7O0FBQ2pCLFlBQUssT0FBTCxDQUFhLGdCQUFRO0FBQ25CLGFBQUksUUFBUSxDQUFDLElBQUQsQ0FBWjtBQUNBLGdCQUFPLE1BQU0sTUFBYixFQUFxQjtBQUFBOztBQUNuQixlQUFNLFVBQVUsTUFBTSxHQUFOLEVBQWhCO0FBQ0Esb0JBQVMsSUFBVCxTQUFvQixPQUFwQjtBQUNBLG1CQUFRLGlCQUFNLE1BQU4sa0NBQWdCLFFBQVEsUUFBeEIsRUFBUjtBQUNEO0FBQ0YsUUFQRDtBQVFBLGNBQU8sSUFBUDtBQUNEOztBQUVEOzs7Ozs7Z0NBR1csTyxFQUFTO0FBQUE7O0FBQ2xCLGVBQVEsS0FBUixDQUFjLEdBQWQsRUFDQyxNQURELENBQ1E7QUFBQSxnQkFBYSxVQUFVLElBQVYsR0FBaUIsTUFBOUI7QUFBQSxRQURSLEVBRUMsT0FGRCxDQUVTLHFCQUFhO0FBQ3BCLGdCQUFLLE9BQUwsQ0FBYSxtQkFBVztBQUN0QixtQkFBUSxTQUFSLENBQWtCLEdBQWxCLENBQXNCLFNBQXRCO0FBQ0QsVUFGRDtBQUdELFFBTkQ7QUFPQSxjQUFPLElBQVA7QUFDRDs7QUFFRDs7Ozs7Ozs7bUNBS2MsTyxFQUFTO0FBQUE7O0FBQ3JCLGVBQVEsS0FBUixDQUFjLEdBQWQsRUFDQyxNQURELENBQ1E7QUFBQSxnQkFBYSxVQUFVLElBQVYsR0FBaUIsTUFBOUI7QUFBQSxRQURSLEVBRUMsT0FGRCxDQUVTLHFCQUFhO0FBQ3BCLGdCQUFLLE9BQUwsQ0FBYSxtQkFBVztBQUN0QixtQkFBUSxTQUFSLENBQWtCLE1BQWxCLENBQXlCLFNBQXpCO0FBQ0QsVUFGRDtBQUdELFFBTkQ7QUFPQSxjQUFPLElBQVA7QUFDRDs7QUFFRDs7Ozs7Ozs7O3dDQU1tQixPLEVBQVMsUyxFQUFXO0FBQ3JDLFdBQUksU0FBSixFQUFlO0FBQ2IsY0FBSyxVQUFMLENBQWdCLE9BQWhCO0FBQ0QsUUFGRCxNQUVPO0FBQ0wsY0FBSyxhQUFMLENBQW1CLE9BQW5CO0FBQ0Q7QUFDRCxjQUFPLElBQVA7QUFDRDs7QUFFRDs7Ozs7Ozs2QkFJUTtBQUNOLFdBQU0sU0FBUyxLQUFLLEdBQUwsQ0FBUztBQUFBLGdCQUFLLEVBQUUsU0FBRixDQUFZLElBQVosQ0FBTDtBQUFBLFFBQVQsQ0FBZjtBQUNBLGlEQUFXLFFBQVgsbUNBQXVCLE1BQXZCO0FBQ0Q7O0FBRUQ7Ozs7Ozs7O3dCQUtHLEssRUFBTyxPLEVBQTBCO0FBQUEsV0FBakIsT0FBaUIseURBQVAsS0FBTzs7QUFDbEM7QUFDQTtBQUNBLFlBQUssU0FBTCxHQUFpQixLQUFLLFNBQUwsSUFBa0IsRUFBbkM7QUFDQSxZQUFLLFNBQUwsQ0FBZSxLQUFmLElBQXdCLEtBQUssU0FBTCxDQUFlLEtBQWYsS0FBeUIsRUFBakQ7QUFDQSxZQUFLLFNBQUwsQ0FBZSxLQUFmLEVBQXNCLElBQXRCLENBQTJCLEVBQUMsZ0JBQUQsRUFBVSxnQkFBVixFQUEzQjtBQUNBLFlBQUssT0FBTCxDQUFhO0FBQUEsZ0JBQUssRUFBRSxnQkFBRixDQUFtQixLQUFuQixFQUEwQixPQUExQixFQUFtQyxPQUFuQyxDQUFMO0FBQUEsUUFBYjtBQUNBLGNBQU8sSUFBUDtBQUNEOztBQUVEOzs7Ozs7Ozs7eUJBTUksSyxFQUFPLE8sRUFBMEI7QUFBQTs7QUFBQSxXQUFqQixPQUFpQix5REFBUCxLQUFPOztBQUNuQztBQUNBLFdBQUksQ0FBQyxLQUFLLFNBQVYsRUFBcUI7QUFDbkIsZ0JBQU8sSUFBUDtBQUNEO0FBQ0Q7QUFDQSxXQUFJLENBQUMsS0FBRCxJQUFVLENBQUMsT0FBZixFQUF3QjtBQUN0QjtBQUNBLGdCQUFPLElBQVAsQ0FBWSxLQUFLLFNBQWpCLEVBQTRCLE9BQTVCLENBQW9DLHFCQUFhO0FBQy9DLG1CQUFLLFNBQUwsQ0FBZSxTQUFmLEVBQTBCLE9BQTFCLENBQWtDLGtCQUFVO0FBQzFDLHFCQUFLLE9BQUwsQ0FBYTtBQUFBLHNCQUFLLEVBQUUsbUJBQUYsQ0FBc0IsU0FBdEIsRUFBaUMsT0FBTyxPQUF4QyxFQUFpRCxPQUFPLE9BQXhELENBQUw7QUFBQSxjQUFiO0FBQ0QsWUFGRDtBQUdELFVBSkQ7QUFLQTtBQUNBLGdCQUFPLEtBQUssU0FBWjtBQUNELFFBVEQsTUFTTztBQUNMO0FBQ0EsYUFBSSxTQUFTLENBQUMsT0FBZCxFQUF1QjtBQUNyQixlQUFJLEtBQUssU0FBTCxDQUFlLEtBQWYsQ0FBSixFQUEyQjtBQUN6QixrQkFBSyxTQUFMLENBQWUsS0FBZixFQUFzQixPQUF0QixDQUE4QixrQkFBVTtBQUN0Qyx1QkFBSyxPQUFMLENBQWE7QUFBQSx3QkFBSyxFQUFFLG1CQUFGLENBQXNCLEtBQXRCLEVBQTZCLE9BQU8sT0FBcEMsRUFBNkMsT0FBTyxPQUFwRCxDQUFMO0FBQUEsZ0JBQWI7QUFDRCxjQUZEO0FBR0Q7QUFDRDtBQUNBLGtCQUFPLEtBQUssU0FBTCxDQUFlLEtBQWYsQ0FBUDtBQUNELFVBUkQsTUFRTztBQUNMO0FBQ0E7QUFDQSxlQUFJLEtBQUssU0FBTCxDQUFlLEtBQWYsQ0FBSixFQUEyQjtBQUN6QixpQkFBTSxRQUFRLEtBQUssU0FBTCxDQUFlLEtBQWYsRUFBc0IsU0FBdEIsQ0FBZ0Msa0JBQVU7QUFDdEQsc0JBQU8sT0FBTyxPQUFQLEtBQW1CLE9BQW5CLElBQThCLE9BQU8sT0FBUCxLQUFtQixPQUF4RDtBQUNELGNBRmEsQ0FBZDtBQUdBLGlCQUFJLFNBQVMsQ0FBYixFQUFnQjtBQUFBO0FBQ2QscUJBQU0sU0FBUyxRQUFLLFNBQUwsQ0FBZSxLQUFmLEVBQXNCLEtBQXRCLENBQWY7QUFDQSx5QkFBSyxPQUFMLENBQWE7QUFBQSwwQkFBSyxFQUFFLG1CQUFGLENBQXNCLEtBQXRCLEVBQTZCLE9BQU8sT0FBcEMsRUFBNkMsT0FBTyxPQUFwRCxDQUFMO0FBQUEsa0JBQWI7QUFDQSx5QkFBSyxTQUFMLENBQWUsS0FBZixFQUFzQixNQUF0QixDQUE2QixLQUE3QixFQUFvQyxDQUFwQztBQUhjO0FBSWY7QUFDRjtBQUNGO0FBQ0Y7QUFDRCxjQUFPLElBQVA7QUFDRDs7O3lCQXBQUTtBQUNQLGNBQU8sS0FBSyxDQUFMLENBQVA7QUFDRDs7OztzQkF6S29CLEs7O0FBOFp2Qjs7Ozs7QUFHZSxVQUFTLENBQVQsR0FBYTtBQUMxQiw2Q0FBVyxRQUFYLDJDQUF1QixTQUF2QjtBQUNELEciLCJmaWxlIjoiLi9kaXN0L2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIHtcblx0XHR2YXIgYSA9IGZhY3RvcnkoKTtcblx0XHRmb3IodmFyIGkgaW4gYSkgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyA/IGV4cG9ydHMgOiByb290KVtpXSA9IGFbaV07XG5cdH1cbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuIFxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvblxuICoqLyIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgYmNiMmMyNWY0OTMyYTgxMTMwZWVcbiAqKi8iLCIvKipcbiAqIHNpbXBsZXN0IHJlZ2V4IGZvciBpZGVudGlmeWluZyBhIHRhZyBzdHJpbmcgdmVyc3VzIGEgc2VsZWN0b3Igc3RyaW5nXG4gKiBAdHlwZSB7UmVnRXhwfVxuICovXG5jb25zdCB0YWdSZWdleCA9IG5ldyBSZWdFeHAoJ1xccyo8KFtePl0rKT4nKTtcblxuLyoqXG4gKiBnZXR0ZXJzIGFuZCBzZXR0ZXJzIGFyZSBjcmVhdGVkIGZvciB0aGVzZSBwcm9wZXJ0aWVzLiBUaGUgY2xhc3MgZG9lcyBub3QgYXR0ZW1wdCB0byBkaXN0aW5ndWlzaCBiZXR3ZWVuXG4gKiBOb2RlLCBFbGVtZW50LCBIVE1MRWxlbWVudCBldGMgc28gdGhlc2UgcHJvcGVydGllcyBtYXkgb3IgbWF5IG5vdCBleGlzdCBvbiBhbnkgcGFydGljdWxhciBtZW1iZXIgb2Ygb3VyIGxpc3QuXG4gKiBSZWFkIG9ubHkgcHJvcGVydGllcyBhcmUgcHJlZml4ZWQgd2l0aCAncisnLlxuICogRm9yIERPTUFycmF5J3Mgd2l0aCBleGFjdGx5IG9uZSBpdGVtLCB0aGUgZ2V0dGVyIHJldHVybnMgdGhlIHZhbHVlIHJldHVybmVkIGJ5IHRoZSBuYXRpdmUgcHJvcGVydHkuXG4gKiBGb3IgRE9NQXJyYXkncyBjb250YWluaW5nIG1vcmUgdGhhbiBvbmUgaXRlbSBhbiBhcnJheSBvZiByZXN1bHRzIGlzIHJldHVybmVkLlxuICogRW1wdHkgRE9NQXJyYXkncyByZXR1cm4gbnVsbFxuICogQHR5cGUge3N0cmluZ1tdfVxuICovXG5jb25zdCBwcm9wZXJ0aWVzID0gW1xuICAvLyBOb2RlLCBwcm9wZXJ0aWVzXG4gICdyK2NoaWxkTm9kZXMnLFxuICAncitmaXJzdENoaWxkJyxcbiAgJ3IrbGFzdENoaWxkJyxcbiAgJ3IrbmV4dFNpYmxpbmcnLFxuICAncitwcmV2aW91c1NpYmxpbmcnLFxuICAncitub2RlTmFtZScsXG4gICdyK25vZGVUeXBlJyxcbiAgJ25vZGVWYWx1ZScsXG4gICdyK293bmVyRG9jdW1lbnQnLFxuICAncitwYXJlbnRFbGVtZW50JyxcbiAgJ3IrcGFyZW50Tm9kZScsXG4gICd0ZXh0Q29udGVudCcsXG4gICdyK3RhZ05hbWUnLFxuICAvLyBFbGVtZW50IHByb3BlcnRpZXNcbiAgJ3IrYXR0cmlidXRlcycsXG4gICdyK2NoaWxkRWxlbWVudENvdW50JyxcbiAgJ3IrY2hpbGRyZW4nLFxuICAncitmaXJzdEVsZW1lbnRDaGlsZCcsXG4gICdyK2xhc3RFbGVtZW50Q2hpbGQnLFxuICAncitjbGFzc0xpc3QnLFxuICAnY2xhc3NOYW1lJyxcbiAgJ3IrY2xpZW50VG9wJyxcbiAgJ3IrY2xpZW50TGVmdCcsXG4gICdyK2NsaWVudFdpZHRoJyxcbiAgJ3IrY2xpZW50SGVpZ2h0JyxcbiAgJ2lkJyxcbiAgJ2lubmVySFRNTCcsXG4gICdvdXRlckhUTUwnLFxuICAnaW5uZXJUZXh0JyxcbiAgJ291dGVyVGV4dCcsXG4gICdyK2xvY2FsTmFtZScsXG4gICdyK3Njcm9sbFdpZHRoJyxcbiAgJ3Irc2Nyb2xsSGVpZ2h0JyxcbiAgJ3Njcm9sbFRvcCcsXG4gICdzY3JvbGxMZWZ0JyxcbiAgJ25hbWUnLFxuICAndGl0bGUnLFxuICAndmFsdWUnLFxuICAnc3R5bGUnLFxuXTtcblxuLyoqXG4gKiBtZXRob2RzIGZvciBuYXRpdmUgTm9kZS9FbGVtZW50L0hUTUxFbGVtZW50IG9iamVjdHMgdGhhdCB3ZSBjcmVhdGUgcGFzcyB0aHJvdWdoIGZ1bmN0aW9ucyBmb3IuXG4gKiBSdWxlcyBhcmUgdGhlIHNhbWUgYXMgZm9yIGdldHRlciBwcm9wZXJ0aWVzIGkuZS4gYW4gYXJyYXkgaXMgcmV0dXJuZWQgZm9yIGxpc3RzIHdpdGggaXRlbXMgPiAxXG4gKiBAdHlwZSB7QXJyYXl9XG4gKi9cbmNvbnN0IG1ldGhvZHMgPSBbXG4gICdhcHBlbmRDaGlsZCcsXG4gICdyZW1vdmVDaGlsZCcsXG4gICdyZXBsYWNlQ2hpbGQnLFxuICAnY2xpY2snLFxuICAnY2xvbmVOb2RlJyxcbiAgJ2NvbXBhcmVEb2N1bWVudFBvc2l0aW9uJyxcbiAgJ2NvbnRhaW5zJyxcbiAgJ2hhc0NoaWxkTm9kZXMnLFxuICAnaW5zZXJ0QmVmb3JlJyxcbiAgJ2dldEJvdW5kaW5nQ2xpZW50UmVjdCcsXG4gICdnZXRBdHRyaWJ1dGUnLFxuICAnZ2V0QXR0cmlidXRlTlMnLFxuICAnc2V0QXR0cmlidXRlJyxcbiAgJ3NldEF0dHJpYnV0ZU5TJyxcbiAgJ2FkZEV2ZW50TGlzdGVuZXInLFxuICAncmVtb3ZlRXZlbnRMaXN0ZW5lcicsXG4gICdub3JtYWxpemUnLFxuICAnZm9jdXMnLFxuICAnYmx1cicsXG4gICdxdWVyeVNlbGVjdG9yJyxcbiAgJ3F1ZXJ5U2VsZWN0b3JBbGwnLFxuXTtcblxuLyoqXG4gKiB0aGUgYWN0dWFsIGVsZW1lbnRzIGNsYXNzIHdoaWNoIGluaGVyaXRzIGZyb20gbmF0aXZlIEFycmF5XG4gKi9cblxuY2xhc3MgRE9NQXJyYXkgZXh0ZW5kcyBBcnJheSB7XG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlcigpO1xuICAgIC8vIHRlc3QgZmlyc3QgYXJndW1lbnQgdG8gc2VlIGlmIGl0cyBhIHN0cmluZ1xuICAgIGNvbnN0IGlzU3RyaW5nID0gdHlwZW9mKGFyZ3NbMF0pID09PSAnc3RyaW5nJztcbiAgICAvLyBpZiBpdHMgYSBzdHJpbmcgc2VlIGlmIGl0IGEgdGFnIGRlZmluaXRpb25cbiAgICBjb25zdCBpc1RhZyA9IGlzU3RyaW5nICYmIHRhZ1JlZ2V4LmV4ZWMoYXJnc1swXS50cmltKCkpO1xuXG4gICAgLy8gZmlyc3QgYXJndW1lbnQgaXMgYSBzdHJpbmcgYnV0IG5vdCBhIHRhZyBkZWZpbml0aW9uIHNvIHdlIGFzc3VtZSBDU1Mgc2VsZWN0b3JcbiAgICBpZiAoKGFyZ3MubGVuZ3RoID09PSAxIHx8IGFyZ3MubGVuZ3RoID09IDIpICYmIGlzU3RyaW5nICYmICFpc1RhZykge1xuICAgICAgdGhpcy5jcmVhdGVGcm9tQ1NTU2VsZWN0b3IoYXJnc1swXSwgYXJnc1sxXSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIHNlY29uZCBvcHRpb24gaXMgdGhhdCBhcmdzIGlmIGp1c3QgYSBzdHJpbmcgZS5nLiAnPGRpdiBjbGFzcz1cInh5elwiPjxwPlRpdGxlPC9wPjwvZGl2PidcbiAgICAgIC8vICh3aGl0ZSBzcGFjZSBpcyB0cmltbWVkIHRvIGRldGVybWluZSBpZiB0aGlzIG1pZ2h0IGJlIGEgdGFnKVxuICAgICAgaWYgKGFyZ3MubGVuZ3RoID09PSAxICYmIGlzVGFnKSB7XG4gICAgICAgIHRoaXMuY3JlYXRlRnJvbVRBR0RlZmluaXRpb24oYXJnc1swXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBtdXN0IGJlIHJhdyBlbGVtZW50cyBvciBvdGhlciBET01BcnJheSBpbnN0YW5jZXNcbiAgICAgICAgdGhpcy5jcmVhdGVGcm9tRWxlbWVudHMoLi4uYXJncyk7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIGluamVjdCBuYXRpdmUgcHJvcGVydHkgbmFtZXMgYW5kIGZ1bmN0aW9uIG5hbWVzIHRvIHRoZSBsaXN0XG4gICAgdGhpcy5pbmplY3RNZXRob2RzQW5kUHJvcGVydGllcygpO1xuICB9XG5cbiAgLyoqXG4gICAqIGJpbmQgdGhlIHJlYWQvd3JpdGUgcHJvcGVydGllcyBjb21tb24gdG8gbW9zdCBIVE1MRWxlbWVudHMgYW5kIE5vZGUgaW5zdGFuY2VzIHRvIHRoaXMgb2JqZWN0XG4gICAqL1xuICBpbmplY3RNZXRob2RzQW5kUHJvcGVydGllcygpIHtcbiAgICAvLyBzZXR1cCByZWFkL3dyaXRlIHByb3BlcnRpZXNcbiAgICBwcm9wZXJ0aWVzLmZvckVhY2gocCA9PiB7XG4gICAgICAvLyBwcm9wZXJ0eSBjYW4gYmUgYSBuYW1lIG9yICdyKycgbmFtZSBmb3IgcmVhZCBvbmx5IHByb3BlcnRpZXNcbiAgICAgIGNvbnN0IHRva2VucyA9IHAuc3BsaXQoJysnKTtcbiAgICAgIGNvbnN0IHJlYWRPbmx5ID0gdG9rZW5zLmxlbmd0aCA9PT0gMiAmJiB0b2tlbnNbMF0gPT09ICdyJztcbiAgICAgIGNvbnN0IG5hbWUgPSByZWFkT25seSA/IHRva2Vuc1sxXSA6IHRva2Vuc1swXTtcbiAgICAgIC8vIGNyZWF0ZSBnZXR0ZXIgYW5kIG9wdGlvbmFsIHNldHRlclxuICAgICAgY29uc3QgbmV3UHJvcGVydHkgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgZ2V0OiB0aGlzLmdlbmVyaWNHZXR0ZXIuYmluZCh0aGlzLCBuYW1lKSxcbiAgICAgIH0sIHJlYWRPbmx5ID8ge30gOiB7XG4gICAgICAgIHNldDogdGhpcy5nZW5lcmljU2V0dGVyLmJpbmQodGhpcywgbmFtZSksXG4gICAgICB9KTtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBuYW1lLCBuZXdQcm9wZXJ0eSk7XG4gICAgfSk7XG5cbiAgICAvLyBzZXR1cCBtZXRob2RzXG4gICAgbWV0aG9kcy5mb3JFYWNoKG5hbWUgPT4ge1xuICAgICAgdGhpc1tuYW1lXSA9IHRoaXMuZ2VuZXJpY01ldGhvZC5iaW5kKHRoaXMsIG5hbWUpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIGNyZWF0ZSBvdXIgZWxlbWVudHMgbGlzdCBmcm9tIGEgQ1NTIHNlbGVjdG9yIGFuZCBvcHRpb24gcm9vdCBlbGVtZW50ICggZWl0aGVyXG4gICAqIGEgbmF0aXZlIEhUTUxFbGVtZW50L05vZGUgb3IgYW5vdGhlciBET01BcnJheSApXG4gICAqIEBwYXJhbSBzZWxlY3RvclxuICAgKiBAcGFyYW0gcm9vdEVsZW1lbnRcbiAgICovXG4gIGNyZWF0ZUZyb21DU1NTZWxlY3RvcihzZWxlY3Rvciwgcm9vdEVsZW1lbnQpIHtcbiAgICAvLyB1c2UgdGhlIGdpdmVuIHJvb3QgZWxlbWVudCBvciB0aGUgZG9jdW1lbnRcbiAgICBjb25zdCByb290ID0gcm9vdEVsZW1lbnQgPyB0aGlzLmdldE5vZGUocm9vdEVsZW1lbnQpIDogZG9jdW1lbnQ7XG4gICAgLy8gcmV0dXJuIGEgcHJveHkgdXNpbmcgdGhlIHJlc3VsdHMgb2YgdGhlIHNlbGVjdG9yIGFzIHRoZSBpbml0aWFsIGFycmF5XG4gICAgdGhpcy5wdXNoKC4uLnJvb3QucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcikpO1xuICB9XG5cbiAgLyoqXG4gICAqIGNyZWF0ZSB0aGUgbGlzdCBmcm9tIGEgdGVtcGxhdGUgc3RyaW5nIGUuZy4gJzxkaXY+QSBESVY8ZGl2PjxzcGFuPkEgU3Bhbjwvc3Bhbj4nXG4gICAqIEBwYXJhbSB0ZW1wbGF0ZVxuICAgKi9cbiAgY3JlYXRlRnJvbVRBR0RlZmluaXRpb24odGVtcGxhdGUpIHtcbiAgICAvLyB1c2UgYSB0ZW1wb3JhcnkgRElWIGFuZCBpbnNlcnRBZGphY2VudEhUTUwgdG8gY29uc3RydWN0IHRoZSBET01cbiAgICBjb25zdCBkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnRElWJyk7XG4gICAgZC5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyYmVnaW4nLCB0ZW1wbGF0ZSk7XG4gICAgLy8gbm9ybWFsaXplIHRoZSBjb250ZXh0IHRvIHJlbW92ZSBleHRyYW5lb3VzIHdoaXRlIHNwYWNlIC8gdGV4dCBjb250ZW50IG5vZGVzXG4gICAgZC5ub3JtYWxpemUoKTtcbiAgICAvLyBhZGQgY2hpbGRyZW4gZGlyZWN0bHkgaW50byBvdXIgbGlzdCAoIHdlIGF2b2lkIGNoaWxkTm9kZXMgYmVjYXVzZSB0aGF0IHdvdWxkIHBpY2tcbiAgICAvLyB1cCBlbXB0eSB0ZXh0IG5vZGVzIHdoaWNoIGlzIGEgcHJvYmxlbSB3aGVuIHVzaW5nIG11bHRpbGluZSB0ZW1wbGF0ZSBzdHJpbmdzXG4gICAgdGhpcy5wdXNoKC4uLmQuY2hpbGRyZW4pO1xuICAgIC8vIHJlbW92ZSBhbGwgdGhlIGNoaWxkcmVuIG9mIHRoZSB0ZW1wb3JhcnkgZGl2LCBzbyB0aGF0IHRoZSBuZXdseSBjcmVhdGVkIHRvcCBsZXZlbCBub2RlcyB3aWxsIGJlIHVucGFyZW50ZWRcbiAgICB3aGlsZSAoZC5maXJzdENoaWxkKSBkLnJlbW92ZUNoaWxkKGQuZmlyc3RDaGlsZCk7XG4gIH1cblxuICAvKipcbiAgICogY3JlYXRlIGZyb20gYSBtaXhlZCBsaXN0IG9mIGVsZW1lbnRzIG9yIG90aGVyIERPTUFycmF5IGluc3RhbmNlcy5cbiAgICogQHBhcmFtIGFyZ3NcbiAgICovXG4gIGNyZWF0ZUZyb21FbGVtZW50cyguLi5hcmdzKSB7XG4gICAgLy8gb25seSByZW1haW5pbmcgb3B0aW9uIGlzIHRoYXQgZWFjaCBhcmd1bWVudCBpcyBhIERPTSBub2RlIG9yIHBvc3NpYmxlIGFub3RoZXIgZWxlbWVudHMgbGlzdFxuICAgIGFyZ3MuZm9yRWFjaChhcmcgPT4ge1xuICAgICAgaWYgKGFyZyBpbnN0YW5jZW9mIERPTUFycmF5KSB7XG4gICAgICAgIHRoaXMucHVzaCguLi5hcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5wdXNoKGFyZyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogYWxsIGdlbmVyaWMgbWV0aG9kcyByZWRpcmVjdCBoZXJlXG4gICAqIEBwYXJhbSBuYW1lXG4gICAqIEBwYXJhbSBhcmdzXG4gICAqL1xuICBnZW5lcmljTWV0aG9kKG5hbWUsIC4uLmFyZ3MpIHtcbiAgICBpZiAodGhpcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGlmICh0aGlzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgcmV0dXJuIHRoaXMuZWxbbmFtZV0uY2FsbCh0aGlzLmVsLCAuLi5hcmdzKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMubWFwKG5vZGUgPT4gbm9kZVtuYW1lXS5jYWxsKG5vZGUsIC4uLmFyZ3MpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBnZW5lcmljIGdldHRlclxuICAgKiBAcGFyYW0gbmFtZSAtIHRoZSBwcm9wZXJ0eSB0byByZXR1cm4uXG4gICAqL1xuICBnZW5lcmljR2V0dGVyKG5hbWUpIHtcbiAgICBpZiAodGhpcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGlmICh0aGlzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgcmV0dXJuIHRoaXMuZWxbbmFtZV07XG4gICAgfVxuICAgIHJldHVybiB0aGlzLm1hcChub2RlID0+IG5vZGVbbmFtZV0pO1xuICB9XG5cbiAgLyoqXG4gICAqIGdlbmVyaWMgc2V0dGVyXG4gICAqIEBwYXJhbSBuYW1lXG4gICAqIEBwYXJhbSB2YWx1ZVxuICAgKi9cbiAgZ2VuZXJpY1NldHRlcihuYW1lLCB2YWx1ZSkge1xuICAgIHRoaXMuZm9yRWFjaChuID0+IG5bbmFtZV0gPSB2YWx1ZSk7XG4gIH1cblxuICAvKipcbiAgICogYXBwbHkgdGhlIGtleS92YWx1ZSBwYWlycyBpbiBoYXNoIHRvIGFsbCBvdXIgZWxlbWVudHNcbiAgICovXG4gIHNldFN0eWxlcyhoYXNoKSB7XG4gICAgdGhpcy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgaWYgKGVsZW1lbnQubm9kZVR5cGUgPT09IE5vZGUuRUxFTUVOVF9OT0RFKSB7XG4gICAgICAgIE9iamVjdC5rZXlzKGhhc2gpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICBlbGVtZW50LnN0eWxlW2tleV0gPSBoYXNoW2tleV07XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIGlmIHRoZSBvYmogaXMgYSBET01BcnJheSB0aGVuIHJldHVybiB0aGUgZmlyc3QgbWVtYmVyIG90aGVyd2lzZSBhc3N1bWVcbiAgICogdGhlIG9iamVjdCBpcyBhIG5vZGUgYW5kIHJldHVybiBpdC5cbiAgICovXG4gIGdldE5vZGUob2JqKSB7XG4gICAgaWYgKG9iaiBpbnN0YW5jZW9mIERPTUFycmF5KSByZXR1cm4gb2JqWzBdO1xuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICAvKipcbiAgICogaWYgdGhlIG9iaiBpcyBhIERPTUFycmF5IHJldHVybiBpdCwgb3RoZXJ3aXNlIHdyYXAgdGhlIG5vZGUgaW4gYSBET01BcnJheVxuICAgKi9cbiAgZ2V0Tm9kZXMob2JqKSB7XG4gICAgaWYgKG9iaiBpbnN0YW5jZW9mIERPTUFycmF5KSByZXR1cm4gb2JqO1xuICAgIHJldHVybiBuZXcgRE9NQXJyYXkob2JqKTtcbiAgfVxuXG4gIC8qKlxuICAgKiByZXR1cm4gdGhlIG5hdGl2ZSBlbCBvZiB0aGUgZmlyc3QgZWxlbWVudCBpbiB0aGUgbGlzdFxuICAgKi9cbiAgZ2V0IGVsKCkge1xuICAgIHJldHVybiB0aGlzWzBdO1xuICB9XG5cbiAgLyoqXG4gICAqIHJlbW92ZSBhbGwgZWxlbWVudHMgZnJvbSB0aGUgZWxlbWVudHMgaW4gb3VyIGxpc3RcbiAgICovXG4gIGVtcHR5KCkge1xuICAgIHRoaXMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgIHdoaWxlIChlbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgZWxlbWVudC5yZW1vdmVDaGlsZChlbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIGFwcGVuZFRvIHBhcmVudHMgYWxsIHRoZSB0b3AgbGV2ZWwgZWxlbWVudHMgaW4gdGhlIGxpc3QgdG9cbiAgICogdGhlIGdpdmVuIGVsZW1lbnQuIFdoaWNoIGNhbiBiZSBhIG5hdGl2ZSBlbGVtZW50IG9yIGEgRE9NQXJyYXkgKCBpbiB3aGljaCBjYXNlXG4gICAqIHRoZSBlbGVtZW50cyBhcmUgYXBwZW5kIHRvIHRoZSBmaXJzdCBlbGVtZW50IGluIHRoZSBsaXN0IClcbiAgICovXG4gIGFwcGVuZFRvKHBhcmVudCkge1xuICAgIHRoaXMuZm9yRWFjaChub2RlID0+IHtcbiAgICAgIHRoaXMuZ2V0Tm9kZShwYXJlbnQpLmFwcGVuZENoaWxkKG5vZGUpO1xuICAgIH0pO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIHJlbW92ZSBhbGwgb3VyIG5vZGVzIGZyb20gdGhlaXIgcGFyZW50c1xuICAgKi9cbiAgcmVtb3ZlKCkge1xuICAgIHRoaXMuZm9yRWFjaChub2RlID0+IHtcbiAgICAgIGlmIChub2RlLnBhcmVudE5vZGUpIHtcbiAgICAgICAgbm9kZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG5vZGUpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIGl0ZXJhdGUgZXZlcnkgbm9kZSBhbmQgYWxsIHRoZWlyIGNoaWxkcmVuIGxvb2tpbmcgZm9yIGRhdGEtcmVmPVwibmFtZVwiIGF0dHJpYnV0ZXMuXG4gICAqIEFzc2lnbiB0YXJnZXRPYmplY3RbbmFtZV0gdG8gdGhlIG1hdGNoaW5nIERPTSBlbGVtZW50LlxuICAgKiBBdCB0aGUgc2FtZSB0aW1lIGxvb2sgZm9yIGRhdGEtZXZlbnQtKiBhdHRyaWJ1dGVzIGFuZCBhZGQgZXZlbnQgbGlzdGVuZXJzLlxuICAgKiBlLmcuIGRhdGEtZXZlbnQtaW5wdXQ9XCJvbklucHV0XCIgd2lsbCBjYWxsXG4gICAqIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCB0YXJnZXRPYmplY3RbXCJvbklucHV0XCJdLmJpbmQodGFyZ2V0T2JqZWN0KSlcbiAgICogTk9URTogVGhlIGV2ZW50IGhhbmRsZXJzIGFyZSBqdXN0IG5hbWVkIG1ldGhvZHMgc28gLmJpbmQgaXMgY2FsbGVkIG9uIHRoZSBtZXRob2RcbiAgICogdG8gZW5zdXJlICd0aGlzJyBpcyBjb3JyZWN0LlxuICAgKi9cbiAgemlwKHRhcmdldE9iamVjdCkge1xuICAgIC8vIHppcHBpbmcvdW56aXBwaW5nIHNob3VsZCBvY2N1ciBzZXJpYWxseSBhbmQgb25jZVxuICAgIGlmICh0aGlzLnppcHBlZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdET01BcnJheSBoYXMgYWxyZWFkeSBiZWVuIHppcHBlZCcpXG4gICAgfVxuICAgIHRoaXMuemlwcGVkID0gdHJ1ZTtcblxuICAgIC8vIHdlIGNvdWxkIHVzZSBhIENTUyBzZWxlY3RvciB0byBmaW5kIHRoZSBkYXRhLXJlZiBhdHRyaWJ1dGVzIGJ1dCBmb3JcbiAgICAvLyBldmVudCBhdHRyaWJ1dGUgKGRhdGEtZXZlbnQtKikgdGhlcmUgaXMgbm8gYXZhaWxhYmxlIHNlbGVjdG9yIHNvXG4gICAgLy8gd2Ugd2FsayB0aGUgdHJlZSBvZiBlbGVtZW50cyB1c2luZyBhIHN0YWNrLlxuICAgIHRoaXMudHJhdmVyc2UoZWxlbWVudCA9PiB7XG4gICAgICAvLyBhZG9wdCByZWZlcmVuY2VzXG4gICAgICBjb25zdCBuYW1lID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtcmVmJyk7XG4gICAgICBpZiAobmFtZSkge1xuICAgICAgICB0YXJnZXRPYmplY3RbbmFtZV0gPSBuZXcgRE9NQXJyYXkoZWxlbWVudCk7XG4gICAgICB9XG4gICAgICAvLyBhZGQgZXZlbnQgaGFuZGxlcnNcbiAgICAgIFsuLi5lbGVtZW50LmF0dHJpYnV0ZXMsXS5mb3JFYWNoKGF0dHIgPT4ge1xuICAgICAgICBjb25zdCB0b2tlbnMgPSBhdHRyLmxvY2FsTmFtZS5zcGxpdCgnLScpO1xuICAgICAgICBpZiAodG9rZW5zWzBdID09PSAnZGF0YScgJiYgdG9rZW5zWzFdID09PSAnZXZlbnQnKSB7XG4gICAgICAgICAgLy8gY3JlYXRlIGEgcmVjb3JkIG9mIGVhY2ggaGFuZGxlciBhZGRlZCBzbyB3ZSBjYW4gcmVtb3ZlIHdoZW4gdW56aXAgaXMgY2FsbGVkXG4gICAgICAgICAgY29uc3QgcmVjb3JkID0ge1xuICAgICAgICAgICAgaGFuZGxlcjogdGFyZ2V0T2JqZWN0W2F0dHIudmFsdWVdLmJpbmQodGFyZ2V0T2JqZWN0KSxcbiAgICAgICAgICAgIGV2ZW50OiB0b2tlbnNbMl0sXG4gICAgICAgICAgICBjYXB0dXJlOiBmYWxzZSxcbiAgICAgICAgICAgIGVsZW1lbnQsXG4gICAgICAgICAgfTtcbiAgICAgICAgICB0aGlzLnppcEhhbmRsZXJzID0gdGhpcy56aXBIYW5kbGVycyB8fCBbXTtcbiAgICAgICAgICB0aGlzLnppcEhhbmRsZXJzLnB1c2gocmVjb3JkKTtcblxuICAgICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihyZWNvcmQuZXZlbnQsIHJlY29yZC5oYW5kbGVyLCByZWNvcmQuY2FwdHVyZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIHJldmVyc2UgdGhlIGFjdGlvbnMgb2YgemlwLiBSZW1vdmUgcmVmZXJlbmNlcyBhbmQgcmVtb3ZlIGV2ZW50IGxpc3RlbmVyc1xuICAgKi9cbiAgdW56aXAodGFyZ2V0T2JqZWN0KSB7XG4gICAgaWYgKCF0aGlzLnppcHBlZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdET01BcnJheSBpbnN0YW5jZSBpcyBub3QgemlwcGVkJyk7XG4gICAgfVxuICAgIHRoaXMudHJhdmVyc2UoZWxlbWVudCA9PiB7XG4gICAgICAvLyByZW1vdmUgcmVmZXJlbmNlc1xuICAgICAgY29uc3QgbmFtZSA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXJlZicpO1xuICAgICAgaWYgKG5hbWUpIHtcbiAgICAgICAgZGVsZXRlIHRhcmdldE9iamVjdFtuYW1lXTtcbiAgICAgIH1cbiAgICAgIC8vIHJlbW92ZSBldmVudCBoYW5kbGVyc1xuICAgICAgaWYgKHRoaXMuemlwSGFuZGxlcnMpIHtcbiAgICAgICAgdGhpcy56aXBIYW5kbGVycy5mb3JFYWNoKHJlY29yZCA9PiB7XG4gICAgICAgICAgcmVjb3JkLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihyZWNvcmQuZXZlbnQsIHJlY29yZC5oYW5kbGVyLCByZWNvcmQuY2FwdHVyZSk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnppcEhhbmRsZXJzID0gbnVsbDtcbiAgICAgIH1cblxuICAgIH0pO1xuICAgIHRoaXMuemlwcGVkID0gZmFsc2U7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogdXRpbGl0eSBmdW5jdGlvbi4gVXNlZCBpbiB6aXAsIHVuemlwIGZvciBleGFtcGxlLiBUcmF2ZXJzZXMgYWxsIG5vZGVzIGFuZCB0aGVpclxuICAgKiBjaGlsZHJlbiBpbiB0aGUgbGlzdCBpbnZva2luZyB0aGUgY2FsbGJhY2sgZm9yIGVhY2ggb25lXG4gICAqL1xuICB0cmF2ZXJzZShjYWxsYmFjaykge1xuICAgIHRoaXMuZm9yRWFjaChub2RlID0+IHtcbiAgICAgIGxldCBzdGFjayA9IFtub2RlLF07XG4gICAgICB3aGlsZSAoc3RhY2subGVuZ3RoKSB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBzdGFjay5wb3AoKTtcbiAgICAgICAgY2FsbGJhY2suY2FsbCh0aGlzLCBlbGVtZW50KTtcbiAgICAgICAgc3RhY2sgPSBzdGFjay5jb25jYXQoLi4uZWxlbWVudC5jaGlsZHJlbik7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogYWRkIHdoaXRlIHNwYWNlIHNlcGFyYXRlZCBjbGFzc2VzIHRvIG91ciBlbGVtZW50cyBjbGFzc0xpc3RcbiAgICovXG4gIGFkZENsYXNzZXMoY2xhc3Nlcykge1xuICAgIGNsYXNzZXMuc3BsaXQoJyAnKVxuICAgIC5maWx0ZXIoY2xhc3NOYW1lID0+IGNsYXNzTmFtZS50cmltKCkubGVuZ3RoKVxuICAgIC5mb3JFYWNoKGNsYXNzTmFtZSA9PiB7XG4gICAgICB0aGlzLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogcmVtb3ZlIHdoaXRlIHNwYWNlIHNlcGFyYXRlZCBjbGFzcyBuYW1lcyBmcm9tIHRoZSBjbGFzc0xpc3Qgb2YgZWFjaCBub2RlXG4gICAqIEBwYXJhbSBjbGFzc2VzXG4gICAqIEByZXR1cm5zIHtET01BcnJheX1cbiAgICovXG4gIHJlbW92ZUNsYXNzZXMoY2xhc3Nlcykge1xuICAgIGNsYXNzZXMuc3BsaXQoJyAnKVxuICAgIC5maWx0ZXIoY2xhc3NOYW1lID0+IGNsYXNzTmFtZS50cmltKCkubGVuZ3RoKVxuICAgIC5mb3JFYWNoKGNsYXNzTmFtZSA9PiB7XG4gICAgICB0aGlzLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogYSBjb21tb24gdXNhZ2UgYW5kIHdvcnRoeSBvZiBhIG1ldGhvZC4gQWRkIHRoZSBnaXZlbiBjbGFzc2VzXG4gICAqIHRvIG91ciBpdGVtcyBpZiB0aGUgY29uZGl0aW9uIGlzIHRydXRoeSwgb3RoZXJ3aXNlIHJlbW92ZSB0aGVtXG4gICAqIEBwYXJhbSBjbGFzc2VzXG4gICAqIEBwYXJhbSBjb25kaXRpb25cbiAgICovXG4gIGNsYXNzZXNDb25kaXRpb25hbChjbGFzc2VzLCBjb25kaXRpb24pIHtcbiAgICBpZiAoY29uZGl0aW9uKSB7XG4gICAgICB0aGlzLmFkZENsYXNzZXMoY2xhc3Nlcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVtb3ZlQ2xhc3NlcyhjbGFzc2VzKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogcmV0dXJuIGEgbmV3IERPTUFycmF5IGNvbnRhaW4gYSBkZWVwIGNsb25lZCBjb3B5XG4gICAqIGVhY2ggbm9kZVxuICAgKi9cbiAgY2xvbmUoKSB7XG4gICAgY29uc3QgY2xvbmVzID0gdGhpcy5tYXAobiA9PiBuLmNsb25lTm9kZSh0cnVlKSk7XG4gICAgcmV0dXJuIG5ldyBET01BcnJheSguLi5jbG9uZXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIGNhbGxlZCBhZGRFdmVudExpc3RlbmVyIGZvciBlYWNoIGVsZW1lbnQgaW4gdGhlIGxpc3QsXG4gICAqIEBwYXJhbSBldmVudFxuICAgKiBAcGFyYW0gaGFuZGxlclxuICAgKi9cbiAgb24oZXZlbnQsIGhhbmRsZXIsIGNhcHR1cmUgPSBmYWxzZSkge1xuICAgIC8vIGxpc3RlbmVycyBncm91cCBieSBldmVudCBuYW1lIGlzIGFuIG9iamVjdCAoIHNpbmNlIGV2ZW50IGlzIGEgc3RyaW5nICkgYnV0IHRoZVxuICAgIC8vIGhhbmRsZXJzIGZvciBlYWNoIGV2ZW50IGFyZSBzdG9yZWQgaW4gYSBtYXAgd2hpY2ggY2FuIHRha2UgYSBmdW5jdGlvbiBhcyBhIGtleS5cbiAgICB0aGlzLmxpc3RlbmVycyA9IHRoaXMubGlzdGVuZXJzIHx8IHt9O1xuICAgIHRoaXMubGlzdGVuZXJzW2V2ZW50XSA9IHRoaXMubGlzdGVuZXJzW2V2ZW50XSB8fCBbXTtcbiAgICB0aGlzLmxpc3RlbmVyc1tldmVudF0ucHVzaCh7aGFuZGxlciwgY2FwdHVyZSx9KTtcbiAgICB0aGlzLmZvckVhY2gobiA9PiBuLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGhhbmRsZXIsIGNhcHR1cmUpKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiByZW1vdmUgdGhlIGhhbmRsZXJzIGZyb20gdGhlIGxpc3QuIFRocmVlIHdheXMgdG8gY2FsbC5cbiAgICogKCkgICAgICAgICAgICAgICAgICAgOiByZW1vdmUgYWxsIHJlZ2lzdGVyZWQgbGlzdGVuZXJzXG4gICAqIChldmVudE5hbWUpICAgICAgICAgIDogcmVtb3ZlIGFsbCBsaXN0ZW5lcnMgZm9yIHRoYXQgZXZlbnQuXG4gICAqIChldmVudE5hbWUsIGhhbmRsZXIpIDogcmVtb3ZlIHRoZSBzcGVjaWZpYyBoYW5kbGVyIGZvciBhIHNwZWNpZmljIGV2ZW50LlxuICAgKi9cbiAgb2ZmKGV2ZW50LCBoYW5kbGVyLCBjYXB0dXJlID0gZmFsc2UpIHtcbiAgICAvLyBpZ25vcmUgaWYgd2UgZG9uJ3QgaGF2ZSBhbnkgbGlzdGVuZXJzXG4gICAgaWYgKCF0aGlzLmxpc3RlbmVycykge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8vIGlmIG5vIGV2ZW50IG9yIGhhbmRsZXIgdGhlbiByZW1vdmUgYWxsIHJlZ2lzdGVyZWQgZXZlbnRzXG4gICAgaWYgKCFldmVudCAmJiAhaGFuZGxlcikge1xuICAgICAgLy8gaXRlcmF0ZSBhbGwgZXZlbnRzXG4gICAgICBPYmplY3Qua2V5cyh0aGlzLmxpc3RlbmVycykuZm9yRWFjaChldmVudE5hbWUgPT4ge1xuICAgICAgICB0aGlzLmxpc3RlbmVyc1tldmVudE5hbWVdLmZvckVhY2gocmVjb3JkID0+IHtcbiAgICAgICAgICB0aGlzLmZvckVhY2gobiA9PiBuLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCByZWNvcmQuaGFuZGxlciwgcmVjb3JkLmNhcHR1cmUpKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICAgIC8vIHJlc2V0IGFsbCBsaXN0ZW5lcnNcbiAgICAgIGRlbGV0ZSB0aGlzLmxpc3RlbmVycztcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gaWYgb25seSBldmVudCBuYW1lIHNwZWNpZmllZCByZW1vdmUgYWxsIGxpc3RlbmVycyBmb3IgdGhhdCBldmVudFxuICAgICAgaWYgKGV2ZW50ICYmICFoYW5kbGVyKSB7XG4gICAgICAgIGlmICh0aGlzLmxpc3RlbmVyc1tldmVudF0pIHtcbiAgICAgICAgICB0aGlzLmxpc3RlbmVyc1tldmVudF0uZm9yRWFjaChyZWNvcmQgPT4ge1xuICAgICAgICAgICAgdGhpcy5mb3JFYWNoKG4gPT4gbi5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCByZWNvcmQuaGFuZGxlciwgcmVjb3JkLmNhcHR1cmUpKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICAvLyBkZWxldGUgbGlzdGVuZXJzIGZvciB0aGlzIHNwZWNpZmljIGV2ZW50XG4gICAgICAgIGRlbGV0ZSB0aGlzLmxpc3RlbmVyc1tldmVudF07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyByZW1vdmUgdGhlIHNwZWNpZmljIGxpc3RlbmVyIGlmIGl0IGlzIHByZXNlbnQsIGJ5IGZpbmRpbmcgdGhlIHJlY29yZCB3aXRoIHRoZSBoYW5kbGVyXG4gICAgICAgIC8vICggdGhlIGNhcHR1cmUgZmxhZyBtdXN0IG1hdGNoIGFzIHdlbGwgKVxuICAgICAgICBpZiAodGhpcy5saXN0ZW5lcnNbZXZlbnRdKSB7XG4gICAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLmxpc3RlbmVyc1tldmVudF0uZmluZEluZGV4KHJlY29yZCA9PiB7XG4gICAgICAgICAgICByZXR1cm4gcmVjb3JkLmhhbmRsZXIgPT09IGhhbmRsZXIgJiYgcmVjb3JkLmNhcHR1cmUgPT09IGNhcHR1cmU7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgaWYgKGluZGV4ID49IDApIHtcbiAgICAgICAgICAgIGNvbnN0IHJlY29yZCA9IHRoaXMubGlzdGVuZXJzW2V2ZW50XVtpbmRleF07XG4gICAgICAgICAgICB0aGlzLmZvckVhY2gobiA9PiBuLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIHJlY29yZC5oYW5kbGVyLCByZWNvcmQuY2FwdHVyZSkpO1xuICAgICAgICAgICAgdGhpcy5saXN0ZW5lcnNbZXZlbnRdLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG59XG5cbi8qKlxuICogV2UgZXhwb3J0IGEgZmFjdG9yeSBmdW5jdGlvbiBmb3IgRE9NQXJyYXkgc28gdGhlcmUgaXMgbm8gbmVlZCB0byB0aGUgbmV3IG9wZXJhdG9yXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEQoKSB7XG4gIHJldHVybiBuZXcgRE9NQXJyYXkoLi4uYXJndW1lbnRzKTtcbn07XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2phdmFzY3JpcHRzL2RvbS5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=