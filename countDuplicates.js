//empty array and variables
let arr = [];
let counter = 0;
let arrLength = null;

//ask user for array length
let userInput = parseInt(prompt('Please enter size of Array between 3 and 1000'));

//fuction to check for valid length
let setArrayLenght = (int) => {
    while (true) {
        if (int >= 3 && int <= 1000) {
            arrLength = int;
            break;
        }
        else {
            int = parseInt(prompt('Invalid input! Please enter size of Array between 3 and 1000'));
        }
    }
};

setArrayLenght(userInput);

// function to fill array with valid elements
let fillArray = (arrLength) => {
    for (let i = 0; arrLength !== arr.length; i++) {
        let arrElement = parseInt(prompt(`Enter element of Array between 1 and ${arrLength}`));
        if (!(arrElement > 0 && arrElement <= arrLength)) {
            alert(`Wrong Input! Must be between 1 and ${arrLength}`);
        } else {
            arr.push(arrElement);
        }
    }
};

fillArray(arrLength);

//find duplicates values
let findDuplicates = (arr) => {
    let duplicateValues = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr.includes(arr[i], i + 1) === true && duplicateValues.includes(arr[i]) === false) {
            duplicateValues.push(arr[i]);            
        }
    }
    return counter = duplicateValues.length;
};

findDuplicates(arr);

//print results
console.log(counter);





