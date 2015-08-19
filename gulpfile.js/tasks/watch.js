var gulp    = require('gulp'),
    plugins = require('gulp-load-plugins')({ camelize: true });

var config = require('../../gulpconfig').watch;

gulp.task('watch', ['browsersync'], function() {
  gulp.watch(config.src.bower, ['bower']);
  gulp.watch(config.src.copy, ['copy']);
  gulp.watch(config.src.images, ['images']);
  gulp.watch(config.src.javascripts, ['javascripts']);
  gulp.watch(config.src.stylesheets, ['stylesheets']);
  gulp.watch(config.src.php, ['php']);
  gulp.watch(config.src.languages, ['languages']);
});
