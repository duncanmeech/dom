var path = require('path');
var webpack = require('webpack');

// modules section is very similar for debug and release so
// the config is shared. In release we add eslint as a preLoader.
const modules = {
  loaders: [
    {
      test   : /\.js$/,
      exclude: /node_modules/,
      loader : 'babel-loader',
      query  : {
        presets: ['es2015', 'stage-0'],
        plugins: [
          ["babel-plugin-transform-builtin-extend", {
            globals: ["Array"],
          }]
        ],
      }
    },
  ],
};

// entry point doesn't vary by build
const entry = "./javascripts/dom.js";

// output is common to all builds
const output = {
  libraryTarget: 'umd',
  filename     : "./dist/index.js"
};

// ===========================================================================
// debug builds a source map decorated, non minified version of the extension
// ===========================================================================
const debug = {
  entry,
  output,
  module : modules,
  devtool: "inline-source-map",
};

// ===========================================================================
// release builds a minified version of the extension
// ===========================================================================
const release = {
  entry,
  output,
  module: Object.assign({}, modules, {
    preLoaders: [
      {test: /\.js$/, loader: "eslint-loader", exclude: /node_modules/}
    ],
  }),
  eslint: {
    configFile : './.eslintrc',
    failOnError: true
  }
};

// ===========================================================================
// for test builds only. test enviroment must not have an entry point or
// output destination.
// ===========================================================================
const test = {
  module: modules,
};


// get target from npm command used to start the build
const TARGET = process.env.npm_lifecycle_event;

// now build the required target ( for debug/test mode )
if (TARGET === 'build:dev') {
  module.exports = debug;
}

if (TARGET === 'build:prod') {
  module.exports = release;
}

if (TARGET === 'test') {
  module.exports = test;
}
