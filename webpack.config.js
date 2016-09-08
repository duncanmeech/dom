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

// ===========================================================================
// debug builds a source map decorated, non minified version of the extension
// ===========================================================================
const debug = {
  entry,
  output : {
    libraryTarget: 'umd',
    filename     : "./dist/index.js",
  },
  module : modules,
  devtool: "inline-source-map",
};

// ===========================================================================
// release builds a minified version of the extension
// ===========================================================================
const release = {
  entry,
  output: {
    libraryTarget: 'umd',
    filename     : "./dist/index.js"
  },
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
// output destination for example.
// ===========================================================================
const test = {
  module: modules,
};


// get target from npm command used to start the build
const TARGET = process.env.npm_lifecycle_event;

// now build the required target ( for debug/test mode )
if (TARGET === 'debug') {
  module.exports = debug;
}

if (TARGET === 'test') {
  module.exports = test;
}

if (TARGET === 'release') {
  module.exports = release;
}

if (TARGET === 'watch') {
  module.exports = dev;
}
