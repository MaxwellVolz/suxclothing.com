window.onload = function () {

    // fetch('https://api.coindesk.com/v1/bpi/historical/close.json')
    // .then(res => res.json())
    // .then((out) => {
    //     console.log('Output: ', out);
    // }).catch(err => console.error(err));

    var sky_box = document.querySelector('g#sky_box')

   
    anime({
        targets: `g#sky_box rect`,
        easing: 'easeInOutQuad',
        fill: ['rgb(225,248,255)', 'rgb(201,235,255)', 'rgb(171,181,255)', 'rgb(116,117,182)', 'rgb(81,72,178)','rgb(60,50,170)','rgb(0, 26, 38)'],
        delay: function (el, i) { return i * 500 },
        // delay: anime.stagger(2000),
        duration: 20000,
        loop: true,
        direction: 'alternate',
    });


    var tl = anime.timeline({
        targets: `g#bart`,
        easing: 'easeOutQuad',
        duration: 2000,
        loop: true
    });

    tl.add({
        targets: 'g#bart',
        translateX: -1748,
    })

    tl.add({
        translateX: -3500,
        easing: 'easeOutQuad',
    },'+=3000')


};