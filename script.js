// Assignment Code
var generateBtn = document.querySelector("#generate");

//function to determine password parameters
function generatePassword() {
  var passwordLength = prompt("How many characters long would you like your password to be? Please choose a length betwee (8-128).");
  if (passwordLength < 8 || passwordLength > 128 || passwordLength === NaN) {
    alert("Please choose a valid number");
    return "Please choose a valid number";
  } else {
    console.log(passwordLength);
  }

  var charTypes = [];

  var lowerCase = confirm("Would you like to include Lower Case letters in your password?");
  if (lowerCase === true) {
    charTypes.push(0);
  }
  console.log(lowerCase);

  var upperCase = confirm("Would you like to include Upper Case letters in your password?");
  if (upperCase === true) {
    charTypes.push(1);
  }
  console.log(upperCase);

  var numbers = confirm("Do you want to include numbers in your password?");
  if (numbers === true) {
    charTypes.push(2);
  }
  console.log(numbers);

  var symbols = confirm("Do you want to include symbols in your password?");
  if (symbols === true) {
    charTypes.push(3);
  }
  console.log(symbols);

  console.log(charTypes);

  var yourPassword = "";

  //set up for random characters
  for (var i = 0; i < passwordLength; ++i) {
    var randomCharType =
      charTypes[Math.floor(Math.random() * charTypes.length)];
    console.log(randomCharType);

    //randomizer using math.floor(math.random) and character codes (previous attempt utilized a similar approach)
    if (randomCharType === 0) {
      console.log("Random Lowercase");
      var randomCharCode = Math.floor(Math.random() * 25) + 97;
      console.log(randomCharCode);
      var asciiCode = String.fromCharCode(randomCharCode);
      console.log(asciiCode);
      yourPassword = yourPassword.concat(asciiCode);
    } else if (randomCharType === 1) {
      console.log("Random Uppercase");
      var randomCharCode = Math.floor(Math.random() * 25) + 65;
      console.log(randomCharCode);
      var asciiCode = String.fromCharCode(randomCharCode);
      console.log(asciiCode);
      yourPassword = yourPassword.concat(asciiCode);
    } else if (randomCharType === 2) {
      console.log("Random Numbers");
      var randomCharCode = Math.floor(Math.random() * 9) + 48;
      console.log(randomCharCode);
      var asciiCode = String.fromCharCode(randomCharCode);
      console.log(asciiCode);
      yourPassword = yourPassword.concat(asciiCode);
    } else if (randomChar === 3) {
      console.log("Random Symbols");
      var randomCharCode = Math.floor(Math.random() * 14) + 33;
      console.log(randomCharCode);
      var asciiCode = String.fromCharCode(randomCharCode);
      console.log(asciiCode);
      yourPassword = yourPassword.concat(asciiCode);
    } 





// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); 