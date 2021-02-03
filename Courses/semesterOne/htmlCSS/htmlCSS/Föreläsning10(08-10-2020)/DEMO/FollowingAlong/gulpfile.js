let gulp = require('gulp');
let sass = require('gulp-sass');
let csso = require('gulp-csso');
// let pipeline = require('readable-stream').pipeline;


// gulp.task('compress', function () {
//     return pipeline(
//           gulp.src('lib/*.js'),
//           uglify(),
//           gulp.dest('dist')
//     );
//   });

  
gulp.task('default', function(){
    
    return gulp.src('scss/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('css'))
    .pipe(csso())
    .pipe(gulp.dest('dist'));
});