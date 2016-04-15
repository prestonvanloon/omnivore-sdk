const gulp = require('gulp');
const del = require('del');
const swagger = require('gulp-swagger');

gulp.task('clean', function() {
    return del(['dist']);
});

gulp.task('swagger', ['clean'], function() {
    return gulp.src('swagger/swagger.yaml')
        .pipe(swagger('swagger.json'))
        .pipe(gulp.dest('./dist'));
});
