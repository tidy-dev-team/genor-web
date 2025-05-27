function scrollCheck() {
    if (document.getElementsByClassName("footer-wrapper")[0].getBoundingClientRect().top < window.innerHeight) {
        document.querySelector("header").classList.add("header-hidden");
    } else {
        document.querySelector("header").classList.remove("header-hidden");
    }
}

function tabFunc(e) {
    tabTitles = ["Evaluate performance at every level", "See inside your workflows in real-time", "Catch drifts before they cause problems", "Build and iterate as a team—without friction"];
    tabParas = ["Measure accuracy of agent units and the entire AI workflow, identify bottlenecks,\n and understand system behavior", "Inspect the data flow and performance at each step of the orchestration with advanced debugging and monitoring tools.", "Get alerted to changes in data patterns or logic through\n “explainable no outcome” alerts.", "Collaborate with live editing, commenting, and version control for datasets,\n agents, models, and workflows."]
    tabImages = ["tab_01-min.png"];
    var x = e.target.parentElement.querySelectorAll(".tab");
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].classList.remove('active');
    }
    e.target.classList.add('active');
    document.getElementById("tabImageMobile").src = "images/tab_0" + window.tab + "-mobile-min.png";
    document.getElementById("tabImage").src = "images/tab_0" + window.tab + "-min.png";
    document.getElementById("tabTitle").innerHTML = tabTitles[window.tab - 1];
    document.getElementById("tabPara").innerText = tabParas[window.tab - 1];
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

        // console.log(`Scroll Progress: ${(progress * 100).toFixed(2)}%`);
        if ((progress * 100) > 85) {
            if (document.body.offsetWidth > 600) {
                document.getElementById("starVideo").controls = false;
                document.getElementById("starDiv").style.backgroundSize = "400%";
                setTimeout(() => {
                    document.getElementById("starVideo").play();
                }, 700);
            }
        }
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
    document.getElementById("mask-1").style.width = `${(mapRange(progress, 0.15, 0.22222222) * 100).toFixed(2)}%`;
    document.getElementById("mask-2").style.width = `${(mapRange(progress, 0.22222222, 0.29444444) * 100).toFixed(2)}%`;
    document.getElementById("mask-3").style.width = `${(mapRange(progress, 0.29444444, 0.36666667) * 100).toFixed(2)}%`;
    document.getElementById("mask-4").style.width = `${(mapRange(progress, 0.36666667, 0.43888889) * 100).toFixed(2)}%`;
    document.getElementById("mask-5").style.width = `${(mapRange(progress, 0.43888889, 0.51111111) * 100).toFixed(2)}%`;
    document.getElementById("mask-6").style.width = `${(mapRange(progress, 0.51111111, 0.58333333) * 100).toFixed(2)}%`;
    document.getElementById("mask-7").style.width = `${(mapRange(progress, 0.58333333, 0.65555556) * 100).toFixed(2)}%`;
    document.getElementById("mask-8").style.width = `${(mapRange(progress, 0.65555556, 0.72777778) * 100).toFixed(2)}%`;
    document.getElementById("mask-9").style.width = `${(mapRange(progress, 0.72777778, 0.8) * 100).toFixed(2)}%`;
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

const scriptURL = 'https://script.google.com/macros/s/AKfycbz2DDolkr1dO6iKo-uLIfqMMhN6W_oQ3TaVM68usqo514aOI5ry41dv-dZXbPnlT16x/exec';
const form = document.forms['popupForm']
form.addEventListener('submit', e => {
    document.getElementById("formSend").classList.add('no-click');
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) }).then(response => formGood()).then(() => { }).catch(error => console.error('Error!', error.message), formBad(error.message))
})

function formGood() {
    document.getElementById("formFooter").style.display = "flex";
    document.getElementById("formFooter").innerHTML = '<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 9C1 4.58172 4.58172 1 9 1C13.4183 1 17 4.58172 17 9C17 13.4183 13.4183 17 9 17C4.58172 17 1 13.4183 1 9Z" fill="#4FD479"/><path d="M5.5 9.30556L8.3 11.75L12.5 6.25" fill="#4FD479"/><path d="M5.5 9.30556L8.3 11.75L12.5 6.25M9 17C4.58172 17 1 13.4183 1 9C1 4.58172 4.58172 1 9 1C13.4183 1 17 4.58172 17 9C17 13.4183 13.4183 17 9 17Z" stroke="white" stroke-width="1.66594" stroke-linejoin="round"/></svg> Your request has been submitted';
    document.getElementById("formSend").classList.remove('no-click');
}
function formBad(x) {
    document.getElementById("formFooter").style.display = "flex";
    document.getElementById("formFooter").innerText = 'Error! ' + x;
    document.getElementById("formSend").classList.remove('no-click');
}

function scrollIntoViewLoop() {
    const element = document.getElementById("Production");
    if (!element) {
        console.warn("Element with ID 'Production' not found.");
        return;
    }
    window.notAnim = 1;
    element.scrollIntoView();
    const interval = setInterval(() => {
        window.notAnim = 0;
    }, 2000);
}

function checkDevice() {
    if (document.body.offsetWidth < 600) {
        window.notAnim = 1;
    } else {
        window.notAnim = 0;
    }
}

function collapseFunc(e) {
    if (e.target.parentElement.parentElement.parentElement.id == 'collapse_01') {
        document.getElementById("stickyScroll").style.backgroundImage = "url(images/scroll-image_01-min.png)";
        document.getElementById("stickyScroll").getElementsByClassName("collapse")[1].open = false;
        document.getElementById("stickyScroll").getElementsByClassName("collapse")[2].open = false;
        document.getElementById("stickyScroll").getElementsByClassName("collapse")[3].open = false;
    }

    if (e.target.parentElement.parentElement.parentElement.id == 'collapse_02') {
        document.getElementById("stickyScroll").style.backgroundImage = "url(images/scroll-image_02-min.png)";
        document.getElementById("stickyScroll").getElementsByClassName("collapse")[0].open = false;
        document.getElementById("stickyScroll").getElementsByClassName("collapse")[2].open = false;
        document.getElementById("stickyScroll").getElementsByClassName("collapse")[3].open = false;
    }

    if (e.target.parentElement.parentElement.parentElement.id == 'collapse_03') {
        document.getElementById("stickyScroll").style.backgroundImage = "url(images/scroll-image_03-min.png)";
        document.getElementById("stickyScroll").getElementsByClassName("collapse")[0].open = false;
        document.getElementById("stickyScroll").getElementsByClassName("collapse")[1].open = false;
        document.getElementById("stickyScroll").getElementsByClassName("collapse")[3].open = false;
    }
    if (e.target.parentElement.parentElement.parentElement.id == 'collapse_04') {
        document.getElementById("stickyScroll").style.backgroundImage = "url(images/scroll-image_04-min.png)";
        document.getElementById("stickyScroll").getElementsByClassName("collapse")[0].open = false;
        document.getElementById("stickyScroll").getElementsByClassName("collapse")[1].open = false;
        document.getElementById("stickyScroll").getElementsByClassName("collapse")[2].open = false;
    }
}