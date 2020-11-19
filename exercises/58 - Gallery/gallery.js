function Gallery(gallery) {
    console.log(gallery);
    if(!gallery){
        throw new Error('No gallery found!');
    }
    //select emelemtns we need
    const images = Array.from(gallery.querySelectorAll('img'));
    const modal = document.querySelector('.modal');
    const prevButton = modal.querySelector('.prev');
    const nextButton = modal.querySelector('.next');
    let currentImage;

    function openModal(){
        console.info('Opening modal...');
        //check if the modal is already open
        if(modal.matches('.open')) {
            console.info('Modal already open');
            return;
        }
        modal.classList.add('open');
        //Event listeners to be boudn when we open the modal
        window.addEventListener('keyup', handlekeyUp);
        nextButton.addEventListener('click', showNextImage);
        prevButton.addEventListener('click', showPrevImage);
    }
    
    function closeModal(){
        modal.classList.remove('open');
        window.removeEventListener('keyup', handlekeyUp);
        nextButton.removeEventListener('click', showNextImage);
        prevButton.removeEventListener('click', showPrevImage);
        // TODO add events listeners for clicks and keyboard
    }

    function handleClickOutside(e){
        if(e.target === e.currentTarget){
            closeModal();
        }
    }

    function handlekeyUp(e) {
        if(e.key === 'Escape') return closeModal(); 
        if(e.key === 'ArrowRight') return showNextImage();
        if(e.key === 'ArrowLeft') return showPrevImage();
    }

    function showNextImage(){
        showImage(currentImage.nextElementSibling || gallery.firstElementChild);
    }

    function showPrevImage(){
        showImage(currentImage.previousElementSibling || gallery.lastElementChild);
    }

    function showImage(el){
        if(!el){
            console.info('no image to show');
            return;
        }
        //update the modal with this info
        console.log(el);
        modal.querySelector('img').src = el.src;
        modal.querySelector('h2').textContent = el.title;
        modal.querySelector('figure p').textContent = el.dataset.description;
        currentImage = el;
        openModal();
    }

    //EVENT LISTENERS
    images.forEach(image => image.addEventListener('click', e => showImage (e.currentTarget)));

    //loop over each image
    images.forEach(image => {
        //attach event listener
        image.addEventListener('keyup', e => {
            if(e.key === 'Enter'){
                showImage(e.currentTarget);
            }
        })
    })

    modal.addEventListener('click', handleClickOutside);
    

}

// use it one the page
const gallery1 = Gallery(document.querySelector('.gallery1'));
const gallery2 = Gallery(document.querySelector('.gallery2'));