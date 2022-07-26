// Assignment Code: im gonna finish this later
var generateBtn = document.querySelector("#generate");
var characterLengthChoice = [8-128];
var askPasswordCharacterLength = function() {
  var userChoiceCharacterLength = window.prompt("Choose the Length of your Password (8-128)");
  if (!userChoiceCharacterLength) 
} 
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  var characterPool = ("a", "b", "c", "d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
  "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
  "0","1","2","3","4","5","6","7","8","9",
  "!","@","#","$","%","^","&","*","(",")","`","~","_","=","+")
}

  var lowerCaseCharacterPool = characterPool.slice(0,25);
  var upperCaseCharacterPool = characterPool.slice(26,51);
  var numbersCharacterPool = characterPool.slice(52,61);
  var symbolsCharacterPool = characterPool.slice(62,76);

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
