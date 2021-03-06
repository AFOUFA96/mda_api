var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
///////////////////////////////////////////
const cors = require('cors'); //permet de fonctionner les deux appli, n'oublies pas la commande cors!!
////////////////////////////////////////////
var indexRouter = require('./routes/index');
var questionRouter = require('./routes/question');
var langueRouter = require('./routes/langues');
var utilisateurRouter = require('./routes/utilisateur');
// var utilisateur_reponseRouter = require('./routes/utilisateur_reponse');

var app = express();
//////////////////////////////////////////
app.use(cors({
  origin: '*'
}));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

////////////////////////////////////////////////
app.use('/', indexRouter);
app.use('/question', questionRouter);
app.use('/langues', langueRouter);
app.use('/utilisateur', utilisateurRouter);
// app.use('/utilisateur_reponse', utilisateur_reponseRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
