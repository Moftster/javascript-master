export function randomItemFromArray(array, not){
    const item = array[Math.floor(Math.random() * array.length)];
    if(item === not){
      console.log('We used that one last time, please try again');
      return randomItemFromArray(array, not);
    }
    return item;
  }