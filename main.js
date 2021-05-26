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

drawTrees(20)

function drawTrees(amount_of_trees){
    console.log("Amount of Trees:", amount_of_trees)

    var tree_layer = document.querySelector('g.treeLayer')

    jitter = 2;
    xPos = 0;

    removeElementsByClass("tree");

    for (i = 0; i < amount_of_trees; i++) {
        xPos = i*5+ (Math.floor(Math.random() * jitter*2) - jitter);

        // Draw Tree Trunk
        var newElement = document.createElementNS("http://www.w3.org/2000/svg", 'path'); //Create a path in SVG's namespace
        newElement.setAttribute("d",`M${xPos},81 ${xPos},87`); //Set path's data
        newElement.style.stroke = "#765c48"; //Set stroke colour
        newElement.style.strokeWidth = "1px"; //Set stroke width
        newElement.classList.add("tree");

        // Draw Tree Top
        var treeTop = document.createElementNS("http://www.w3.org/2000/svg", 'circle'); //Create a path in SVG's namespace
        treeTop.setAttribute('cy', 80)
        treeTop.setAttribute('cx', xPos)
        treeTop.setAttribute('r', 3)
        treeTop.style.fill = "green";
        
        tree_layer.appendChild(newElement);
        tree_layer.appendChild(treeTop);

        // tree_layer.parentNode.insertBefore(newElement, tree_layer);
        // tree_layer.parentNode.insertBefore(treeTop, tree_layer);
    }
}

// (value - 0) * (y2 - x2) / (y1 - x1) + x2;    

function removeElementsByClass(className){
    const elements = document.getElementsByClassName(className);
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
}

var moving_car = anime({
    targets: '.car',
    translateX: -110,
    delay: function (el, i) { return i * 100; },
    // direction: 'alternate',
    duration: 10000,
    loop: true,
    autoplay: true,
    easing: 'easeInOutSine'
})