// console.log('test');

const chilla = document.querySelector('.chilla');

chilla.addEventListener('click', function(){
    // console.log(event);
    console.log('you clicked');
    const shouldChangePage = confirm('this site may be malicious');
    if(!shouldChangePage){
        event.preventDefault();
        window.location = event.currentTarget.href;
    }
});

const signUpForm = document.querySelector('[name="signup"]');
console.log(signUpForm);

signUpForm.addEventListener('submit', function(event){
    console.log(event);
    event.preventDefault();
    console.log(event.currentTarget.name.value);
    console.log(event.currentTarget.email.value);
    console.log(event.currentTarget.agree.checked);
    const name = event.currentTarget.name.value;
    if(name === "Chad") {
        confirm('no chads - sorry');
        event.preventDefault();
    } else {
        console.log('phew, no chad.');
    }

});

function logEvent(event) {
    console.log(event.type);
    console.log(event.currentTarget.value);
};

signUpForm.name.addEventListener('keyup', logEvent);
signUpForm.name.addEventListener('keydown', logEvent);
signUpForm.name.addEventListener('blur', logEvent);
signUpForm.name.addEventListener('focus', logEvent);

console.log(signUpForm.name);