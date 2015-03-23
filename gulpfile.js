var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    minifyCSS = require('gulp-minify-css'),
    ngAnnotate = require('gulp-ng-annotate'),
    ngHtml2Js = require("gulp-ng-html2js"),
    gulpFilter = require('gulp-filter');

gulp.task('styles', function() {
  gulp.src('src/*.css')
    .pipe(concat('angular-vlc.css'))
    .pipe(gulp.dest('./dist'))
    .pipe(minifyCSS())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('./dist'));
});

gulp.task('templates', function() {
  return gulp.src('src/*.html')
    .pipe(ngHtml2Js({
      moduleName: "kdarcel.vlc-player.tpl"
    }))
    .pipe(gulp.dest("./tmp"));
});

gulp.task('javascript', ['templates'], function() {
  gulp.src(['src/*.js', 'tmp/*.js'])
    .pipe(concat('angular-vlc.js'))
    .pipe(ngAnnotate())
    .pipe(gulp.dest('./dist'))
    .pipe(uglify())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('./dist'));
});

gulp.task('build', ['styles', 'templates', 'javascript']);
gulp.task('default', ['build']);
