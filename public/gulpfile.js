var gulp = require('gulp'),
	sass = require('gulp-sass'),
	clean = require('gulp-clean'),
	gulpSequence = require('gulp-sequence'),
	webpack = require('webpack'),
	webpackConfig = require('./webpack.config.js'),
	minifycss = require('gulp-minify-css'),
	rev = require('gulp-rev'),
	concat = require('gulp-concat'),
	autoprefixer = require('gulp-autoprefixer'),
	replace = require('gulp-replace'),
	livereload = require('gulp-livereload'),
	imagemin = require('gulp-imagemin');


gulp.task('clean', function() {
	return gulp.src(['build'], {read: false})
		.pipe(clean());
})

gulp.task('webpack', function(cb) {
	var myConfig = Object.create(webpackConfig);

	webpack(myConfig,function(er,status) {
		cb();
	})
})

gulp.task('sass',function() {
	return gulp.src('scss/**/*.scss')
		.pipe(sass())
		.pipe(gulp.dest('css'));
})

// 压缩 css
gulp.task('css',function() {
	return gulp.src('css/*css')
		.pipe(autoprefixer({
			browsers: ['last 2 versions'],
			cascade: false
		}))
		.pipe(minifycss())   // 压缩
		.pipe(concat('style.css'))   // 合并
		//.pipe(rev())   // 重命名 md5
		.pipe(gulp.dest('build/css'));

})

// 压缩图片
gulp.task('imagemin', function() {
	return gulp.src('images/*.{jpg,png}')
		.pipe(imagemin())
		.pipe(gulp.dest('build/images'));
})

gulp.task('replace',function() {
	return gulp.src('view/*.html')
		.pipe(replace('../../css','../css'))
		.pipe(replace('../build/js','../js'))
		.pipe(gulp.dest('build/view'))
})

gulp.task('watch',function() {
	livereload.listen();
	gulp.watch(['scss/**/*.scss'],['sass']);
	gulp.watch(['css/**/*.css'],['css']);
	gulp.watch(['js/**/*.js'],['webpack']);
	gulp.watch(['view/**/*.html'],['replace']);
	gulp.watch(['build/**/*.*'],function() {
		livereload.changed('index.html');
	})
})

gulp.task('default',gulpSequence('clean','sass','css','imagemin','webpack','replace','watch'));