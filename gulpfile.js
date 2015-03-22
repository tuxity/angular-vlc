var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    minifyCSS = require('gulp-minify-css'),
    ngAnnotate = require('gulp-ng-annotate'),
    html2js = require('gulp-html2js'),
    gulpFilter = require('gulp-filter');

var filter = gulpFilter('*.html');

gulp.task('build', function() {
  gulp.src('src/*.css')
    .pipe(concat('angular-vlc.css'))
    .pipe(gulp.dest('./dist'))
    .pipe(minifyCSS())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('./dist'));
  gulp.src(['src/*.js', 'src/*.html'])
    .pipe(filter)
    .pipe(html2js({outputModuleName: 'kdarcel.vlc-player.tpl'}))
    .pipe(concat('tmp-template.js'))
    .pipe(filter.restore())
    .pipe(concat('angular-vlc.js'))
    .pipe(ngAnnotate())
    .pipe(gulp.dest('./dist'))
    .pipe(uglify())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('./dist'));
});

gulp.task('default', ['build']);
