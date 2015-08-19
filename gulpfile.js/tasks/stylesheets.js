var gulp         = require('gulp'),
    util         = require('gulp-util'),
    plugins      = require('gulp-load-plugins')({ camelize: true }),
    autoprefixer = require('autoprefixer-core');

var config = require('../../gulpconfig').stylesheets.files

gulp.task('stylesheets-style', function() {
  return gulp.src(config.style.src)
    .pipe(plugins.sourcemaps.init())
    .pipe(plugins.sass(config.libsass))
    .pipe(plugins.postcss([autoprefixer(config.style.autoprefixer)]))
    .pipe(plugins.sourcemaps.write())
    .pipe(plugins.minifyCss(config.minify))
    .pipe(plugins.concat(config.style.name))
    .pipe(gulp.dest(config.style.dest));
});

gulp.task('stylesheets-rtl', function() {
  return gulp.src(config.rtl.src)
    .pipe(plugins.sourcemaps.init())
    .pipe(plugins.sass(config.libsass))
    .pipe(plugins.postcss([autoprefixer(config.rtl.autoprefixer)]))
    .pipe(plugins.sourcemaps.write())
    .pipe(plugins.minifyCss(config.minify))
    .pipe(plugins.concat(config.rtl.name))
    .pipe(gulp.dest(config.rtl.dest));
});

gulp.task('stylesheets-ie', function() {
  return gulp.src(config.ie.src)
    .pipe(plugins.sourcemaps.init())
    .pipe(plugins.sass(config.libsass))
    .pipe(plugins.postcss([autoprefixer(config.ie.autoprefixer)]))
    .pipe(plugins.sourcemaps.write())
    .pipe(plugins.minifyCss(config.minify))
    .pipe(plugins.concat(config.ie.name))
    .pipe(gulp.dest(config.ie.dest));
});

gulp.task('stylesheets-ie7', function() {
  return gulp.src(config.ie7.src)
    .pipe(plugins.sourcemaps.init())
    .pipe(plugins.sass(config.libsass))
    .pipe(plugins.postcss([autoprefixer(config.ie7.autoprefixer)]))
    .pipe(plugins.sourcemaps.write())
    .pipe(plugins.minifyCss(config.minify))
    .pipe(plugins.concat(config.ie7.name))
    .pipe(gulp.dest(config.ie7.dest));
});

gulp.task('stylesheets-editor', function() {
  return gulp.src(config.editor.src)
    .pipe(plugins.sourcemaps.init())
    .pipe(plugins.sass(config.libsass))
    .pipe(plugins.postcss([autoprefixer(config.editor.autoprefixer)]))
    .pipe(plugins.sourcemaps.write())
    .pipe(plugins.minifyCss(config.minify))
    .pipe(plugins.concat(config.editor.name))
    .pipe(gulp.dest(config.editor.dest));
});

gulp.task('stylesheets', ['stylesheets-style', 'stylesheets-rtl', 'stylesheets-ie', 'stylesheets-ie7', 'stylesheets-editor']);
