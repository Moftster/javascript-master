function wait(ms = 0) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function destroyPopUp(popup){
    let myPopup = popup;
    popup.classList.remove('open');
    await wait(1000);
    // remove popup entirely
    popup.remove();
    myPopup = null;
}

function ask(options){
    return new Promise(async function(resolve){
    //create pop up with fields
    const popup = document.createElement('form');
    popup.classList.add('popup'); 
    popup.insertAdjacentHTML('afterbegin', 
    `<fieldset>
            <label>${options.title}</label>
            <input type="text" name="input"/>
            <button type="submit">Submit</button>
        </fieldset>
    `);

    //check if they want a cancel button
    if(options.cancel){
        const skipbutton = document.createElement('button');
        skipbutton.type = 'button';
        skipbutton.textContent = 'Cancel';
        popup.firstElementChild.appendChild(skipbutton);
        //listen for click on cancel button
        skipbutton.addEventListener('click', function(){
            resolve(null);
            destroyPopUp(popup);
        }, 
        {once: true})
    }
    //listen for submit events on inputs
    popup.addEventListener('submit', function(e){
        e.preventDefault();
        console.log('submitted');
        resolve(e.target.input.value);
        //remove from DOM entirely
        destroyPopUp(popup);

    }, 
    { once: true }
    );

    //when submitted resolve data in input box

    //insert popup into the DOM
    document.body.appendChild(popup);
    //small timeout before open class
    await wait(50);   
    popup.classList.add('open');
    });
}

//select all buttons that have a wuestion
async function askQuestion(e){
    console.log(e);
    const button = e.currentTarget;
    const cancel = 'cancel' in button.dataset;
    console.log(button.dataset);
    const answer = await ask({title: button.dataset.question, cancel: cancel});
    console.log(answer);
}
const buttons = document.querySelectorAll('[data-question]');
buttons.forEach(button => button.addEventListener('click', askQuestion));

const questions = [
    {title: 'What is your name?'},
    {title: 'What is your age?', cancel: true},
    {title: 'What is your dogs name?'},
];

async function asyncMap(array, callback){
    //make array to store results
    const results = [];
    //loop over out array
    for(const item of array) {
        results.push( await callback(item));
    }
    //when we are done with the loop return it
    return results;
}

async function go(){
    const answers = await asyncMap(questions, ask);
    console.log(answers);
}

go();

async function askMany(){
    for (const question of questions) {
        const answer = await ask(question);
        console.log(answer);
    }
}

askMany();