var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');

gulp.task('build', function () {
  browserify({
    entries: 'src/main.jsx',
    extensions: ['.jsx'],
    debug: true
  })
  .transform(babelify, { presets: ['es2015', 'react'] })
  .bundle()
  .pipe(source('bundle.js'))
  .pipe(gulp.dest('dist'));
});

gulp.task('default', ['build']);