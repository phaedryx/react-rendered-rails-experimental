const React    = require('react');
const ReactDOM = require('react-dom');
const Router   = require('react-router').Router;
const Route    = require('react-router').Route;
const App      = require('./components/App');
const About    = require('./components/About');
const Contact  = require('./components/Contact');
const createHistory = require('history').createHistory;

const history = createHistory();

function renderPage () {
  ReactDOM.render((
    <Router history={ history }>
      <Route path="/" component={App}>
        <Route path="about" component={About}/>
        <Route path="contact" component={Contact}/>
      </Route>
    </Router>
  ), document.getElementById('root'));
}

window.addEventListener('load', function () {
  renderPage();
});