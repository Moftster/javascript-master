// const taxRate = 0.13;

function calculateBill(bill, taxRate = 0.13, tipRate = 0.15) {
    // console.log(bill, taxRate);
    const total = bill + (bill * taxRate) + (bill * tipRate);
    // console.log("Running calculate Bill");
    return total;
}

// const myTotal = calculateBill();

// console.log(`Your total is $${myTotal}`);

// console.log(`Your total is $${calculateBill(100, taxRate)}`);

// console.log(`Your total is $${calculateBill(200, taxRate)}`);

// console.log(`Your total is $${calculateBill(3333, taxRate)}`);

// const daveTotal = 400;
// const daveTaxRate = 0.8;


// const myTotal = calculateBill(100,0.13);
// const myTotal = calculateBill(daveTotal,daveTaxRate);
// const myTotalThree = calculateBill(100,0.3);
// const myTotalThree = calculateBill(100 + 20 + 20, 0.3);
// console.log(myTotalThree);

// console.log(myTotal);

// firstName = 'David';

// function sayHiTo(firstName) {
//     return `Hello ${firstName}`;
// }
// const greeting = sayHiTo('Wes');
// console.log(greeting);

// function doctorise(name) {
//     return `Dr ${name}`;
// }

// function yell(name = 'Billy') {
//     return `HEY ${name.toUpperCase()}`;
// }

const myBill4 = calculateBill(100, undefined, 0.2);
console.log(myBill4);