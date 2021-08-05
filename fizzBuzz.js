//user Input
let userInput = parseInt(prompt('Please enter your number between 0 and 200000!'));
let validInput = null;

// validate input
while (true) {
    if(userInput > 0 && userInput < 2*(10**5)) {
        validInput = userInput;
        break;
    } else {
        userInput = parseInt(prompt('Ivalid Input! Please enter your number between 0 and 200000!'));
    }
}

//check for multiply and print output
function printNumbers (num) {
    for (let i = 1; i <= num; i++) {
        if (i % 3 !== 0 && i % 5 !== 0){
            console.log(i);
        } else if (i % 3 === 0 && i % 5 === 0) {
            console.log('FizzBuzz');
        } else if (i % 5 === 0) {
            console.log('Buzz'); 
        } else {
            console.log('Fizz');
        }
    }
};

printNumbers(validInput);








