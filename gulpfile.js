const { src, dest , watch } = require('gulp');
var gulp = require('gulp');
const replace = require('gulp-replace');
var serve = require('gulp-serve');
fs = require("fs")


function update_city_svg() {
    // get svg
    var fileContent = fs.readFileSync("ai/Untitled-1.svg");
    var dataArr = fileContent.toString('utf8').split('xml:space="preserve">');  
    var svg_inner = dataArr[1].split('</svg>')[0]
    // console.log(svg_inner)
    

  return src(['city.html'])
    .pipe(replace(/(?<=\<!-- city.svg -->)((.|\n)*)(?=\<!-- \/city.svg -->)/g, svg_inner))
    // .pipe(replace('dodaddd', 'heya'))
    .pipe(dest('build/'));
};


exports.default = function() {
    // You can use a single task
    watch('ai/*.svg', update_city_svg);
};

gulp.task('serve-build', serve(['public', 'build']));
