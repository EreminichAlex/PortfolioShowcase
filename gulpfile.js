const gulp = require("gulp");
const server = require("gulp-server-livereload");
const clean = require("gulp-clean");
const fs = require("fs");
const plumber = require("gulp-plumber");
const notify = require("gulp-notify");

const webpack = require("webpack-stream"); 


function plumberNotify(title) {
    return {
        errorHandler: notify.onError({
            title: title,
            message: 'Error <%= error.message %>',
            sound: false
        })
    }
}

gulp.task('clean', function(done) {
    if(fs.existsSync('./dist/')) {
        return gulp.src('./dist/', {read: false}).pipe(clean());
    }
    done();
})

gulp.task('htmlIndex', function() {
    return gulp.src('./src/*.html')
    .pipe(plumber(plumberNotify("HTML")))
    .pipe(gulp.dest('./dist/'));
})

gulp.task('htmlPages', function() {
    return gulp.src('./src/pages/*.html')
    .pipe(plumber(plumberNotify("HTML")))
    .pipe(gulp.dest('./dist/pages/'));
})

gulp.task('css', function() {
    return gulp.src('./src/css/styles.css')
    .pipe(plumber(plumberNotify("Styles"))) 
    .pipe(gulp.dest('./dist/css/'));
})

gulp.task('copyImages', function() {
    return gulp.src('./src/img/**/*').pipe(gulp.dest('./dist/img/'));
})

gulp.task('copyIcons', function() {
    return gulp.src('./src/icons/**/*').pipe(gulp.dest('./dist/icons/'));
})

gulp.task('fonts', function() {
    return gulp.src('./src/fonts/**/*').pipe(gulp.dest('./dist/fonts/'));
})

gulp.task('js', function() {
    return gulp.src('./src/js/*.js')
    .pipe(plumber(plumberNotify("JS")))
    .pipe(webpack(require('./webpack.config.js')))
    .pipe(gulp.dest('./dist/js-testing'));
})

gulp.task('bootstrap', function() {
    return gulp.src('./src/bootstrap-5.3.2-dist/**/*').pipe(gulp.dest('./dist/bootstrap-5.3.2-dist/'))
})


gulp.task('startServer', function() {
    return gulp.src('./dist/').pipe(server({
        livereload: true,
        open: true
    }))
})

gulp.task('watch', function() {
    gulp.watch('./src/css/styles.css', gulp.parallel('css'));
    gulp.watch('./src/*.html', gulp.parallel('htmlIndex'));
    gulp.watch('./src/pages/*.html', gulp.parallel('htmlPages'));
    gulp.watch('./src/img/**/*', gulp.parallel('copyImages'));
    gulp.watch('./src/fonts/**/*', gulp.parallel('fonts'));
    gulp.watch('./src/icons/**/*', gulp.parallel('copyIcons'));
    gulp.watch('./src/js/**/*.js', gulp.parallel('js'));
})

gulp.task('default', gulp.series(
    'clean', 
    gulp.parallel('htmlIndex', 'htmlPages', 'css', 'copyImages', 'copyIcons', 'fonts', 'js', 'bootstrap'), 
    gulp.parallel('watch')
))


gulp.task('jsTest', function() {
    return gulp.src('./src/js/*.js')
    .pipe(plumber(plumberNotify("JS")))
    .pipe(webpack(require('./webpack.config.js')))
    .pipe(gulp.dest('./src/js-testing'));
})

gulp.task('jsWatch', function() {
    gulp.watch('./src/js/**/*.js', gulp.parallel('jsTest'));
})