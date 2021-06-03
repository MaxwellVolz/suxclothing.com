window.onload = function () {

    var circle_group = document.querySelector('g#lights');
    amt_of_lights = circle_group.childElementCount;

    duration =  amt_of_lights * 300;
    console.log(amt_of_lights, duration);

    // console.log(duration)

    one_time = true;

    // var tl = anime.timeline({
    //     easing: 'spring(1, 80, 10, 0)',
    //     // duration: 1000,
    //     loop: true,
    //     // direction: 'alternate',

    //   });

    //   tl.add({
    //     targets: `g#lights circle:nth-child(1)`,
    //     fill: ['#FFF','#999','#FFF'],
    //     opacity: [0,1,0],
    //     r: [.2,.8,.2],
    //     // delay: anime.stagger(100), // increase delay by 100ms for each elements.,
    //     // delay: anime.stagger(0, {start: i*10}),
    //     duration: duration,
    //   });


    anime({
        targets: `g#lights circle`,
        fill: ['#FFF','#999','#FFF'],
        opacity: [0,1,0],
        r: [.2,.8,.2],
        // delay: anime.stagger(100), // increase delay by 100ms for each elements.,
        delay: anime.stagger(100),
        // delay: anime.stagger(100, {start: i*10}),
        duration: amt_of_lights * 100 * 3,
        direction: 'alternate',
        loop: true
    });

    for (i = 1; i < amt_of_lights+1; i++) {

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