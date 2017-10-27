const gulp = require('gulp')
const stylus = require('gulp-stylus')
const pug = require('gulp-pug');
const browserSync = require('browser-sync').create()
const reload = browserSync.reload;

gulp.task('styles', () => {
  gulp.src('./stylus/style.styl')
    .pipe(stylus())
    .pipe(gulp.dest('./css/'))
    .pipe(browserSync.reload({
      stream:true
    }))
})
gulp.task('views', () => {
  gulp.src('./views/*.pug')
    .pipe(pug({
      pretty: true
    }))
    .pipe(gulp.dest('./'))
    .pipe(browserSync.reload({
      stream:true
    }))
})
gulp.task('browser-sync', () => {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  })
})
gulp.task('watch', ['browser-sync', 'styles', 'views'], () => {
  gulp.watch('./stylus/*.styl', ['styles'])
  gulp.watch('./views/*.pug', ['views'])
  gulp.watch("*.html").on("change", reload) 
  // gulp.watch(['./script/src/*.js'], ['babel']).on('change', reload)
})