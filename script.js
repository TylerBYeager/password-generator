// Assignment Code
var generateBtn = document.querySelector("#generate");


function generatePassword() {





// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);








/*

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
function determineUpperCase() {
  var comfirmUpper = prompt("Would you like to include Upper Case letters in your password? Please say 'yes' or 'no'.");
  let confirmUpper = confirmUpper.toLowerCase();

  if (confirmUpper === null || confirmUpper === "") {
    alert("Please enter a valid response.")
    determineUpperCase();

  } else if (confirmUpper === 'yes' || confirmUpper === 'y') {
    comfirmUpper = true;

  } else if (confirmUpper === 'no' || confirmUpper === 'no') {
    confirmUpper = false;

  } else {
    alert("Please answer 'yes' or 'no");
  }
}


//number function might also work. 
function determineNumbers(){
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
}


//symbol function
function determineSymbol(){
  confirmSymbols = prompt("Do you want to include symbols in your password? Please answer 'yes' or 'no'. ");
  confirmSymbols = confirmSymbols.toLowerCase();

  if (confirmSymbols === null || cconfirmSymbols === "") {
    alert("Please enter a valid response.");
    determineSymbol();

  } else if (confirmSymbols === "yes" || confirmSymbols ==="y"){
    confirmSymbols = true;

  } else if (confirmSymbols === "no" || confirmSymbols ==="n"){
    confirmSymbols = false;
    
  } else {
    alert("Please answer 'yes' or 'no");
    determineSymbol();
  }
}



//Creating the password
function generatePassword() {
  determinePassLength();
  console.log(passwordLength);
  determineUpperCase();
  console.log(confirmUpper);
  determineNumbers();
  console.log(confirmNumbers);
  determineSymbols();
  console.log(confirmSymbols);


var password = "";
if (confirmUpper && confirmNumbers && confirmSymbols){
  randomLowerCase += randomUpperCase + randomNumber + randomSymbol;

} else if (confirmUpper && confirmNumbers){
  randomLowerCase += randomUpperCase + randomNumber;

} else if (confirmNumbers && confirmSymbols){
  randomLowerCase += randomUpperCase + randomSymbol;

} else if (confirmUpper && confirmSymbols){
  randomLowerCase += randomUpperCase + randomSymbol;

} else if (confirmUpper){
  randomLowerCase += randomUpperCase;

} else if(confirmNumbers){
  randomLowerCase += randomNumber;

} else if (specialCheck){
  randomLowerCase += randomSymbol;

} else {
  randomLowerCase === randomLowerCase;
}

  for(var i = 0; i < passwordLength; i++){
    password += randomLowerCase.charAt(Math.floor(Math.random() * randomLowerCase.length));
  }
  return password;
}











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



var passwordLength = 0;
var confirmUpper = false;
var confirmNumbers = false;
var confirmSymbols = false;





*/