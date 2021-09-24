// Assignment Code
var generateBtn = document.querySelector("#generate");

//password length function
function determinePassLength() {
  passwordLength = prompt("How many characters long would you like your password to be? Please choose a length betwee (8-128).");
  if (passwordLength < 8) {
    alert("Please choose a valid number greater than 8");
    determinePassLength(); 

  } else if (passwordLength > 128) {
    alert("Please choose a valid number less than 128");
    determinePassLength();

  } else if (passwordLength = NaN) {
    alert("please choose a valid NUMBER between 8-128");
    determinePassLength();

  } else {
    alert("Thank you. Please set further password preferences in the following prompts.");

  }
  return passwordLength;
}

//uppercase function possibly works. 
/*function determineUpperCase() {
  comfirmUpper = prompt("Would you like to include Upper Case letters in your password? Please say 'yes' or 'no'.");
  confirmUpper = confirmUpper.toLowerCase();

  if (confirmUpper === null || confirmUpper === "") {
    alert("Please enter a valid response.")
    determineUpperCase();

  } else if (confirmUpper === 'yes' || confirmUpper === 'y') {
    comfirmUpper = true;
    return confirmUpper;

  } else if (confirmUpper === 'no' || confirmUpper === 'no') {
    confirmUpper = false;
    return confirmUpper;

  } else {
    alert("Please answer 'yes' or 'no");
  }
  return confirmUpper;
}  */


//number function might also work. 
/*function determineNumbers(){
  confirmNumbers = prompt("Do you want to include numbers in your password? Please answer 'yes' or 'no'. ");
  confirmNumbers = confirmNumbers.toLowerCase();

  if (confirmNumbers === null || confirmNumbers === "") {
    alert("Please enter a valid response.");
    determineNumbers();

  } else if (confirmNumbers === "yes" || confirmNumbers ==="y"){
    confirmNumbers = true;
    return confirmNumbers;

  } else if (confirmNumbers === "no" || confirmNumbers ==="n"){
    confirmNumbers = false;
    return confirmNumbers;
    
  } else {
    alert("Please answer 'yes' or 'no");
    determineNumbers();
  }
  return confirmNumbers;
}*/


//symbol function




//Creating the password
function generatePassword() {
  determinePassLength();
  console.log(passwordLength);
  determineUpperCase();
  console.log(confirmUpper);
  determineNumbers();
  console.log(confirmNumbers);





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