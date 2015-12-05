var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var watchify = require('watchify');
var source = require('vinyl-source-stream');

var build = function (shouldWatch) {
  var bundler = browserify({
    entries: 'public/src/main.jsx',
    extensions: ['.jsx'],
    debug: true,
    cache: {},
    packageCache: {}
  });

  var bundle = function () {
    return bundler.transform(babelify, { presets: ['es2015', 'react'] })
      .bundle()
      .pipe(source('bundle.js'))
      .pipe(gulp.dest('public/dist'));
  };

  if (shouldWatch) {
    bundler = watchify(bundler);
    bundler.on('update', bundle);
  }

  return bundle();
};

gulp.task('build', function () {
  return build(false);
});

gulp.task('watch', function () {
  return build(true);
});

gulp.task('default', ['build']);
