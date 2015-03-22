#!/usr/bin/env node

var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();

var React = require('react');
App = React.createFactory(require('./build/react/components/app.js'));

var config = {
  port: 3000
};

app.use(express.static(path.join(__dirname, 'public')));

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');


// helper function for rendering a view with React
function reactRender(res, componentClass, props) {
  var component = new componentClass(props);
  res.render('index', { 
    reactOutput: React.renderToString(component),
    initialProps: JSON.stringify(props)
  });
}

function reactApp(req, res) {
  reactRender(res, App, {
    items: [
      'Message 0',
      'Message 1',
      'Message 2',
      'Message 3'
    ]}
  );
}

app.get('/', reactApp);

// start the server
app.listen(config.port, function (err) {
  console.info("Server started; listening on port " + config.port);
});
