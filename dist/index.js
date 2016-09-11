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
	'r+attributes', 'r+childElementCount', 'r+children', 'r+firstElementChild', 'r+lastElementChild', 'r+classList', 'className', 'r+clientTop', 'r+clientLeft', 'r+clientWidth', 'r+clientHeight', 'id', 'innerHTML', 'outerHTML', 'innerText', 'outerText', 'r+localName', 'r+scrollWidth', 'r+scrollHeight', 'scrollTop', 'scrollLeft', 'name', 'title', 'value'];
	
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA3NzFkMjBlOGYyZmI3YmQxOGU3NCIsIndlYnBhY2s6Ly8vLi9qYXZhc2NyaXB0cy9kb20uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7bUJDc2J3QixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTVkeEI7Ozs7QUFJQSxLQUFNLFdBQVcsSUFBSSxNQUFKLENBQVcsY0FBWCxDQUFqQjs7QUFFQTs7Ozs7Ozs7O0FBU0EsS0FBTSxhQUFhO0FBQ2pCO0FBQ0EsZUFGaUIsRUFHakIsY0FIaUIsRUFJakIsYUFKaUIsRUFLakIsZUFMaUIsRUFNakIsbUJBTmlCLEVBT2pCLFlBUGlCLEVBUWpCLFlBUmlCLEVBU2pCLFdBVGlCLEVBVWpCLGlCQVZpQixFQVdqQixpQkFYaUIsRUFZakIsY0FaaUIsRUFhakIsYUFiaUI7QUFjakI7QUFDQSxlQWZpQixFQWdCakIscUJBaEJpQixFQWlCakIsWUFqQmlCLEVBa0JqQixxQkFsQmlCLEVBbUJqQixvQkFuQmlCLEVBb0JqQixhQXBCaUIsRUFxQmpCLFdBckJpQixFQXNCakIsYUF0QmlCLEVBdUJqQixjQXZCaUIsRUF3QmpCLGVBeEJpQixFQXlCakIsZ0JBekJpQixFQTBCakIsSUExQmlCLEVBMkJqQixXQTNCaUIsRUE0QmpCLFdBNUJpQixFQTZCakIs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O0FBQ0QsY0FBTyxJQUFQO0FBQ0Q7Ozt5QkF0TlE7QUFDUCxjQUFPLEtBQUssQ0FBTCxDQUFQO0FBQ0Q7Ozs7c0JBektvQixLOztBQWdZdkI7Ozs7O0FBR2UsVUFBUyxDQUFULEdBQWE7QUFDMUIsNkNBQVcsUUFBWCwyQ0FBdUIsU0FBdkI7QUFDRCxHIiwiZmlsZSI6Ii4vZGlzdC9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSB7XG5cdFx0dmFyIGEgPSBmYWN0b3J5KCk7XG5cdFx0Zm9yKHZhciBpIGluIGEpICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgPyBleHBvcnRzIDogcm9vdClbaV0gPSBhW2ldO1xuXHR9XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiBcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb25cbiAqKi8iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIDc3MWQyMGU4ZjJmYjdiZDE4ZTc0XG4gKiovIiwiLyoqXG4gKiBzaW1wbGVzdCByZWdleCBmb3IgaWRlbnRpZnlpbmcgYSB0YWcgc3RyaW5nIHZlcnN1cyBhIHNlbGVjdG9yIHN0cmluZ1xuICogQHR5cGUge1JlZ0V4cH1cbiAqL1xuY29uc3QgdGFnUmVnZXggPSBuZXcgUmVnRXhwKCdcXHMqPChbXj5dKyk+Jyk7XG5cbi8qKlxuICogZ2V0dGVycyBhbmQgc2V0dGVycyBhcmUgY3JlYXRlZCBmb3IgdGhlc2UgcHJvcGVydGllcy4gVGhlIGNsYXNzIGRvZXMgbm90IGF0dGVtcHQgdG8gZGlzdGluZ3Vpc2ggYmV0d2VlblxuICogTm9kZSwgRWxlbWVudCwgSFRNTEVsZW1lbnQgZXRjIHNvIHRoZXNlIHByb3BlcnRpZXMgbWF5IG9yIG1heSBub3QgZXhpc3Qgb24gYW55IHBhcnRpY3VsYXIgbWVtYmVyIG9mIG91ciBsaXN0LlxuICogUmVhZCBvbmx5IHByb3BlcnRpZXMgYXJlIHByZWZpeGVkIHdpdGggJ3IrJy5cbiAqIEZvciBET01BcnJheSdzIHdpdGggZXhhY3RseSBvbmUgaXRlbSwgdGhlIGdldHRlciByZXR1cm5zIHRoZSB2YWx1ZSByZXR1cm5lZCBieSB0aGUgbmF0aXZlIHByb3BlcnR5LlxuICogRm9yIERPTUFycmF5J3MgY29udGFpbmluZyBtb3JlIHRoYW4gb25lIGl0ZW0gYW4gYXJyYXkgb2YgcmVzdWx0cyBpcyByZXR1cm5lZC5cbiAqIEVtcHR5IERPTUFycmF5J3MgcmV0dXJuIG51bGxcbiAqIEB0eXBlIHtzdHJpbmdbXX1cbiAqL1xuY29uc3QgcHJvcGVydGllcyA9IFtcbiAgLy8gTm9kZSwgcHJvcGVydGllc1xuICAncitjaGlsZE5vZGVzJyxcbiAgJ3IrZmlyc3RDaGlsZCcsXG4gICdyK2xhc3RDaGlsZCcsXG4gICdyK25leHRTaWJsaW5nJyxcbiAgJ3IrcHJldmlvdXNTaWJsaW5nJyxcbiAgJ3Irbm9kZU5hbWUnLFxuICAncitub2RlVHlwZScsXG4gICdub2RlVmFsdWUnLFxuICAncitvd25lckRvY3VtZW50JyxcbiAgJ3IrcGFyZW50RWxlbWVudCcsXG4gICdyK3BhcmVudE5vZGUnLFxuICAndGV4dENvbnRlbnQnLFxuICAvLyBFbGVtZW50IHByb3BlcnRpZXNcbiAgJ3IrYXR0cmlidXRlcycsXG4gICdyK2NoaWxkRWxlbWVudENvdW50JyxcbiAgJ3IrY2hpbGRyZW4nLFxuICAncitmaXJzdEVsZW1lbnRDaGlsZCcsXG4gICdyK2xhc3RFbGVtZW50Q2hpbGQnLFxuICAncitjbGFzc0xpc3QnLFxuICAnY2xhc3NOYW1lJyxcbiAgJ3IrY2xpZW50VG9wJyxcbiAgJ3IrY2xpZW50TGVmdCcsXG4gICdyK2NsaWVudFdpZHRoJyxcbiAgJ3IrY2xpZW50SGVpZ2h0JyxcbiAgJ2lkJyxcbiAgJ2lubmVySFRNTCcsXG4gICdvdXRlckhUTUwnLFxuICAnaW5uZXJUZXh0JyxcbiAgJ291dGVyVGV4dCcsXG4gICdyK2xvY2FsTmFtZScsXG4gICdyK3Njcm9sbFdpZHRoJyxcbiAgJ3Irc2Nyb2xsSGVpZ2h0JyxcbiAgJ3Njcm9sbFRvcCcsXG4gICdzY3JvbGxMZWZ0JyxcbiAgJ25hbWUnLFxuICAndGl0bGUnLFxuICAndmFsdWUnLFxuXTtcblxuLyoqXG4gKiBtZXRob2RzIGZvciBuYXRpdmUgTm9kZS9FbGVtZW50L0hUTUxFbGVtZW50IG9iamVjdHMgdGhhdCB3ZSBjcmVhdGUgcGFzcyB0aHJvdWdoIGZ1bmN0aW9ucyBmb3IuXG4gKiBSdWxlcyBhcmUgdGhlIHNhbWUgYXMgZm9yIGdldHRlciBwcm9wZXJ0aWVzIGkuZS4gYW4gYXJyYXkgaXMgcmV0dXJuZWQgZm9yIGxpc3RzIHdpdGggaXRlbXMgPiAxXG4gKiBAdHlwZSB7QXJyYXl9XG4gKi9cbmNvbnN0IG1ldGhvZHMgPSBbXG4gICdhcHBlbmRDaGlsZCcsXG4gICdyZW1vdmVDaGlsZCcsXG4gICdyZXBsYWNlQ2hpbGQnLFxuICAnY2xpY2snLFxuICAnY2xvbmVOb2RlJyxcbiAgJ2NvbXBhcmVEb2N1bWVudFBvc2l0aW9uJyxcbiAgJ2NvbnRhaW5zJyxcbiAgJ2hhc0NoaWxkTm9kZXMnLFxuICAnaW5zZXJ0QmVmb3JlJyxcbiAgJ2dldEJvdW5kaW5nQ2xpZW50UmVjdCcsXG4gICdnZXRBdHRyaWJ1dGUnLFxuICAnZ2V0QXR0cmlidXRlTlMnLFxuICAnc2V0QXR0cmlidXRlJyxcbiAgJ3NldEF0dHJpYnV0ZU5TJyxcbiAgJ2FkZEV2ZW50TGlzdGVuZXInLFxuICAncmVtb3ZlRXZlbnRMaXN0ZW5lcicsXG4gICdub3JtYWxpemUnLFxuICAnZm9jdXMnLFxuICAnYmx1cicsXG4gICdxdWVyeVNlbGVjdG9yJyxcbiAgJ3F1ZXJ5U2VsZWN0b3JBbGwnLFxuXTtcblxuLyoqXG4gKiB0aGUgYWN0dWFsIGVsZW1lbnRzIGNsYXNzIHdoaWNoIGluaGVyaXRzIGZyb20gbmF0aXZlIEFycmF5XG4gKi9cblxuY2xhc3MgRE9NQXJyYXkgZXh0ZW5kcyBBcnJheSB7XG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlcigpO1xuICAgIC8vIHRlc3QgZmlyc3QgYXJndW1lbnQgdG8gc2VlIGlmIGl0cyBhIHN0cmluZ1xuICAgIGNvbnN0IGlzU3RyaW5nID0gdHlwZW9mKGFyZ3NbMF0pID09PSAnc3RyaW5nJztcbiAgICAvLyBpZiBpdHMgYSBzdHJpbmcgc2VlIGlmIGl0IGEgdGFnIGRlZmluaXRpb25cbiAgICBjb25zdCBpc1RhZyA9IGlzU3RyaW5nICYmIHRhZ1JlZ2V4LmV4ZWMoYXJnc1swXS50cmltKCkpO1xuXG4gICAgLy8gZmlyc3QgYXJndW1lbnQgaXMgYSBzdHJpbmcgYnV0IG5vdCBhIHRhZyBkZWZpbml0aW9uIHNvIHdlIGFzc3VtZSBDU1Mgc2VsZWN0b3JcbiAgICBpZiAoKGFyZ3MubGVuZ3RoID09PSAxIHx8IGFyZ3MubGVuZ3RoID09IDIpICYmIGlzU3RyaW5nICYmICFpc1RhZykge1xuICAgICAgdGhpcy5jcmVhdGVGcm9tQ1NTU2VsZWN0b3IoYXJnc1swXSwgYXJnc1sxXSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIHNlY29uZCBvcHRpb24gaXMgdGhhdCBhcmdzIGlmIGp1c3QgYSBzdHJpbmcgZS5nLiAnPGRpdiBjbGFzcz1cInh5elwiPjxwPlRpdGxlPC9wPjwvZGl2PidcbiAgICAgIC8vICh3aGl0ZSBzcGFjZSBpcyB0cmltbWVkIHRvIGRldGVybWluZSBpZiB0aGlzIG1pZ2h0IGJlIGEgdGFnKVxuICAgICAgaWYgKGFyZ3MubGVuZ3RoID09PSAxICYmIGlzVGFnKSB7XG4gICAgICAgIHRoaXMuY3JlYXRlRnJvbVRBR0RlZmluaXRpb24oYXJnc1swXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBtdXN0IGJlIHJhdyBlbGVtZW50cyBvciBvdGhlciBET01BcnJheSBpbnN0YW5jZXNcbiAgICAgICAgdGhpcy5jcmVhdGVGcm9tRWxlbWVudHMoLi4uYXJncyk7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIGluamVjdCBuYXRpdmUgcHJvcGVydHkgbmFtZXMgYW5kIGZ1bmN0aW9uIG5hbWVzIHRvIHRoZSBsaXN0XG4gICAgdGhpcy5pbmplY3RNZXRob2RzQW5kUHJvcGVydGllcygpO1xuICB9XG5cbiAgLyoqXG4gICAqIGJpbmQgdGhlIHJlYWQvd3JpdGUgcHJvcGVydGllcyBjb21tb24gdG8gbW9zdCBIVE1MRWxlbWVudHMgYW5kIE5vZGUgaW5zdGFuY2VzIHRvIHRoaXMgb2JqZWN0XG4gICAqL1xuICBpbmplY3RNZXRob2RzQW5kUHJvcGVydGllcygpIHtcbiAgICAvLyBzZXR1cCByZWFkL3dyaXRlIHByb3BlcnRpZXNcbiAgICBwcm9wZXJ0aWVzLmZvckVhY2gocCA9PiB7XG4gICAgICAvLyBwcm9wZXJ0eSBjYW4gYmUgYSBuYW1lIG9yICdyKycgbmFtZSBmb3IgcmVhZCBvbmx5IHByb3BlcnRpZXNcbiAgICAgIGNvbnN0IHRva2VucyA9IHAuc3BsaXQoJysnKTtcbiAgICAgIGNvbnN0IHJlYWRPbmx5ID0gdG9rZW5zLmxlbmd0aCA9PT0gMiAmJiB0b2tlbnNbMF0gPT09ICdyJztcbiAgICAgIGNvbnN0IG5hbWUgPSByZWFkT25seSA/IHRva2Vuc1sxXSA6IHRva2Vuc1swXTtcbiAgICAgIC8vIGNyZWF0ZSBnZXR0ZXIgYW5kIG9wdGlvbmFsIHNldHRlclxuICAgICAgY29uc3QgbmV3UHJvcGVydHkgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgZ2V0OiB0aGlzLmdlbmVyaWNHZXR0ZXIuYmluZCh0aGlzLCBuYW1lKSxcbiAgICAgIH0sIHJlYWRPbmx5ID8ge30gOiB7XG4gICAgICAgIHNldDogdGhpcy5nZW5lcmljU2V0dGVyLmJpbmQodGhpcywgbmFtZSksXG4gICAgICB9KTtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBuYW1lLCBuZXdQcm9wZXJ0eSk7XG4gICAgfSk7XG5cbiAgICAvLyBzZXR1cCBtZXRob2RzXG4gICAgbWV0aG9kcy5mb3JFYWNoKG5hbWUgPT4ge1xuICAgICAgdGhpc1tuYW1lXSA9IHRoaXMuZ2VuZXJpY01ldGhvZC5iaW5kKHRoaXMsIG5hbWUpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIGNyZWF0ZSBvdXIgZWxlbWVudHMgbGlzdCBmcm9tIGEgQ1NTIHNlbGVjdG9yIGFuZCBvcHRpb24gcm9vdCBlbGVtZW50ICggZWl0aGVyXG4gICAqIGEgbmF0aXZlIEhUTUxFbGVtZW50L05vZGUgb3IgYW5vdGhlciBET01BcnJheSApXG4gICAqIEBwYXJhbSBzZWxlY3RvclxuICAgKiBAcGFyYW0gcm9vdEVsZW1lbnRcbiAgICovXG4gIGNyZWF0ZUZyb21DU1NTZWxlY3RvcihzZWxlY3Rvciwgcm9vdEVsZW1lbnQpIHtcbiAgICAvLyB1c2UgdGhlIGdpdmVuIHJvb3QgZWxlbWVudCBvciB0aGUgZG9jdW1lbnRcbiAgICBjb25zdCByb290ID0gcm9vdEVsZW1lbnQgPyB0aGlzLmdldE5vZGUocm9vdEVsZW1lbnQpIDogZG9jdW1lbnQ7XG4gICAgLy8gcmV0dXJuIGEgcHJveHkgdXNpbmcgdGhlIHJlc3VsdHMgb2YgdGhlIHNlbGVjdG9yIGFzIHRoZSBpbml0aWFsIGFycmF5XG4gICAgdGhpcy5wdXNoKC4uLnJvb3QucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcikpO1xuICB9XG5cbiAgLyoqXG4gICAqIGNyZWF0ZSB0aGUgbGlzdCBmcm9tIGEgdGVtcGxhdGUgc3RyaW5nIGUuZy4gJzxkaXY+QSBESVY8ZGl2PjxzcGFuPkEgU3Bhbjwvc3Bhbj4nXG4gICAqIEBwYXJhbSB0ZW1wbGF0ZVxuICAgKi9cbiAgY3JlYXRlRnJvbVRBR0RlZmluaXRpb24odGVtcGxhdGUpIHtcbiAgICAvLyB1c2UgYSB0ZW1wb3JhcnkgRElWIGFuZCBpbnNlcnRBZGphY2VudEhUTUwgdG8gY29uc3RydWN0IHRoZSBET01cbiAgICBjb25zdCBkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnRElWJyk7XG4gICAgZC5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyYmVnaW4nLCB0ZW1wbGF0ZSk7XG4gICAgLy8gbm9ybWFsaXplIHRoZSBjb250ZXh0IHRvIHJlbW92ZSBleHRyYW5lb3VzIHdoaXRlIHNwYWNlXG4gICAgZC5ub3JtYWxpemUoKTtcbiAgICAvLyBhZGQgY2hpbGROb2RlIGRpcmVjdGx5IGludG8gb3VyIGxpc3RcbiAgICB0aGlzLnB1c2goLi4uZC5jaGlsZE5vZGVzKTtcbiAgICAvLyByZW1vdmUgYWxsIHRoZSBjaGlsZHJlbiBvZiB0aGUgdGVtcG9yYXJ5IGRpdiwgc28gdGhhdCB0aGUgbmV3bHkgY3JlYXRlZCB0b3AgbGV2ZWwgbm9kZXMgd2lsbCBiZSB1bnBhcmVudGVkXG4gICAgd2hpbGUgKGQuZmlyc3RDaGlsZCkgZC5yZW1vdmVDaGlsZChkLmZpcnN0Q2hpbGQpO1xuICB9XG5cbiAgLyoqXG4gICAqIGNyZWF0ZSBmcm9tIGEgbWl4ZWQgbGlzdCBvZiBlbGVtZW50cyBvciBvdGhlciBET01BcnJheSBpbnN0YW5jZXMuXG4gICAqIEBwYXJhbSBhcmdzXG4gICAqL1xuICBjcmVhdGVGcm9tRWxlbWVudHMoLi4uYXJncykge1xuICAgIC8vIG9ubHkgcmVtYWluaW5nIG9wdGlvbiBpcyB0aGF0IGVhY2ggYXJndW1lbnQgaXMgYSBET00gbm9kZSBvciBwb3NzaWJsZSBhbm90aGVyIGVsZW1lbnRzIGxpc3RcbiAgICBhcmdzLmZvckVhY2goKGFyZywgaW5kZXgpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGB0ZXN0aW5nICR7aW5kZXh9OiAke2FyZy50b1N0cmluZygpfWApO1xuICAgICAgaWYgKGFyZyBpbnN0YW5jZW9mIERPTUFycmF5KSB7XG4gICAgICAgIHRoaXMucHVzaCguLi5hcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5wdXNoKGFyZyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogYWxsIGdlbmVyaWMgbWV0aG9kcyByZWRpcmVjdCBoZXJlXG4gICAqIEBwYXJhbSBuYW1lXG4gICAqIEBwYXJhbSBhcmdzXG4gICAqL1xuICBnZW5lcmljTWV0aG9kKG5hbWUsIC4uLmFyZ3MpIHtcbiAgICBpZiAodGhpcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGlmICh0aGlzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgcmV0dXJuIHRoaXMuZWxbbmFtZV0uY2FsbCh0aGlzLmVsLCAuLi5hcmdzKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMubWFwKG5vZGUgPT4gbm9kZVtuYW1lXS5jYWxsKG5vZGUsIC4uLmFyZ3MpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBnZW5lcmljIGdldHRlclxuICAgKiBAcGFyYW0gbmFtZSAtIHRoZSBwcm9wZXJ0eSB0byByZXR1cm4uXG4gICAqL1xuICBnZW5lcmljR2V0dGVyKG5hbWUpIHtcbiAgICBpZiAodGhpcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGlmICh0aGlzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgcmV0dXJuIHRoaXMuZWxbbmFtZV07XG4gICAgfVxuICAgIHJldHVybiB0aGlzLm1hcChub2RlID0+IG5vZGVbbmFtZV0pO1xuICB9XG5cbiAgLyoqXG4gICAqIGdlbmVyaWMgc2V0dGVyXG4gICAqIEBwYXJhbSBuYW1lXG4gICAqIEBwYXJhbSB2YWx1ZVxuICAgKi9cbiAgZ2VuZXJpY1NldHRlcihuYW1lLCB2YWx1ZSkge1xuICAgIHRoaXMuZm9yRWFjaChuID0+IG5bbmFtZV0gPSB2YWx1ZSk7XG4gIH1cblxuICAvKipcbiAgICogYXBwbHkgdGhlIGtleS92YWx1ZSBwYWlycyBpbiBoYXNoIHRvIGFsbCBvdXIgZWxlbWVudHNcbiAgICovXG4gIHNldFN0eWxlcyhoYXNoKSB7XG4gICAgdGhpcy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgaWYgKGVsZW1lbnQubm9kZVR5cGUgPT09IE5vZGUuRUxFTUVOVF9OT0RFKSB7XG4gICAgICAgIE9iamVjdC5rZXlzKGhhc2gpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICBlbGVtZW50LnN0eWxlW2tleV0gPSBoYXNoW2tleV07XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIGlmIHRoZSBvYmogaXMgYSBET01BcnJheSB0aGVuIHJldHVybiB0aGUgZmlyc3QgbWVtYmVyIG90aGVyd2lzZSBhc3N1bWVcbiAgICogdGhlIG9iamVjdCBpcyBhIG5vZGUgYW5kIHJldHVybiBpdC5cbiAgICovXG4gIGdldE5vZGUob2JqKSB7XG4gICAgaWYgKG9iaiBpbnN0YW5jZW9mIERPTUFycmF5KSByZXR1cm4gb2JqWzBdO1xuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICAvKipcbiAgICogaWYgdGhlIG9iaiBpcyBhIERPTUFycmF5IHJldHVybiBpdCwgb3RoZXJ3aXNlIHdyYXAgdGhlIG5vZGUgaW4gYSBET01BcnJheVxuICAgKi9cbiAgZ2V0Tm9kZXMob2JqKSB7XG4gICAgaWYgKG9iaiBpbnN0YW5jZW9mIERPTUFycmF5KSByZXR1cm4gb2JqO1xuICAgIHJldHVybiBuZXcgRE9NQXJyYXkob2JqKTtcbiAgfVxuXG4gIC8qKlxuICAgKiByZXR1cm4gdGhlIG5hdGl2ZSBlbCBvZiB0aGUgZmlyc3QgZWxlbWVudCBpbiB0aGUgbGlzdFxuICAgKi9cbiAgZ2V0IGVsKCkge1xuICAgIHJldHVybiB0aGlzWzBdO1xuICB9XG5cbiAgLyoqXG4gICAqIHJlbW92ZSBhbGwgZWxlbWVudHMgZnJvbSB0aGUgZWxlbWVudHMgaW4gb3VyIGxpc3RcbiAgICovXG4gIGVtcHR5KCkge1xuICAgIHRoaXMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgIHdoaWxlIChlbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgZWxlbWVudC5yZW1vdmVDaGlsZChlbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIHJlbW92ZSBhbGwgb3VyIG5vZGVzIGZyb20gdGhlaXIgcGFyZW50c1xuICAgKi9cbiAgcmVtb3ZlKCkge1xuICAgIHRoaXMuZm9yRWFjaChub2RlID0+IHtcbiAgICAgIGlmIChub2RlLnBhcmVudE5vZGUpIHtcbiAgICAgICAgbm9kZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG5vZGUpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIGl0ZXJhdGUgZXZlcnkgbm9kZSBhbmQgYWxsIHRoZWlyIGNoaWxkcmVuIGxvb2tpbmcgZm9yIGRhdGEtcmVmPVwibmFtZVwiIGF0dHJpYnV0ZXMuXG4gICAqIEFzc2lnbiB0YXJnZXRPYmplY3RbbmFtZV0gdG8gdGhlIG1hdGNoaW5nIERPTSBlbGVtZW50LlxuICAgKiBBdCB0aGUgc2FtZSB0aW1lIGxvb2sgZm9yIGRhdGEtZXZlbnQtKiBhdHRyaWJ1dGVzIGFuZCBhZGQgZXZlbnQgbGlzdGVuZXJzLlxuICAgKiBlLmcuIGRhdGEtZXZlbnQtaW5wdXQ9XCJvbklucHV0XCIgd2lsbCBjYWxsXG4gICAqIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCB0YXJnZXRPYmplY3RbXCJvbklucHV0XCJdLmJpbmQodGFyZ2V0T2JqZWN0KSlcbiAgICogTk9URTogVGhlIGV2ZW50IGhhbmRsZXJzIGFyZSBqdXN0IG5hbWVkIG1ldGhvZHMgc28gLmJpbmQgaXMgY2FsbGVkIG9uIHRoZSBtZXRob2RcbiAgICogdG8gZW5zdXJlICd0aGlzJyBpcyBjb3JyZWN0LlxuICAgKi9cbiAgemlwKHRhcmdldE9iamVjdCkge1xuICAgIC8vIHdlIGNvdWxkIHVzZSBhIENTUyBzZWxlY3RvciB0byBmaW5kIHRoZSBkYXRhLXJlZiBhdHRyaWJ1dGVzIGJ1dCBmb3JcbiAgICAvLyBldmVudCBhdHRyaWJ1dGUgKGRhdGEtZXZlbnQtKikgdGhlcmUgaXMgbm8gYXZhaWxhYmxlIHNlbGVjdG9yIHNvXG4gICAgLy8gd2Ugd2FsayB0aGUgdHJlZSBvZiBlbGVtZW50cyB1c2luZyBhIHN0YWNrLlxuICAgIHRoaXMudHJhdmVyc2UoZWxlbWVudCA9PiB7XG4gICAgICAvLyBhZG9wdCByZWZlcmVuY2VzXG4gICAgICBjb25zdCBuYW1lID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtcmVmJyk7XG4gICAgICBpZiAobmFtZSkge1xuICAgICAgICB0YXJnZXRPYmplY3RbbmFtZV0gPSBuZXcgRE9NQXJyYXkoZWxlbWVudCk7XG4gICAgICB9XG4gICAgICAvLyBhZGQgZXZlbnQgaGFuZGxlcnNcbiAgICAgIFsuLi5lbGVtZW50LmF0dHJpYnV0ZXMsXS5mb3JFYWNoKGF0dHIgPT4ge1xuICAgICAgICBjb25zdCB0b2tlbnMgPSBhdHRyLmxvY2FsTmFtZS5zcGxpdCgnLScpO1xuICAgICAgICBpZiAodG9rZW5zWzBdID09PSAnZGF0YScgJiYgdG9rZW5zWzFdID09PSAnZXZlbnQnKSB7XG4gICAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKHRva2Vuc1syXSwgdGFyZ2V0T2JqZWN0W2F0dHIudmFsdWVdLmJpbmQodGFyZ2V0T2JqZWN0KSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIHJldmVyc2UgdGhlIGFjdGlvbnMgb2YgemlwLiBSZW1vdmUgcmVmZXJlbmNlcyBhbmQgcmVtb3ZlIGV2ZW50IGxpc3RlbmVyc1xuICAgKi9cbiAgdW56aXAodGFyZ2V0T2JqZWN0KSB7XG4gICAgdGhpcy50cmF2ZXJzZShlbGVtZW50ID0+IHtcbiAgICAgIC8vIHJlbW92ZSByZWZlcmVuY2VzXG4gICAgICBjb25zdCBuYW1lID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtcmVmJyk7XG4gICAgICBpZiAobmFtZSkge1xuICAgICAgICBkZWxldGUgdGFyZ2V0T2JqZWN0W25hbWVdO1xuICAgICAgfVxuICAgICAgLy8gcmVtb3ZlIGV2ZW50IGhhbmRsZXJzXG4gICAgICBbLi4uZWxlbWVudC5hdHRyaWJ1dGVzLF0uZm9yRWFjaChhdHRyID0+IHtcbiAgICAgICAgY29uc3QgdG9rZW5zID0gYXR0ci5sb2NhbE5hbWUuc3BsaXQoJy0nKTtcbiAgICAgICAgaWYgKHRva2Vuc1swXSA9PT0gJ2RhdGEnICYmIHRva2Vuc1sxXSA9PT0gJ2V2ZW50Jykge1xuICAgICAgICAgIGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0b2tlbnNbMl0sIHRhcmdldE9iamVjdFthdHRyLnZhbHVlXSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIHV0aWxpdHkgZnVuY3Rpb24uIFVzZWQgaW4gemlwLCB1bnppcCBmb3IgZXhhbXBsZS4gVHJhdmVyc2VzIGFsbCBub2RlcyBhbmQgdGhlaXJcbiAgICogY2hpbGRyZW4gaW4gdGhlIGxpc3QgaW52b2tpbmcgdGhlIGNhbGxiYWNrIGZvciBlYWNoIG9uZVxuICAgKi9cbiAgdHJhdmVyc2UoY2FsbGJhY2spIHtcbiAgICB0aGlzLmZvckVhY2gobm9kZSA9PiB7XG4gICAgICBsZXQgc3RhY2sgPSBbbm9kZSxdO1xuICAgICAgd2hpbGUgKHN0YWNrLmxlbmd0aCkge1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gc3RhY2sucG9wKCk7XG4gICAgICAgIGNhbGxiYWNrLmNhbGwodGhpcywgZWxlbWVudCk7XG4gICAgICAgIHN0YWNrID0gc3RhY2suY29uY2F0KC4uLmVsZW1lbnQuY2hpbGRyZW4pO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIGFkZCB3aGl0ZSBzcGFjZSBzZXBhcmF0ZWQgY2xhc3NlcyB0byBvdXIgZWxlbWVudHMgY2xhc3NMaXN0XG4gICAqL1xuICBhZGRDbGFzc2VzKGNsYXNzZXMpIHtcbiAgICBjbGFzc2VzLnNwbGl0KCcgJylcbiAgICAuZmlsdGVyKGNsYXNzTmFtZSA9PiBjbGFzc05hbWUudHJpbSgpLmxlbmd0aClcbiAgICAuZm9yRWFjaChjbGFzc05hbWUgPT4ge1xuICAgICAgdGhpcy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIHJlbW92ZSB3aGl0ZSBzcGFjZSBzZXBhcmF0ZWQgY2xhc3MgbmFtZXMgZnJvbSB0aGUgY2xhc3NMaXN0IG9mIGVhY2ggbm9kZVxuICAgKiBAcGFyYW0gY2xhc3Nlc1xuICAgKiBAcmV0dXJucyB7RE9NQXJyYXl9XG4gICAqL1xuICByZW1vdmVDbGFzc2VzKGNsYXNzZXMpIHtcbiAgICBjbGFzc2VzLnNwbGl0KCcgJylcbiAgICAuZmlsdGVyKGNsYXNzTmFtZSA9PiBjbGFzc05hbWUudHJpbSgpLmxlbmd0aClcbiAgICAuZm9yRWFjaChjbGFzc05hbWUgPT4ge1xuICAgICAgdGhpcy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIGEgY29tbW9uIHVzYWdlIGFuZCB3b3J0aHkgb2YgYSBtZXRob2QuIEFkZCB0aGUgZ2l2ZW4gY2xhc3Nlc1xuICAgKiB0byBvdXIgaXRlbXMgaWYgdGhlIGNvbmRpdGlvbiBpcyB0cnV0aHksIG90aGVyd2lzZSByZW1vdmUgdGhlbVxuICAgKiBAcGFyYW0gY2xhc3Nlc1xuICAgKiBAcGFyYW0gY29uZGl0aW9uXG4gICAqL1xuICBjbGFzc2VzQ29uZGl0aW9uYWwoY2xhc3NlcywgY29uZGl0aW9uKSB7XG4gICAgaWYgKGNvbmRpdGlvbikge1xuICAgICAgdGhpcy5hZGRDbGFzc2VzKGNsYXNzZXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlbW92ZUNsYXNzZXMoY2xhc3Nlcyk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIHJldHVybiBhIG5ldyBET01BcnJheSBjb250YWluIGEgZGVlcCBjbG9uZWQgY29weVxuICAgKiBlYWNoIG5vZGVcbiAgICovXG4gIGNsb25lKCkge1xuICAgIHJldHVybiBuZXcgRE9NQXJyYXkoWy4uLnRoaXMubWFwKG4gPT4gbi5jbG9uZU5vZGUodHJ1ZSkpLF0pO1xuICB9XG5cbiAgLyoqXG4gICAqIGNhbGxlZCBhZGRFdmVudExpc3RlbmVyIGZvciBlYWNoIGVsZW1lbnQgaW4gdGhlIGxpc3QsXG4gICAqIEBwYXJhbSBldmVudFxuICAgKiBAcGFyYW0gaGFuZGxlclxuICAgKi9cbiAgb24oZXZlbnQsIGhhbmRsZXIsIGNhcHR1cmUgPSBmYWxzZSkge1xuICAgIC8vIGxpc3RlbmVycyBncm91cCBieSBldmVudCBuYW1lIGlzIGFuIG9iamVjdCAoIHNpbmNlIGV2ZW50IGlzIGEgc3RyaW5nICkgYnV0IHRoZVxuICAgIC8vIGhhbmRsZXJzIGZvciBlYWNoIGV2ZW50IGFyZSBzdG9yZWQgaW4gYSBtYXAgd2hpY2ggY2FuIHRha2UgYSBmdW5jdGlvbiBhcyBhIGtleS5cbiAgICB0aGlzLmxpc3RlbmVycyA9IHRoaXMubGlzdGVuZXJzIHx8IHt9O1xuICAgIHRoaXMubGlzdGVuZXJzW2V2ZW50XSA9IHRoaXMubGlzdGVuZXJzW2V2ZW50XSB8fCBuZXcgTWFwKCk7XG4gICAgdGhpcy5saXN0ZW5lcnNbZXZlbnRdLnNldChoYW5kbGVyLCB7aGFuZGxlciwgY2FwdHVyZSx9KTtcbiAgICB0aGlzLmZvckVhY2gobiA9PiBuLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGhhbmRsZXIsIGNhcHR1cmUpKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiByZW1vdmUgdGhlIGhhbmRsZXJzIGZyb20gdGhlIGxpc3QuIFRocmVlIHdheXMgdG8gY2FsbC5cbiAgICogKCkgICAgICAgICAgICAgICAgICAgOiByZW1vdmUgYWxsIHJlZ2lzdGVyZWQgbGlzdGVuZXJzXG4gICAqIChldmVudE5hbWUpICAgICAgICAgIDogcmVtb3ZlIGFsbCBsaXN0ZW5lcnMgZm9yIHRoYXQgZXZlbnQuXG4gICAqIChldmVudE5hbWUsIGhhbmRsZXIpIDogcmVtb3ZlIHRoZSBzcGVjaWZpYyBoYW5kbGVyIGZvciBhIHNwZWNpZmljIGV2ZW50LlxuICAgKi9cbiAgb2ZmKGV2ZW50LCBoYW5kbGVyLCBjYXB0dXJlID0gZmFsc2UpIHtcbiAgICAvLyBpZ25vcmUgaWYgd2UgZG9uJ3QgaGF2ZSBhbnkgbGlzdGVuZXJzXG4gICAgaWYgKCF0aGlzLmxpc3RlbmVycykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyBpZiBubyBldmVudCBvciBoYW5kbGVyIHRoZW4gcmVtb3ZlIGFsbCByZWdpc3RlcmVkIGV2ZW50c1xuICAgIGlmICghZXZlbnQgJiYgIWhhbmRsZXIpIHtcbiAgICAgIC8vIGl0ZXJhdGUgYWxsIGV2ZW50c1xuICAgICAgT2JqZWN0LmtleXModGhpcy5saXN0ZW5lcnMpLmZvckVhY2goZXZlbnROYW1lID0+IHtcbiAgICAgICAgdGhpcy5saXN0ZW5lcnNbZXZlbnROYW1lXS5mb3JFYWNoKHJlY29yZCA9PiB7XG4gICAgICAgICAgdGhpcy5mb3JFYWNoKG4gPT4gbi5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgcmVjb3JkLmhhbmRsZXIsIHJlY29yZC5jYXB0dXJlKSk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgICAvLyByZXNldCBhbGwgbGlzdGVuZXJzXG4gICAgICBkZWxldGUgdGhpcy5saXN0ZW5lcnM7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGlmIG9ubHkgZXZlbnQgbmFtZSBzcGVjaWZpZWQgcmVtb3ZlIGFsbCBsaXN0ZW5lcnMgZm9yIHRoYXQgZXZlbnRcbiAgICAgIGlmIChldmVudCAmJiAhaGFuZGxlcikge1xuICAgICAgICBpZiAodGhpcy5saXN0ZW5lcnNbZXZlbnRdKSB7XG4gICAgICAgICAgdGhpcy5saXN0ZW5lcnNbZXZlbnRdLmZvckVhY2gocmVjb3JkID0+IHtcbiAgICAgICAgICAgIHRoaXMuZm9yRWFjaChuID0+IG4ucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCwgcmVjb3JkLmhhbmRsZXIsIHJlY29yZC5jYXB0dXJlKSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gZGVsZXRlIGxpc3RlbmVycyBmb3IgdGhpcyBzcGVjaWZpYyBldmVudFxuICAgICAgICBkZWxldGUgdGhpcy5saXN0ZW5lcnNbZXZlbnRdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gcmVtb3ZlIHRoZSBzcGVjaWZpYyBsaXN0ZW5lciBpZiBpdCBpcyBwcmVzZW50LCBieSBmaW5kaW5nIHRoZSByZWNvcmQgd2l0aCB0aGUgaGFuZGxlclxuICAgICAgICAvLyAoIHRoZSBjYXB0dXJlIGZsYWcgbXVzdCBtYXRjaCBhcyB3ZWxsIClcbiAgICAgICAgaWYgKHRoaXMubGlzdGVuZXJzW2V2ZW50XSkge1xuICAgICAgICAgIGxldCBtYXRjaGVkUmVjb3JkO1xuICAgICAgICAgIHRoaXMubGlzdGVuZXJzW2V2ZW50XS5mb3JFYWNoKHJlY29yZCA9PiB7XG4gICAgICAgICAgICBpZiAocmVjb3JkLmhhbmRsZXIgPT09IGhhbmRsZXIgJiYgcmVjb3JkLmNhcHR1cmUgPT09IGNhcHR1cmUpIHtcbiAgICAgICAgICAgICAgbWF0Y2hlZFJlY29yZCA9IHJlY29yZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgICBpZiAobWF0Y2hlZFJlY29yZCkge1xuICAgICAgICAgICAgdGhpcy5saXN0ZW5lcnNbZXZlbnRdLmRlbGV0ZShtYXRjaGVkUmVjb3JkKTtcbiAgICAgICAgICAgIHRoaXMuZm9yRWFjaChuID0+IG4ucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCwgbWF0Y2hlZFJlY29yZC5oYW5kbGVyLCBtYXRjaGVkUmVjb3JkLmNhcHR1cmUpKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gcmVtb3ZlIGp1c3QgdGhpcyByZWNvcmRcbiAgICAgICAgICB0aGlzLmxpc3RlbmVyc1tldmVudF0uZGVsZXRlKG1hdGNoZWRSZWNvcmQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG59XG5cbi8qKlxuICogV2UgZXhwb3J0IGEgZmFjdG9yeSBmdW5jdGlvbiBmb3IgRE9NQXJyYXkgc28gdGhlcmUgaXMgbm8gbmVlZCB0byB0aGUgbmV3IG9wZXJhdG9yXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEQoKSB7XG4gIHJldHVybiBuZXcgRE9NQXJyYXkoLi4uYXJndW1lbnRzKTtcbn07XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2phdmFzY3JpcHRzL2RvbS5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=