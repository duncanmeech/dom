# DNA sequence viewer.

This is a simple DNA sequence viewer design for integration with the Autodesk Genetic Constructor application.

# JavaScript

It is written in JavaScript ES7 and transpiled to ES5 using webpack/babel with various loaders.

# CSS

CSS is generated from viewer.scss ( SASS css ) which is also auto-prefixed for cross browser support.

# Typography

The fixed pitch font used for DNA sequences is [Google's Roboto Mono](https://fonts.google.com/?query=roboto+mono). The extension does not include this
font and we therefore assume the application has already loaded this font by the time the extension is loaded.

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

This builds the debug version of index.js and continues to watch the project for changes, recompiling on all changes. Additionally
you can change the output filename in the debug section of web.config.js to point directly to the Genetic Constructor 
extensions folder i.e. change ./dist to the local path of the extension within the app.

# Performance

The extension has been shown to perform well for constructs in excess of 10,000,000 base pairs containing up to 10,000 blocks and 10,000 annotations.
Prior to rendering the visible rows of the sequence the extension must pre-compute the contents of each row. Therefore it would require
some refactoring for sequences up to the size of the human genome ( 10,000,000,000 base pairs ) since at that scale the number of rows
and the time necessary to compute their contents would be prohibitive.

# Usage

The sequence viewer display whatever is selected in the main construct editor of the application. It functions somewhat like a read only text editor.
Selection of sequence can be accomplished using the keys ( cursor left/right/up/down ) in combination with the shift key. Alternatively you can
select any part of the sequence with the mouse.
Doubling clicking a sequence of annotation will select the contain block(s).
Use option + arrow right / left to select the next / prior block.
Use cursor up / down without the shift key to navigate.
Enter the partial or full name of any block or annotation to find and select that block. Repeatedly pressing 'Enter' with the focus in
the search box will move to the next best match for the current search term. The search feature will track the 50 closest matches to entered term
in order of quality of match.

