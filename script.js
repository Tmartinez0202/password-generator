// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", ";", ":", "<", ">", "?"];
var numberLine = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

function getPasswordOptions (){
  var length = parseInt (prompt("How many characters would you like your password to contain?"));
  
//validate between 8 and 100 char
  var hasSpecial = confirm("Click ok to contain special characters.")
  var hasNumber = confirm("Click ok to contain numbers.")
  var hasUpper = confirm("Click ok to contain uppercase letters.")
  var hasLower = confirm("Click ok to contain lowercase letters.")

  //validate at least one was selected
  var passwordOptions = {
    length: length, 
    hasSpecial: hasSpecial,
    hasNumber: hasNumber,
    hasUpper: hasUpper,
    hasLower: hasLower
  }
  return passwordOptions
}

function getRandom (arr){
  var randomIndex = Math.floor(Math.random()*arr.length);
  var randomEl = arr[randomIndex]
  return randomEl
}

function generatePassword(){
  var options = getPasswordOptions();
  var result = [];
  var possibleChar = [];
  var guarenteedChar = [];

  if (options.hasSpecial){
    possibleChar = possibleChar.concat(specialChar)
    guarenteedChar.push(getRandom(specialChar))
  }
  if (options.hasNumber){
    possibleChar = possibleChar.concat(numberLine)
    guarenteedChar.push(getRandom(numberLine))
  }
  if (options.hasUpper){
    possibleChar = possibleChar.concat(uppercaseLetters)
    guarenteedChar.push(getRandom(uppercaseLetters))
  }
  if (options.hasLower){
    possibleChar = possibleChar.concat(lowercaseLetters)
    guarenteedChar.push(getRandom(lowercaseLetters))
  }
  for(i = 0; i < options.length; i++){
    var possible = getRandom(possibleChar)
    result.push(possible)
  }
  for(i = 0; i < guarenteedChar.length; i++){
    result[i] = guarenteedChar[i]
  }
  return result.join("")
}




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
  
}
generateBtn.addEventListener("click", writePassword)
// function generateLower(){
  // lowercaseLetters(Math.floor(Math.random()* 26))
  
  // }

// console.log(generateLower());
// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

// // for (var i = 0; i < lowercaseLetters.length; i++) {
//   // console.log(Math.floor(Math.random()* 26));
// }