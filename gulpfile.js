let gulp = require('gulp');
let server = require('gulp-develop-server');
let serverFile = './src/app/server.js';

gulp.task('watch', () => {
  gulp.watch('./src/app/**/*.js', server.restart);
});

gulp.task('start', () => {
  server.listen({
    path: serverFile
  })
});

gulp.task('serve', ['start', 'watch']);