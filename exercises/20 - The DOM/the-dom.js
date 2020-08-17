// console.log('linked!!');

// const p = document.querySelector('p');
// const imgs = document.querySelectorAll('.item img');
// const item2 = document.querySelector('.item2');
// console.log(item2);

const heading = document.querySelector('h2');
console.log(heading.textContent);
console.log(heading.innerText);
// heading.textContent = "David is cool";
// console.log(heading.textContent);
// console.log(heading.innerText);
// console.dir(heading.textContent);

console.log(heading.innerHTML);
console.log(heading.outerHTML);

const pizzaList =  document.querySelector('.pizza');

// pizzaList.textContent = `${pizzaList.textContent} pizza`;
pizzaList.insertAdjacentText('afterbegin', 'pizza pizza');
pizzaList.insertAdjacentText('beforeend', 'pizza pizza');
console.log(pizzaList.textContent);