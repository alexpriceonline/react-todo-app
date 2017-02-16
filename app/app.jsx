var React = require('react');
var ReactDOM = require('react-dom');
var {Router, Route, IndexRoute, hashHistory} = require('react-router');
var TodoApp = require('TodoApp')
// Load the foundation css for the component
require('style!css!foundation-sites/dist/css/foundation.min.css')
$(document).foundation();

// App CSS
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <TodoApp />,
  document.getElementById('app')
);
