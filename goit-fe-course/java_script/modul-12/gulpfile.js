/* const gulp = require('gulp');

gulp.task('default', function() {
  // place code for your default task here
}); */


const gulp = require('gulp');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');

gulp.task('js', () => {
    gulp.src('./src/*.js')
    .pipe(babel({
          presets: ['env'],
        })) 
    .pipe(concat('script.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./dist'))
});