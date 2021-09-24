// Assignment Code
var generateBtn = document.querySelector("#generate");


function generatePassword() {
  var passwordLength = prompt("How many characters long would you like your password to be? Please choose a length betwee (8-128).");
  if (passwordLength < 8 || passwordLength > 128 || passwordLength === NaN) {
    alert("Please choose a valid number");
    return "Please choose a valid number";
  } else {
    console.log(passwordLength);
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