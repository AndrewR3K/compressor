import gulp from 'gulp';
import gulpImagemin from 'gulp-imagemin';
import pngToJpef from 'png-to-jpeg'
import rename from 'gulp-rename';

console.log('starting!')

gulp.src('old/*')
	.pipe(gulpImagemin([
		pngToJpef({quality: 50}),
	], {verbose: true}))
	.pipe(rename(function (path) {
		// Updates the object in-place
		path.extname = ".jpg";
	  }))
	.pipe(gulp.dest('new'))