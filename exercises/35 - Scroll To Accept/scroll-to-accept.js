
const terms = document.querySelector('.terms-and-conditions');
const watch = document.querySelector('.watch');
const button = document.querySelector('.accept');


function obCallback(payload) {
    if((payload[0].intersectionRatio) === 1){
        button.disabled = false;
        console.log('removing disabled');
    } else {
        button.disabled = true;
        // stop observing button
        ob.unobserve(terms.lastElementChild);
    }
}

const ob = new IntersectionObserver(obCallback, {
    root: terms,
    threshold: 1,
});

ob.observe(terms.lastElementChild);

// ob.observe(watch);

// terms.addEventListener('scroll', function(e){
//     console.log(e.currentTarget.scrollTop);
//     console.log(e.currentTarget.scrollHeight);
// });

