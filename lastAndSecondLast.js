//user Input
let userInput = prompt('Please enter your word! Must contain atleast two characters');
let validInput = null;

//validate input 
while (true) {
    if (userInput.length >= 2 && userInput.length <= 100) {
        validInput = userInput;
        break;
    }
    else {
        userInput = prompt('Please enter a valid word! Must be atleast two characters.');
    }
}

//get last two characters and return it
let lastChars = null;
function lastLetters(input) {
    return lastChars = input.slice(-2);    
};

lastLetters(validInput);
console.log(`${lastChars[1]} ${lastChars[0]}`);









