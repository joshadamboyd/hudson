var gulp    = require('gulp'),
    plugins = require('gulp-load-plugins')({ camelize: true });

var config = require('../../gulpconfig').images;

gulp.task('images', function() {
  return gulp.src(config.src)
    .pipe(plugins.changed(config.dest))
    .pipe(plugins.imagemin(config.imagemin))
    .pipe(gulp.dest(config.dest));
});
