
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');

const loginRouter = require('./routes/account/login');
const signupRouter = require('./routes/account/signup');
const unameRouter = require('./routes/account/uname');
const profileRouter = require('./routes/account/profile');
const profile_registeredRouter = require('./routes/account/profile-registered');
const uploadRouter = require('./routes/img/upload');
const upload_nameRouter = require('./routes/img/upload-name');
const upload_fileRouter = require('./routes/img/upload-file');
const upload_userRouter = require('./routes/img/upload-user');
const indexRouter = require('./routes/index');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api/account/login', loginRouter);//P
app.use('/api/account/signup', signupRouter);//P
app.use('/api/account/uname', unameRouter);//G
app.use('/api/account/profile', profileRouter);//G
app.use('/api/account/profile-registered', profile_registeredRouter);//G
app.use('/api/img/upload', uploadRouter);//P
app.use('/api/img/upload-name', upload_nameRouter);//G
app.use('/api/img/upload-file', upload_fileRouter);//P
app.use('/api/img/upload-user', upload_userRouter);//P


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


