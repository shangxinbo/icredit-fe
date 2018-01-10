
let path = require('path')
let del = require('del')
let gulp = require('gulp')
let freemarker = require('gulp-freemarker')
let changed = require('gulp-changed')
let browerSync = require('browser-sync')
let replace = require('gulp-replace')
let cssmin = require('gulp-cssmin')

let BASE_PATH = __dirname + '/'
let VIEWS_PATH = 'views'
let OUT_PATH = 'html'

let config = {
    paths: {
        base: BASE_PATH,
        output: OUT_PATH,
        pages: VIEWS_PATH,
        viewRoot: path.join(BASE_PATH, VIEWS_PATH).replace(/\\/g, '/'),
        ftl: VIEWS_PATH + '/**/*.ftl',
        mock: 'mock/**/*.json',
        release:'dist'
    }
}

gulp.task('clean-output', function () {
    del.sync([
        config.paths.output + '/**/*.html'
    ])
})

gulp.task('praseFTL', function () {
    gulp.src(config.paths.mock)
        .pipe(changed(config.paths.output))
        .pipe(freemarker({
            viewRoot: config.paths.viewRoot,
            options: {}
        }))
        .pipe(gulp.dest(config.paths.output))
})

gulp.task('default', ['clean-output','praseFTL'], function(){
    browerSync({
        port: 9000,
        server: {
            baseDir: './',
            directory: true
        }
    })
    gulp.watch([config.paths.ftl, config.paths.mock], ['praseFTL'])
    gulp.watch(['*/**/*.html'], { cwd: 'html' }, browerSync.reload)
})


gulp.task('release',()=>{
    gulp.src(config.paths.ftl)
        .pipe(replace('/static/css/', '//storage.jd.com/blue-whale/css/'))
        .pipe(replace('/static/js/', '/js/'))
        .pipe(gulp.dest(config.paths.release+'/tpl'))

    gulp.src('static/css/**/*.css')
        .pipe(cssmin())
        .pipe(gulp.dest(config.paths.release+'/css'))

    gulp.src('static/css/i/**/*.*')
        .pipe(gulp.dest(config.paths.release+'/css/i'))
})