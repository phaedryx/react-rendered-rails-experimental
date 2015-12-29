//= require jquery
let React    = require('react');
let ReactDOM = require('react-dom');
let App      = require('./components/App');

// comment out these lines
$(document).ready(function() {
  ReactDOM.render(<App />, document.getElementById('root'));
});
