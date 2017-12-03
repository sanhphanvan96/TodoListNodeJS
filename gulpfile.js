const gulp = require('gulp');
const nodemon = require('gulp-nodemon');

const jsFiles = ['*.js', 'src/**/*.js'];

gulp.task('inject', function () {
    const wiredep = require('wiredep').stream;
    const options = {
        bowerJson: require('./bower.json'),
        directory: './public/lib'
    };
    return gulp.src('./src/views/*.html')
        .pipe(wiredep(options))
        .pipe(gulp.dest('./src/views'));
});

gulp.task('serve', function () {
    const options = {
        script: 'app.js',
        delayTime: 1,
        env: {
            'PORT': 5000
        },
        watch: jsFiles
    };
    return nodemon(options)
        .on('restart', function(ev){
            console.log('Restarting ... ');
        });
});
