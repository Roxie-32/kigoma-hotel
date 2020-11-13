const gulp = require("gulp");
const sass = require("gulp-sass");
const browserSync = require("browser-sync").create();

const style = () => {
  return gulp
    .src("./styles/**/*.scss")
    .pipe(sass())
    .pipe(gulp.dest("./css"))
    .pipe(browserSync.stream());
};

const watch = () => {
  browserSync.init({
    server: {
      baseDir: "./",
    },
  });
  gulp.watch("./styles/**/*.scss", style);
  gulp.watch("./*.html").on("change", browserSync.reload);
  gulp.watch("./scripts/**/*.js").on("change", browserSync.reload);
};

exports.style = style;
exports.watch = watch;
