var gulp = require('gulp');
var less = require('gulp-less');
var minifyCSS = require('gulp-minify-css');
var minify = require('gulp-minify');
var babel = require('gulp-babel');
// var watch = require('gulp-watch');
var jshint = require('gulp-jshint');

gulp.task('default', ['styles', 'scripts', 'fonts'], function() { });

gulp.task('styles', function () {
	return gulp.src('./less/**/*.less')
		.pipe(less())
		.pipe(minifyCSS())
		.pipe(gulp.dest('./dist/css'));
});

gulp.task('scripts', function () {
	return gulp.src('./js/**/*.js')
		.pipe(babel())
		.pipe(minify())
		.pipe(gulp.dest('./dist/js'));
});

gulp.task('fonts', function () {
	return gulp.src('./fonts/**/*')
		.pipe(gulp.dest('./dist/fonts'));
});

gulp.task('jshint', function() {
  gulp.src('./js/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});
