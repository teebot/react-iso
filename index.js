#!/usr/bin/env node

var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();

// setup server side react
require('node-jsx').install({extension: '.jsx'});
var React = require('react');
App = React.createFactory(require('./react/components/app.jsx'));

var config = {
  port: 3000
};

app.use(express.static(path.join(__dirname, 'public')));

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');


// helper function for rendering a view with React
function reactRender(res, componentClass, props) {
  var component = new componentClass(props);
  // res.render('index', { reactOutput: '' });
  res.render('index', { reactOutput: React.renderToString(component) });
}

function reactApp(req, res) {
  reactRender(res, App, {
    items: [
      'Message 1',
      'Message 2',
      'Message 3',
      'Message 4'
    ]}
  );
}

app.get('/', reactApp);

// start the server
app.listen(config.port, function (err) {
  console.info("Server started; listening on port " + config.port);
});
