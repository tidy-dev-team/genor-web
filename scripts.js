function scrollEnd(e) {
    if (e.target.scrollHeight - e.target.scrollTop < 1000) {
        console.log("done");
        var x = e.target.querySelectorAll(".collapse");
        var i;
        for (i = 0; i < x.length; i++) {
            x[i].style.padding = "0";
        }
        e.target.style.gap = "16px";
    }
}

function tabFunc(e) {
    var x = e.target.parentElement.querySelectorAll(".tab");
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].classList.remove('active');
    }
    e.target.classList.add('active');

}


// const element = document.getElementById('runningText');

// const observer = new IntersectionObserver((entries) => {
//     entries.forEach(entry => {
//         const ratio = entry.intersectionRatio;

//         // Log the visibility percentage
//         console.log(`Visible: ${(ratio * 100).toFixed(2)}%`);

//         // Example: Update an animation progress (0 to 1 scale)
//         updateAnimationProgress(ratio);
//     });
// }, {
//     threshold: Array.from({ length: 101 }, (_, i) => i / 100) // 0.00, 0.01, ..., 1.00
// });

// if (element) {
//     observer.observe(element);
// }

// function updateAnimationProgress(progress) {
//     const animation1 = document.getElementById("mask-1").animate([
//         { width: '0px' },
//         { width: '1300px' }
//     ], {
//         duration: 300,
//         fill: 'forwards'
//     });
//     const animation2 = document.getElementById("mask-2").animate([
//         { width: '0px' },
//         { width: '1300px' }
//     ], {
//         duration: 300,
//         fill: 'forwards',
//         delay: 300
//     });
//     const animation3 = document.getElementById("mask-3").animate([
//         { width: '0px' },
//         { width: '1300px' }
//     ], {
//         duration: 300,
//         fill: 'forwards',
//         delay: 600
//     });
//     const animation4 = document.getElementById("mask-4").animate([
//         { width: '0px' },
//         { width: '1300px' }
//     ], {
//         duration: 300,
//         fill: 'forwards',
//         delay: 900
//     });

//     animation1.pause();
//     animation2.pause();
//     animation3.pause();
//     animation4.pause();
//     if (element.getBoundingClientRect().top < 0) {
//         animation1.currentTime = 100000;
//         animation2.currentTime = 100000;
//         animation3.currentTime = 100000;
//         animation4.currentTime = 100000;
//     } else {
//         animation1.currentTime = (progress * 1000);
//         animation2.currentTime = (progress * 1000);
//         animation3.currentTime = (progress * 1000);
//         animation4.currentTime = (progress * 1000);
//     }
// }

document.addEventListener('DOMContentLoaded', () => {
    const element = document.getElementById('runningText');

    function updateScrollProgress() {
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        const elementHeight = rect.height;
        const start = windowHeight;
        const end = -elementHeight;

        const progress = Math.min(Math.max((start - rect.top) / (start - end), 0), 1);

        console.log(`Scroll Progress: ${(progress * 100).toFixed(2)}%`);
        updateAnimationProgress(progress);
    }

    document.getElementById("wrapper").addEventListener('scroll', updateScrollProgress);
    document.getElementById("wrapper").addEventListener('resize', updateScrollProgress);
    updateScrollProgress(); // initial call
});

function updateAnimationProgress(progress) {
    document.getElementById("mask-1").style.width = `${(progress * 200).toFixed(2)}%`;
    document.getElementById("mask-2").style.width = `${(progress * 200).toFixed(2)}%`;

    // For testing, just log it or update something simple
    // const bar = document.getElementById('progressBar');
    // if (bar) {
    //     bar.style.width = `${(progress * 100).toFixed(2)}%`;
    // }
}