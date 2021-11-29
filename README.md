# Password Generator 
This is the third homework assignment for the UC Berkeley Full Stack Coding bootcamp. I found this project quite difficult to complete as my first attempt had issues with local vs global scope. Following the completion of this project I have found myself inspired to dive in to javascript further and learn as much as I possibly can.

## Project Details
This project was one that featured a small amount of starter code that needed additionally information added in order to work properly. Using just Javascript I was able to accomplish:
1. A prompt window that appears when the "generate" button is pressed.
2. The prompt inquiring about the length of the desired password and a length limit of between eight and one-hundred and twenty-eight characters.
3. Following the previous prompt, a new prompt inquiring about whether the user would like to add "lowercase" letters will appear. 
4. Then another prompt inquiring about whether to add "uppercase" letters. 
5. Then numbers. 
6. Finally special symbols before automatically generating a password that meets the previously established criteria. 

![Snapshot](https://user-images.githubusercontent.com/89880190/134632547-7ae55447-6c31-4b59-b8f8-71fb3055994d.png)

---
## Some Code Snippets
Here I provide and explain just a few code snippets. The first bit of code is the code that helped determine the length of the password. While part of the greater "generatePassword" function, the 'passwordLength' prompt is really what began the entire process as the prompt allowed for user input and prevented any invalid information from breaking the code. 
```
function generatePassword() {
  var passwordLength = prompt("How many characters long would you like your password to be? Please choose a length between (8-128).");
  if (passwordLength < 8 || passwordLength > 128 || passwordLength === NaN) {
    alert("Please choose a valid number");
    return "Please choose a valid number";
  } else {
    console.log(passwordLength);
```


Next we have the creation of the variable 'lowerCase.' This variable set a new prompt that allowed the user to decide whether they wanted to include lowercase letters into their password. Additionally, you'll see that a new array is created and lowercase is stored in the index as 0. This will come into play later. Furthermore, the next few lines of code to determine "uppercase", "numbers", and "symbols" are nearly identical to this code but with 'lowerCase' replaced with the corresponding variable name.
```
 var lowerCase = confirm("Would you like to include Lower Case letters in your password?");
  if (lowerCase === true) {
    charTypes.push(0);
  }
```

For the last bit of teaser code we create a 'for...loop' that helps tie everything together to create the password. Not shown are the conditional statements that introduce the randomized aspect of the generator using Math.Floor(Math.Random) and character key codes. 

![ASCII](https://user-images.githubusercontent.com/89880190/134632672-293cd1da-2285-4737-94c4-1fb14ebda9e0.jpg)

```
for (var i = 0; i < passwordLength; ++i) {
    var randomCharType =
      charTypes[Math.floor(Math.random() * charTypes.length)];
    console.log(randomCharType);
```

## Get a copy

To get a working copy on your machine you will need a few things such as access to Gitbash or Terminal, a working SSH key, a Github account, and a code reader like VS Code

Getting your clone:

```
Once you have a working SSH key added to your Github account, go to the Code-Refactor Repository. Click the green "code" button on the top right and clonecopy the @github.com link with the SSH key option to your clipboard. 
```
![clone](https://user-images.githubusercontent.com/89880190/134632726-13ef8744-77ab-44b9-a398-d232dc21f51b.png)


Next: 

```
Open Gitbash or Terminal and navigate to a directory that you would like to add the cloned repository. Once in your desired directory type in
"git clone 'right click to paste'" and press enter. This will clone the repository onto your personal machine.
```

Lastly: 

```
Type 'ls' into your Gitbash or Terminal to see a list of items within the directory. If you have done the previous steps correctly then you should see a respository titled "password-generator". Simply type in "code ." to open it in your code editor of choice and have fun!
```

### Built With

* [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
* [JAVASCRIPT](https://developer.mozilla.org/en-US/docs/Web/JavaScript)


## Deployed Link
* [See the Live Site!](https://tylerbyeager.github.io/password-generator/)

## Authors

* **Tyler Brian Yeager** 

- [Link to Generator Site](https://github.com/TylerBYeager/password-generator)
- [Link to Github](https://github.com/TylerBYeager/tylerbyeager.github.io)
- [Link to LinkedIn](https://www.linkedin.com/in/tyler-yeager-611926213/)

## License

This project is licensed under the MIT License 

## Acknowledgments

* Credit to Traversy Media on Youtube who helped me to understand Math.floor(Math.Random) and to the BCS Learning Assistant "Nathaniel" who helped troubleshoot numerous issues and provided me a great "leg up" on starting over.
* Hat tip to anyone else whose code, libraries, packages, or UI was used.
* Inspired by a desire to succeed at the UC Berkeley Extension Bootcamp.
* Lastly, I would like to acknowledge the rest of my fellow bootcamp students and instructors who have helped me get this far. I look forward to learning much much more. Thank you. 
