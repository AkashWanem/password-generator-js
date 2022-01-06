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

  // determining that user wants small letters or not
  let nwSmllLetters = confirm('Would you like to use small letters from a-z?')

  if (!smllLetters) {
    nwSmllLetters = '';
  } else {
    availableChar += smllLetters;
  }

  // determining that user wants numbers or not
  let nwNums = confirm('Would you like to add numbers from 0-9?');

  if (!nwNums) {
    nwNums = '';
  } else {
    availableChar += nums;
  }

  // determining that user wants characters or not
  let nwSpecChars = confirm('Would you like to add characters?')

  if (!nwSpecChars) {
    nwSpecChars = '';
  } else {
    availableChar += specChars;
  }

  // verifying that user accepts at least one criteria
  if (!nwCapLetters && !nwSmllLetters && !nwNums && !nwSpecChars) {
    return alert('you must pick at least one given criteria!')
  }

  // defines the password with random values from selected criteria, 
  // and limits the password to chosen number
  for (let i = 0; i < pwLength; i++) {
    passwordText += availableChar[Math.floor(Math.random () * availableChar.length)];
  }

  return passwordText;

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
