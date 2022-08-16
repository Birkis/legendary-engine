const leftButton = document.querySelector('#left-arrow'); 
const rightButton = document.querySelector('#right-arrow'); 

let  slides = ["./assets/image-slide-1.jpg", "./assets/image-slide-2.jpg", "./assets/image-slide-3.jpg", "./assets/image-slide-4.jpg", "./assets/image-slide-5.jpg"];
let slideShow = document.querySelector('#slideShow');

slides.map((image) => {
    let newImage = document.createElement('img');
    newImage.src = image;
    slideShow.appendChild(newImage);

})

leftButton.onclick = function() {

    let firstImage = slideShow.firstChild;
    slideShow.insertBefore(firstImage, slideShow.lastChild);


    slideShow.firstElementChild.classList.remove('new-item');
    slideShow.lastElementChild.classList.add('new-item');


}

rightButton.onclick = function() {
    let lastImage = slideShow.lastChild;
    slideShow.insertBefore(lastImage, slideShow.firstChild);
}

