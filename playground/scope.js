// console.log("Scope linked");

// const age = 100;

// function go() {
//     const age = 200;
//     const hair = 'blonde';
//     console.log(hair);
//     console.log(age);

// }

// go();

// console.log(go());

// function isCool(name) {
//     let cool;
//     if(name === 'wes') {
//         cool = true
//     }
//     console.log(cool);
//     return cool;
// }

// for(let i=0; i < 10; i++) {
//     console.log(i);
// }

// if(1 ===1) {
//     cool = true;
// }

const dog = 'snkikers';

function logDog(dog){
    console.log(dog);
}

function go(){
    const dog = 'sunny';
    logDog('rufus');
}

go(); 