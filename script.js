// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//creating randomized letters

function randomLowerCase() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function randomUpperCase() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

console.log(randomUpperCase());

//creating randomized numbers 
function randomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) +48);
}
console.log(randomNumber());

//creating randomized symbols
function randomSymbol() {
  var symbols = "!@#$%^&*(){}[]=<>/,."; 
  return symbols[Math.floor(Math.random() * symbols.length)];
}
console.log(randomSymbol());