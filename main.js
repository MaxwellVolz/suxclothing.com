main_loop_duration = 2400

var animation = anime({
    targets: '#empty_rect',
    translateX: 10,
    borderRadius: ['0%', '50%'],
    delay: function (el, i) { return i * 100; },
    // direction: 'alternate',
    // loop: true,
    autoplay: false,
    easing: 'easeInOutSine'
});

document.querySelector('#empty_rect').onclick = animation.play;

function animate_polygon_test() {
    console.log("hello!")
    polygon.play();
}

var polygon = anime({
    targets: '#empty_polygon',
    points: [
        { value: '45,45 45,55 55,55 55,45' },
        { value: '45,55 55,55 55,45 45,45' },
        { value: '55,55 55,45 45,45 45,55' },
        { value: '55,45 45,45 45,55 55,55' },
        { value: '45,45 45,55 55,55 55,45' }
    ],
    stroke: [
        'rgb(0, 0, 0)',
        'rgb(100, 255, 255)',
        'rgb(255, 100, 255)',
        'rgb(255, 255, 0)',
        'rgb(0, 0, 0)'
    ],
    // translateX: 10,
    delay: function (el, i) { return i * 100; },

    // borderRadius: ['0%', '50%'],
    // delay: function(el, i) { return i * 100; },
    // direction: 'alternate',
    // loop: true,
    duration: 2000,
    autoplay: false,
    easing: 'easeInOutSine'
});

window.onload = function () {
    document.querySelector('#play_btn').onclick = animate_polygon_test;
};

var targetElm = document.querySelector('.building')


var svg = document.getElementsByTagName('svg')[0]; //Get svg element


// function sliderChange(val) {
//     document.getElementById('sliderVal').innerHTML = val;
//     // console.log(val)

//     drawTrees(val)
// }

drawTrees(21)

function drawTrees(amount_of_trees){
    jitter = 2;
    xPos = 0;

    for (i = 0; i < amount_of_trees; i++) {
        xPos = i*5+ (Math.floor(Math.random() * jitter*2) - jitter);

        // make_tree('g.treeLayer', xPos, 87, 3);
    }
}

function removeElementsByClass(className){
    const elements = document.getElementsByClassName(className);
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
}

var muni_bus = anime({
    targets: '#muni_1',
    translateX: [-50, -50, -150,-150,-220],
    delay: function (el, i) { return i * 100; },
    // direction: 'alternate',
    duration: 10000,
    loop: true,
    autoplay: true,
    easing: 'easeInOutSine'
})