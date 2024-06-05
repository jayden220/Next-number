let nextNum = document.querySelector('button')
let numberDisplay = document.getElementById('numberDisplay')
let arr = [1, 12, 26, 48, 85];
let iteration = 0;
let maxValue = arr.length;

function getNext() {

    
        let number = arr[iteration];
        iteration++;
        if (iteration === maxValue) iteration = 0;
        return number;
    };



    nextNum.addEventListener('click',function () {
        
        let getNextNumber = getNext();
        numberDisplay.innerHTML = getNextNumber;
    })




