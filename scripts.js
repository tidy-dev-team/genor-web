function scrollEnd(e) {
    // console.log(e.target.scrollTop + " / " + e.target.scrollHeight);
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