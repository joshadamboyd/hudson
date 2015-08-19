var gulp    = require('gulp'),
    plugins = require('gulp-load-plugins')({ camelize: true });

var config  = require('../../gulpconfig').copy;

gulp.task('copy-js', function() {
  return gulp.src(config.js.src)
    .pipe(plugins.changed(config.js.dest))
    .pipe(gulp.dest(config.js.dest));
});

gulp.task('copy', ['copy-js']);
