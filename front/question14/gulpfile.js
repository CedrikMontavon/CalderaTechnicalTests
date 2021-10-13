const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const del = require('del');

const srcFolder = './src/main.scss';
const destFolder = './dist/css/';

gulp.task('styles', () => {
    return gulp.src(srcFolder)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(destFolder));
});

gulp.task('clean', () => {
    return del([
        './dist/css/*.css',
    ]);
});

gulp.task('default', gulp.series(['clean', 'styles']));

gulp.task('watch', function () {
   gulp.watch(srcFolder, gulp.series('styles'));
});