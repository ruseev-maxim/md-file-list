let gulp = require('gulp'),
  uglify = require('gulp-uglify'),
  sass = require('gulp-sass'),
  concat = require('gulp-concat')
  ;

gulp.task('scripts', function() {
  return gulp.src([
    'src/*.js',
  ])
    // .pipe(uglify)
    .pipe(concat('fileList.min.js'))
    .pipe(gulp.dest('dist/'))
});

gulp.task('sass', function() {
  return gulp.src([
    'src/*.scss'
  ])
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('fileList.min.css'))
    .pipe(gulp.dest('dist/'))
    ;
});

gulp.task('watch', function() {
  gulp.watch(['src/*.js'], ['scripts']);
  gulp.watch(['src/*.scss'], ['sass']);
});