// Assignment Code
var generateBtn = document.querySelector("#generate");

// creating a generatePassword function
function generatePassword() {

  //defining variables
  let capLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let smllLetters = 'abcdefghijklmnopqrstuvwxyz';
  let nums = '0123456789';
  let specChars = '~!@#$%^&*()_+{}:?><;.,';
  let availableChar = '';
  let passwordText = '';

  //check if button is working
  console.log("the click works");

  // writing prompt for the length of the password
  let pwLength = prompt('choose a length of at least 8 characters and no more than 128 characters');

  // verifying if user sticks to the given criteria
  if (pwLength >= 8 && pwLength <= 128) {
    console.log(pwLength)
  } else {
    alert('You must enter a valid number between 8 and 128 characters')
    return '';
  }

  // determining that user wants capital letters or not
  let nwCapLetters = confirm('Would you like to use Capital letters from A-Z?');

  if(!nwCapLetters) {
    nwCapLetters = '';
  } else {
    availableChar += capLetters; 
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
