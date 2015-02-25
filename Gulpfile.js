var gulp = require('gulp'),
    babel = require("gulp-babel"), //For converting ES6 to ES5
    source = require('vinyl-source-stream'),
    uglify = require('gulp-uglify'), //Minify JS
    buffer = require('vinyl-buffer'),
    browserify = require('browserify'), //Bundle JS
    sass = require('gulp-sass'), //Converting Sass to CSS
    rename = require('gulp-rename'), //Renaming of files
    server = require('gulp-express'); //Plugin for Express app-server
    //browserSync = require('browser-sync');

var devPaths = {
  app: {
    js: {
      path: 'app/js',
      //components: 'dist_ES5/components',
      client: 'dist_ES5/client.js'
    },
    sass: {
      path: 'app/sass'
    },
    views: {
      path: 'app/views'
    }
  },
  server: 'server.js',
  www: {
    js: 'www/js',
    css: 'www/css'
  },
  dist_ES5: {
    path: 'dist_ES5',
    //components: 'dist_ES5/components'
  }
};

//Starts the server
gulp.task('server', function() {
  server.run(['serverES5.js']);
});

//Builds Sass to a single CSS file
gulp.task('build_css', function() {
  gulp.src(devPaths.app.sass.path+'/todoApp.scss')
    .pipe(sass())
    .pipe(rename('app.css'))
    .pipe(gulp.dest(devPaths.www.css));
    //.pipe(browserSync.reload({stream: true}));
});

gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: "./www/"
        }
    });
});

//Produces a single js file for the browser with all app dependencies
gulp.task('build_js', function() {
  browserify('./'+devPaths.app.js.client, {debug: true})
    .ignore("babel/polyfill")
    .bundle()
    .pipe(source('app.js'))
    .pipe(buffer())
    .pipe(uglify())
    .pipe(gulp.dest(devPaths.www.js));
});

//Converts ES6 syntacs in JS files to ES5 syntacs
gulp.task('es5ify', function() {
  gulp.src([devPaths.app.js.path+'/**/*.js'])
    .pipe(babel())
    .pipe(gulp.dest(devPaths.dist_ES5.path));

  gulp.src(devPaths.server)
    .pipe(babel())
    .pipe(rename('serverES5.js'))
    .pipe(gulp.dest('.'));
});

//Wathces changes on files and executes task when changes are detected
gulp.task('watch', function() {
  gulp.watch([devPaths.server], ['es5ify', 'server']);
  gulp.watch([devPaths.app.js.path+'/client.js', devPaths.app.js.path+'/**/*.js'], ['es5ify', 'build_js', 'server']);
  gulp.watch([devPaths.app.sass.path+'/*.scss'], ['build_css']);
});

//Default task. Run when gulp command is used
gulp.task('default', ['es5ify', 'build_js', 'build_css', 'server', 'watch']);
