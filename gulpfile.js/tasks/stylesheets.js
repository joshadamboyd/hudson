var gulp         = require('gulp'),
    util         = require('gulp-util'),
    plugins      = require('gulp-load-plugins')({ camelize: true }),
    autoprefixer = require('autoprefixer-core');

var config = require('../../gulpconfig').stylesheets

gulp.task('stylesheets-style', function() {
  return gulp.src(config.src)
    .pipe(plugins.sourcemaps.init())
    .pipe(plugins.sass(config.libsass))
    .pipe(plugins.postcss([autoprefixer(config.autoprefixer)]))
    .pipe(plugins.sourcemaps.write())
    .pipe(plugins.minifyCss(config.minify))
    .pipe(plugins.concat('style.css'))
    .pipe(gulp.dest(config.dest));
});

gulp.task('stylesheets', ['stylesheets-style']);
