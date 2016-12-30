var gulp = require('gulp');
var lintspaces = require('gulp-lintspaces');
var prettify = require('gulp-jsbeautifier');

gulp.task('lint', function() {
  return gulp.src('src/**/*.js')
  .pipe(lintspaces({
    editorconfig: '.editorconfig'
  }))
  .pipe(lintspaces.reporter());
});

gulp.task('prettify', function() {
  gulp.src('src/**/*.js')
  .pipe(prettify({
  indent_size: 2,
  indent_char: ' '
  }))
    .pipe(prettify.reporter())
    .pipe(gulp.dest('./src'));
});
