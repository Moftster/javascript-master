// // console.log('linked!!');

// // const p = document.querySelector('p');
// // const imgs = document.querySelectorAll('.item img');
// // const item2 = document.querySelector('.item2');
// // console.log(item2);

// const heading = document.querySelector('h2');
// console.log(heading.textContent);
// console.log(heading.innerText);
// // heading.textContent = "David is cool";
// // console.log(heading.textContent);
// // console.log(heading.innerText);
// // console.dir(heading.textContent);

// console.log(heading.innerHTML);
// console.log(heading.outerHTML);

// const pizzaList =  document.querySelector('.pizza');

// // pizzaList.textContent = `${pizzaList.textContent} pizza`;
// pizzaList.insertAdjacentText('afterbegin', 'pizza pizza');
// pizzaList.insertAdjacentText('beforeend', 'pizza pizza');
// console.log(pizzaList.textContent);

// Classes!

const nicePic = document.querySelector(".nice");
nicePic.classList.add('dog');
// nicePic.classList.remove('round');
nicePic.classList.toggle('round');
console.log(nicePic.classList);

function toggleRound() {
    nicePic.classList.toggle('round');
}

nicePic.addEventListener('click', toggleRound);

// nicePic.width = 930;
nicePic.alt = 'Cute Puppy'; // setter
console.log(nicePic.alt); // getter
console.log(nicePic.naturalWidth); // getter

// nicePic.addEventListener('load', function(){
//     console.log(nicePic.naturalWidth); // getter
// });

nicePic.setAttribute('alt', 'Really cute pup');
nicePic.setAttribute('test', 'Really cute test');

console.log(nicePic.getAttribute('alt'));

const custom = document.querySelector('.custom');
console.log(custom.dataset);

custom.addEventListener('click', function() {
    // console.log('you clicked on the custom attribute');
    alert(`welcome ${custom.dataset.name} and last name ${custom.dataset.last}`);
})