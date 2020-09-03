// ## Acceptance Criteria

// ```
// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN prompted for character types to include in the password
// THEN I choose lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page
// ```

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Prompt user for password length
var pwLength = prompt("Password must be 8-128 characters long. How long would you like yours to be?");

if (pwLength >= 8 && pwLength < 128){
  ("Password length:" + pwLength);
}
else{
  alert("Please enter valid character length.");
  prompt("Password must be 8-128 characters long. How long would you like yours to be?");
}

//  Ask user if they want lowercase, uppercase, numbers, and/or symbols in their password

var addLowercase = confirm("Add lowercase letters to password?");
// console.log("Use lowercase:" + lowerCaseCharacters);
var addUppercase = confirm("Add uppercase letters to password?");
// console.log("Use uppercase:" + upperCaseCharacters);
var addNumbers = confirm("Add numbers to password?");
// console.log("Use numbers:" + numberCharacters)
var addSymbols = confirm("Add symbols to password?");
// console.log("Use symbols:" + symbolCharacters);

// Added four sets of different character strings to generate password

var lowerCaseCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCaseCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numberCharacters = ["0","1","2","3","4","5","6","7","8","9"];
var symbolCharacters = ["~`!@#$%^&*()_+-=[]{};:',.<>/?"];  

if (
  addLowercase === false &&
  addUppercase=== false &&
  addNumbers === false &&
  addSymbols === false 
) {
  alert("Please select one character type to generate password.");
}

// Build string of characters based on users preference

var chosenCharacters = "";
if (addLowercase === true){
  chosenCharacters = chosenCharacters.concat(lowerCaseCharacters);
}
if (addUppercase === true){
  chosenCharacters = chosenCharacters.concat(upperCaseCharacters);
}
if (addNumbers === true){
  chosenCharacters = chosenCharacters.concat(numberCharacters);
}
if (addSymbols === true){
  chosenCharacters = chosenCharacters.concat(symbolCharacters);
}
// Checked to see if it shows in console. Check.
console.log(chosenCharacters)

// Create empty string to hold random password
var randomPassword = "";

for (var i = 0; i < pwLength; i++) {
  randomPassword = randomPassword.concat(
    chosenCharacters[
      Math.floor(Math.random()* chosenCharacters.length)

    ]
  );
  }




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
