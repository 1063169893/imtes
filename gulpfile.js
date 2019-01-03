const gulp = require('gulp');
const rename = require('gulp-rename');
const csso = require('gulp-csso');
const htmlmin = require('gulp-htmlmin');
const imagemin = require('gulp-imagemin');
const watch = require('gulp-watch');


// 压缩css
gulp.task('csso', function() {
    return gulp.src('./less/vip.css')
        .pipe(csso())
        .pipe(rename(function(path) {
            path.extname = ".min.css";
        }))
        .pipe(gulp.dest('./dist/css'))
});
// 压缩html
gulp.task('htmlmin', function() {
        return gulp.src('./index.html')
            .pipe(htmlmin({ collapseWhitespace: true }))
            .pipe(gulp.dest('./dist'))
    })
    // 压缩图片
gulp.task('imagemin', function() {
    return gulp.src('./img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/img'))
});

gulp.task('watch', function() {
    return gulp.watch(['./*.html', './less/*.css', './img/*'], gulp.series('htmlmin', 'csso', 'imagemin'));
})