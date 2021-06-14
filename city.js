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

    // enter station
    tl.add({
        targets: 'g#bart',
        translateX: -1748,
    })

    // open doors
    tl.add({
        targets: 'g#bart > g > rect:first-child',
        translateX: -20,
        duration: 200,
        easing: 'easeInQuad',

    },'+=200')
    tl.add({
        targets: 'g#bart > g > rect:nth-child(2)',
        translateX: 20,
        duration: 200,
        easing: 'easeInQuad',
    },'-=200')

    // close doors
    tl.add({
        targets: 'g#bart > g > rect:first-child',
        translateX: 0,
        duration: 400,
        easing: 'easeOutQuad',
    },'+=2000')
    tl.add({
        targets: 'g#bart > g > rect:nth-child(2)',
        translateX: 0,
        duration: 400,
        easing: 'easeOutQuad',
    },'-=400')

    // exit station
    tl.add({
        translateX: -3500,
        easing: 'easeInQuad',
    },'+=1200')


    // bg bart
    var tl2 = anime.timeline({
        targets: `g#bart_x5F_bg`,
        easing: 'easeOutQuad',
        duration: 2000,
        loop: true,
        delay: 5000
    });

    // enter station
    tl2.add({
        translateX: -2050,
    },'+=2500')



};