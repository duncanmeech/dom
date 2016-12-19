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
	'r+attributes', 'r+childElementCount', 'r+children', 'r+firstElementChild', 'r+lastElementChild', 'r+classList', 'className', 'r+clientTop', 'r+clientLeft', 'r+clientWidth', 'r+clientHeight', 'id', 'innerHTML', 'outerHTML', 'innerText', 'outerText', 'r+localName', 'r+scrollWidth', 'r+scrollHeight', 'scrollTop', 'scrollLeft', 'name', 'title', 'value', 'checked', 'style', 'disabled'];
	
	/**
	 * methods for native Node/Element/HTMLElement objects that we create pass through functions for.
	 * Rules are the same as for getter properties i.e. an array is returned for lists with items > 1
	 * @type {Array}
	 */
	var methods = ['appendChild', 'removeChild', 'replaceChild', 'click', 'cloneNode', 'compareDocumentPosition', 'contains', 'hasChildNodes', 'insertBefore', 'getBoundingClientRect', 'getAttribute', 'getAttributeNS', 'setAttribute', 'setAttributeNS', 'removeAttribute', 'removeAttributeNS', 'addEventListener', 'removeEventListener', 'normalize', 'focus', 'blur', 'querySelector', 'querySelectorAll'];
	
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
	      this.push.apply(this, _toConsumableArray(this.getChildren(d)));
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
	
	      // we could use a CSS selector to find the 'r' attributes but for
	      // event attribute (e-???) there is no available selector so
	      // we walk the tree of elements using a stack.
	      this.traverse(function (element) {
	        // adopt references
	        var name = element.getAttribute('r');
	        if (name) {
	          if (targetObject[name]) {
	            throw new Error('Element binding would overwrite an existing property.');
	          }
	          targetObject[name] = new DOMArray(element);
	        }
	        // add event handlers...we expect something like e-click="onClick"
	        [].concat(_toConsumableArray(element.attributes)).forEach(function (attr) {
	          var tokens = attr.localName.split('-');
	          if (tokens.length === 2 && tokens[0] === 'e' && tokens[1]) {
	            // create a record of each handler added so we can remove when unzip is called
	            var record = {
	              handler: targetObject[attr.value].bind(targetObject),
	              event: tokens[1],
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
	        var name = element.getAttribute('r');
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
	          stack = (_stack = stack).concat.apply(_stack, _toConsumableArray(_this7.getChildren(element)));
	        }
	      });
	      return this;
	    }
	
	    /**
	     * get only the element children of a node, allowing for the possibility the .children doesn't exist ( e.g. SVG tag )
	     * and filter the child nodes.
	     * @param n
	     * @returns Array
	     */
	
	  }, {
	    key: 'getChildren',
	    value: function getChildren(element) {
	      if (element.children) {
	        return Array.from(element.children);
	      } else {
	        // filter childNodes to only elements
	        if (element.childNodes) {
	          return Array.from(element.childNodes).filter(function (n) {
	            return n.nodeType === document.ELEMENT_NODE;
	          });
	        }
	      }
	      return [];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCAwMDFhY2NiODFkZjE3ZDhlZTIyOSIsIndlYnBhY2s6Ly8vLi9qYXZhc2NyaXB0cy9kb20uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7bUJDd2V3QixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTlnQnhCOzs7O0FBSUEsS0FBTSxXQUFXLElBQUksTUFBSixDQUFXLGNBQVgsQ0FBakI7O0FBRUE7Ozs7Ozs7OztBQVNBLEtBQU0sYUFBYTtBQUNqQjtBQUNBLGVBRmlCLEVBR2pCLGNBSGlCLEVBSWpCLGFBSmlCLEVBS2pCLGVBTGlCLEVBTWpCLG1CQU5pQixFQU9qQixZQVBpQixFQVFqQixZQVJpQixFQVNqQixXQVRpQixFQVVqQixpQkFWaUIsRUFXakIsaUJBWGlCLEVBWWpCLGNBWmlCLEVBYWpCLGFBYmlCLEVBY2pCLFdBZGlCO0FBZWpCO0FBQ0EsZUFoQmlCLEVBaUJqQixxQkFqQmlCLEVBa0JqQixZQWxCaUIsRUFtQmpCLHFCQW5CaUIsRUFvQmpCLG9CQXBCaUIsRUFxQmpCLGFBckJpQixFQXNCakIsV0F0QmlCLEVBdUJqQixhQXZCaUIsRUF3QmpCLGNBeEJpQixFQXlCakIsZUF6QmlCLEVBMEJqQixnQkExQmlCLEVBMkJqQixJQTNCaUIsRUE0QmpCLFdBNUJpQixFQTZCakIsV0E3QmlCLEVBOEJqQixXQTlCaUIsRUErQmpCLFdBL0JpQixFQWdDakIsYUFoQ2lCLEVBaUNqQixlQWpDaUIsRUFrQ2pCLGdCQWxDaUIsRUFtQ2pCLFdBbkNpQixFQW9DakIsWUFwQ2lCLEVBcUNqQixNQXJDaUIsRUFzQ2pCLE9BdENpQixFQXVDakIsT0F2Q2lCLEVBd0NqQixTQXhDaUIsRUF5Q2pCLE9BekNpQixFQTBDakIsVUExQ2lCLENBQW5COztBQTZDQTs7Ozs7QUFLQSxLQUFNLFVBQVUsQ0FDZCxhQURjLEVBRWQsYUFGYyxFQUdkLGNBSGMsRUFJZCxPQUpjLEVBS2QsV0FMYyxFQU1kLHlCQU5jLEVBT2QsVUFQYyxFQVFkLGVBUmMsRUFTZCxjQVRjLEVBVWQsdUJBVmMsRUFXZCxjQVhjLEVBWWQsZ0JBWmMsRUFhZCxjQWJjLEVBY2QsZ0JBZGMsRUFlZCxpQkFmYyxFQWdCZCxtQkFoQmMsRUFpQmQsa0JBakJjLEVBa0JkLHFCQWxCYyxFQW1CZCxXQW5CYyxFQW9CZCxPQXBCYyxFQXFCZCxNQXJCYyxFQXNCZCxlQXRCYyxFQXVCZCxrQkF2QmMsQ0FBaEI7O0FBMEJBOzs7O0tBSU0sUTs7O0FBQ0osdUJBQXFCO0FBQUE7O0FBRW5CO0FBRm1COztBQUFBLHVDQUFOLElBQU07QUFBTixXQUFNO0FBQUE7O0FBR25CLFNBQU0sV0FBVyxPQUFPLEtBQUssQ0FBTCxDQUFQLEtBQW9CLFFBQXJDO0FBQ0E7QUFDQSxTQUFNLFFBQVEsWUFBWSxTQUFTLElBQVQsQ0FBYyxLQUFLLENBQUwsRUFBUSxJQUFSLEVBQWQsQ0FBMUI7O0FBRUE7QUFDQSxTQUFJLENBQUMsS0FBSyxNQUFMLEtBQWdCLENBQWhCLElBQXFCLEtBQUssTUFBTCxJQUFlLENBQXJDLEtBQTJDLFFBQTNDLElBQXVELENBQUMsS0FBNUQsRUFBbUU7QUFDakUsYUFBSyxxQkFBTCxDQUEyQixLQUFLLENBQUwsQ0FBM0IsRUFBb0MsS0FBSyxDQUFMLENBQXBDO0FBQ0QsTUFGRCxNQUVPO0FBQ0w7QUFDQTtBQUNBLFdBQUksS0FBSyxNQUFMLEtBQWdCLENBQWhCLElBQXFCLEtBQXpCLEVBQWdDO0FBQzlCLGVBQUssdUJBQUwsQ0FBNkIsS0FBSyxDQUFMLENBQTdCO0FBQ0QsUUFGRCxNQUVPO0FBQ0w7QUFDQSxlQUFLLGtCQUFMLGNBQTJCLElBQTNCO0FBQ0Q7QUFDRjtBQUNEO0FBQ0EsV0FBSywwQkFBTDtBQXJCbUI7QUFzQnBCOztBQUVEOzs7Ozs7O2tEQUc2QjtBQUFBOztBQUMzQjtBQUNBLGtCQUFXLE9BQVgsQ0FBbUIsYUFBSztBQUN0QjtBQUNBLGFBQU0sU0FBUyxFQUFFLEtBQUYsQ0FBUSxHQUFSLENBQWY7QUFDQSxhQUFNLFdBQVcsT0FBTyxNQUFQLEtBQWtCLENBQWxCLElBQXVCLE9BQU8sQ0FBUCxNQUFjLEdBQXREO0FBQ0EsYUFBTSxPQUFPLFdBQVcsT0FBTyxDQUFQLENBQVgsR0FBdUIsT0FBTyxDQUFQLENBQXBDO0FBQ0E7QUFDQSxhQUFNLGNBQWMsT0FBTyxNQUFQLENBQWM7QUFDaEMsZ0JBQUssT0FBSyxhQUFMLENBQW1CLElBQW5CLFNBQThCLElBQTlCO0FBRDJCLFVBQWQsRUFFakIsV0FBVyxFQUFYLEdBQWdCO0FBQ2pCLGdCQUFLLE9BQUssYUFBTCxDQUFtQixJQUFuQixTQUE4QixJQUE5QjtBQURZLFVBRkMsQ0FBcEI7QUFLQSxnQkFBTyxjQUFQLFNBQTRCLElBQTVCLEVBQWtDLFdBQWxDO0FBQ0QsUUFaRDs7QUFjQTtBQUNBLGVBQVEsT0FBUixDQUFnQixnQkFBUTtBQUN0QixnQkFBSyxJQUFMLElBQWEsT0FBSyxhQUFMLENBQW1CLElBQW5CLFNBQThCLElBQTlCLENBQWI7QUFDRCxRQUZEO0FBR0Q7O0FBRUQ7Ozs7Ozs7OzsyQ0FNc0IsUSxFQUFVLFcsRUFBYTtBQUMzQztBQUNBLFdBQU0sT0FBTyxjQUFjLEtBQUssT0FBTCxDQUFhLFdBQWIsQ0FBZCxHQUEwQyxRQUF2RDtBQUNBO0FBQ0EsWUFBSyxJQUFMLGdDQUFhLEtBQUssZ0JBQUwsQ0FBc0IsUUFBdEIsQ0FBYjtBQUNEOztBQUVEOzs7Ozs7OzZDQUl3QixRLEVBQVU7QUFDaEM7QUFDQSxXQUFNLElBQUksU0FBUyxhQUFULENBQXVCLEtBQXZCLENBQVY7QUFDQSxTQUFFLGtCQUFGLENBQXFCLFlBQXJCLEVBQW1DLFFBQW5DO0FBQ0E7QUFDQSxTQUFFLFNBQUY7QUFDQTtBQUNBO0FBQ0EsWUFBSyxJQUFMLGdDQUFhLEtBQUssV0FBTCxDQUFpQixDQUFqQixDQUFiO0FBQ0E7QUFDQSxjQUFPLEVBQUUsVUFBVDtBQUFxQixXQUFFLFdBQUYsQ0FBYyxFQUFFLFVBQWhCO0FBQXJCO0FBQ0Q7O0FBRUQ7Ozs7Ozs7MENBSTRCO0FBQUE7O0FBQUEsMENBQU4sSUFBTTtBQUFOLGFBQU07QUFBQTs7QUFDMUI7QUFDQSxZQUFLLE9BQUwsQ0FBYSxlQUFPO0FBQ2xCLGFBQUksZUFBZSxRQUFuQixFQUE2QjtBQUMzQixrQkFBSyxJQUFMLGtDQUFhLEdBQWI7QUFDRCxVQUZELE1BRU87QUFDTCxrQkFBSyxJQUFMLENBQVUsR0FBVjtBQUNEO0FBQ0YsUUFORDtBQU9EOztBQUVEOzs7Ozs7OzttQ0FLYyxJLEVBQWU7QUFBQSwwQ0FBTixJQUFNO0FBQU4sYUFBTTtBQUFBOztBQUMzQixXQUFJLEtBQUssTUFBTCxLQUFnQixDQUFwQixFQUF1QjtBQUNyQixnQkFBTyxTQUFQO0FBQ0Q7QUFDRCxXQUFJLEtBQUssTUFBTCxLQUFnQixDQUFwQixFQUF1QjtBQUFBOztBQUNyQixnQkFBTyxpQkFBSyxFQUFMLENBQVEsSUFBUixHQUFjLElBQWQsa0JBQW1CLEtBQUssRUFBeEIsU0FBK0IsSUFBL0IsRUFBUDtBQUNEO0FBQ0QsY0FBTyxLQUFLLEdBQUwsQ0FBUztBQUFBOztBQUFBLGdCQUFRLG1CQUFLLElBQUwsR0FBVyxJQUFYLG9CQUFnQixJQUFoQixTQUF5QixJQUF6QixFQUFSO0FBQUEsUUFBVCxDQUFQO0FBQ0Q7O0FBRUQ7Ozs7Ozs7bUNBSWMsSSxFQUFNO0FBQ2xCLFdBQUksS0FBSyxNQUFMLEtBQWdCLENBQXBCLEVBQXVCO0FBQ3JCLGdCQUFPLFNBQVA7QUFDRDtBQUNELFdBQUksS0FBSyxNQUFMLEtBQWdCLENBQXBCLEVBQXVCO0FBQ3JCLGdCQUFPLEtBQUssRUFBTCxDQUFRLElBQVIsQ0FBUDtBQUNEO0FBQ0QsY0FBTyxLQUFLLEdBQUwsQ0FBUztBQUFBLGdCQUFRLEtBQUssSUFBTCxDQUFSO0FBQUEsUUFBVCxDQUFQO0FBQ0Q7O0FBRUQ7Ozs7Ozs7O21DQUtjLEksRUFBTSxLLEVBQU87QUFDekIsWUFBSyxPQUFMLENBQWE7QUFBQSxnQkFBSyxFQUFFLElBQUYsSUFBVSxLQUFmO0FBQUEsUUFBYjtBQUNEOztBQUVEOzs7Ozs7K0JBR1UsSSxFQUFNO0FBQ2QsWUFBSyxPQUFMLENBQWEsbUJBQVc7QUFDdEIsYUFBSSxRQUFRLFFBQVIsS0FBcUIsS0FBSyxZQUE5QixFQUE0QztBQUMxQyxrQkFBTyxJQUFQLENBQVksSUFBWixFQUFrQixPQUFsQixDQUEwQixlQUFPO0FBQy9CLHFCQUFRLEtBQVIsQ0FBYyxHQUFkLElBQXFCLEtBQUssR0FBTCxDQUFyQjtBQUNELFlBRkQ7QUFHRDtBQUNGLFFBTkQ7QUFPQSxjQUFPLElBQVA7QUFDRDs7QUFFRDs7Ozs7Ozs2QkFJUSxHLEVBQUs7QUFDWCxXQUFJLGVBQWUsUUFBbkIsRUFBNkIsT0FBTyxJQUFJLENBQUosQ0FBUDtBQUM3QixjQUFPLEdBQVA7QUFDRDs7QUFHRDs7Ozs7Ozs7QUFPQTs7OzZCQUdRO0FBQ04sWUFBSyxPQUFMLENBQWEsbUJBQVc7QUFDdEIsZ0JBQU8sUUFBUSxVQUFmLEVBQTJCO0FBQ3pCLG1CQUFRLFdBQVIsQ0FBb0IsUUFBUSxVQUE1QjtBQUNEO0FBQ0YsUUFKRDtBQUtBLGNBQU8sSUFBUDtBQUNEOztBQUVEOzs7Ozs7Ozs4QkFLUyxNLEVBQVE7QUFBQTs7QUFDZixZQUFLLE9BQUwsQ0FBYSxnQkFBUTtBQUNuQixnQkFBSyxPQUFMLENBQWEsTUFBYixFQUFxQixXQUFyQixDQUFpQyxJQUFqQztBQUNELFFBRkQ7QUFHQSxjQUFPLElBQVA7QUFDRDs7QUFFRDs7Ozs7OzhCQUdTO0FBQ1AsWUFBSyxPQUFMLENBQWEsZ0JBQVE7QUFDbkIsYUFBSSxLQUFLLFVBQVQsRUFBcUI7QUFDbkIsZ0JBQUssVUFBTCxDQUFnQixXQUFoQixDQUE0QixJQUE1QjtBQUNEO0FBQ0YsUUFKRDtBQUtBLGNBQU8sSUFBUDtBQUNEOztBQUVEOzs7Ozs7Ozs7Ozs7eUJBU0ksWSxFQUFjO0FBQUE7O0FBQ2hCO0FBQ0EsV0FBSSxLQUFLLE1BQVQsRUFBaUI7QUFDZixlQUFNLElBQUksS0FBSixDQUFVLGtDQUFWLENBQU47QUFDRDtBQUNELFlBQUssTUFBTCxHQUFjLElBQWQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBSyxRQUFMLENBQWMsbUJBQVc7QUFDdkI7QUFDQSxhQUFNLE9BQU8sUUFBUSxZQUFSLENBQXFCLEdBQXJCLENBQWI7QUFDQSxhQUFJLElBQUosRUFBVTtBQUNSLGVBQUksYUFBYSxJQUFiLENBQUosRUFBd0I7QUFDdEIsbUJBQU0sSUFBSSxLQUFKLENBQVUsdURBQVYsQ0FBTjtBQUNEO0FBQ0Qsd0JBQWEsSUFBYixJQUFxQixJQUFJLFFBQUosQ0FBYSxPQUFiLENBQXJCO0FBQ0Q7QUFDRDtBQUNBLHNDQUFJLFFBQVEsVUFBWixHQUF5QixPQUF6QixDQUFpQyxnQkFBUTtBQUN2QyxlQUFNLFNBQVMsS0FBSyxTQUFMLENBQWUsS0FBZixDQUFxQixHQUFyQixDQUFmO0FBQ0EsZUFBSSxPQUFPLE1BQVAsS0FBa0IsQ0FBbEIsSUFBdUIsT0FBTyxDQUFQLE1BQWMsR0FBckMsSUFBNEMsT0FBTyxDQUFQLENBQWhELEVBQTJEO0FBQ3pEO0FBQ0EsaUJBQU0sU0FBUztBQUNiLHdCQUFTLGFBQWEsS0FBSyxLQUFsQixFQUF5QixJQUF6QixDQUE4QixZQUE5QixDQURJO0FBRWIsc0JBQVMsT0FBTyxDQUFQLENBRkk7QUFHYix3QkFBUyxLQUhJO0FBSWI7QUFKYSxjQUFmO0FBTUEsb0JBQUssV0FBTCxHQUFtQixPQUFLLFdBQUwsSUFBb0IsRUFBdkM7QUFDQSxvQkFBSyxXQUFMLENBQWlCLElBQWpCLENBQXNCLE1BQXRCOztBQUVBLHFCQUFRLGdCQUFSLENBQXlCLE9BQU8sS0FBaEMsRUFBdUMsT0FBTyxPQUE5QyxFQUF1RCxPQUFPLE9BQTlEO0FBQ0Q7QUFDRixVQWZEO0FBZ0JELFFBMUJEO0FBMkJBLGNBQU8sSUFBUDtBQUNEOztBQUVEOzs7Ozs7MkJBR00sWSxFQUFjO0FBQUE7O0FBQ2xCLFdBQUksQ0FBQyxLQUFLLE1BQVYsRUFBa0I7QUFDaEIsZUFBTSxJQUFJLEtBQUosQ0FBVSxpQ0FBVixDQUFOO0FBQ0Q7QUFDRCxZQUFLLFFBQUwsQ0FBYyxtQkFBVztBQUN2QjtBQUNBLGFBQU0sT0FBTyxRQUFRLFlBQVIsQ0FBcUIsR0FBckIsQ0FBYjtBQUNBLGFBQUksSUFBSixFQUFVO0FBQ1Isa0JBQU8sYUFBYSxJQUFiLENBQVA7QUFDRDtBQUNEO0FBQ0EsYUFBSSxPQUFLLFdBQVQsRUFBc0I7QUFDcEIsa0JBQUssV0FBTCxDQUFpQixPQUFqQixDQUF5QixrQkFBVTtBQUNqQyxvQkFBTyxPQUFQLENBQWUsbUJBQWYsQ0FBbUMsT0FBTyxLQUExQyxFQUFpRCxPQUFPLE9BQXhELEVBQWlFLE9BQU8sT0FBeEU7QUFDRCxZQUZEO0FBR0Esa0JBQUssV0FBTCxHQUFtQixJQUFuQjtBQUNEO0FBRUYsUUFkRDtBQWVBLFlBQUssTUFBTCxHQUFjLEtBQWQ7QUFDQSxjQUFPLElBQVA7QUFDRDs7QUFFRDs7Ozs7Ozs4QkFJUyxRLEVBQVU7QUFBQTs7QUFDakIsWUFBSyxPQUFMLENBQWEsZ0JBQVE7QUFDbkIsYUFBSSxRQUFRLENBQUMsSUFBRCxDQUFaO0FBQ0EsZ0JBQU8sTUFBTSxNQUFiLEVBQXFCO0FBQUE7O0FBQ25CLGVBQU0sVUFBVSxNQUFNLEdBQU4sRUFBaEI7QUFDQSxvQkFBUyxJQUFULFNBQW9CLE9BQXBCO0FBQ0EsbUJBQVEsaUJBQU0sTUFBTixrQ0FBZ0IsT0FBSyxXQUFMLENBQWlCLE9BQWpCLENBQWhCLEVBQVI7QUFDRDtBQUNGLFFBUEQ7QUFRQSxjQUFPLElBQVA7QUFDRDs7QUFFRDs7Ozs7Ozs7O2lDQU1ZLE8sRUFBUztBQUNuQixXQUFJLFFBQVEsUUFBWixFQUFzQjtBQUNwQixnQkFBTyxNQUFNLElBQU4sQ0FBVyxRQUFRLFFBQW5CLENBQVA7QUFDRCxRQUZELE1BRU87QUFDTDtBQUNBLGFBQUksUUFBUSxVQUFaLEVBQXdCO0FBQ3RCLGtCQUFPLE1BQU0sSUFBTixDQUFXLFFBQVEsVUFBbkIsRUFBK0IsTUFBL0IsQ0FBc0M7QUFBQSxvQkFBSyxFQUFFLFFBQUYsS0FBZSxTQUFTLFlBQTdCO0FBQUEsWUFBdEMsQ0FBUDtBQUNEO0FBQ0Y7QUFDRCxjQUFPLEVBQVA7QUFDRDs7QUFFRDs7Ozs7O2dDQUdXLE8sRUFBUztBQUFBOztBQUNsQixlQUFRLEtBQVIsQ0FBYyxHQUFkLEVBQ0MsTUFERCxDQUNRO0FBQUEsZ0JBQWEsVUFBVSxJQUFWLEdBQWlCLE1BQTlCO0FBQUEsUUFEUixFQUVDLE9BRkQsQ0FFUyxxQkFBYTtBQUNwQixnQkFBSyxPQUFMLENBQWEsbUJBQVc7QUFDdEIsbUJBQVEsU0FBUixDQUFrQixHQUFsQixDQUFzQixTQUF0QjtBQUNELFVBRkQ7QUFHRCxRQU5EO0FBT0EsY0FBTyxJQUFQO0FBQ0Q7O0FBRUQ7Ozs7Ozs7O21DQUtjLE8sRUFBUztBQUFBOztBQUNyQixlQUFRLEtBQVIsQ0FBYyxHQUFkLEVBQ0MsTUFERCxDQUNRO0FBQUEsZ0JBQWEsVUFBVSxJQUFWLEdBQWlCLE1BQTlCO0FBQUEsUUFEUixFQUVDLE9BRkQsQ0FFUyxxQkFBYTtBQUNwQixnQkFBSyxPQUFMLENBQWEsbUJBQVc7QUFDdEIsbUJBQVEsU0FBUixDQUFrQixNQUFsQixDQUF5QixTQUF6QjtBQUNELFVBRkQ7QUFHRCxRQU5EO0FBT0EsY0FBTyxJQUFQO0FBQ0Q7O0FBRUQ7Ozs7Ozs7Ozt3Q0FNbUIsTyxFQUFTLFMsRUFBVztBQUNyQyxXQUFJLFNBQUosRUFBZTtBQUNiLGNBQUssVUFBTCxDQUFnQixPQUFoQjtBQUNELFFBRkQsTUFFTztBQUNMLGNBQUssYUFBTCxDQUFtQixPQUFuQjtBQUNEO0FBQ0QsY0FBTyxJQUFQO0FBQ0Q7O0FBRUQ7Ozs7Ozs7NkJBSVE7QUFDTixXQUFNLFNBQVMsS0FBSyxHQUFMLENBQVM7QUFBQSxnQkFBSyxFQUFFLFNBQUYsQ0FBWSxJQUFaLENBQUw7QUFBQSxRQUFULENBQWY7QUFDQSxpREFBVyxRQUFYLG1DQUF1QixNQUF2QjtBQUNEOztBQUVEOzs7Ozs7Ozt3QkFLRyxLLEVBQU8sTyxFQUEwQjtBQUFBLFdBQWpCLE9BQWlCLHlEQUFQLEtBQU87O0FBQ2xDO0FBQ0E7QUFDQSxZQUFLLFNBQUwsR0FBaUIsS0FBSyxTQUFMLElBQWtCLEVBQW5DO0FBQ0EsWUFBSyxTQUFMLENBQWUsS0FBZixJQUF3QixLQUFLLFNBQUwsQ0FBZSxLQUFmLEtBQXlCLEVBQWpEO0FBQ0EsWUFBSyxTQUFMLENBQWUsS0FBZixFQUFzQixJQUF0QixDQUEyQixFQUFDLGdCQUFELEVBQVUsZ0JBQVYsRUFBM0I7QUFDQSxZQUFLLE9BQUwsQ0FBYTtBQUFBLGdCQUFLLEVBQUUsZ0JBQUYsQ0FBbUIsS0FBbkIsRUFBMEIsT0FBMUIsRUFBbUMsT0FBbkMsQ0FBTDtBQUFBLFFBQWI7QUFDQSxjQUFPLElBQVA7QUFDRDs7QUFFRDs7Ozs7Ozs7O3lCQU1JLEssRUFBTyxPLEVBQTBCO0FBQUE7O0FBQUEsV0FBakIsT0FBaUIseURBQVAsS0FBTzs7QUFDbkM7QUFDQSxXQUFJLENBQUMsS0FBSyxTQUFWLEVBQXFCO0FBQ25CLGdCQUFPLElBQVA7QUFDRDtBQUNEO0FBQ0EsV0FBSSxDQUFDLEtBQUQsSUFBVSxDQUFDLE9BQWYsRUFBd0I7QUFDdEI7QUFDQSxnQkFBTyxJQUFQLENBQVksS0FBSyxTQUFqQixFQUE0QixPQUE1QixDQUFvQyxxQkFBYTtBQUMvQyxtQkFBSyxTQUFMLENBQWUsU0FBZixFQUEwQixPQUExQixDQUFrQyxrQkFBVTtBQUMxQyxxQkFBSyxPQUFMLENBQWE7QUFBQSxzQkFBSyxFQUFFLG1CQUFGLENBQXNCLFNBQXRCLEVBQWlDLE9BQU8sT0FBeEMsRUFBaUQsT0FBTyxPQUF4RCxDQUFMO0FBQUEsY0FBYjtBQUNELFlBRkQ7QUFHRCxVQUpEO0FBS0E7QUFDQSxnQkFBTyxLQUFLLFNBQVo7QUFDRCxRQVRELE1BU087QUFDTDtBQUNBLGFBQUksU0FBUyxDQUFDLE9BQWQsRUFBdUI7QUFDckIsZUFBSSxLQUFLLFNBQUwsQ0FBZSxLQUFmLENBQUosRUFBMkI7QUFDekIsa0JBQUssU0FBTCxDQUFlLEtBQWYsRUFBc0IsT0FBdEIsQ0FBOEIsa0JBQVU7QUFDdEMsdUJBQUssT0FBTCxDQUFhO0FBQUEsd0JBQUssRUFBRSxtQkFBRixDQUFzQixLQUF0QixFQUE2QixPQUFPLE9BQXBDLEVBQTZDLE9BQU8sT0FBcEQsQ0FBTDtBQUFBLGdCQUFiO0FBQ0QsY0FGRDtBQUdEO0FBQ0Q7QUFDQSxrQkFBTyxLQUFLLFNBQUwsQ0FBZSxLQUFmLENBQVA7QUFDRCxVQVJELE1BUU87QUFDTDtBQUNBO0FBQ0EsZUFBSSxLQUFLLFNBQUwsQ0FBZSxLQUFmLENBQUosRUFBMkI7QUFDekIsaUJBQU0sUUFBUSxLQUFLLFNBQUwsQ0FBZSxLQUFmLEVBQXNCLFNBQXRCLENBQWdDLGtCQUFVO0FBQ3RELHNCQUFPLE9BQU8sT0FBUCxLQUFtQixPQUFuQixJQUE4QixPQUFPLE9BQVAsS0FBbUIsT0FBeEQ7QUFDRCxjQUZhLENBQWQ7QUFHQSxpQkFBSSxTQUFTLENBQWIsRUFBZ0I7QUFBQTtBQUNkLHFCQUFNLFNBQVMsUUFBSyxTQUFMLENBQWUsS0FBZixFQUFzQixLQUF0QixDQUFmO0FBQ0EseUJBQUssT0FBTCxDQUFhO0FBQUEsMEJBQUssRUFBRSxtQkFBRixDQUFzQixLQUF0QixFQUE2QixPQUFPLE9BQXBDLEVBQTZDLE9BQU8sT0FBcEQsQ0FBTDtBQUFBLGtCQUFiO0FBQ0EseUJBQUssU0FBTCxDQUFlLEtBQWYsRUFBc0IsTUFBdEIsQ0FBNkIsS0FBN0IsRUFBb0MsQ0FBcEM7QUFIYztBQUlmO0FBQ0Y7QUFDRjtBQUNGO0FBQ0QsY0FBTyxJQUFQO0FBQ0Q7Ozt5QkF6UVE7QUFDUCxjQUFPLEtBQUssQ0FBTCxDQUFQO0FBQ0Q7Ozs7c0JBbEtvQixLOztBQTRhdkI7Ozs7O0FBR2UsVUFBUyxDQUFULEdBQWE7QUFDMUIsNkNBQVcsUUFBWCwyQ0FBdUIsU0FBdkI7QUFDRCxHIiwiZmlsZSI6Ii4vZGlzdC9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSB7XG5cdFx0dmFyIGEgPSBmYWN0b3J5KCk7XG5cdFx0Zm9yKHZhciBpIGluIGEpICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgPyBleHBvcnRzIDogcm9vdClbaV0gPSBhW2ldO1xuXHR9XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiBcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb25cbiAqKi8iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIDAwMWFjY2I4MWRmMTdkOGVlMjI5XG4gKiovIiwiLyoqXG4gKiBzaW1wbGVzdCByZWdleCBmb3IgaWRlbnRpZnlpbmcgYSB0YWcgc3RyaW5nIHZlcnN1cyBhIHNlbGVjdG9yIHN0cmluZ1xuICogQHR5cGUge1JlZ0V4cH1cbiAqL1xuY29uc3QgdGFnUmVnZXggPSBuZXcgUmVnRXhwKCdcXHMqPChbXj5dKyk+Jyk7XG5cbi8qKlxuICogZ2V0dGVycyBhbmQgc2V0dGVycyBhcmUgY3JlYXRlZCBmb3IgdGhlc2UgcHJvcGVydGllcy4gVGhlIGNsYXNzIGRvZXMgbm90IGF0dGVtcHQgdG8gZGlzdGluZ3Vpc2ggYmV0d2VlblxuICogTm9kZSwgRWxlbWVudCwgSFRNTEVsZW1lbnQgZXRjIHNvIHRoZXNlIHByb3BlcnRpZXMgbWF5IG9yIG1heSBub3QgZXhpc3Qgb24gYW55IHBhcnRpY3VsYXIgbWVtYmVyIG9mIG91ciBsaXN0LlxuICogUmVhZCBvbmx5IHByb3BlcnRpZXMgYXJlIHByZWZpeGVkIHdpdGggJ3IrJy5cbiAqIEZvciBET01BcnJheSdzIHdpdGggZXhhY3RseSBvbmUgaXRlbSwgdGhlIGdldHRlciByZXR1cm5zIHRoZSB2YWx1ZSByZXR1cm5lZCBieSB0aGUgbmF0aXZlIHByb3BlcnR5LlxuICogRm9yIERPTUFycmF5J3MgY29udGFpbmluZyBtb3JlIHRoYW4gb25lIGl0ZW0gYW4gYXJyYXkgb2YgcmVzdWx0cyBpcyByZXR1cm5lZC5cbiAqIEVtcHR5IERPTUFycmF5J3MgcmV0dXJuIG51bGxcbiAqIEB0eXBlIHtzdHJpbmdbXX1cbiAqL1xuY29uc3QgcHJvcGVydGllcyA9IFtcbiAgLy8gTm9kZSwgcHJvcGVydGllc1xuICAncitjaGlsZE5vZGVzJyxcbiAgJ3IrZmlyc3RDaGlsZCcsXG4gICdyK2xhc3RDaGlsZCcsXG4gICdyK25leHRTaWJsaW5nJyxcbiAgJ3IrcHJldmlvdXNTaWJsaW5nJyxcbiAgJ3Irbm9kZU5hbWUnLFxuICAncitub2RlVHlwZScsXG4gICdub2RlVmFsdWUnLFxuICAncitvd25lckRvY3VtZW50JyxcbiAgJ3IrcGFyZW50RWxlbWVudCcsXG4gICdyK3BhcmVudE5vZGUnLFxuICAndGV4dENvbnRlbnQnLFxuICAncit0YWdOYW1lJyxcbiAgLy8gRWxlbWVudCBwcm9wZXJ0aWVzXG4gICdyK2F0dHJpYnV0ZXMnLFxuICAncitjaGlsZEVsZW1lbnRDb3VudCcsXG4gICdyK2NoaWxkcmVuJyxcbiAgJ3IrZmlyc3RFbGVtZW50Q2hpbGQnLFxuICAncitsYXN0RWxlbWVudENoaWxkJyxcbiAgJ3IrY2xhc3NMaXN0JyxcbiAgJ2NsYXNzTmFtZScsXG4gICdyK2NsaWVudFRvcCcsXG4gICdyK2NsaWVudExlZnQnLFxuICAncitjbGllbnRXaWR0aCcsXG4gICdyK2NsaWVudEhlaWdodCcsXG4gICdpZCcsXG4gICdpbm5lckhUTUwnLFxuICAnb3V0ZXJIVE1MJyxcbiAgJ2lubmVyVGV4dCcsXG4gICdvdXRlclRleHQnLFxuICAncitsb2NhbE5hbWUnLFxuICAncitzY3JvbGxXaWR0aCcsXG4gICdyK3Njcm9sbEhlaWdodCcsXG4gICdzY3JvbGxUb3AnLFxuICAnc2Nyb2xsTGVmdCcsXG4gICduYW1lJyxcbiAgJ3RpdGxlJyxcbiAgJ3ZhbHVlJyxcbiAgJ2NoZWNrZWQnLFxuICAnc3R5bGUnLFxuICAnZGlzYWJsZWQnLFxuXTtcblxuLyoqXG4gKiBtZXRob2RzIGZvciBuYXRpdmUgTm9kZS9FbGVtZW50L0hUTUxFbGVtZW50IG9iamVjdHMgdGhhdCB3ZSBjcmVhdGUgcGFzcyB0aHJvdWdoIGZ1bmN0aW9ucyBmb3IuXG4gKiBSdWxlcyBhcmUgdGhlIHNhbWUgYXMgZm9yIGdldHRlciBwcm9wZXJ0aWVzIGkuZS4gYW4gYXJyYXkgaXMgcmV0dXJuZWQgZm9yIGxpc3RzIHdpdGggaXRlbXMgPiAxXG4gKiBAdHlwZSB7QXJyYXl9XG4gKi9cbmNvbnN0IG1ldGhvZHMgPSBbXG4gICdhcHBlbmRDaGlsZCcsXG4gICdyZW1vdmVDaGlsZCcsXG4gICdyZXBsYWNlQ2hpbGQnLFxuICAnY2xpY2snLFxuICAnY2xvbmVOb2RlJyxcbiAgJ2NvbXBhcmVEb2N1bWVudFBvc2l0aW9uJyxcbiAgJ2NvbnRhaW5zJyxcbiAgJ2hhc0NoaWxkTm9kZXMnLFxuICAnaW5zZXJ0QmVmb3JlJyxcbiAgJ2dldEJvdW5kaW5nQ2xpZW50UmVjdCcsXG4gICdnZXRBdHRyaWJ1dGUnLFxuICAnZ2V0QXR0cmlidXRlTlMnLFxuICAnc2V0QXR0cmlidXRlJyxcbiAgJ3NldEF0dHJpYnV0ZU5TJyxcbiAgJ3JlbW92ZUF0dHJpYnV0ZScsXG4gICdyZW1vdmVBdHRyaWJ1dGVOUycsXG4gICdhZGRFdmVudExpc3RlbmVyJyxcbiAgJ3JlbW92ZUV2ZW50TGlzdGVuZXInLFxuICAnbm9ybWFsaXplJyxcbiAgJ2ZvY3VzJyxcbiAgJ2JsdXInLFxuICAncXVlcnlTZWxlY3RvcicsXG4gICdxdWVyeVNlbGVjdG9yQWxsJyxcbl07XG5cbi8qKlxuICogdGhlIGFjdHVhbCBlbGVtZW50cyBjbGFzcyB3aGljaCBpbmhlcml0cyBmcm9tIG5hdGl2ZSBBcnJheVxuICovXG5cbmNsYXNzIERPTUFycmF5IGV4dGVuZHMgQXJyYXkge1xuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoKTtcbiAgICAvLyB0ZXN0IGZpcnN0IGFyZ3VtZW50IHRvIHNlZSBpZiBpdHMgYSBzdHJpbmdcbiAgICBjb25zdCBpc1N0cmluZyA9IHR5cGVvZihhcmdzWzBdKSA9PT0gJ3N0cmluZyc7XG4gICAgLy8gaWYgaXRzIGEgc3RyaW5nIHNlZSBpZiBpdCBhIHRhZyBkZWZpbml0aW9uXG4gICAgY29uc3QgaXNUYWcgPSBpc1N0cmluZyAmJiB0YWdSZWdleC5leGVjKGFyZ3NbMF0udHJpbSgpKTtcblxuICAgIC8vIGZpcnN0IGFyZ3VtZW50IGlzIGEgc3RyaW5nIGJ1dCBub3QgYSB0YWcgZGVmaW5pdGlvbiBzbyB3ZSBhc3N1bWUgQ1NTIHNlbGVjdG9yXG4gICAgaWYgKChhcmdzLmxlbmd0aCA9PT0gMSB8fCBhcmdzLmxlbmd0aCA9PSAyKSAmJiBpc1N0cmluZyAmJiAhaXNUYWcpIHtcbiAgICAgIHRoaXMuY3JlYXRlRnJvbUNTU1NlbGVjdG9yKGFyZ3NbMF0sIGFyZ3NbMV0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBzZWNvbmQgb3B0aW9uIGlzIHRoYXQgYXJncyBpZiBqdXN0IGEgc3RyaW5nIGUuZy4gJzxkaXYgY2xhc3M9XCJ4eXpcIj48cD5UaXRsZTwvcD48L2Rpdj4nXG4gICAgICAvLyAod2hpdGUgc3BhY2UgaXMgdHJpbW1lZCB0byBkZXRlcm1pbmUgaWYgdGhpcyBtaWdodCBiZSBhIHRhZylcbiAgICAgIGlmIChhcmdzLmxlbmd0aCA9PT0gMSAmJiBpc1RhZykge1xuICAgICAgICB0aGlzLmNyZWF0ZUZyb21UQUdEZWZpbml0aW9uKGFyZ3NbMF0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gbXVzdCBiZSByYXcgZWxlbWVudHMgb3Igb3RoZXIgRE9NQXJyYXkgaW5zdGFuY2VzXG4gICAgICAgIHRoaXMuY3JlYXRlRnJvbUVsZW1lbnRzKC4uLmFyZ3MpO1xuICAgICAgfVxuICAgIH1cbiAgICAvLyBpbmplY3QgbmF0aXZlIHByb3BlcnR5IG5hbWVzIGFuZCBmdW5jdGlvbiBuYW1lcyB0byB0aGUgbGlzdFxuICAgIHRoaXMuaW5qZWN0TWV0aG9kc0FuZFByb3BlcnRpZXMoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBiaW5kIHRoZSByZWFkL3dyaXRlIHByb3BlcnRpZXMgY29tbW9uIHRvIG1vc3QgSFRNTEVsZW1lbnRzIGFuZCBOb2RlIGluc3RhbmNlcyB0byB0aGlzIG9iamVjdFxuICAgKi9cbiAgaW5qZWN0TWV0aG9kc0FuZFByb3BlcnRpZXMoKSB7XG4gICAgLy8gc2V0dXAgcmVhZC93cml0ZSBwcm9wZXJ0aWVzXG4gICAgcHJvcGVydGllcy5mb3JFYWNoKHAgPT4ge1xuICAgICAgLy8gcHJvcGVydHkgY2FuIGJlIGEgbmFtZSBvciAncisnIG5hbWUgZm9yIHJlYWQgb25seSBwcm9wZXJ0aWVzXG4gICAgICBjb25zdCB0b2tlbnMgPSBwLnNwbGl0KCcrJyk7XG4gICAgICBjb25zdCByZWFkT25seSA9IHRva2Vucy5sZW5ndGggPT09IDIgJiYgdG9rZW5zWzBdID09PSAncic7XG4gICAgICBjb25zdCBuYW1lID0gcmVhZE9ubHkgPyB0b2tlbnNbMV0gOiB0b2tlbnNbMF07XG4gICAgICAvLyBjcmVhdGUgZ2V0dGVyIGFuZCBvcHRpb25hbCBzZXR0ZXJcbiAgICAgIGNvbnN0IG5ld1Byb3BlcnR5ID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICAgIGdldDogdGhpcy5nZW5lcmljR2V0dGVyLmJpbmQodGhpcywgbmFtZSksXG4gICAgICB9LCByZWFkT25seSA/IHt9IDoge1xuICAgICAgICBzZXQ6IHRoaXMuZ2VuZXJpY1NldHRlci5iaW5kKHRoaXMsIG5hbWUpLFxuICAgICAgfSk7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgbmFtZSwgbmV3UHJvcGVydHkpO1xuICAgIH0pO1xuXG4gICAgLy8gc2V0dXAgbWV0aG9kc1xuICAgIG1ldGhvZHMuZm9yRWFjaChuYW1lID0+IHtcbiAgICAgIHRoaXNbbmFtZV0gPSB0aGlzLmdlbmVyaWNNZXRob2QuYmluZCh0aGlzLCBuYW1lKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBjcmVhdGUgb3VyIGVsZW1lbnRzIGxpc3QgZnJvbSBhIENTUyBzZWxlY3RvciBhbmQgb3B0aW9uIHJvb3QgZWxlbWVudCAoIGVpdGhlclxuICAgKiBhIG5hdGl2ZSBIVE1MRWxlbWVudC9Ob2RlIG9yIGFub3RoZXIgRE9NQXJyYXkgKVxuICAgKiBAcGFyYW0gc2VsZWN0b3JcbiAgICogQHBhcmFtIHJvb3RFbGVtZW50XG4gICAqL1xuICBjcmVhdGVGcm9tQ1NTU2VsZWN0b3Ioc2VsZWN0b3IsIHJvb3RFbGVtZW50KSB7XG4gICAgLy8gdXNlIHRoZSBnaXZlbiByb290IGVsZW1lbnQgb3IgdGhlIGRvY3VtZW50XG4gICAgY29uc3Qgcm9vdCA9IHJvb3RFbGVtZW50ID8gdGhpcy5nZXROb2RlKHJvb3RFbGVtZW50KSA6IGRvY3VtZW50O1xuICAgIC8vIHJldHVybiBhIHByb3h5IHVzaW5nIHRoZSByZXN1bHRzIG9mIHRoZSBzZWxlY3RvciBhcyB0aGUgaW5pdGlhbCBhcnJheVxuICAgIHRoaXMucHVzaCguLi5yb290LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBjcmVhdGUgdGhlIGxpc3QgZnJvbSBhIHRlbXBsYXRlIHN0cmluZyBlLmcuICc8ZGl2PkEgRElWPGRpdj48c3Bhbj5BIFNwYW48L3NwYW4+J1xuICAgKiBAcGFyYW0gdGVtcGxhdGVcbiAgICovXG4gIGNyZWF0ZUZyb21UQUdEZWZpbml0aW9uKHRlbXBsYXRlKSB7XG4gICAgLy8gdXNlIGEgdGVtcG9yYXJ5IERJViBhbmQgaW5zZXJ0QWRqYWNlbnRIVE1MIHRvIGNvbnN0cnVjdCB0aGUgRE9NXG4gICAgY29uc3QgZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0RJVicpO1xuICAgIGQuaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmJlZ2luJywgdGVtcGxhdGUpO1xuICAgIC8vIG5vcm1hbGl6ZSB0aGUgY29udGV4dCB0byByZW1vdmUgZXh0cmFuZW91cyB3aGl0ZSBzcGFjZSAvIHRleHQgY29udGVudCBub2Rlc1xuICAgIGQubm9ybWFsaXplKCk7XG4gICAgLy8gYWRkIGNoaWxkcmVuIGRpcmVjdGx5IGludG8gb3VyIGxpc3QgKCB3ZSBhdm9pZCBjaGlsZE5vZGVzIGJlY2F1c2UgdGhhdCB3b3VsZCBwaWNrXG4gICAgLy8gdXAgZW1wdHkgdGV4dCBub2RlcyB3aGljaCBpcyBhIHByb2JsZW0gd2hlbiB1c2luZyBtdWx0aWxpbmUgdGVtcGxhdGUgc3RyaW5nc1xuICAgIHRoaXMucHVzaCguLi50aGlzLmdldENoaWxkcmVuKGQpKTtcbiAgICAvLyByZW1vdmUgYWxsIHRoZSBjaGlsZHJlbiBvZiB0aGUgdGVtcG9yYXJ5IGRpdiwgc28gdGhhdCB0aGUgbmV3bHkgY3JlYXRlZCB0b3AgbGV2ZWwgbm9kZXMgd2lsbCBiZSB1bnBhcmVudGVkXG4gICAgd2hpbGUgKGQuZmlyc3RDaGlsZCkgZC5yZW1vdmVDaGlsZChkLmZpcnN0Q2hpbGQpO1xuICB9XG5cbiAgLyoqXG4gICAqIGNyZWF0ZSBmcm9tIGEgbWl4ZWQgbGlzdCBvZiBlbGVtZW50cyBvciBvdGhlciBET01BcnJheSBpbnN0YW5jZXMuXG4gICAqIEBwYXJhbSBhcmdzXG4gICAqL1xuICBjcmVhdGVGcm9tRWxlbWVudHMoLi4uYXJncykge1xuICAgIC8vIG9ubHkgcmVtYWluaW5nIG9wdGlvbiBpcyB0aGF0IGVhY2ggYXJndW1lbnQgaXMgYSBET00gbm9kZSBvciBwb3NzaWJsZSBhbm90aGVyIGVsZW1lbnRzIGxpc3RcbiAgICBhcmdzLmZvckVhY2goYXJnID0+IHtcbiAgICAgIGlmIChhcmcgaW5zdGFuY2VvZiBET01BcnJheSkge1xuICAgICAgICB0aGlzLnB1c2goLi4uYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucHVzaChhcmcpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIGFsbCBnZW5lcmljIG1ldGhvZHMgcmVkaXJlY3QgaGVyZVxuICAgKiBAcGFyYW0gbmFtZVxuICAgKiBAcGFyYW0gYXJnc1xuICAgKi9cbiAgZ2VuZXJpY01ldGhvZChuYW1lLCAuLi5hcmdzKSB7XG4gICAgaWYgKHRoaXMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBpZiAodGhpcy5sZW5ndGggPT09IDEpIHtcbiAgICAgIHJldHVybiB0aGlzLmVsW25hbWVdLmNhbGwodGhpcy5lbCwgLi4uYXJncyk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLm1hcChub2RlID0+IG5vZGVbbmFtZV0uY2FsbChub2RlLCAuLi5hcmdzKSk7XG4gIH1cblxuICAvKipcbiAgICogZ2VuZXJpYyBnZXR0ZXJcbiAgICogQHBhcmFtIG5hbWUgLSB0aGUgcHJvcGVydHkgdG8gcmV0dXJuLlxuICAgKi9cbiAgZ2VuZXJpY0dldHRlcihuYW1lKSB7XG4gICAgaWYgKHRoaXMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBpZiAodGhpcy5sZW5ndGggPT09IDEpIHtcbiAgICAgIHJldHVybiB0aGlzLmVsW25hbWVdO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5tYXAobm9kZSA9PiBub2RlW25hbWVdKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBnZW5lcmljIHNldHRlclxuICAgKiBAcGFyYW0gbmFtZVxuICAgKiBAcGFyYW0gdmFsdWVcbiAgICovXG4gIGdlbmVyaWNTZXR0ZXIobmFtZSwgdmFsdWUpIHtcbiAgICB0aGlzLmZvckVhY2gobiA9PiBuW25hbWVdID0gdmFsdWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIGFwcGx5IHRoZSBrZXkvdmFsdWUgcGFpcnMgaW4gaGFzaCB0byBhbGwgb3VyIGVsZW1lbnRzXG4gICAqL1xuICBzZXRTdHlsZXMoaGFzaCkge1xuICAgIHRoaXMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgIGlmIChlbGVtZW50Lm5vZGVUeXBlID09PSBOb2RlLkVMRU1FTlRfTk9ERSkge1xuICAgICAgICBPYmplY3Qua2V5cyhoYXNoKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgZWxlbWVudC5zdHlsZVtrZXldID0gaGFzaFtrZXldO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBpZiB0aGUgb2JqIGlzIGEgRE9NQXJyYXkgdGhlbiByZXR1cm4gdGhlIGZpcnN0IG1lbWJlciBvdGhlcndpc2UgYXNzdW1lXG4gICAqIHRoZSBvYmplY3QgaXMgYSBub2RlIGFuZCByZXR1cm4gaXQuXG4gICAqL1xuICBnZXROb2RlKG9iaikge1xuICAgIGlmIChvYmogaW5zdGFuY2VvZiBET01BcnJheSkgcmV0dXJuIG9ialswXTtcbiAgICByZXR1cm4gb2JqO1xuICB9XG5cblxuICAvKipcbiAgICogcmV0dXJuIHRoZSBuYXRpdmUgZWwgb2YgdGhlIGZpcnN0IGVsZW1lbnQgaW4gdGhlIGxpc3RcbiAgICovXG4gIGdldCBlbCgpIHtcbiAgICByZXR1cm4gdGhpc1swXTtcbiAgfVxuXG4gIC8qKlxuICAgKiByZW1vdmUgYWxsIGVsZW1lbnRzIGZyb20gdGhlIGVsZW1lbnRzIGluIG91ciBsaXN0XG4gICAqL1xuICBlbXB0eSgpIHtcbiAgICB0aGlzLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICB3aGlsZSAoZWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICAgIGVsZW1lbnQucmVtb3ZlQ2hpbGQoZWxlbWVudC5maXJzdENoaWxkKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBhcHBlbmRUbyBwYXJlbnRzIGFsbCB0aGUgdG9wIGxldmVsIGVsZW1lbnRzIGluIHRoZSBsaXN0IHRvXG4gICAqIHRoZSBnaXZlbiBlbGVtZW50LiBXaGljaCBjYW4gYmUgYSBuYXRpdmUgZWxlbWVudCBvciBhIERPTUFycmF5ICggaW4gd2hpY2ggY2FzZVxuICAgKiB0aGUgZWxlbWVudHMgYXJlIGFwcGVuZCB0byB0aGUgZmlyc3QgZWxlbWVudCBpbiB0aGUgbGlzdCApXG4gICAqL1xuICBhcHBlbmRUbyhwYXJlbnQpIHtcbiAgICB0aGlzLmZvckVhY2gobm9kZSA9PiB7XG4gICAgICB0aGlzLmdldE5vZGUocGFyZW50KS5hcHBlbmRDaGlsZChub2RlKTtcbiAgICB9KTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiByZW1vdmUgYWxsIG91ciBub2RlcyBmcm9tIHRoZWlyIHBhcmVudHNcbiAgICovXG4gIHJlbW92ZSgpIHtcbiAgICB0aGlzLmZvckVhY2gobm9kZSA9PiB7XG4gICAgICBpZiAobm9kZS5wYXJlbnROb2RlKSB7XG4gICAgICAgIG5vZGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChub2RlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBpdGVyYXRlIGV2ZXJ5IG5vZGUgYW5kIGFsbCB0aGVpciBjaGlsZHJlbiBsb29raW5nIGZvciBkYXRhLXJlZj1cIm5hbWVcIiBhdHRyaWJ1dGVzLlxuICAgKiBBc3NpZ24gdGFyZ2V0T2JqZWN0W25hbWVdIHRvIHRoZSBtYXRjaGluZyBET00gZWxlbWVudC5cbiAgICogQXQgdGhlIHNhbWUgdGltZSBsb29rIGZvciBkYXRhLWV2ZW50LSogYXR0cmlidXRlcyBhbmQgYWRkIGV2ZW50IGxpc3RlbmVycy5cbiAgICogZS5nLiBkYXRhLWV2ZW50LWlucHV0PVwib25JbnB1dFwiIHdpbGwgY2FsbFxuICAgKiBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgdGFyZ2V0T2JqZWN0W1wib25JbnB1dFwiXS5iaW5kKHRhcmdldE9iamVjdCkpXG4gICAqIE5PVEU6IFRoZSBldmVudCBoYW5kbGVycyBhcmUganVzdCBuYW1lZCBtZXRob2RzIHNvIC5iaW5kIGlzIGNhbGxlZCBvbiB0aGUgbWV0aG9kXG4gICAqIHRvIGVuc3VyZSAndGhpcycgaXMgY29ycmVjdC5cbiAgICovXG4gIHppcCh0YXJnZXRPYmplY3QpIHtcbiAgICAvLyB6aXBwaW5nL3VuemlwcGluZyBzaG91bGQgb2NjdXIgc2VyaWFsbHkgYW5kIG9uY2VcbiAgICBpZiAodGhpcy56aXBwZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignRE9NQXJyYXkgaGFzIGFscmVhZHkgYmVlbiB6aXBwZWQnKTtcbiAgICB9XG4gICAgdGhpcy56aXBwZWQgPSB0cnVlO1xuXG4gICAgLy8gd2UgY291bGQgdXNlIGEgQ1NTIHNlbGVjdG9yIHRvIGZpbmQgdGhlICdyJyBhdHRyaWJ1dGVzIGJ1dCBmb3JcbiAgICAvLyBldmVudCBhdHRyaWJ1dGUgKGUtPz8/KSB0aGVyZSBpcyBubyBhdmFpbGFibGUgc2VsZWN0b3Igc29cbiAgICAvLyB3ZSB3YWxrIHRoZSB0cmVlIG9mIGVsZW1lbnRzIHVzaW5nIGEgc3RhY2suXG4gICAgdGhpcy50cmF2ZXJzZShlbGVtZW50ID0+IHtcbiAgICAgIC8vIGFkb3B0IHJlZmVyZW5jZXNcbiAgICAgIGNvbnN0IG5hbWUgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgncicpO1xuICAgICAgaWYgKG5hbWUpIHtcbiAgICAgICAgaWYgKHRhcmdldE9iamVjdFtuYW1lXSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignRWxlbWVudCBiaW5kaW5nIHdvdWxkIG92ZXJ3cml0ZSBhbiBleGlzdGluZyBwcm9wZXJ0eS4nKTtcbiAgICAgICAgfVxuICAgICAgICB0YXJnZXRPYmplY3RbbmFtZV0gPSBuZXcgRE9NQXJyYXkoZWxlbWVudCk7XG4gICAgICB9XG4gICAgICAvLyBhZGQgZXZlbnQgaGFuZGxlcnMuLi53ZSBleHBlY3Qgc29tZXRoaW5nIGxpa2UgZS1jbGljaz1cIm9uQ2xpY2tcIlxuICAgICAgWy4uLmVsZW1lbnQuYXR0cmlidXRlcyxdLmZvckVhY2goYXR0ciA9PiB7XG4gICAgICAgIGNvbnN0IHRva2VucyA9IGF0dHIubG9jYWxOYW1lLnNwbGl0KCctJyk7XG4gICAgICAgIGlmICh0b2tlbnMubGVuZ3RoID09PSAyICYmIHRva2Vuc1swXSA9PT0gJ2UnICYmIHRva2Vuc1sxXSkge1xuICAgICAgICAgIC8vIGNyZWF0ZSBhIHJlY29yZCBvZiBlYWNoIGhhbmRsZXIgYWRkZWQgc28gd2UgY2FuIHJlbW92ZSB3aGVuIHVuemlwIGlzIGNhbGxlZFxuICAgICAgICAgIGNvbnN0IHJlY29yZCA9IHtcbiAgICAgICAgICAgIGhhbmRsZXI6IHRhcmdldE9iamVjdFthdHRyLnZhbHVlXS5iaW5kKHRhcmdldE9iamVjdCksXG4gICAgICAgICAgICBldmVudCAgOiB0b2tlbnNbMV0sXG4gICAgICAgICAgICBjYXB0dXJlOiBmYWxzZSxcbiAgICAgICAgICAgIGVsZW1lbnQsXG4gICAgICAgICAgfTtcbiAgICAgICAgICB0aGlzLnppcEhhbmRsZXJzID0gdGhpcy56aXBIYW5kbGVycyB8fCBbXTtcbiAgICAgICAgICB0aGlzLnppcEhhbmRsZXJzLnB1c2gocmVjb3JkKTtcblxuICAgICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihyZWNvcmQuZXZlbnQsIHJlY29yZC5oYW5kbGVyLCByZWNvcmQuY2FwdHVyZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIHJldmVyc2UgdGhlIGFjdGlvbnMgb2YgemlwLiBSZW1vdmUgcmVmZXJlbmNlcyBhbmQgcmVtb3ZlIGV2ZW50IGxpc3RlbmVyc1xuICAgKi9cbiAgdW56aXAodGFyZ2V0T2JqZWN0KSB7XG4gICAgaWYgKCF0aGlzLnppcHBlZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdET01BcnJheSBpbnN0YW5jZSBpcyBub3QgemlwcGVkJyk7XG4gICAgfVxuICAgIHRoaXMudHJhdmVyc2UoZWxlbWVudCA9PiB7XG4gICAgICAvLyByZW1vdmUgcmVmZXJlbmNlc1xuICAgICAgY29uc3QgbmFtZSA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdyJyk7XG4gICAgICBpZiAobmFtZSkge1xuICAgICAgICBkZWxldGUgdGFyZ2V0T2JqZWN0W25hbWVdO1xuICAgICAgfVxuICAgICAgLy8gcmVtb3ZlIGV2ZW50IGhhbmRsZXJzXG4gICAgICBpZiAodGhpcy56aXBIYW5kbGVycykge1xuICAgICAgICB0aGlzLnppcEhhbmRsZXJzLmZvckVhY2gocmVjb3JkID0+IHtcbiAgICAgICAgICByZWNvcmQuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHJlY29yZC5ldmVudCwgcmVjb3JkLmhhbmRsZXIsIHJlY29yZC5jYXB0dXJlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuemlwSGFuZGxlcnMgPSBudWxsO1xuICAgICAgfVxuXG4gICAgfSk7XG4gICAgdGhpcy56aXBwZWQgPSBmYWxzZTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiB1dGlsaXR5IGZ1bmN0aW9uLiBVc2VkIGluIHppcCwgdW56aXAgZm9yIGV4YW1wbGUuIFRyYXZlcnNlcyBhbGwgbm9kZXMgYW5kIHRoZWlyXG4gICAqIGNoaWxkcmVuIGluIHRoZSBsaXN0IGludm9raW5nIHRoZSBjYWxsYmFjayBmb3IgZWFjaCBvbmVcbiAgICovXG4gIHRyYXZlcnNlKGNhbGxiYWNrKSB7XG4gICAgdGhpcy5mb3JFYWNoKG5vZGUgPT4ge1xuICAgICAgbGV0IHN0YWNrID0gW25vZGUsXTtcbiAgICAgIHdoaWxlIChzdGFjay5sZW5ndGgpIHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IHN0YWNrLnBvcCgpO1xuICAgICAgICBjYWxsYmFjay5jYWxsKHRoaXMsIGVsZW1lbnQpO1xuICAgICAgICBzdGFjayA9IHN0YWNrLmNvbmNhdCguLi50aGlzLmdldENoaWxkcmVuKGVsZW1lbnQpKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBnZXQgb25seSB0aGUgZWxlbWVudCBjaGlsZHJlbiBvZiBhIG5vZGUsIGFsbG93aW5nIGZvciB0aGUgcG9zc2liaWxpdHkgdGhlIC5jaGlsZHJlbiBkb2Vzbid0IGV4aXN0ICggZS5nLiBTVkcgdGFnIClcbiAgICogYW5kIGZpbHRlciB0aGUgY2hpbGQgbm9kZXMuXG4gICAqIEBwYXJhbSBuXG4gICAqIEByZXR1cm5zIEFycmF5XG4gICAqL1xuICBnZXRDaGlsZHJlbihlbGVtZW50KSB7XG4gICAgaWYgKGVsZW1lbnQuY2hpbGRyZW4pIHtcbiAgICAgIHJldHVybiBBcnJheS5mcm9tKGVsZW1lbnQuY2hpbGRyZW4pO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBmaWx0ZXIgY2hpbGROb2RlcyB0byBvbmx5IGVsZW1lbnRzXG4gICAgICBpZiAoZWxlbWVudC5jaGlsZE5vZGVzKSB7XG4gICAgICAgIHJldHVybiBBcnJheS5mcm9tKGVsZW1lbnQuY2hpbGROb2RlcykuZmlsdGVyKG4gPT4gbi5ub2RlVHlwZSA9PT0gZG9jdW1lbnQuRUxFTUVOVF9OT0RFKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIFtdO1xuICB9XG5cbiAgLyoqXG4gICAqIGFkZCB3aGl0ZSBzcGFjZSBzZXBhcmF0ZWQgY2xhc3NlcyB0byBvdXIgZWxlbWVudHMgY2xhc3NMaXN0XG4gICAqL1xuICBhZGRDbGFzc2VzKGNsYXNzZXMpIHtcbiAgICBjbGFzc2VzLnNwbGl0KCcgJylcbiAgICAuZmlsdGVyKGNsYXNzTmFtZSA9PiBjbGFzc05hbWUudHJpbSgpLmxlbmd0aClcbiAgICAuZm9yRWFjaChjbGFzc05hbWUgPT4ge1xuICAgICAgdGhpcy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIHJlbW92ZSB3aGl0ZSBzcGFjZSBzZXBhcmF0ZWQgY2xhc3MgbmFtZXMgZnJvbSB0aGUgY2xhc3NMaXN0IG9mIGVhY2ggbm9kZVxuICAgKiBAcGFyYW0gY2xhc3Nlc1xuICAgKiBAcmV0dXJucyB7RE9NQXJyYXl9XG4gICAqL1xuICByZW1vdmVDbGFzc2VzKGNsYXNzZXMpIHtcbiAgICBjbGFzc2VzLnNwbGl0KCcgJylcbiAgICAuZmlsdGVyKGNsYXNzTmFtZSA9PiBjbGFzc05hbWUudHJpbSgpLmxlbmd0aClcbiAgICAuZm9yRWFjaChjbGFzc05hbWUgPT4ge1xuICAgICAgdGhpcy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIGEgY29tbW9uIHVzYWdlIGFuZCB3b3J0aHkgb2YgYSBtZXRob2QuIEFkZCB0aGUgZ2l2ZW4gY2xhc3Nlc1xuICAgKiB0byBvdXIgaXRlbXMgaWYgdGhlIGNvbmRpdGlvbiBpcyB0cnV0aHksIG90aGVyd2lzZSByZW1vdmUgdGhlbVxuICAgKiBAcGFyYW0gY2xhc3Nlc1xuICAgKiBAcGFyYW0gY29uZGl0aW9uXG4gICAqL1xuICBjbGFzc2VzQ29uZGl0aW9uYWwoY2xhc3NlcywgY29uZGl0aW9uKSB7XG4gICAgaWYgKGNvbmRpdGlvbikge1xuICAgICAgdGhpcy5hZGRDbGFzc2VzKGNsYXNzZXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlbW92ZUNsYXNzZXMoY2xhc3Nlcyk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIHJldHVybiBhIG5ldyBET01BcnJheSBjb250YWluIGEgZGVlcCBjbG9uZWQgY29weVxuICAgKiBlYWNoIG5vZGVcbiAgICovXG4gIGNsb25lKCkge1xuICAgIGNvbnN0IGNsb25lcyA9IHRoaXMubWFwKG4gPT4gbi5jbG9uZU5vZGUodHJ1ZSkpO1xuICAgIHJldHVybiBuZXcgRE9NQXJyYXkoLi4uY2xvbmVzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBjYWxsZWQgYWRkRXZlbnRMaXN0ZW5lciBmb3IgZWFjaCBlbGVtZW50IGluIHRoZSBsaXN0LFxuICAgKiBAcGFyYW0gZXZlbnRcbiAgICogQHBhcmFtIGhhbmRsZXJcbiAgICovXG4gIG9uKGV2ZW50LCBoYW5kbGVyLCBjYXB0dXJlID0gZmFsc2UpIHtcbiAgICAvLyBsaXN0ZW5lcnMgZ3JvdXAgYnkgZXZlbnQgbmFtZSBpcyBhbiBvYmplY3QgKCBzaW5jZSBldmVudCBpcyBhIHN0cmluZyApIGJ1dCB0aGVcbiAgICAvLyBoYW5kbGVycyBmb3IgZWFjaCBldmVudCBhcmUgc3RvcmVkIGluIGEgbWFwIHdoaWNoIGNhbiB0YWtlIGEgZnVuY3Rpb24gYXMgYSBrZXkuXG4gICAgdGhpcy5saXN0ZW5lcnMgPSB0aGlzLmxpc3RlbmVycyB8fCB7fTtcbiAgICB0aGlzLmxpc3RlbmVyc1tldmVudF0gPSB0aGlzLmxpc3RlbmVyc1tldmVudF0gfHwgW107XG4gICAgdGhpcy5saXN0ZW5lcnNbZXZlbnRdLnB1c2goe2hhbmRsZXIsIGNhcHR1cmUsfSk7XG4gICAgdGhpcy5mb3JFYWNoKG4gPT4gbi5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBoYW5kbGVyLCBjYXB0dXJlKSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogcmVtb3ZlIHRoZSBoYW5kbGVycyBmcm9tIHRoZSBsaXN0LiBUaHJlZSB3YXlzIHRvIGNhbGwuXG4gICAqICgpICAgICAgICAgICAgICAgICAgIDogcmVtb3ZlIGFsbCByZWdpc3RlcmVkIGxpc3RlbmVyc1xuICAgKiAoZXZlbnROYW1lKSAgICAgICAgICA6IHJlbW92ZSBhbGwgbGlzdGVuZXJzIGZvciB0aGF0IGV2ZW50LlxuICAgKiAoZXZlbnROYW1lLCBoYW5kbGVyKSA6IHJlbW92ZSB0aGUgc3BlY2lmaWMgaGFuZGxlciBmb3IgYSBzcGVjaWZpYyBldmVudC5cbiAgICovXG4gIG9mZihldmVudCwgaGFuZGxlciwgY2FwdHVyZSA9IGZhbHNlKSB7XG4gICAgLy8gaWdub3JlIGlmIHdlIGRvbid0IGhhdmUgYW55IGxpc3RlbmVyc1xuICAgIGlmICghdGhpcy5saXN0ZW5lcnMpIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICAvLyBpZiBubyBldmVudCBvciBoYW5kbGVyIHRoZW4gcmVtb3ZlIGFsbCByZWdpc3RlcmVkIGV2ZW50c1xuICAgIGlmICghZXZlbnQgJiYgIWhhbmRsZXIpIHtcbiAgICAgIC8vIGl0ZXJhdGUgYWxsIGV2ZW50c1xuICAgICAgT2JqZWN0LmtleXModGhpcy5saXN0ZW5lcnMpLmZvckVhY2goZXZlbnROYW1lID0+IHtcbiAgICAgICAgdGhpcy5saXN0ZW5lcnNbZXZlbnROYW1lXS5mb3JFYWNoKHJlY29yZCA9PiB7XG4gICAgICAgICAgdGhpcy5mb3JFYWNoKG4gPT4gbi5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgcmVjb3JkLmhhbmRsZXIsIHJlY29yZC5jYXB0dXJlKSk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgICAvLyByZXNldCBhbGwgbGlzdGVuZXJzXG4gICAgICBkZWxldGUgdGhpcy5saXN0ZW5lcnM7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGlmIG9ubHkgZXZlbnQgbmFtZSBzcGVjaWZpZWQgcmVtb3ZlIGFsbCBsaXN0ZW5lcnMgZm9yIHRoYXQgZXZlbnRcbiAgICAgIGlmIChldmVudCAmJiAhaGFuZGxlcikge1xuICAgICAgICBpZiAodGhpcy5saXN0ZW5lcnNbZXZlbnRdKSB7XG4gICAgICAgICAgdGhpcy5saXN0ZW5lcnNbZXZlbnRdLmZvckVhY2gocmVjb3JkID0+IHtcbiAgICAgICAgICAgIHRoaXMuZm9yRWFjaChuID0+IG4ucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCwgcmVjb3JkLmhhbmRsZXIsIHJlY29yZC5jYXB0dXJlKSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gZGVsZXRlIGxpc3RlbmVycyBmb3IgdGhpcyBzcGVjaWZpYyBldmVudFxuICAgICAgICBkZWxldGUgdGhpcy5saXN0ZW5lcnNbZXZlbnRdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gcmVtb3ZlIHRoZSBzcGVjaWZpYyBsaXN0ZW5lciBpZiBpdCBpcyBwcmVzZW50LCBieSBmaW5kaW5nIHRoZSByZWNvcmQgd2l0aCB0aGUgaGFuZGxlclxuICAgICAgICAvLyAoIHRoZSBjYXB0dXJlIGZsYWcgbXVzdCBtYXRjaCBhcyB3ZWxsIClcbiAgICAgICAgaWYgKHRoaXMubGlzdGVuZXJzW2V2ZW50XSkge1xuICAgICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5saXN0ZW5lcnNbZXZlbnRdLmZpbmRJbmRleChyZWNvcmQgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHJlY29yZC5oYW5kbGVyID09PSBoYW5kbGVyICYmIHJlY29yZC5jYXB0dXJlID09PSBjYXB0dXJlO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIGlmIChpbmRleCA+PSAwKSB7XG4gICAgICAgICAgICBjb25zdCByZWNvcmQgPSB0aGlzLmxpc3RlbmVyc1tldmVudF1baW5kZXhdO1xuICAgICAgICAgICAgdGhpcy5mb3JFYWNoKG4gPT4gbi5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCByZWNvcmQuaGFuZGxlciwgcmVjb3JkLmNhcHR1cmUpKTtcbiAgICAgICAgICAgIHRoaXMubGlzdGVuZXJzW2V2ZW50XS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxufVxuXG4vKipcbiAqIFdlIGV4cG9ydCBhIGZhY3RvcnkgZnVuY3Rpb24gZm9yIERPTUFycmF5IHNvIHRoZXJlIGlzIG5vIG5lZWQgdG8gdGhlIG5ldyBvcGVyYXRvclxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEKCkge1xuICByZXR1cm4gbmV3IERPTUFycmF5KC4uLmFyZ3VtZW50cyk7XG59O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9qYXZhc2NyaXB0cy9kb20uanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9