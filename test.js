window.onload = function () {

    // fetch('https://api.coindesk.com/v1/bpi/historical/close.json')
    // .then(res => res.json())
    // .then((out) => {
    //     console.log('Output: ', out);
    // }).catch(err => console.error(err));

    var sky_box = document.querySelector('g#sky_box')

    // var timeline = anime.timeline({
    //     targets: `g#sky_box rect`,
    //     // easing: 'spring(1, 80, 10, 0)',
    //     delay: function (el, i) { return i * 200 },
    //     loop: true,
    //     direction: 'alternate',
    // });

    // color_transition_time = 5000;

    // timeline.add({
    //     fill: 'rgb(225,248,255)',
    //     duration: color_transition_time,
    // },'-=1000')
    // timeline.add({
    //     fill: 'rgb(201,235,255)',
    //     duration: color_transition_time,
    // },'-=1000')
    // timeline.add({
    //     fill: 'rgb(171,181,255)',
    //     duration: color_transition_time,
    // },'-=1000')
    // timeline.add({
    //     fill: 'rgb(116,117,182)',
    //     duration: color_transition_time,
    // },'-=1000')
    // timeline.add({
    //     fill: 'rgb(81,72,178)',
    //     duration: color_transition_time,
    // },'-=1000')
    // timeline.add({
    //     fill: 'rgb(60,50,170)',
    //     duration: color_transition_time,
    // })
    // timeline.add({
    //     fill: 'rgb(30,25,150)',
    //     duration: color_transition_time,
    // },'-=1000')
    
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


    var circle_group = document.querySelector('g#lights');
    amt_of_lights = circle_group.childElementCount;

    duration = amt_of_lights * 300;
    console.log(amt_of_lights, duration);

    // console.log(duration)

    one_time = true;

    var tl = anime.timeline({
        targets: `g#lights circle`,
        easing: 'spring(1, 80, 10, 0)',
        delay: function (el, i) { return i * 200 },
        // duration: 1000,
        loop: true,
        // direction: 'alternate',
    });


    tl.add({
        fill: '#FFF',
        opacity: .8,
        r: .8
    })
        .add({
            fill: '#999',
            opacity: 0,
            r: .2,
        })

    //   tl.add({
    //     targets: `g#lights circle:nth-child(1)`,
    //     fill: ['#FFF','#999','#FFF'],
    //     opacity: [0,1,0],
    //     r: [.2,.8,.2],
    //     // delay: anime.stagger(100), // increase delay by 100ms for each elements.,
    //     // delay: anime.stagger(0, {start: i*10}),
    //     duration: duration,
    //   });


    // anime({
    //     targets: `g#lights circle`,
    //     fill: ['#FFF','#999','#FFF'],
    //     opacity: [0,1,0],
    //     r: [.2,.8,.2],
    //     // delay: anime.stagger(100), // increase delay by 100ms for each elements.,
    //     delay: anime.stagger(100),
    //     // delay: anime.stagger(100, {start: i*10}),
    //     duration: amt_of_lights * 100 * 3,
    //     // direction: 'alternate',
    //     loop: true
    // });



    for (i = 1; i < amt_of_lights + 1; i++) {

        // tl.add({
        //     targets: `g#lights circle:nth-child(${i})`,
        //     fill: ['#FFF','#999','#FFF'],
        //     opacity: [0,1,0],
        //     r: [.2,.8,.2],
        //     duration: duration,
        //     // direction: 'alternate',
        //     // loop: true
        // }, (i-1)*300)

        // anime({
        //     targets: `g#lights circle:nth-child(${i})`,
        //     fill: ['#FFF','#999','#FFF'],
        //     opacity: [0,1,0],
        //     r: [.2,.8,.2],
        //     // delay: anime.stagger(100), // increase delay by 100ms for each elements.,
        //     delay: anime.stagger(100),
        //     // delay: anime.stagger(100, {start: i*10}),
        //     duration: amt_of_lights * 100 * 3,
        //     direction: 'alternate',
        //     loop: true
        // });
    }


};