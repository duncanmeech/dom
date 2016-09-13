var webpack = require('karma-webpack');
var webpackConfig = require('./webpack.config');
var path = require('path');

webpackConfig.module.postLoaders = [{
  test: /\.(js|jsx)$/, exclude: /(node_modules|tests)/,
  loader: 'istanbul-instrumenter'
}];

module.exports = function (config) {
  config.set({
    frameworks: [ 'jasmine' ],
    files: [
      './node_modules/phantomjs-polyfill/bind-polyfill.js',
      'tests/**/*_spec.js',
    ],
    plugins: [
      webpack,
      'karma-jasmine',
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-phantomjs-launcher',
      'karma-coverage',
      'karma-spec-reporter',
      'karma-babel-preprocessor',
    ],
    // locally I test in browsers as well, but for Travis CI I only use headless PhantomJS
    //browsers: [ 'PhantomJS', 'Chrome', 'Firefox' ],
    browsers: [ 'PhantomJS' ],
    preprocessors: {
      'tests/**/*_spec.js': ['webpack'],
    },
    reporters: [ 'spec', 'coverage' ],
    coverageReporter: {
      dir: 'build/reports/coverage',
      reporters: [
        { type: 'html', subdir: 'report-html' },
        { type: 'lcov', subdir: 'report-lcov' },
        { type: 'cobertura', subdir: '.', file: 'cobertura.txt' }
      ]
    },
    webpack: webpackConfig,
    webpackMiddleware: { noInfo: true }
  });
};
