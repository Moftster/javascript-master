// console.log("It's working");

function calculateBill() {
    console.log('Running Calculate Bill');
    const total = 100 * 1.13;
    // console.log(total);
    return total;
}

const myTotal = calculateBill();

// console.log(`Your total is $${myTotal}`);

console.log(`Your total is $${calculateBill()}`);
