require('babel-register')
require('babel-polyfill')

// global is like the window of Node. Run before all tests to create a window environment

global.document = require('jsdom').jsdom('<body><div id="app"></div></body>')  //create the document
global.window = document.defaultView  // get a window from the above document
global.navigator = window.navigator


