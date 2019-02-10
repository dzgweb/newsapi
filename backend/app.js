const createError = require('http-errors');
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('./utils/logger');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/news');

const app = express();
mongoose.connect('mongodb://localhost:27017/restaurants', { useNewUrlParser: true })
  .then(() => {
    logger.info(`Database connection successful`);

    // view engine setup
    app.set('views', path.join(__dirname, 'views'));
    app.set('view engine', 'pug');

    app.use(logger('dev'));
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use(cookieParser());
    app.use(express.static(path.join(__dirname, 'public')));

    app.use((req, res, next) => {
      console.log('Time:' , Date.now());
      next();
    });

    app.use('/', indexRouter);
    app.use('/news', usersRouter);

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
  })
  .catch( err => {
    logger.error(`Database connection error`);

    app.use(function (req, res, next) {
      next(createError(500));
    });
  });



module.exports = app;