let mainText = document.querySelector('.bean')

window.addEventListener("scroll",function(){
    let value = window.scrollY;
    console.log("scrollY",value);

    if(value > 800){
        mainText.style.animation="slide 2s ease-out forwards"
    }
    else {
        mainText.style.animation=`bak 1s ease-out forwards`;
    }
})

let mainText1 = document.querySelector('.txt')

window.addEventListener("scroll",function(){
    let value = window.scrollY;
    console.log("scrollY",value);

    if (value > 800) {
        mainText1.style.animation = "slide2 2s ease-out forwards";
    }else {
        mainText1.style.animation = `back2 2s ease-out forwards`;
    }
})

let mainText2 = document.querySelector('.bttn')

window.addEventListener("scroll",function(){
    let value = window.scrollY;
    console.log("scrollY",value);

    if (value > 800) {
        mainText2.style.animation = "sli 2s ease-out forwards";
    }else {
        mainText2.style.animation = `back2 2s ease-out forwards`;
    }
})

let mainText3 = document.querySelector('.ss')

window.addEventListener("scroll",function(){
    let value = window.scrollY;
    console.log("scrollY",value);

    if (value > 1600) {
        mainText3.style.animation = "slice 2s ease-out forwards";
    }else {
        mainText3.style.animation = `back 2s ease-out forwards`;
    }
})

let mainText4 = document.querySelector('.sss')

window.addEventListener("scroll",function(){
    let value = window.scrollY;
    console.log("scrollY",value);

    if(value > 1800){
        mainText4.style.animation="slike 2s ease-out forwards";
    }
    else {
        mainText4.style.animation=`back 2s ease-out forwards`;
    }
})

let mainText5 = document.querySelector('.store_txt1')

window.addEventListener("scroll",function(){
    let value = window.scrollY;
    console.log("scrollY",value);

    if(value > 2560){
        mainText5.style.animation="fade 3s ease-out forwards";
    }
    else {
        mainText5.style.animation=`back 2s ease-out forwards`;
    }
})

let mainText6 = document.querySelector('.store_txt2')

window.addEventListener("scroll",function(){
    let value = window.scrollY;
    console.log("scrollY",value);

    if(value > 2560){
        mainText6.style.animation="fade 3s ease-out forwards";
    }
    else {
        mainText6.style.animation=`back 2s ease-out forwards`;
    }
})

let mainText7 = document.querySelector('.btn3')

window.addEventListener("scroll",function() {
    let value = window.scrollY;
    console.log("scrollY",value);

    if(value > 2560){
        mainText7.style.animation="fade 3s ease-out forwards";
    }
    else {
        mainText7.style.animation=`back 2s ease-out forwards`;
    }
})