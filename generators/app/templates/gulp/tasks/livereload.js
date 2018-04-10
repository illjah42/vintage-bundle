'use strict';

const gulp        = require('gulp');
const browserSync = require('browser-sync').create();

/**
 * Start browsersync server
 */
gulp.task('livereload', () => {
  browserSync.init({
    server: { baseDir: 'www' },
    reloadDebounce: 4,
    logPrefix: 'Vintage',
    notify: false
  });
});

/**
 * Task for browser reloading
 */
gulp.task('reload-browsers', () => {
  browserSync.reload();
})

module.exports = browserSync; // export for styles sreaming
