let React          = require('react');
let ReactDOM       = require('react-dom');
let ReactDOMServer = require('react-dom/server');
let App            = require('./components/App');

global.prerender = function() {
  return ReactDOMServer.renderToStaticMarkup(<App />);
}

// How do we make it so the correct route is rendered on the server?