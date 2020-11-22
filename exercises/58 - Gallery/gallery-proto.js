function Gallery(gallery) {
    // console.log(gallery);
    if(!gallery){
        throw new Error('No gallery found!');
    }

    this.gallery = gallery;

    //select emelemtns we need
    this.images = Array.from(gallery.querySelectorAll('img'));
    this.modal = document.querySelector('.modal');
    this.prevButton = this.modal.querySelector('.prev');
    this.nextButton = this.modal.querySelector('.next');

    // bind out methods to the instance when we need them
    this.showNextImage = this.showNextImage.bind(this);
    this.showPrevImage = this.showPrevImage.bind(this);
    this.handlekeyUp = this.handlekeyUp.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);

    //EVENT LISTENERS
    this.images.forEach(image => image.addEventListener('click', e => this.showImage (e.currentTarget)));

    //loop over each image
    this.images.forEach(image => {
        //attach event listener
        image.addEventListener('keyup', e => {
            if(e.key === 'Enter'){
                this.showImage(e.currentTarget);
            }
        })
    })

    this.modal.addEventListener('click', this.handleClickOutside);
}

Gallery.prototype.openModal = function() {
    console.info('Opening modal...');
    //check if the modal is already open
    if(this.modal.matches('.open')) {
        console.info('Modal already open');
        return;
    }
    this.modal.classList.add('open');

    //Event listeners to be boudn when we open the modal
    window.addEventListener('keyup', this.handlekeyUp);
    this.nextButton.addEventListener('click', this.showNextImage);
    this.prevButton.addEventListener('click', this.showPrevImage);
}

Gallery.prototype.closeModal = function (){
    this.modal.classList.remove('open');
    window.removeEventListener('keyup', this.handlekeyUp);
    this.nextButton.removeEventListener('click', this.showNextImage);
    this.prevButton.removeEventListener('click', this.showPrevImage);
    // TODO add events listeners for clicks and keyboard
}

Gallery.prototype.handleClickOutside = function (e){
    if(e.target === e.currentTarget){
        this.closeModal();
    }
}

Gallery.prototype.handlekeyUp = function (e) {
    if(e.key === 'Escape') return this.closeModal(); 
    if(e.key === 'ArrowRight') return this.showNextImage();
    if(e.key === 'ArrowLeft') return this.showPrevImage();
}
console.log(this);

Gallery.prototype.showNextImage = function (){
    this.showImage(this.currentImage.nextElementSibling || this.gallery.firstElementChild);
}

Gallery.prototype.showPrevImage = function (){
    this.showImage(this.currentImage.previousElementSibling || this.gallery.lastElementChild);
}

Gallery.prototype.showImage = function (el){
    if(!el){
        console.info('no image to show');
        return;
    }
    //update the modal with this info
    // console.log(el);
    this.modal.querySelector('img').src = el.src;
    this.modal.querySelector('h2').textContent = el.title;
    this.modal.querySelector('figure p').textContent = el.dataset.description;
    this.currentImage = el;
    this.openModal();
}

// use it one the page
const gallery1 = new Gallery(document.querySelector('.gallery1'));
const gallery2 = new Gallery(document.querySelector('.gallery2'));

console.log(gallery1, gallery2);