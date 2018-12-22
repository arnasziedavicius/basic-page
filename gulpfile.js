const gulp = require('gulp'),
  gutil = require('gulp-util'),
  sass = require('gulp-sass'),
  concat = require('gulp-concat'),
  plumber = require('gulp-plumber'),
  uglify = require('gulp-uglify'),
  cleanCSS = require('gulp-clean-css'),
  rename = require('gulp-rename'),
  livereload = require('gulp-livereload');

const onError = function (err) {  
  gutil.beep();
  console.log(err);
};

const paths = {
  styles: ['./styles/**/*.scss'],
  scripts: ['./scripts/**/*.js'],
};

gulp.task('scripts', () => {
  gulp.src(paths.scripts)
    .pipe(plumber(onError))
    .pipe(concat('main.js'))
    .pipe(gulp.dest('./assets/js/'))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest('./assets/js/'))
    .pipe(livereload());
});

gulp.task('styles', () => {
  gulp.src(paths.styles)
    .pipe(plumber(onError))  
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./assets/css/'))
    .pipe(rename({suffix: '.min'}))
    .pipe(cleanCSS())
    .pipe(gulp.dest('./assets/css/'))
    .pipe(livereload());
});

//Watch task
gulp.task('default', () => {
  livereload.listen();
  // Watch css
  gulp.watch(paths.styles, ['styles']);
  // Watch js
  gulp.watch(paths.scripts, ['scripts']);
});