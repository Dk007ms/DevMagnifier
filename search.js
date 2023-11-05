let input = document.querySelector(".input");
let slider_box = document.querySelector(".slider_box");
let slider = document.querySelector(".slider");
let placeholder = document.querySelector(".placeholder");

let list = ["Web Developer" , "Tester" , "Devops Guy"];
let i = 0;
let intervals = "";
text_animation();
setintervals();

// This below javascript line is give height to slider_box class. It won't get its inner element height (slider class), because it set to position absolute.
slider_box.style.height = slider.clientHeight + "px";

// Functionality to hide custom placeholder when input field is focused or it has value inside it.
input.onfocus = function(){
    placeholder.style.display = "none";
    clearInterval(intervals);
    if (input.value === '') {
        input.setAttribute('placeholder', 'Enter Github Username');
    } 
}
input.onblur = function(){
    if(input.value == ""){
        placeholder.style.display = "flex";
        i = 0;
        text_animation();
        setintervals();
    }
}

input.addEventListener('input', function () {
    if (input.value === '') {
      input.setAttribute('placeholder', 'Enter Github Username');
    } else {
      input.removeAttribute('placeholder');
    }
});

input.addEventListener('blur', function () {
    input.removeAttribute('placeholder');
});

// Functionality to animate the text;

function setintervals(){
    intervals = setInterval(() => {
    text_animation();
    // console.log("started");
    }, 2500);
}

function text_animation(){
    i++;
    slider.innerHTML = list[i - 1];
    slider.style.opacity = "1";
    slider.style.left = "0px";
    setTimeout(() => {
        slider.style.opacity = "0";
    slider.style.left = "-5px";
    }, 2000);
    if(list.length == i){
        i = 0;
    }
}
