/**
 * simplest regex for identifying a tag string versus a selector string
 * @type {RegExp}
 */
const tagRegex = new RegExp('\s*<([^>]+)>');

/**
 * getters and setters are created for these properties. The class does not attempt to distinguish between
 * Node, Element, HTMLElement etc so these properties may or may not exist on any particular member of our list.
 * Read only properties are prefixed with 'r+'.
 * For DOMArray's with exactly one item, the getter returns the value returned by the native property.
 * For DOMArray's containing more than one item an array of results is returned.
 * Empty DOMArray's return null
 * @type {string[]}
 */
const properties = [
  // Node, properties
  'r+childNodes',
  'r+firstChild',
  'r+lastChild',
  'r+nextSibling',
  'r+previousSibling',
  'r+nodeName',
  'r+nodeType',
  'nodeValue',
  'r+ownerDocument',
  'r+parentElement',
  'r+parentNode',
  'textContent',
  'r+tagName',
  // Element properties
  'r+attributes',
  'r+childElementCount',
  'r+children',
  'r+firstElementChild',
  'r+lastElementChild',
  'r+classList',
  'className',
  'r+clientTop',
  'r+clientLeft',
  'r+clientWidth',
  'r+clientHeight',
  'id',
  'innerHTML',
  'outerHTML',
  'innerText',
  'outerText',
  'r+localName',
  'r+scrollWidth',
  'r+scrollHeight',
  'scrollTop',
  'scrollLeft',
  'name',
  'title',
  'value',
  'checked',
  'style',
  'disabled',
];

/**
 * methods for native Node/Element/HTMLElement objects that we create pass through functions for.
 * Rules are the same as for getter properties i.e. an array is returned for lists with items > 1
 * @type {Array}
 */
const methods = [
  'appendChild',
  'removeChild',
  'replaceChild',
  'click',
  'cloneNode',
  'compareDocumentPosition',
  'contains',
  'hasChildNodes',
  'insertBefore',
  'getBoundingClientRect',
  'getAttribute',
  'getAttributeNS',
  'setAttribute',
  'setAttributeNS',
  'removeAttribute',
  'removeAttributeNS',
  'addEventListener',
  'removeEventListener',
  'normalize',
  'focus',
  'blur',
  'querySelector',
  'querySelectorAll',
];

/**
 * the actual elements class which inherits from native Array
 */

class DOMArray extends Array {
  constructor(...args) {
    super();
    // test first argument to see if its a string
    const isString = typeof(args[0]) === 'string';
    // if its a string see if it a tag definition
    const isTag = isString && tagRegex.exec(args[0].trim());

    // first argument is a string but not a tag definition so we assume CSS selector
    if ((args.length === 1 || args.length == 2) && isString && !isTag) {
      this.createFromCSSSelector(args[0], args[1]);
    } else {
      // second option is that args if just a string e.g. '<div class="xyz"><p>Title</p></div>'
      // (white space is trimmed to determine if this might be a tag)
      if (args.length === 1 && isTag) {
        this.createFromTAGDefinition(args[0]);
      } else {
        // must be raw elements or other DOMArray instances
        this.createFromElements(...args);
      }
    }
    // inject native property names and function names to the list
    this.injectMethodsAndProperties();
  }

  /**
   * bind the read/write properties common to most HTMLElements and Node instances to this object
   */
  injectMethodsAndProperties() {
    // setup read/write properties
    properties.forEach(p => {
      // property can be a name or 'r+' name for read only properties
      const tokens = p.split('+');
      const readOnly = tokens.length === 2 && tokens[0] === 'r';
      const name = readOnly ? tokens[1] : tokens[0];
      // create getter and optional setter
      const newProperty = Object.assign({
        get: this.genericGetter.bind(this, name),
      }, readOnly ? {} : {
        set: this.genericSetter.bind(this, name),
      });
      Object.defineProperty(this, name, newProperty);
    });

    // setup methods
    methods.forEach(name => {
      this[name] = this.genericMethod.bind(this, name);
    });
  }

  /**
   * create our elements list from a CSS selector and option root element ( either
   * a native HTMLElement/Node or another DOMArray )
   * @param selector
   * @param rootElement
   */
  createFromCSSSelector(selector, rootElement) {
    // use the given root element or the document
    const root = rootElement ? this.getNode(rootElement) : document;
    // return a proxy using the results of the selector as the initial array
    this.push(...root.querySelectorAll(selector));
  }

  /**
   * create the list from a template string e.g. '<div>A DIV<div><span>A Span</span>'
   * @param template
   */
  createFromTAGDefinition(template) {
    // use a temporary DIV and insertAdjacentHTML to construct the DOM
    const d = document.createElement('DIV');
    d.insertAdjacentHTML('afterbegin', template);
    // normalize the context to remove extraneous white space / text content nodes
    d.normalize();
    // add children directly into our list ( we avoid childNodes because that would pick
    // up empty text nodes which is a problem when using multiline template strings
    this.push(...this.getChildren(d));
    // remove all the children of the temporary div, so that the newly created top level nodes will be unparented
    while (d.firstChild) d.removeChild(d.firstChild);
  }

  /**
   * create from a mixed list of elements or other DOMArray instances.
   * @param args
   */
  createFromElements(...args) {
    // only remaining option is that each argument is a DOM node or possible another elements list
    args.forEach(arg => {
      if (arg instanceof DOMArray) {
        this.push(...arg);
      } else {
        this.push(arg);
      }
    });
  }

  /**
   * all generic methods redirect here
   * @param name
   * @param args
   */
  genericMethod(name, ...args) {
    if (this.length === 0) {
      return undefined;
    }
    if (this.length === 1) {
      return this.el[name].call(this.el, ...args);
    }
    return this.map(node => node[name].call(node, ...args));
  }

  /**
   * generic getter
   * @param name - the property to return.
   */
  genericGetter(name) {
    if (this.length === 0) {
      return undefined;
    }
    if (this.length === 1) {
      return this.el[name];
    }
    return this.map(node => node[name]);
  }

  /**
   * generic setter
   * @param name
   * @param value
   */
  genericSetter(name, value) {
    this.forEach(n => n[name] = value);
  }

  /**
   * apply the key/value pairs in hash to all our elements
   */
  setStyles(hash) {
    this.forEach(element => {
      if (element.nodeType === Node.ELEMENT_NODE) {
        Object.keys(hash).forEach(key => {
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
  getNode(obj) {
    if (obj instanceof DOMArray) return obj[0];
    return obj;
  }


  /**
   * return the native el of the first element in the list
   */
  get el() {
    return this[0];
  }

  /**
   * remove all elements from the elements in our list
   */
  empty() {
    this.forEach(element => {
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
  appendTo(parent) {
    this.forEach(node => {
      this.getNode(parent).appendChild(node);
    });
    return this;
  }

  /**
   * remove all our nodes from their parents
   */
  remove() {
    this.forEach(node => {
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
  zip(targetObject) {
    // zipping/unzipping should occur serially and once
    if (this.zipped) {
      throw new Error('DOMArray has already been zipped');
    }
    this.zipped = true;

    // we could use a CSS selector to find the 'r' attributes but for
    // event attribute (e-???) there is no available selector so
    // we walk the tree of elements using a stack.
    this.traverse(element => {
      // adopt references
      const name = element.getAttribute('r');
      if (name) {
        if (targetObject[name]) {
          throw new Error('Element binding would overwrite an existing property.');
        }
        targetObject[name] = new DOMArray(element);
      }
      // add event handlers...we expect something like e-click="onClick"
      [...element.attributes,].forEach(attr => {
        const tokens = attr.localName.split('-');
        if (tokens.length === 2 && tokens[0] === 'e' && tokens[1]) {
          // create a record of each handler added so we can remove when unzip is called
          const record = {
            handler: targetObject[attr.value].bind(targetObject),
            event  : tokens[1],
            capture: false,
            element,
          };
          this.zipHandlers = this.zipHandlers || [];
          this.zipHandlers.push(record);

          element.addEventListener(record.event, record.handler, record.capture);
        }
      });
    });
    return this;
  }

  /**
   * reverse the actions of zip. Remove references and remove event listeners
   */
  unzip(targetObject) {
    if (!this.zipped) {
      throw new Error('DOMArray instance is not zipped');
    }
    this.traverse(element => {
      // remove references
      const name = element.getAttribute('r');
      if (name) {
        delete targetObject[name];
      }
      // remove event handlers
      if (this.zipHandlers) {
        this.zipHandlers.forEach(record => {
          record.element.removeEventListener(record.event, record.handler, record.capture);
        });
        this.zipHandlers = null;
      }

    });
    this.zipped = false;
    return this;
  }

  /**
   * utility function. Used in zip, unzip for example. Traverses all nodes and their
   * children in the list invoking the callback for each one
   */
  traverse(callback) {
    this.forEach(node => {
      let stack = [node,];
      while (stack.length) {
        const element = stack.pop();
        callback.call(this, element);
        stack = stack.concat(...this.getChildren(element));
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
  getChildren(element) {
    if (element.children) {
      return Array.from(element.children);
    } else {
      // filter childNodes to only elements
      if (element.childNodes) {
        return Array.from(element.childNodes).filter(n => n.nodeType === document.ELEMENT_NODE);
      }
    }
    return [];
  }

  /**
   * add white space separated classes to our elements classList
   */
  addClasses(classes) {
    classes.split(' ')
    .filter(className => className.trim().length)
    .forEach(className => {
      this.forEach(element => {
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
  removeClasses(classes) {
    classes.split(' ')
    .filter(className => className.trim().length)
    .forEach(className => {
      this.forEach(element => {
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
  classesConditional(classes, condition) {
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
  clone() {
    const clones = this.map(n => n.cloneNode(true));
    return new DOMArray(...clones);
  }

  /**
   * called addEventListener for each element in the list,
   * @param event
   * @param handler
   */
  on(event, handler, capture = false) {
    // listeners group by event name is an object ( since event is a string ) but the
    // handlers for each event are stored in a map which can take a function as a key.
    this.listeners = this.listeners || {};
    this.listeners[event] = this.listeners[event] || [];
    this.listeners[event].push({handler, capture,});
    this.forEach(n => n.addEventListener(event, handler, capture));
    return this;
  }

  /**
   * remove the handlers from the list. Three ways to call.
   * ()                   : remove all registered listeners
   * (eventName)          : remove all listeners for that event.
   * (eventName, handler) : remove the specific handler for a specific event.
   */
  off(event, handler, capture = false) {
    // ignore if we don't have any listeners
    if (!this.listeners) {
      return this;
    }
    // if no event or handler then remove all registered events
    if (!event && !handler) {
      // iterate all events
      Object.keys(this.listeners).forEach(eventName => {
        this.listeners[eventName].forEach(record => {
          this.forEach(n => n.removeEventListener(eventName, record.handler, record.capture));
        });
      });
      // reset all listeners
      delete this.listeners;
    } else {
      // if only event name specified remove all listeners for that event
      if (event && !handler) {
        if (this.listeners[event]) {
          this.listeners[event].forEach(record => {
            this.forEach(n => n.removeEventListener(event, record.handler, record.capture));
          });
        }
        // delete listeners for this specific event
        delete this.listeners[event];
      } else {
        // remove the specific listener if it is present, by finding the record with the handler
        // ( the capture flag must match as well )
        if (this.listeners[event]) {
          const index = this.listeners[event].findIndex(record => {
            return record.handler === handler && record.capture === capture;
          });
          if (index >= 0) {
            const record = this.listeners[event][index];
            this.forEach(n => n.removeEventListener(event, record.handler, record.capture));
            this.listeners[event].splice(index, 1);
          }
        }
      }
    }
    return this;
  }
}

/**
 * We export a factory function for DOMArray so there is no need to the new operator
 */
export default function D() {
  return new DOMArray(...arguments);
};
