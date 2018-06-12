'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    cssmin = require('gulp-cssmin'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    cleanCSS = require('gulp-clean-css'),
    sourcemaps = require('gulp-sourcemaps'),
    clean = require('gulp-clean'),
    babel = require('gulp-babel');

//-----------------------------------------------------------------------------------
// PARAMETERS
//-----------------------------------------------------------------------------------
var path = {
    prod: {
        url: 'dist',
        js: 'dist/js/',
        css: 'dist/css/',
        maps: '/'
    },
    dev: {
        js: ['src/js/Objects/*.js', 'src/js/**/*.js'],
        css: 'src/sass/'
    },
    watch: {
        js: 'src/js/',
        css: 'src/sass/'
    },
    clean: 'dist'
};

//-----------------------------------------------------------------------------------
// PROJECT CLEAN
//-----------------------------------------------------------------------------------
gulp.task('clean', function () {
    return gulp.src(path.prod.url, {read: false})
        .pipe(clean());
});

//-----------------------------------------------------------------------------------
// SASS
//-----------------------------------------------------------------------------------
gulp.task('sass', function () {
    return gulp.src(path.dev.css + '**/*.scss')
        .pipe(sourcemaps.init({largeFile: true}))
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 10 versions'],
            cascade: false
        }))
        .pipe(cssmin())
        .pipe(cleanCSS({debug: true}))
        .pipe(sourcemaps.write(path.prod.maps))
        .pipe(gulp.dest(path.prod.css))
});

//-----------------------------------------------------------------------------------
// JS
//-----------------------------------------------------------------------------------
gulp.task('js', function() {
    return gulp.src(path.dev.js)
        .pipe(sourcemaps.init({largeFile: true}))
        .pipe(concat('theme.js'))
        .pipe(babel({
            "presets": [ ["es2015", {"loose": true}] ]
        }))
        .pipe(gulp.dest(path.prod.js))
        .pipe(rename('theme.min.js'))
        .pipe(babel({
            "minified": true
        }))
        .pipe(sourcemaps.write(path.prod.maps))
        .pipe(gulp.dest(path.prod.js));
});

//-----------------------------------------------------------------------------------
// BUILD
//-----------------------------------------------------------------------------------
gulp.task('build', ['sass', 'js']);

//-----------------------------------------------------------------------------------
// WATCH
//-----------------------------------------------------------------------------------
gulp.task('watch', function () {
    gulp.watch(path.watch.css + '**/*.scss', ['sass']);
    gulp.watch(path.watch.js + '**/*.js', ['js']);
});

gulp.task('default', ['build', 'watch']);