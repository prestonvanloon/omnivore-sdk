const gulp = require('gulp');
const del = require('del');
const swagger = require('gulp-swagger');

gulp.task('clean', function() {
    return del(['dist']);
});

const swaggerInput = 'swagger/swagger.yaml';
const swaggerOutput = 'swagger.json';
const swaggerDest = './dist';

gulp.task('swagger', ['clean'], function() {
  return gulp.src(swaggerInput)
    .pipe(swagger(swaggerOutput))
    .pipe(gulp.dest(swaggerDest));
});
