// node
import path from 'path';
import 'core-js';
import D from '../dist/index';

describe('DOMArray Module Tests', () => {

  // clear the DOM before each test
  beforeEach(() => {
    while (document.body.firstChild) {
      document.body.removeChild(document.body.firstChild);
    }
    while (document.head.firstChild) {
      document.head.removeChild(document.head.firstChild);
    }
  });

  // It easy to mess up the Karma/Webpack configuration. Ensure
  // that we can actually find and import the files we need.
  // (if webpack is configured correctly it should inject its universal import code
  //  at the top of the generated file )

  // test importing a node module
  it('Node module import should work', () => {
    expect(path).not.toBe(null);
  });

  // test that our own module imported
  it('Local module import should work', () => {
    expect(D).not.toBe(null);
  });

  it('Test list creation with CSS selectors', () => {
    const fixture = `
      <div class="ABC">
        <p class="xyz">
          <span class="xyz"></span>
        </p>
      </div>
    `;

    document.body.insertAdjacentHTML('afterbegin', fixture);

    // basic CSS selector for a single match
    const a = D('.ABC');
    expect(a.length).toEqual(1);
    // a selected rooted in other than document
    const b = D('.xyz', a.el);
    expect(b.length).toEqual(2);

  });


  it('Test list creation with template literals', () => {
    const template = D(`<div class="ABC">
                            <p class="xyz">
                                <span class="xyz"></span>
                            </p>
                        </div>`);

    D(document.body).appendChild(template.el);

    expect(document.body.querySelectorAll('.ABC').length).toEqual(1);
    expect(document.body.querySelectorAll('.xyz').length).toEqual(2);

  });


  it('Test list creation with raw elements and/or another DOMArray', () => {

    let da = D(document.head, document.body);
    expect(da.length).toEqual(2);
    da = D(document.head, D(document.head, document.body));
    expect(da.length).toEqual(3);

  });

  it('Test native properties on a single element', () => {

    const template = D(`<div title="My Title"></div>`);
    D(document.body).appendChild(template.el);

    let da = D('div[title]');
    expect(da.title).toEqual("My Title");

  });

  it('Test native properties with multiple elements', () => {

    const template = D(`<div>
                            <div class="INNER-TEXT">Inner Text 1</div>
                            <div class="INNER-TEXT">Inner Text 2</div>
                        </div>`);
    D(document.body).appendChild(template.el);

    let da = D('div.INNER-TEXT');
    // since there are two divs we expect an array result
    expect(da.innerText.length).toEqual(2);
    expect(da.innerText[0]).toEqual("Inner Text 1");
    expect(da.innerText[1]).toEqual("Inner Text 2");

  });

  it('Test that we can write native properties', () => {

    const template = D(`<div>
                            <div class="INNER-TEXT">Inner Text 1</div>
                            <div class="INNER-TEXT">Inner Text 2</div>
                        </div>`);
    D(document.body).appendChild(template.el);

    let da = D('div.INNER-TEXT');
    da.innerText = 'New Inner Text';

    expect(da.innerText.length).toEqual(2);
    expect(da.innerText[0]).toEqual("New Inner Text");
    expect(da.innerText[1]).toEqual("New Inner Text");

  });

  it('Test native methods on a single element', () => {

    let da = D(document.body);
    const R = '[object ClientRect]|[object DOMRect]';
    expect(da.getBoundingClientRect().toString().match(R).length).toEqual(1);

  });

  it('Test native methods on multiple elements', () => {

    let da = D(document.head, document.body);

    // match return type from getBoundingClientRect against [object ClientRect] or [object DOMRect]
    const R = '[object ClientRect]|[object DOMRect]';
    expect(da.getBoundingClientRect()[0].toString().match(R).length).toEqual(1);
    expect(da.getBoundingClientRect()[1].toString().match(R).length).toEqual(1);

  });

  it('Test that we can call native functions and pass parameters', () => {

    const template = D(`<div>
                            <div class="ABC"></div>
                            <div class="ABC"></div>
                        </div>`);
    D(document.body).appendChild(template.el);

    let da = D('div.ABC');
    da.setAttribute('title', 'My Title');

    expect(da.innerText.length).toEqual(2);
    expect(da.title[0]).toEqual("My Title");
    expect(da.title[1]).toEqual("My Title");

  });

  it('Test that we can set CSS styles on multiple elements', () => {

    const template = D(`<div>
                            <div class="ABC"></div>
                            <div class="ABC"></div>
                        </div>`);
    D(document.body).appendChild(template.el);

    let da = D('div.ABC');
    da.setStyles({
      'margin-left': '3.14rem',
      'white-space': 'pre-wrap',
    });

    expect(da.style[0].marginLeft).toEqual('3.14rem');
    expect(da.style[1].marginLeft).toEqual('3.14rem');
    expect(da.style[0].whiteSpace).toEqual('pre-wrap');
    expect(da.style[1].whiteSpace).toEqual('pre-wrap');

  });

  it('Test that we can remove all children', () => {

    const template = D(`<div>
                            <div class="ABC"></div>
                            <div class="ABC"></div>
                        </div>`);
    D(document.body).appendChild(template.el);

    expect(template.children.length).toEqual(2);
    template.empty();
    expect(template.children.length).toEqual(0);

  });

  it('Test that we can append multiple elements to a single parent', () => {

    const template = D(`<div></div><div></div>`);
    template.appendTo(D(document.body, document.head));

    expect(template[0].parentElement).toEqual(document.body);
    expect(template[1].parentElement).toEqual(document.body);

  });

  it('Test that we can remove elements in a list from their parents', () => {

    const template = D(`<div></div>`);
    D(document.body).appendChild(template.el);

    expect(template.parentElement).not.toBeNull();
    template.remove();
    expect(template.parentElement).toBeNull();

  });

  it('Test that we can add/remove classes', () => {

    const template = D(`<div></div><span></span>`);
    template.appendTo(document.body);
    template.addClasses('one two three');

    expect(document.querySelectorAll('.one').length).toEqual(2);
    expect(document.querySelectorAll('.two').length).toEqual(2);
    expect(document.querySelectorAll('.three').length).toEqual(2);

    expect(document.querySelectorAll('DIV.one').length).toEqual(1);
    expect(document.querySelectorAll('SPAN.one').length).toEqual(1);
    expect(document.querySelectorAll('DIV.two').length).toEqual(1);
    expect(document.querySelectorAll('SPAN.two').length).toEqual(1);

    template.removeClasses('one two');
    expect(document.querySelectorAll('.one').length).toEqual(0);
    expect(document.querySelectorAll('.two').length).toEqual(0);
    expect(document.querySelectorAll('.three').length).toEqual(2);

  });

  it('Test that we can conditionally add/remove classes', () => {

    const template = D(`<div></div><span></span>`);
    template.appendTo(document.body);
    template.classesConditional('one two three', true);

    expect(document.querySelectorAll('.one').length).toEqual(2);
    expect(document.querySelectorAll('.two').length).toEqual(2);
    expect(document.querySelectorAll('.three').length).toEqual(2);

    expect(document.querySelectorAll('DIV.one').length).toEqual(1);
    expect(document.querySelectorAll('SPAN.one').length).toEqual(1);
    expect(document.querySelectorAll('DIV.two').length).toEqual(1);
    expect(document.querySelectorAll('SPAN.two').length).toEqual(1);

    template.classesConditional('one two', false);
    expect(document.querySelectorAll('.one').length).toEqual(0);
    expect(document.querySelectorAll('.two').length).toEqual(0);
    expect(document.querySelectorAll('.three').length).toEqual(2);

  });

  it('Test that we can clone instances', () => {

    const template = D(`<div class="ABC">
                            <div class="DEF"></div>
                            <div class="GHI"></div>
                        </div>
                        <div class="ABC">
                            <div class="DEF"></div>
                            <div class="GHI"></div>
                        </div>`);
    expect(template.length).toEqual(2);
    template.appendTo(document.body);
    expect(document.querySelectorAll('.ABC').length).toEqual(2);
    expect(document.querySelectorAll('.DEF').length).toEqual(2);
    expect(document.querySelectorAll('.GHI').length).toEqual(2);

    const clone = template.clone();
    expect(template.length).toEqual(2);
    clone.appendTo(document.body);
    expect(document.querySelectorAll('.ABC').length).toEqual(4);
    expect(document.querySelectorAll('.DEF').length).toEqual(4);
    expect(document.querySelectorAll('.GHI').length).toEqual(4);

  });



});
