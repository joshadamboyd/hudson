var gulp    = require('gulp'),
    plugins = require('gulp-load-plugins')({ camelize: true });

var config  = require('../../gulpconfig').bower;

gulp.task('bower-modernizr', function() {
  return gulp.src(config.modernizr.src)
    .pipe(plugins.changed(config.modernizr.dest))
    .pipe(plugins.rename(config.modernizr.rename))
    .pipe(gulp.dest(config.modernizr.dest));
});

gulp.task('bower-html5shiv', function() {
  return gulp.src(config.html5shiv.src)
    .pipe(plugins.changed(config.html5shiv.dest))
    .pipe(plugins.rename(config.html5shiv.rename))
    .pipe(gulp.dest(config.html5shiv.dest));
});

gulp.task('bower', ['bower-modernizr', 'bower-html5shiv']);
