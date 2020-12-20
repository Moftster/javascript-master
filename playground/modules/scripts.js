import first, { returnHi as sayHi, last, middle } from './utils.js';
// import wes from './wes.js';
import * as everything from './wes.js';

import { handleButtonClick } from './handlers.js';

// console.log(first);

// console.log(everything);

// console.log(sayHi);

// const name = "dave";

// console.log(sayHi(name));

// console.log('working...');

// console.log(last, middle);

// console.log(wes);

const button = document.querySelector('button');

button.addEventListener('click', handleButtonClick);