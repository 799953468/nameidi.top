var gulp = require("gulp");
var minifycss = require("gulp-clean-css");
var uglify = require("gulp-uglify");
var htmlmin = require("gulp-htmlmin");
var htmlclean = require("gulp-htmlclean");
const sourcemaps = require("gulp-sourcemaps");

// 压缩html
gulp.task("minify-html", function () {
  return gulp
    .src("./*.html")
    .pipe(htmlclean())
    .pipe(
      htmlmin({
        removeComments: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      })
    )
    .pipe(gulp.dest("./public"));
});
// 压缩css
gulp.task("minify-css", function () {
  return gulp
    .src("./css/*.css")
    .pipe(sourcemaps.init())
    .pipe(minifycss())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest("./public/css"));
});
// 压缩js
gulp.task("minify-js", function () {
  return gulp
    .src("./js/*.js")
    .pipe(sourcemaps.init())
    .pipe(uglify())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest("./public/js"));
});
// 默认任务
gulp.task("default", gulp.series(["minify-html", "minify-css", "minify-js"]));
