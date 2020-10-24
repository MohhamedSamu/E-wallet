const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

//compile scss into css
function style() {
    return gulp.src('src/scss/**/*.scss')
    .pipe(sass().on('error',sass.logError))
    .pipe(gulp.dest('src/css'))
    .pipe(browserSync.stream());
}

// esto es un comentario
function watch() {
    browserSync.init({
        server: {
           baseDir: "./src",
           index: "/index.html"
        },
        port: 5555
    });
    gulp.watch('src/scss/**/*.scss', style)
    gulp.watch('src/*.html').on('change',browserSync.reload);
    gulp.watch('src/js/**/*.js').on('change', browserSync.reload);
}

function defaultTask(){
    watch();
}

exports.watch = watch;
exports.style = style;
exports.default = watch;