// Assignment Code
var generateBtn = document.querySelector("#generate");

// creating a generatePassword function
function generatePassword() {

  //defining variables
  let capLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let smllLetters = 'abcdefghijklmnopqrstuvwxyz';
  let nums = '0123456789';
  let specChars = '~!@#$%^&*()_+{}:?><;.,';
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
