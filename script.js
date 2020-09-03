// Assignment Code
var generateBtn = document.querySelector("#generate");

// Added four sets of different character strings to generate password

var lowerString = "abcdefghijklmnopqrstuvwxyz";
var upperString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberString = "0123456789";
var symbolString = "~`!@#$%^&*()_+-=[]{};:',.<>/?";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
