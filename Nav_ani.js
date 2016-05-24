function init () {
    window.addEventListener(e){
        var distanceY = window.pageYOffset || document.documentElement
        shirnkOn = 300,
        header = document.querySelector("Nav_Con");
        if (distanceY > shirkOn) {
            classie.add(header,"smaller");
        } else {
            if (classie.has(header,"smaller")) {
                classie.remove(header,"smaller");
            }
        }
    });
}
window.onload = init();