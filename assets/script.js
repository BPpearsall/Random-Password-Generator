// Global Character Variables for each character type. chosenCharacters is left blank as it will become the basis for the finalPassword variable
let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerCase = "abcdefghijklmnopqrstuvwxyz";
let numbers = "0123456789";
let specialCharacter = "!@,#$%&*/+=";
let chosenCharacters = "";

// Main function that runs the generatePassword process that will then get called into the writePassword function once its completed
function generatePassword() {

  // This will be the empty variable that the generated password string will get called into at the end of this function
  let finalPassword = "";

  // Defining passwordLength variable by having the user input a valid number between 8-128 through a window prompt
  let passwordLength = prompt("Choose a length for your password between the values of: 8 and 128.")

  // If statement that checks to see if the user input integer is less than 8 or more than 128, will return the user back to the beginning of the function
  if (passwordLength < 8 || passwordLength > 128) {
    alert("You must select a number between 8 and 128 in order for the generator to work.") 
    return generatePassword;
  } 

  /* If statement that checks to see if the user input a valid character type user isNaN for Not a Number. 
      Will spit out an alert if they do not use a number and will return the user to the beginning of the functiom*/
  if(isNaN(passwordLength)){
      alert("You must input a valid numerical value")
      return generatePassword;
  }

  // Multiple confirm statements to store whether the user wants to include different character types that will get called and checked later
  let hasUpperCase = confirm("Do you want to include upper case letters (A,B,C...) in your password?");
  let hasLowerCase = confirm("Do you want to include lower case letters (a,b,c...) in your password?");
  let hasNumbers = confirm("Do you want to include numbers (1,2,3...) in your passord?");
  let hasSpecialCharacter = confirm("Do you want to include special characters (!,@,#...) into your?");

  // If statement to check if the user did not return a true value for any of the confirms in the previous sections. Will alert the user and return to the beginning of the prompt
  if (hasUpperCase === false && hasLowerCase === false && hasNumbers === false && hasSpecialCharacter === false) {
    alert("You must choose at least 1 character type in order to generate a password.")
    return generatePassword
  }

  // If hasUpperCase = True, the chosenCharacters array will add 1 Uppercase and rewrite itself
  if (hasUpperCase) {
    chosenCharacters += upperCase
  }

  // If hasLowerCase = True, the chosenCharcters array will add 1 Lowercase and rewrite itself
  if (hasLowerCase) {
    chosenCharacters += lowerCase
  }

  // If hasNumbers = True, the chosenCharacters array will add 1 number and rewrite itself
  if (hasNumbers) {
    chosenCharacters += numbers
  }

  //  If hasSpecialCharacter = True, the chosenCharacters array will add 1 Special Characteer and rewrite itself
  if (hasSpecialCharacter) {
    chosenCharacters += specialCharacter
  }

  // For finalPassword variable. The charAt modifies the chosenCharacters array by selecting a random character created by math floor and random * the chosenCharacters length 
  // passwordLength is set during the first prompt and acts as the maximum integer for chosenCharacters, and once the .length equals password length it, the random string gets stored
  // in finalPassord, final Password is then returned to generatePassword and gets its function called in writePassword
  for (let i = 0; i < passwordLength; i++) {
    finalPassword += chosenCharacters.charAt(Math.floor(Math.random() * chosenCharacters.length));
  }
  return finalPassword;

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


