console.log('linked');

const shoppingForm = document.querySelector('.shopping');
const list = document.querySelector('.list');

//need an array to hold our state
let items = [];

function handleSubmit(e) {
    e.preventDefault();
    console.log('submitted');
    const name = e.currentTarget.item.value;
    if(!name) return;
    const item = {
        name: name,
        id: Date.now(),
        complete: false,
    };
    //push the items into state
    items.push(item);
    console.log(`There are now ${items.length} in your state`);
    //clear the form
    e.target.reset();
    //fire off a custom event that will tell anyone else who cares that the items have been updated
    list.dispatchEvent(new CustomEvent('itemsUpdated'));
}   

function displayItems() {
    console.log(items);
    const html = items.map(item => {
        return `<li class="shopping-item">
        <input type="checkbox" value="${item.id}" ${item.complete ? 'checked' : ''}>
        <span class="itemName">${item.name}</span>
        <button aria-label="Remove ${item.name}" value="${item.id}">&times;</button>
        </li>`;
    }).join('');
    list.innerHTML = html;
}

function mirrorToLocalStorage() {
    console.info('Saving items to local storage');
    localStorage.setItem('items', JSON.stringify(items));
}

function restoreFromLocalStorage() {
    console.info('Restoring from local storage');
    //pull the items from local storage
    const lsItems = JSON.parse(localStorage.getItem('items'));
    if(lsItems.length){
        // items = lsItems;
        // items.push(lsItems[0]);
        // lsItems.forEach(item => items.push(item));
        items.push(...lsItems);
        list.dispatchEvent(new CustomEvent('itemsUpdated'));
    }
}

function deleteItem(id){
    console.log('Delting item', id);
    //update items array to remove this one
    items = items.filter(item => item.id !== id);
    console.log(items);
    list.dispatchEvent(new CustomEvent('itemsUpdated'));
}

function markAdComplete(id){
    console.log('marking as complete', id);
    const itemRef = items.find(item => item.id === id);
    // console.log(itemRef);
    itemRef.complete = !itemRef.complete;
    list.dispatchEvent(new CustomEvent('itemsUpdated'));

}

shoppingForm.addEventListener('submit', handleSubmit);
list.addEventListener('itemsUpdated', displayItems);
//Event delegation: we listen for the click on the <ul> but then delegate the click over to the button if that was clicked
list.addEventListener('itemsUpdated',mirrorToLocalStorage);
list.addEventListener('click', function(e){
    console.log(e.target, e.currentTarget);
    const id = parseInt(e.target.value);
    if(e.target.matches('button')){
        deleteItem(id);
    }
    if(e.target.matches('input[type="checkbox"]')){
        markAdComplete(id);
    };
})
restoreFromLocalStorage();

// const buttons = list.querySelectorAll('button');
// console.log(buttons);

// buttons.forEach(button => button.addEventListener('click', deleteItem));