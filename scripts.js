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
let hasAnimated = false; // track if the animation already ran

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        const ratio = entry.intersectionRatio;

        // Log the visibility percentage
        console.log(`Visible: ${(ratio * 100).toFixed(2)}%`);

        // Only run animation once when at least 10% visible
        if (!hasAnimated && ratio >= 0.1) {
            runAnimation();
            hasAnimated = true;

            // Optional: unobserve if you don’t need it anymore
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: Array.from({ length: 101 }, (_, i) => i / 100) // 0.00, 0.01, ..., 1.00
});

if (element) {
    observer.observe(element);
}

function runAnimation() {
    element.animate([
        { opacity: 0, transform: 'translateY(50px)' },
        { opacity: 1, transform: 'translateY(0)' }
    ], {
        duration: 1000,
        fill: 'forwards'
    });
}