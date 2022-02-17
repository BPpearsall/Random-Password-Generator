// Defined Global Variable
var generateBtn = document.querySelector("#generate");
let upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
let specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*'];

function generatePassword() {

  // First prompt asks to set password length and turns their answer into an integer
  let passwordLength = parseInt(prompt("How long should the password be."))

  // If statement to appease requirements, making passwords under 8 characters and above 128 characters not possible and restarting the function
  if (passwordLength < 8 || passwordLength > 128) {
    alert("You must choose a password length between 8 and 128 characters");
    return null
  }

  // If statement to appease requirements, making any entry into the password legnth prompt return an error and restarting the function  
  if (Number.isNaN(passwordLength)) {
    alert("You must input a number");
    return null
  }

  // Various confirm statements to ask the user what kind of character types they want to be included in their generated password
  let booleanUpperCase = confirm("Do you want to include Upper Case letters?");
  let booleanLowerCase = confirm("Do you want to include Lower Case letters?");
  let booleanNumbers = confirm("Do you want to include Numbers?");
  let booleanSpecialCharacters = confirm("Do you want to include Special Characters?");

  // Console logging each of the boolean answers
  console.log(booleanUpperCase);
  console.log(booleanLowerCase);
  console.log(booleanNumbers);
  console.log(booleanSpecialCharacters);
    
}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
