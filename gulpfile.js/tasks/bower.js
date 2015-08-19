var gulp    = require('gulp'),
    plugins = require('gulp-load-plugins')({ camelize: true });

var config  = require('../../gulpconfig').bower;

gulp.task('bower-modernizr', function() {
  return gulp.src(config.modernizr.src)
    .pipe(plugins.changed(config.modernizr.dest))
    .pipe(plugins.rename(config.modernizr.rename))
    .pipe(gulp.dest(config.modernizr.dest));
});

gulp.task('bower', ['bower-modernizr']);
