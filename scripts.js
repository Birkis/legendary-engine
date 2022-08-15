console.log('Hello World');


const leftButton = document.querySelector('#left-arrow'); 
const rightButton = document.querySelector('#right-arrow'); 


leftButton.onclick = function() {
    console.log('clicked left');
}

rightButton.onclick = function() {
    console.log('clicked right');
}


let  slides = ["./assets/image-slide-1.jpg", "./assets/image-slide-2.jpg", "./assets/image-slide-3.jpg", "./assets/image-slide-4.jpg", "./assets/image-slide-5.jpg"];

let slideShow = document.querySelector('#slideShow');

