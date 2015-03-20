/**
This is the main file run used by browserify and is run in the browser.
*/

var React = require('react');
var App = require('./build/react/components/app.js');

var props = {
    items: [
      'Message 1',
      'Message 2',
      'Message 3',
      'Message 4'
    ]};
var mountNode = document.getElementById("react-main-mount");
React.render(
	React.createElement(App, props),
	mountNode
);