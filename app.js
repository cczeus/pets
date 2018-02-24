'use strict';

const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
//const cookieParser = require('cookie-parser');

const app = express();
const api = require('./server/routes/api.js');
const config = require('./server/config/config');



app.use(bodyParser.json());
app.use(express.static('public'));
app.use(favicon(path.join(__dirname, 'public/img/nurfIcons/favicon.ico')));
//app.use(cookieParser());

// Run development
// Runs webpack on the fly
if (app.get('env') === 'development') {
  const logger = require('morgan');
  const webpack = require('webpack');
  const config = require('./webpack.config.dev.js');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const compiler = webpack(config);
  app.use(logger('dev'));
  app.use(webpackHotMiddleware(compiler));
  app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPathdist,
    stats: { colors: true },
  }));
}
// General Routing
app.use('/api', api);
app.get('*', (_, res) => { res.sendFile(path.join(__dirname, 'app/index.html')); });

// Error Handling
// Prints stacktrace in development
app.use(function(req, res, err) {
  let error = app.get('env') === 'development' ? err.message : 'error';
  res.status(err.status || 500);
  res.send(error);
});

module.exports = app;
