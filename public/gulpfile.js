var gulp = require('gulp'),
	scss = require('gulp-sass'),
	clean = require('gulp-clean'),
	gulpSequence = require('gulp-sequence'),
	webpack = require('webpack'),
	webpackConfig = require('./webpack.config.js');


gulp.task('clean', function() {
	return gulp.src(['build'], {read: false})
		.pipe(clean());
})

gulp.task('webpack', function(cb) {
	webpack(webpackConfig,function(er,status) {
			cb();
	})
})

gulp.task('sass',function() {
	return gulp.src('scss/*.scss')
		.pipe(sass())
		.pipe(gulp.dest('build/css'));
})

gulp.task('default',gulpSequence('clean','webpack'));