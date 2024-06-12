const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"))
const sourceMaps = require("gulp-sourcemaps");
const uglify = require("gulp-uglify")
const imagemin = require("gulp-imagemin")

function minifyImage() {
    return gulp.src('./source/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./build/images'));  
}
    exports.imagemin = minifyImage;

function compilaSass(){
    return gulp.src("./source/styles/*.scss")
    .pipe(sourceMaps.init())
    .pipe(sass({
        outputStyle: "compressed"
    }))
    .pipe(sourceMaps.write("./maps"))
    .pipe(gulp.dest("./build/styles"));
}

function comprimeJavaScript(){
    return gulp.src("./source/scripts/*js")
    .pipe(uglify())
    .pipe(gulp.dest("./build/scripts"))
}

exports.uglify = comprimeJavaScript
exports.sass = compilaSass
