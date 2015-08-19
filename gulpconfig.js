var project  = 'hudson', // theme name for dist
    src      = './src/',
    build    = './build/', // Development
    dist     = './dist/' + project + '/', // Production
    bower    = './bower_components/',
    composer = './vendor/';

var ext = {
  images:      src + '**/*(*.png|*.jpg|*.jpeg|*.gif)',
  javascripts: [
    src + '**/*(*.js|*.coffee)',
    bower + '**/*(*.js|*.coffee)'
  ],
  stylesheets: [
    src + '**/*(*.css|*.scss|*.sass)',
    bower + '**/*(*.css|*.scss|*.sass)'
  ],
  php:         src+'**/*.php',
  languages:   src + 'languages/**/*(*.mo|*.po|*.pot)'
}

module.exports = {
  bower: {
    modernizr: {
      src: bower + 'modernizr/modernizr.js',
      dest: build + 'js',
      rename: 'modernizr.js'
    },
    html5shiv: {
      src: bower + 'html5shiv/dist/html5shiv.min.js',
      dest: build + 'js',
      rename: 'html5.js'
    }
  },

  copy: {
    js: {
      src: [
        src + 'js/color-scheme-control.js',
        src + 'js/customize-preview.js',
        src + 'js/keyboard-image-navigation.js'
      ],
      dest: build + 'js'
    }
  },

  browsersync: {
    files: [
      build + '/**',
      '!' + build + '/**.map'
    ],
    notify: false,
    open: false,
    port: 3000,
    proxy: 'localhost:8080',
    watchOptions: {
      debounceDelay: 2000
    }
  },

  images: {
    src: ext.images,
    imagemin: {
      optimizationLevel: 7,
      progressive: true,
      interlaced: true
    },
    dest: build
  },

  javascripts: {
    src: [
      bower + 'jquery/dist/jquery.min.js',
      src + 'assets/javascripts/skip-link-focus-fix.js',
      src + 'assets/javascripts/functions.js',
      src + 'assets/javascripts/scripts.js'
    ],
    dest: build + 'js/',
    name: 'scripts.js',
    minify: {
      src: [build + 'js/**/*.js'],
      uglify: {},
      dest: build + 'js/'
    }
  },

  stylesheets: {
    files: {
      style: {
        src: [
          src + 'styles.scss',
          src + 'genericons/genericons.css'
        ],
        dest: build,
        name: 'style.css',
        autoprefixer: {
          browsers: ['> 3%', 'last 2 versions', 'ie 9', 'ios 6', 'android 4']
        }
      },
      rtl: {
        src: [
          src + 'rtl.scss'
        ],
        dest: build,
        name: 'rtl.css',
        autoprefixer: {
          browsers: ['> 3%', 'last 2 versions', 'ie 9', 'ios 6', 'android 4']
        }
      },
      ie: {
        src: [
          src + 'css/ie.scss'
        ],
        dest: build + 'css/',
        name: 'ie.css',
        autoprefixer: {
          browsers: ['> 3%', 'last 2 versions', 'ie 9', 'ios 6', 'android 4']
        }
      },
      ie7: {
        src: [
          src + 'css/ie7.scss'
        ],
        dest: build + 'css/',
        name: 'ie7.css',
        autoprefixer: {
          browsers: ['> 3%', 'last 2 versions', 'ie 9', 'ios 6', 'android 4']
        }
      },
      editor: {
        src: [
          src + 'css/editor-style.scss'
        ],
        dest: build + 'css/',
        name: 'editor-style.css',
        autoprefixer: {
          browsers: ['> 3%', 'last 2 versions', 'ie 9', 'ios 6', 'android 4']
        }
      }
    },
    compiler: 'libsass',
    minify: {
      keepSpecialComments: 1,
      roundingPrecision: 3
    },
    libsass: {
      includePaths: [bower],
      precision: 6,
      onError: function(err) {
        return console.log(err);
      }
    }
  },

  languages: {
    src: ext.languages,
    dest: build + 'languages/'
  },

  php: {
    src: ext.php,
    dest: build
  },

  watch: {
    src: {
      images:      ext.images,
      javascripts: ext.javascripts,
      stylesheets: ext.stylesheets,
      php:         ext.php,
      languages:   ext.languages
    },
    watcher: 'browsersync'
  }
};
