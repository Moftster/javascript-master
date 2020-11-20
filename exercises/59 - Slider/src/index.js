function Slider(slider){
    if(!(slider) instanceof Element){
        throw new Error('No slider passed in');
    }
    // create some variables for working with the slider
    let current;
    let prev;
    let next;
    //select the elements needed for the slider
    const slides = slider.querySelector('.slides');
    const prevButton = slider.querySelector('.goToPrev');
    const nextButton = slider.querySelector('.goToNext');

    function startSlider(){
        current = slider.querySelector('.current') || slides.firstElementChild;
        // console.log(current);
        prev = current.previousElementSibling || slides.lastElementChild;
        next = current.nextElementSibling || slides.firstElementChild;
        console.log({current, prev, next});
    }

    function applyClasses(){
        current.classList.add('current');
        prev.classList.add('prev');
        next.classList.add('next');
    }

    function move(direction){
        //strip classes off other slides
        const classesToRemove = ['prev', 'current', 'next'];
        prev.classList.remove(...classesToRemove);
        current.classList.remove(...classesToRemove);
        next.classList.remove(...classesToRemove);
        if(direction ==='back'){
            //make a new array of the old values and destructure them over and into the prev current and next variables
            [prev, current, next] = [prev.previousElementSibling || slides.lastElementChild, prev, current];
        } else {
            [prev, current, next] = [current, next, next.nextElementSibling || slides.firstElementChild];
        }
        applyClasses();
    }

    //when this slider is created, run the start slider funciton
    startSlider();
    applyClasses();

    //Event listeners
    prevButton.addEventListener('click', () => move('back'));
    nextButton.addEventListener('click', move);
    document.addEventListener('keyup', (e) => {
        console.log(e);
        if(e.key === 'ArrowRight'){
            move();
        } else if(e.key === 'ArrowLeft'){
            move('back');
        }
    })
}

const mySlider = Slider(document.querySelector('.slider'));
const dogSlider = Slider(document.querySelector('.dog-slider'));