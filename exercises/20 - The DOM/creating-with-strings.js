console.log('hooked up');
const item = document.querySelector('.item');

const width= 100;
const src = `https://source.unsplash.com/random/${width}x${width}`;
const desc = `cute puppy!!!!!!!!! <img onload="alert('YOU BEEN HACKED!!!!')" src="https://source.unsplash.com/random/500x500"`;

const myHTML = `
<div class="wrapper">
    <h2>Cute ${desc}</h2>
    <img src="${src}" alt="${desc}"/>
</div>
`;

// turn a string into a DOM element
const myFragment = document.createRange().createContextualFragment(myHTML);

document.body.appendChild(myFragment);