console.log('creating linked!');

const myParagraph = document.createElement('p');
myParagraph.textContent = 'I ama paragraph';
myParagraph.classList.add('special');
console.log(myParagraph);

const myImage = document.createElement('img');
myImage.src = 'https://source.unsplash.com/random/200x200';
myImage.alt = 'nice photo';
console.log(myImage);

const myDiv = document.createElement('div');
myDiv.classList.add('wrapper');
console.log(myDiv);

myDiv.appendChild(myParagraph);
myDiv.appendChild(myImage);

// document.body.appendChild(myParagraph);
// document.body.appendChild(myImage);
// myDiv.appendChild(myImage);

document.body.appendChild(myDiv);

// Need to add somethign to the top

const heading = document.createElement('h2');
heading.textContent = 'cool heading bro';

myDiv.insertAdjacentElement('beforebegin', heading);

// const listItemOne = document.createElement('li');
// listItemOne.textContent = 'one';

// const listItemTwo = document.createElement('li');
// listItemTwo.textContent = 'two';

// const listItemThree = document.createElement('li');
// listItemThree.textContent = 'three';

// const listItemFour = document.createElement('li');
// listItemFour.textContent = 'four';

// const listItemFive = document.createElement('li');
// listItemFive.textContent = 'five';

// const unorderedList = document.createElement('ul');
// const listItem = document.createElement('li');

// const three = 'three';
// // listItem.appendChild(listItemOne);

// document.body.appendChild(unorderedList);

// // document.body.appendChild(listItemOne);
// // listItemOne.insertAdjacentElement('beforebegin', unorderedList);
// unorderedList.insertAdjacentElement('afterbegin', listItemFive);
// unorderedList.insertAdjacentElement('afterbegin', listItemFour);
// unorderedList.insertAdjacentElement('afterbegin', listItemThree);
// unorderedList.insertAdjacentElement('afterbegin', listItemTwo);
// unorderedList.insertAdjacentElement('afterbegin', listItemOne);

const unorderedList = document.createElement('ul');
const listItem = document.createElement('li');
listItem.textContent = 'three';
unorderedList.appendChild(listItem);

const li2 = listItem.cloneNode(true);
li2.textContent = 'two';
unorderedList.insertAdjacentElement('afterbegin', li2);

document.body.insertAdjacentElement('afterbegin', unorderedList);