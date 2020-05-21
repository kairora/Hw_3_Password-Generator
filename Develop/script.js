// Pseudocode
//  On button click: 
//     1. prompt alert length (8-128 characters)
//     2. confirm alert lowercase
//     3. confirm alert uppercase
//     4. confirm alert numbers
//     5. confirm alert special characters
//  Collect inputs and store
//  Create arrays or randomizer functions for lowercase outputs, uppercase, numbers, special characters
//  Randomly pick an alphabet, number, or special character from an array
//  Make a loop to randomly pick letters, symbols, numbers if selected as true out of those arrays to string/array that is the input length from user in #2 above
//  Concatenate those randomly picked letters, numbers, symbols
//  Display within text area with append

// Variables
var generateBtn = document.querySelector("#generate");
lowerCase = false;
upperCase = false;
numberQuestion = false;
specialChar = false;

// Using an array of predefined symbols since no specification of which symbols are appropriate in passwords
symbolArray = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', ';', ',', '.', '[', ']'];
// Creates an array of true user inputs that returned random characters, numbers, symbols
var checkedArray = [checkForLower, checkForUpper, checkForNum, checkForSymbol]
// Creates the final passwords initial, empty string
finalPassword = '';

// Functions
// Randomizing functions for lowercase, uppercase, numbers, and special characters pulled from character code
function findCharCode() {
  return Math.floor(Math.random() * 26);
}
function genRandomLowCase() {
  return String.fromCharCode(findCharCode() + 97);
}
function genRandomUpperCase() {
  return String.fromCharCode(findCharCode() + 65);
}
function genRandomNum() {
  return Math.floor(Math.random() * 9);
}
function genRandomSymbol() {
  return symbolArray[Math.floor(Math.random() * symbolArray.length)];
}
function userAnswers() {
  // First Alert: Ask user for number of characters
  var lengthPassword =  prompt ("How many characters do you want in the password?");
  // Check if the number is between 8 and 128, if true keep prompting for other types of characters, numbers, and symbols in password. If false, alert user to input a number in the correct range
if (lengthPassword >= 8 && lengthPassword <= 128) {
  lowerCase = confirm ("Do you want lowercase letters?");
  upperCase = confirm ("Do you want uppercase letters?");
  numberQuestion = confirm ("Do you want numbers in your password?");
  specialChar = confirm ("Do you want special characters in your password?");
  if (lowerCase || upperCase || numberQuestion || specialChar) {
    return lengthPassword;
  } else {
      alert ("You must select atleast one criterion for the password.");
      return -1;
  };
  
} 
// If false, alert user to input a number in the correct range
else {
    alert("You must input a password length of minimum 8 characters and maximum 128 characters.")};
    userAnswers();
};

// Checks/filters out false user inputs 
function checkForLower() {
  if (lowerCase)  {
    return genRandomLowCase();
  } 
  return "";
}
function checkForUpper() {
  if (upperCase)  {
    return genRandomUpperCase();
  }
  return "";
}
function checkForNum() {
  if (numberQuestion)  {
    return genRandomNum();
  }
  return "";
}
function checkForSymbol() {
  if (specialChar)  {
    return genRandomSymbol();
  }
  return "";
}

// Runs through user answers, checks if they work, creates a string with randomized numbers, letters, symbols
function generatePassword() {
  finalPassword = "";
  var chosenLength = userAnswers();
  while (finalPassword.length < chosenLength) {
    finalPassword = finalPassword.concat('', checkedArray[Math.floor(Math.random() * checkedArray.length)]());
  }
  return finalPassword;
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)


