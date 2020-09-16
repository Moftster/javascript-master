// console.log("file linked");

// Make a div
let createdDiv = document.createElement('div');
// add a class of wrapper to it
createdDiv.classList.add('wrapper');
// put it into the body
document.body.appendChild(createdDiv);

// make an unordered list
let unorderedList = document.createElement('ul');
// add three list items with the words "one, two three" in them

let listItem = document.createElement('li');
let itemOne = "one";
let itemTwo = "two";
let itemThree = "three";

// let listItemOne = listItem += "test test";

unorderedList.appendChild(listItem);

// listItem.textContent(itemOne);


// put that list into the above wrapper

createdDiv.appendChild(unorderedList);


// create an image
const anImage = document.createElement('img');

// set the source to an image
anImage.src = "https://source.unsplash.com/random";

// set the width to 250
anImage.width = "250";

// add a class of cute
anImage.classList.add("cute");

// add an alt of Cute Puppy
anImage.alt = "Cute Puppy";

console.log(anImage);

// Append that image to the wrapper
createdDiv.appendChild(anImage);

// with HTML string, make a div, with two paragraphs inside of it
let htmlString = `
<div class="textToInsert">
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae quaerat necessitatibus distinctio ex dolores quis quibusdam mollitia nemo explicabo cumque?</p>
    <p>Para 2Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae quaerat necessitatibus distinctio ex dolores quis quibusdam mollitia nemo explicabo cumque?</p>
</div>
`;

// put this div before the unordered list from above
// unorderedList.insertAdjacentHTML('beforebegin', htmlString);

// add a class to the second paragraph called warning
const myDiv = document.getElementsByClassName('textToInsert');
const firstPara = myDiv.firstElementChild;
// firstPara.classList.add('warning');
console.log(myDiv);
 
// remove the first paragraph
function removeSecondPara() {
    paraTwo = '<p>Para 2Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae quaerat necessitatibus distinctio ex dolores quis quibusdam mollitia nemo explicabo cumque?</p>';
    withoutParaTwo = htmlString.replace(paraTwo, "");
};

removeSecondPara();

unorderedList.insertAdjacentHTML('beforebegin', withoutParaTwo);

// create a function called generatePlayerCard that takes in three arguments: name, age, and height

function generatePlayerCard(name, age, height) {
    return `
    <div class="playerCard">
         <h2>${name} — ${age}</h2>
          <p>They are ${height} and ${age} years old. In Dog years this person would be ${age / 7}. That would be a tall dog!</p>
          <button class="delete" onclick="deleteThis()" type="button">Delete</button>
    </div>
    `;
}

// unorderedList.insertAdjacentHTML('beforebegin', generatePlayerCard('david', 37, "123cm"));
// console.log(generatePlayerCard('david', 37, "123cm"));

// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>

// make a new div with a class of cards
let anotherCreatedDiv = document.createElement('div');
anotherCreatedDiv.classList.add('cards');
// console.log(anotherCreatedDiv);

// Have that function make 4 cards
let cardOne = generatePlayerCard("Tom", 22, "123cm");
let cardTwo = generatePlayerCard("Ben", 25, "133cm");
let cardThree = generatePlayerCard("Gill", 42, "155cm");
let cardFour = generatePlayerCard("Ed", 42, "177cm");
anotherCreatedDiv.insertAdjacentHTML("afterbegin", cardOne);
anotherCreatedDiv.insertAdjacentHTML("afterbegin", cardTwo);
anotherCreatedDiv.insertAdjacentHTML("afterbegin", cardThree);
anotherCreatedDiv.insertAdjacentHTML("afterbegin", cardFour);
createdDiv.appendChild(anotherCreatedDiv);

// append those cards to the div
// put the div into the DOM just before the wrapper element
// Bonus, put a delete Button on each card so when you click it, the whole card is removed

function deleteThis() {
    // window.alert("You sure?");
    const buttonClicked = event.currentTarget;
    buttonClicked.parentElement.remove();

    // theDivs = document.getElementsByClassName('playerCard')[0];
    // theDivs.style.display = "none";
 
}

// select all the buttons!
const buttons = document.querySelectorAll('.delete');
console.log(buttons);
// make out delete function

// loop over them and attach a listener
buttons.forEach(button => button.addEventListener('click', deleteThis));
