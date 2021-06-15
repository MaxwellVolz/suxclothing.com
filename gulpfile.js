const { src, dest , watch } = require('gulp');
var gulp = require('gulp');
const replace = require('gulp-replace');
var serve = require('gulp-serve');
fs = require("fs")
var htmlbeautify = require('gulp-html-beautify');

target_html = 'city.html'
var format_options = {indentSize: 2};

function update_city_svg(file_path) {
    var svg_anchor = file_path.split('/')[1].split('.svg')[0]
    console.log('REGEX replacing: ' + svg_anchor + ' with:' + file_path)

    var find_replace_regex = new RegExp(`(?<=\<!-- ${svg_anchor}.svg -->)((.|\n)*)(?=\<!-- \/${svg_anchor}.svg -->)`, 'g') 

    // get svg
    var fileContent = fs.readFileSync(file_path);
    var dataArr = fileContent.toString('utf8').split('xml:space="preserve">');  
    var svg_inner = dataArr[1].split('</svg>')[0]

  return src(['city.html'])
    .pipe(replace(find_replace_regex, svg_inner))
    // .pipe(replace(/(?<=\<!-- city.svg -->)((.|\n)*)(?=\<!-- \/city.svg -->)/g, svg_inner))
    .pipe(htmlbeautify(format_options))
    .pipe(dest('build/'));
};

function update_city(){

    svg_folder = 'svgs/'
    new_city = src(['city.html'])

    fs.readdir(svg_folder, (err, files) => {
        files.forEach(file => {
        console.log(file);
        file_path = svg_folder + file


        console.log('REGEX replacing: ' + file)

        var find_replace_regex = new RegExp(`(?<=\<!-- ${file} -->)((.|\n)*)(?=\<!-- \/${file} -->)`, 'g') 

        // get svg
        var fileContent = fs.readFileSync(file_path);
        var dataArr = fileContent.toString('utf8').split('xml:space="preserve">');  
        var svg_inner = dataArr[1].split('</svg>')[0]

        new_city = new_city
            .pipe(replace(find_replace_regex, svg_inner))
            // .pipe(replace(/(?<=\<!-- city.svg -->)((.|\n)*)(?=\<!-- \/city.svg -->)/g, svg_inner))
            .pipe(htmlbeautify(format_options))
            .pipe(dest('build/'));
        });
    });
    return new_city

}

exports.default = function() {
    // watch('ai/*.svg').on('change', function (file) {
    //     update_city_svg(file)
    // });

    watch('svgs/*.svg').on('change', function (file) {
        update_city()
        // cb()
    });

};

gulp.task('serve-build', serve(['public', 'build']));
