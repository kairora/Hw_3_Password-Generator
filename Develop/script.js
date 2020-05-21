// Pseudocode
//  On button click: 
//     1. prompt alert length (8-128 characters)
//     2. confirm alert lowercase
//     3. confirm alert uppercase
//     4. confirm alert numbers
//     5. confirm alert special characters
//  Collect inputs and store
//  Create arrays for lowercase outputs, uppercase, numbers, special characters
//  Randomly pick an alphabet, number, or special character from the array
//  Make a loop to randomly pick letters, symbols, numbers if selected as true out of those arrays to string/array that is the input length from user in #2 above
//  Concatenate those randomly picked letters, numbers, symbols
//  Display within text area with append

// Variables
var generateBtn = document.querySelector("#generate");
// var lengthArray =  prompt ("How many characters do you want in the password?");
// var lowerCase = confirm ("Do you want lowercase letters?");
// var upperCase = confirm ("Do you want uppercase letters?");
// var numberQuestion = confirm ("Do you want numbers in your password?");
// // var specialChar = confirm ("Do you want special characters in your password?");
// var userArray = [lengthArray, lowerCase, upperCase, numberQuestion, specialChar];


// Functions
// array for lowercase characters

function findCharCode() {
  Math.floor(Math.random() * 26);
};
function findRandomLowCase() {
  String.fromCharCode(findCharCode() + 97);
};
function findRandomUpperCase() {
  String.fromCharCode(findCharCode() + 65);
};
function findRandomNum() {
  Math.floor(Math.random() * 9);
};
// Using an array of predefined symbols since no specification of which symbols are appropriate in passwords
symbolArray = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', ';', ',', '.', '[', ']'];







function userAnswers() {
  // First Alert: Ask user for number of characters
  var lengthArray =  prompt ("How many characters do you want in the password?");
  // Check if the number is between 8 and 128, if true keep prompting for other types of characters, numbers, and symbols in password. If false, alert user to input a number in the correct range
if (lengthArray >= 8 && lengthArray <= 128) {
  var lowerCase = confirm ("Do you want lowercase letters?");
  var upperCase = confirm ("Do you want uppercase letters?");
  var numberQuestion = confirm ("Do you want numbers in your password?");
  var specialChar = confirm ("Do you want special characters in your password?");
} 
// If false, alert user to input a number in the correct range
else {
    alert("You must input a password length of minimum 8 characters and maximum 128 characters.")};
    userAnswers();
};


function generatePassword() {
  userAnswers();
};


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}







// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)

