let gulp = require('gulp')
let scss = require('gulp-sass')
let uglify = require('gulp-uglify');
let pipeline = require('readable-stream').pipeline;

gulp.task('compress', function () {
  return pipeline(
        gulp.src('lib/*.js'),
        uglify(),
        gulp.dest('dist')
  );
});

gulp.task('default', function(){
    
    return gulp.src('scss/*.scss')
    .pipe(scss())
    .pipe(gulp.dest('css'));

});


/* Minifiering
    vi vill göra våra filer så små som möjligt
    
    
    */