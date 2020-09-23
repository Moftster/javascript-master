// console.log('connected');

const cardButtons = document.querySelectorAll('.card button');
const modalInner = document.querySelector('.modal-inner');
const modalOuter = document.querySelector('.modal-outer');

function handleCardButtonClick(event) {
    // console.log('you clicked it');
    const button = event.currentTarget;
    const card = button.closest('.card');
    // console.log(card);
    // Grab the image source
    const imgSrc = card.querySelector('img').src;
    const description = card.dataset.description;
    const name = card.querySelector('h2').textContent;
    // populate modal with the new info
    modalInner.innerHTML = `
        <img src="${imgSrc.replace('200', '600')}" alt="${name}"/>
        <p>${description}</p>
    `;
    // show the modal
    modalOuter.classList.add('open'); 
}


cardButtons.forEach(button => button.addEventListener('click', handleCardButtonClick));

function closeModal() {
    modalOuter.classList.remove('open');
}

modalOuter.addEventListener('click', function(e){
    // console.log(e);
    const isOutside = !e.target.closest('.modal-inner');
    console.log(isOutside);
    if(isOutside){
        closeModal();
    }
});

window.addEventListener('keydown', (e) => {
    if(e.key == 'Escape') {
        closeModal();
    }
});