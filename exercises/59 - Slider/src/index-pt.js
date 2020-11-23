function Slider(slider){
    if(!(slider) instanceof Element){
        throw new Error('No slider passed in');
    }
    //select the elements needed for the slider
    this.slides = slider.querySelector('.slides');
    this.slider = slider;
    const prevButton = slider.querySelector('.goToPrev');
    const nextButton = slider.querySelector('.goToNext');

    //when this slider is created, run the start slider funciton
    this.startSlider();
    this.applyClasses();

    //Event listeners
    prevButton.addEventListener('click', () => this.move('back'));
    nextButton.addEventListener('click', () => this.move());
    document.addEventListener('keyup', (e) => {
        console.log(e);
        if(e.key === 'ArrowRight'){
            move();
        } else if(e.key === 'ArrowLeft'){
            move('back');
        }
    })
}


Slider.prototype.startSlider = function (){
    this.current = this.slider.querySelector('.current') || this.slides.firstElementChild;
    // console.log(current);
    this.prev = this.current.previousElementSibling || this.slides.lastElementChild;
    this.next = this.current.nextElementSibling || this.slides.firstElementChild;
    // console.log({current, prev, next});
}

Slider.prototype.applyClasses = function (){
    this.current.classList.add('current');
    this.prev.classList.add('prev');
    this.next.classList.add('next');
}

Slider.prototype.move = function (direction){
    //strip classes off other slides
    const classesToRemove = ['prev', 'current', 'next'];
    this.prev.classList.remove(...classesToRemove);
    this.current.classList.remove(...classesToRemove);
    this.next.classList.remove(...classesToRemove);
    if(direction ==='back'){
        //make a new array of the old values and destructure them over and into the prev current and next variables
        [this.prev, this.current, this.next] = [this.prev.previousElementSibling || this.slides.lastElementChild, this.prev, this.current];
    } else {
        [this.prev, this.current, this.next] = [this.current, this.next, this.next.nextElementSibling || this.slides.firstElementChild];
    }
    this.applyClasses();
}

const mySlider = new Slider(document.querySelector('.slider'));
const dogSlider = new Slider(document.querySelector('.dog-slider'));

console.log(mySlider);
console.log(dogSlider);

window.dogSlider = dogSlider;

window.addEventListener('keyup', function (e){
    if(e.key === 'ArrowRight'){
        dogSlider.move();
    }
});

window.addEventListener('keyup', function (e){
    if(e.key === 'ArrowLeft'){
        dogSlider.move('back');
    }
});