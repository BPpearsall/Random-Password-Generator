// Assignment Code
var generateBtn = document.querySelector("#generate");

// Global Character Variables
let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lower = "abcdefghijklmnopqrstuvwxyz";
let numbers = "0123456789";
let special = "!@,#$%&*{}[]/\\+=";
let chosenCharacters = "";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


function generatePassword() {
  let result
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
