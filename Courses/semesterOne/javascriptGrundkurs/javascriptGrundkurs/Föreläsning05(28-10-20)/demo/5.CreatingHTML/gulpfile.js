var gulp = require("gulp");
var sass = require("gulp-sass");
var csso = require("gulp-csso");
var rename = require("gulp-rename");

gulp.task("scss-things", function () {
  console.log("Starting scss compilation");

  return gulp
    .src("scss/*.scss")
    .pipe(sass())
    .pipe(gulp.dest("css"))
    .pipe(csso())
    .pipe(
      rename({
        extname: ".min.css",
      })
    )
    .pipe(gulp.dest("dist"));
});

gulp.task("watch-scss", function () {
  gulp.watch("scss/*.scss", gulp.series("scss-things"));
});

gulp.task("default", gulp.series('scss-things', "watch-scss"), function () {});
