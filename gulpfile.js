const gulp = require('gulp'), 
      sass = require('gulp-sass'),
      browserSync = require('browser-sync'),
      concat = require('gulp-concat'),
      uglify = require('gulp-uglifyjs'),
      cssnano = require('gulp-cssnano'),
      rename = require('gulp-rename'),
      del = require('del'), 
      imagemin = require('gulp-imagemin'), 
      pngquant = require('imagemin-pngquant'), 
      cache = require('gulp-cache'),
      autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function(){ 
    return gulp.src('app/scss/**/*.scss') 
        .pipe(sass()) 
        .pipe(autoprefixer(
            'last 15 versions')) 
        .pipe(gulp.dest('app/css')) 
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('browser-sync', function() { 
    browserSync({ 
        server: {
            baseDir: 'app' 
        },
        notify: false 
    });
});

gulp.task('scripts', function() {
    return gulp.src('app/js/script.js')
        .pipe(concat('main.js')) 
        .pipe(uglify()) 
        .pipe(gulp.dest('app/js'))
        .pipe(browserSync.reload({stream: true})); 
});


gulp.task('css-libs', gulp.parallel('sass', function() {
    return gulp.src('app/libs/normalize/*.css') 
        .pipe(cssnano())
        .pipe(rename('libs.css'))
        .pipe(gulp.dest('app/css')); 
}));




gulp.task('watch', gulp.parallel('browser-sync', 'sass', function() {
    gulp.watch('app/scss/**/*.scss', gulp.series('sass')); 
    gulp.watch('app/*.html', browserSync.reload() ); 
    gulp.watch('app/js/**/*.js', gulp.series('scripts'));  
}));

gulp.task('clean', function() {
    return del.sync('./dist'); 
});

gulp.task('img', function() {
    return gulp.src('app/img/**/*') 
        .pipe(cache(imagemin({  
            interlaced: true,
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        })))
        .pipe(gulp.dest('dist/img')); 
});

gulp.task('build', gulp.parallel('clean', 'img', 'sass', 'scripts', function() {

    var buildCss = gulp.src('app/css/*.css')
    .pipe(gulp.dest('dist/css'));

    var buildFonts = gulp.src('app/fonts/**/*') 
    .pipe(gulp.dest('dist/fonts'));

    var buildJs = gulp.src('app/js/main.js') 
    .pipe(gulp.dest('dist/js'));

    var buildHtml = gulp.src('app/*.html') 
    .pipe(gulp.dest('dist'));

}));

gulp.task('clear', function () {
    return cache.clearAll();
})

gulp.task('default', gulp.series('watch'));
