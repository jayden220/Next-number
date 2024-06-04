
let arr = [1, 12, 26, 48, 85];

function getNext() {
    let iteration = 0;
    let maxValue = arr.length;

    return () => {
        let number = arr[iteration];
        iteration++;
        if (iteration === maxValue) iteration = 0;
        return number;
    };
}

let getNextNumber = getNext();

console.log(getNextNumber()); 
console.log(getNextNumber()); 
console.log(getNextNumber()); 
console.log(getNextNumber()); 
console.log(getNextNumber()); 


 
