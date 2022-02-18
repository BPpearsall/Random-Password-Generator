// Assignment Code
var generateBtn = document.querySelector("#generate");

// Global Character Variables
let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerCase = "abcdefghijklmnopqrstuvwxyz";
let numbers = "0123456789";
let specialCharacter = "!@,#$%&*/+=";
let chosenCharacters = "";

function generatePassword() {
  let finalPassword = "";
  let passwordLength = prompt("Choose a length for your password between the values of: 8 and 128")
  if (passwordLength < 8 || passwordLength > 128) {
    alert("You must select a number between 8 and 128 in order for the generator to work.") 
  } 

  if(isNaN(passwordLength)){
      alert("You must input a valid numerical value")
  }
  let hasUpperCase = confirm("Do you want to include upper case letters (A,B,C...) in your password?");
  let hasLowerCase = confirm("Do you want to include lower case letters (a,b,c...) in your password?");
  let hasNumbers = confirm("Do you want to include numbers (1,2,3...) in your passord?");
  let hasSpecialCharacter = confirm("Do you want to include special characters (!,@,#...) into your?");

  if (hasUpperCase && hasLowerCase && hasNumbers && hasSpecialCharacter === false) {
    
  }

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
