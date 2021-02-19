var gulp = require('gulp');
var minifycss = require('gulp-minify-css');
var uglify = require('gulp-uglify');
var htmlmin = require('gulp-htmlmin');
var htmlclean = require('gulp-htmlclean');
var imagemin = require('gulp-imagemin');

// 压缩html
gulp.task('minify-html', function () {
    return gulp.src('./*.html')
        .pipe(htmlclean())
        .pipe(htmlmin({
            removeComments: true,
            minifyJS: true,
            minifyCSS: true,
            minifyURLs: true,
        }))
        .pipe(gulp.dest('./public'))
});
// 压缩css
gulp.task('minify-css', function () {
    return gulp.src('./css/*.css')
        .pipe(minifycss({
            compatibility: 'ie8'
        }))
        .pipe(gulp.dest('./public/css'));
});
// 压缩js
gulp.task('minify-js', function () {
    return gulp.src('./js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./public/js'));
});
// 压缩图片
gulp.task('minify-images', function () {
    return gulp.src('./images/*.*')
        .pipe(gulp.dest('./public/images'))
});
// 默认任务
gulp.task('default', gulp.series(['minify-html', 'minify-css', 'minify-js', 'minify-images']));
