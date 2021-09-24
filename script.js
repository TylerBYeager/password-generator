// Assignment Code
var generateBtn = document.querySelector("#generate");

//function to determine password parameters
function generatePassword() {
  var passwordLength = prompt("How many characters long would you like your password to be? Please choose a length between (8-128).");
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

  var numbers = confirm("Do you want to include Numbers in your password?");
  if (numbers === true) {
    charTypes.push(2);
  }
  console.log(numbers);

  var symbols = confirm("Do you want to include Symbols in your password?");
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

    } else if (randomCharType === 3) {
      console.log("Random Symbols");
      var randomCharCode = Math.floor(Math.random() * 14) + 33;
      console.log(randomCharCode);
      var asciiCode = String.fromCharCode(randomCharCode);
      console.log(asciiCode);
      yourPassword = yourPassword.concat(asciiCode);

    } else {
      alert("You must select a type of character");
    }
    console.log("Your password is " + yourPassword);
  }

  return yourPassword;
}






// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); 










//Original attempt at randomizing characters. Can be viewed in earlier version as well. 


/*
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
console.log(randomSymbol());*/