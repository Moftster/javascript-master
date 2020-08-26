const dave = document.querySelector('.dave');

// console.log(dave.children);
// console.log(dave.firstElementChild);
// console.log(dave.lastElementChild);
// console.log(dave.previousElementSibling);
// console.log(dave.nextElementSibling);
// console.log(dave.parentElement);
// console.log(dave.childNodes);

const p = document.createElement('p');
p.textContent = "I will be removed";
document.body.appendChild(p);

p.remove();

console.log(p);