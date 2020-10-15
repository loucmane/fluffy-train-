let gulp = require('gulp');
let sass = require('gulp-sass');
let csso = require('gulp-csso');
 
gulp.task('scss-generic', function () {
  return gulp
    .src('scss/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('css'))
    .pipe(csso())
    .pipe(gulp.dest('dist'));
});
 
gulp.task('watch-scss', function () {
  gulp.watch('scss/**/*.scss', gulp.series('scss-generic'));
});
 
gulp.task('default', gulp.series('scss-generic', 'watch-scss'), function () {});