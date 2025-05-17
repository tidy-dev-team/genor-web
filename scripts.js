function scrollEnd(e) {
    if (e.target.scrollHeight - e.target.scrollTop < 820) {
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
    updateScrollProgress();
});

function mapRange(value, inMin, inMax, outMin = 0, outMax = 1) {
    if (value < inMin) return outMin;
    if (value > inMax) return outMax;
    return ((value - inMin) / (inMax - inMin)) * (outMax - outMin) + outMin;
}

function updateAnimationProgress(progress) {
    document.getElementById("mask-1").style.width = `${(mapRange(progress, 0.15, 0.20909091) * 100).toFixed(2)}%`;
    document.getElementById("mask-2").style.width = `${(mapRange(progress, 0.20909091, 0.26818182) * 100).toFixed(2)}%`;
    document.getElementById("mask-3").style.width = `${(mapRange(progress, 0.26818182, 0.32727273) * 100).toFixed(2)}%`;
    document.getElementById("mask-4").style.width = `${(mapRange(progress, 0.32727273, 0.38636364) * 100).toFixed(2)}%`;
    document.getElementById("mask-5").style.width = `${(mapRange(progress, 0.38636364, 0.44545455) * 100).toFixed(2)}%`;
    document.getElementById("mask-6").style.width = `${(mapRange(progress, 0.44545455, 0.50454545) * 100).toFixed(2)}%`;
    document.getElementById("mask-7").style.width = `${(mapRange(progress, 0.50454545, 0.56363636) * 100).toFixed(2)}%`;
    document.getElementById("mask-8").style.width = `${(mapRange(progress, 0.56363636, 0.62272727) * 100).toFixed(2)}%`;
    document.getElementById("mask-9").style.width = `${(mapRange(progress, 0.62272727, 0.68181818) * 100).toFixed(2)}%`;
    document.getElementById("mask-10").style.width = `${(mapRange(progress, 0.68181818, 0.74090909) * 100).toFixed(2)}%`;
    document.getElementById("mask-11").style.width = `${(mapRange(progress, 0.74090909, 0.8) * 100).toFixed(2)}%`;
}

function openPopup() {
    document.getElementById("demoPopup").classList.remove('hide');
    document.getElementById("demoPopup").classList.remove('loaded');
    document.getElementById("emailInput").classList.remove('error');
}

function closePopup() {
    document.getElementById("demoPopup").classList.add('hide');
}

function sendPopup() {
    if (document.getElementById("emailInput").value !== "") {
        document.getElementById("demoPopup").classList.add('hide');
    } else {
        document.getElementById("emailInput").classList.add('error');
    }
}

function scrollToTop() {
    document.getElementById("wrapper").scrollTo(0, 0);
}

document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        closePopup();
    }
});

const form = document.getElementById('popupForm');
form.addEventListener('submit', function (e) {
    if (!form.checkValidity()) {
        e.preventDefault();
    } else {
        sendPopup();
    }
});