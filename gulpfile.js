var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var mainBowerFiles = require('main-bower-files');
var inject = require('gulp-inject');
var es = require('event-stream');
/**
 * Use BrowserSync for livereload
 */
gulp.task('browser-sync', function () {
    browserSync.init({
        server: {
            baseDir: "./src"
        }
    });

    gulp.watch('src/**').on('change', browserSync.reload)
});

/**
 * Gulp injection
 */
gulp.task('index', function () {
    gulp.src('./src/index.html')
        .pipe(inject(gulp.src(mainBowerFiles(), { read: false }), { name: 'bower', relative: true }))
        .pipe(gulp.dest('./src'))
        .pipe(inject(es.merge(
            gulp.src('./src/app/*.js', { read: false })
        )))
        .pipe(gulp.dest('./src'));
});


gulp.task('default', ['index', 'browser-sync']);