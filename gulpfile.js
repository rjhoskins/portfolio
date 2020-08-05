
const gulp = require('gulp');
const { src, dest, parallel, series } = require('gulp');
const scss = require('gulp-sass');
const minifyCSS = require('gulp-csso');
// const browserSync = require('browser-sync').create();
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const rename = require("gulp-rename");

const cssSRC = './src/sass/main.scss';
const cssDEST = './';

// gulp gulp-sass gulp-csso browser-sync gulp-sourcemaps  gulp-autoprefixer gulp-rename

function sass() {
  return src(cssSRC)
    .pipe( scss({
       sourceMap: true
    }) )
    .pipe(sourcemaps.write( cssDEST )) 
    .pipe(rename( {basename: "style"}) )
    .pipe(dest(cssDEST) );
    // .pipe(browserSync.stream());
}

function watch() {
    // browserSync.init({ server: { baseDir: './'} });
    gulp.watch("./src/sass/**/*.scss", sass);
    // gulp.watch("css/**/*.css", style).on("change", series(style));
    // gulp.watch("js/**/*.js", js).on("change", browserSync.reload);
}

function js() {
  return src('client/javascript/*.js', { sourcemaps: true })
    .pipe(concat('app.min.js'))
    .pipe(dest('js/js', { sourcemaps: true }));
    // .pipe(browserSync.stream());
}
function style(){
  return src(cssSRC)
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(minifyCSS({
        sourceMap: true
    }))
    .pipe( rename({
      suffix: "-min",
    }) ) 
    .pipe(dest(cssDEST));
    // .pipe(browserSync.stream());


}

exports.watch = watch;
exports.style = style;
exports.sass = sass;
exports.default = parallel(style, js);
          