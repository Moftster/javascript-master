// console.log("Hooked up");

const buttons = document.querySelector('.myButton');
const coolButton = document.querySelector('.cool');

function handleClick() {
    console.log("button clicked");
}

const hooray = () => console.log("hooray!");

buttons.addEventListener('click',  function () {
    console.log("I'm anonymous");
});
coolButton.addEventListener('click', hooray);

buttons.removeEventListener('click', handleClick);

// Listen on multiple items

const buyButtons = document.querySelectorAll('button.buy');

function handleBuyButtonClick(event) {
    console.log('you clicked a button');
    // const el = event.target;
    // console.log(el.textContent);
    // console.log(event.target.dataset.price);
    console.log(event.currentTarget);
    console.log(event.target);
    console.log(event.target === event.currentTarget);

    // Stop this event from bubbbling up
    event.stopPropagation();
};

buyButtons.forEach(function(buyButton) {
    buyButton.addEventListener('click', handleBuyButtonClick);
});

window.addEventListener('click', function(event){
    console.log("You click somewhere on the window");
    console.log(event.target);
}, { capture: true }
);

const photoEl = document.querySelector('.photo');

photoEl.addEventListener('mouseenter', function(e) {
    // console.log(e.currentTarget);
    console.log(this);
})