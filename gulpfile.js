var gulp = require('gulp'),
    gutil = require('gulp-util'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    plumber = require('gulp-plumber'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    bourbon = require('node-bourbon').includePaths,
    livereload = require('gulp-livereload');

var onError = function (err) {  
  gutil.beep();
  console.log(err);
};

var paths = {
  styles: ['./styles/**/*.scss'],
  scripts: ['./scripts/**/*.js'],
};

gulp.task('scripts', function() {
  gulp.src(paths.scripts)
    .pipe(plumber(onError))
    .pipe(concat('main.js'))
    .pipe(gulp.dest('./assets/js/'))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest('./assets/js/'))
    .pipe(livereload());
});

gulp.task('styles', function() {
  gulp.src(paths.styles)
    .pipe(plumber(onError))  
    .pipe(sass({
      includePaths: bourbon,
    }).on('error', sass.logError))
    .pipe(gulp.dest('./assets/css/'))
    .pipe(livereload());
});

//Watch task
gulp.task('default', function() {
  livereload.listen();
  // Watch css
  gulp.watch(paths.styles, ['styles']);
  // Watch js
  gulp.watch(paths.scripts, ['scripts']);
});