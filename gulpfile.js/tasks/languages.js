var gulp    = require('gulp'),
    plugins = require('gulp-load-plugins')({ camelize: true });

var config = require('../../gulpconfig').languages;

gulp.task('languages', function() {
  return gulp.src(config.src)
    .pipe(plugins.changed(config.dest))
    .pipe(gulp.dest(config.dest));
});
