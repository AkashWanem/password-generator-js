// Assignment Code
var generateBtn = document.querySelector("#generate");

// creating a generatePassword function
function generatePassword() {

  //defining variables
  let capLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let smllLetters = 'abcdefghijklmnopqrstuvwxyz';
  let nums = '0123456789';
  let specChars = '~!@#$%^&*()_+{}:?><;.,';

  //check if button is working
  console.log("the click works");

  // writing prompt for the length of the password
  let pwLength = prompt('choose a length of at least 8 characters and no more than 128 characters');


}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
