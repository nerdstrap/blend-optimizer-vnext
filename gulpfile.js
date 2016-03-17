'use strict';

var gulp = require('gulp');
var sass = require('gulp-ruby-sass');

gulp.task('sass', function () {
	return sass('./css/**/*.scss', {
		style: 'expanded'
	}).pipe(gulp.dest('./css'));
});
