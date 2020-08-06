// function doctorise(firstName){
//     return `Dr ${firstName}`;
// }

// Anon function
// function (firstName){
//     return `Dr ${firstName}`;
// }

// Function expression
// const doctorFunction = function (firstName){
//     return `Dr ${firstName}`;
// }

// Arrow function
// const inchToCm = inches => inches * 2.54;
// const add = (a, b = 3) => a + b;

// returning an object
// function makeABaby(first, last) {
//     const baby = {
//         name: `${first} ${last}`,
//         age: 0,
//     }
//     return baby;
// }
// const makeABaby = (first, last) => ({name: `${first} ${last}`, age: 0 });

// IIFE 
// Immediately Invoke Function Expression
// (function (age){
//     console.log("Runngin the anon function");
//     return `You are cool ${age}`;
// })(10);

// Methods
const wes = {
    name: 'Wes Bos',
    // Method
    sayHi: function() {
        console.log(`Hey there ${this.name}`);
        console.log("Say hi");
        return "Hey there";
    },
    // Shorthand method
    yellHi() {
        console.log("Hey WES!!!");
    },
    // Arrow function
    wisperHi: () => {
        console.log("hello there");
    }
}

// Callback functions
// Click callback
const button = document.querySelector('.clickMe');

function handleClick() {
    console.log("Great clicking!!");
}

button.addEventListener('click', function() {
    console.log("Nice job!!!");
});

// Timer callback
setTimeout(function() {
    console.log("Done!!!");
}, 1000);