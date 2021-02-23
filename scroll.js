var scroll = window.requestAnimationFrame||function(callback){window.setTimeout(callback,1000/60)};

var elementsToShow = document.querySelectorAll('.show-on-scroll');

function loop() {
    elementsToShow.forEach(function(element) {
        if (isElementInViewpot(element)) {
            element.classList.add('is-visible');
        } else {
            element.classList.remove('is-visible');
        }
    });
    scroll(loop);
}


loop();

function isElementInViewpot(el) {
    if(typeof jquery === "function" && el instanceof jquery) {
        el = el[0]
    }
    var rect = el.getBoundingClientRect();
    return(
        (rect.top <= 0
            && rect.bottom >= 0)
        ||
        (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) && 
        rect.top <= (window.innerHeight|| document.documentElement.clientHeight))
        ||
        (rect.top >=0 &&
            rect.bottom <= (window.innerHeight || document.document.clientHeight))
    );
}


                