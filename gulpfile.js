let gulp = require('gulp');
let server = require('gulp-develop-server');
let serverFile = './src/server.js';
let del = require('del');

gulp.task('watch', () => {
  gulp.watch('./src/**/*.js', server.restart);
});

gulp.task('start', () => {
  server.listen({
    path: serverFile
  })
});

gulp.task('clean', () => {
  del([
    './src/views/*',
    './src/static/**/*'
  ])
});

gulp.task('serve', ['start', 'watch']);