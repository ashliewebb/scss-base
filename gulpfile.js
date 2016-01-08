'use strict';

/* global module, require */

var gulp = require('gulp'),
    $ = require('gulp-load-plugins')({
        pattern: ['gulp-*']
    });


gulp.task('sass', function() {
    return gulp.src([
        './css/style.scss'])
        .pipe($.sass({
            includePaths: [
                './node_modules/bourbon/app/assets/stylesheets',
                './node_modules/bourbon-neat/app/assets/stylesheets',
                './css/scss'
            ],
            outputStyle: 'compressed'
        }))
        .pipe(gulp.dest('./css'));
});

gulp.task('watch', function () {
    gulp.watch('./css/scss/**/*.scss', ['sass']);
});

gulp.task('default', ['sass', 'watch']);