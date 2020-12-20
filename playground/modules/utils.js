const last = 'bos';
const middle = 'mo';

export function returnHi(name){
    return `Hi ${name} ${last}`;
}

const first = 'doug';

// NAMED exports
export { last, middle };
export default first;