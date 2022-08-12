console.log('Hello World');


const leftButton = document.querySelector('#left-arrow'); 
const rightButton = document.querySelector('#right-arrow'); 


leftButton.onclick = function() {
    console.log('clicked left');
}

rightButton.onclick = function() {
    console.log('clicked right');
}
