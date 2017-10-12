document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");

var sliderCnt = document.querySelector(".slider-cnt").children;
var next = document.querySelector(".right");
var previous = document.querySelector(".left");
var i = 0;

sliderCnt[0].classList.add("active");

    next.addEventListener("click", function (){
        i++;
        if (i > sliderCnt.length - 1) {
            i = 0;
            sliderCnt[0].classList.add("active");
            sliderCnt[sliderCnt.length -1].classList.remove("active");
        } else {
            sliderCnt[i].classList.add("active");
            sliderCnt[i - 1].classList.remove("active");
        }
    });

    previous.addEventListener("click", function (){
        i--;
        if (counter < 0) {
            counter = sliderCnt.length - 1;
            sliderCnt[i].classList.add("active");
            sliderCnt[0].classList.remove("active");
        } else {
            sliderCnt[i + 1].classList.remove("active");
            sliderCnt[i].classList.add("active");
        }
    });

});