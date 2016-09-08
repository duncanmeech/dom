// node
import path from 'path';
import D from '../dist/index';

describe('DOM Library Tests', () => {

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

  // test that we can use a CSS selector to create lists.
  it('Test CSS selectors', () => {
    const fixture = `
      <div class="ABC">
        <p class="XYZ"></p>
        <span data-test="test"></span>
      </div>
    `;

    document.body.insertAdjacentHTML('afterbegin', fixture);

    // basic CSS selector for a single match
    let list = D('.ABC');
    expect(list.length).toEqual(1);
  });
});
