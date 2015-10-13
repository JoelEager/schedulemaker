// Uses this tool: https://github.com/mishoo/UglifyJS2

var gulp = require('gulp');
var uglify = require('gulp-uglify');

gulp.task('default', function () {
    return gulp.src('assets/src/**/*.js')	// Select all javascript files
        .pipe(uglify({						// Configure options
						mangle: false,
						compress: false,		//Don't aggressively compress the code please
						output: {
							beautify: true,		//Makes it look nicer
							bracketize: true,	//Always use brackets for code blocks
							comments: true,		//Keep comments (duh)
						}
					 }))
        .pipe(gulp.dest('assets/src/'));
});