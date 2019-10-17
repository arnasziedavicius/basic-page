const gulp = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const plumber = require('gulp-plumber');
const terser = require('gulp-terser');
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');

const onError = function (err) {  
  console.log(err);
};

const paths = {
  styles: [
    './styles/main.scss',
  ],
  scripts: [
    './scripts/main.js',
  ],
};

const compileScript = () => {
  return gulp.src(paths.scripts)
    .pipe(plumber(onError))
    .pipe(concat('main.js'))
    .pipe(gulp.dest('./assets/js/'))
    .pipe(rename({suffix: '.min'}))
    .pipe(terser())
    .pipe(gulp.dest('./assets/js/'));
};

const compileStyle = () => {
  return gulp.src(paths.styles)
    .pipe(plumber(onError))  
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('main.css'))
    .pipe(gulp.dest('./assets/css/'))
    .pipe(rename({suffix: '.min'}))
    .pipe(cleanCSS())
    .pipe(gulp.dest('./assets/css/'));
};

const watchScript = () => {
  gulp.watch(paths.scripts, compileScript);
};

const watchStyle = () => {
  gulp.watch(paths.styles, compileStyle);
};

const compile = gulp.parallel(compileScript, compileStyle);
compile.description = 'compile all sources';

const watch = gulp.parallel(watchScript, watchStyle);
watch.description = 'watch for changes to all source';

const defaultTasks = watch;

exports.compile = compile;
exports.watch = watch;

exports.default = defaultTasks;
