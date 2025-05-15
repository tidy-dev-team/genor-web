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


const element = document.getElementById('runningText');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        const ratio = entry.intersectionRatio;

        // Log the visibility percentage
        console.log(`Visible: ${(ratio * 100).toFixed(2)}%`);

        // Example: Update an animation progress (0 to 1 scale)
        updateAnimationProgress(ratio);
    });
}, {
    threshold: Array.from({ length: 101 }, (_, i) => i / 100) // 0.00, 0.01, ..., 1.00
});

if (element) {
    observer.observe(element);
}

function updateAnimationProgress(progress) {
    const animation = element.animate([
        { opacity: 0, transform: 'translateY(50px)' },
        { opacity: 1, transform: 'translateY(0)' }
    ], {
        duration: 1000,
        fill: 'forwards'
    });

    animation.pause();
    if (element.getBoundingClientRect().top < 0) {
        animation.currentTime = 100000;
    } else {
        animation.currentTime = progress * 1000;
    }
}