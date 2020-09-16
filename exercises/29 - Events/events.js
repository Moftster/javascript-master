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

// console.log(buyButtons);

function buyItem () {
    console.log("iTEM BOUGHT.");
};

// console.log(buyButtons);
// console.dir(buttons);
// buyButtons.addEventListener('click', buyItem);

function buyButtonClick (buyButton) {
    console.log("Binding the buy button");
    buyButton.addEventListener('click', buyItem);
}

buyButtons.forEach(buyButtonClick);