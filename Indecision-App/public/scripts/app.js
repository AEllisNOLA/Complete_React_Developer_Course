'use strict';

console.log('App.js is running!');

var template = React.createElement(
  'h1',
  null,
  'Make My Decision for Me!'
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
