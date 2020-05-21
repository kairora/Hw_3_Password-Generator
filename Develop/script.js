// Assignment Code
var generateBtn = document.querySelector("#generate");
var userArray = [];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


function generatePassword () {
var lengthQuestion =  prompt ("How many characters do you want in the password?");
console.log("line 16" + " " + lengthQuestion)
var lowerCase = confirm ("Do you want lowercase letters?");
console.log(lowerCase)
var upperCase = confirm ("Do you want uppercase letters?");
console.log(upperCase)
var numberQuestion = confirm ("Do you want numbers in your password?");
console.log(numberQuestion)
var specialChar = confirm ("Do you want special characters in your password?");
console.log(specialChar)
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// On button click: 
// 1. prompt alert length (8-128 characters)
// 2. prompt alert lowercase
// 3. prompt alert uppercase
// 4. prompt alert numbers
// 5. prompt alert special characters
// Collect inputs and store
// Create arrays for lowercase outputs, uppercase, numbers, special characters
// Randomly pick an alphabet, number, or special character from the array
// Make a loop to randomly pick letters to the input length from user
// Concantenate those randomly picked letters, numbers, symbols
// display within text area with append




