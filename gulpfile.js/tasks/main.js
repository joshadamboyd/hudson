var gulp = require('gulp');

// Build and watch
gulp.task('default', ['build', 'watch']);

// Build but do not watch
gulp.task('build', ['bower', 'images', 'javascripts', 'stylesheets', 'php', 'languages']);
