'use strict';

const gulp = require('gulp'),
	  sass = require('gulp-sass');

// Função de compilacão do sass.
async function compilarSass() {
	await gulp.src('src/css/sass/*.scss')
			  .pipe(sass())
			  .pipe(gulp.dest('build/css'))
}

// Funcão para o watch.
async function watchSass(){
	await gulp.watch('src/css/sass/*.scss', gulp.series('sass'))
}

// Executando nossas funcões com gulp.
gulp.task('sass', compilarSass);
gulp.task('watch', watchSass);
gulp.task('default', gulp.series('sass','watch'));