console.log("Your external JavaScript file is linked!");
// Assignment code
var generateBtn = document.querySelector("#generate");
// var copyBtn = document.querySelector("#copy");
// var select = document.querySelector("#criteria");

// Object: possible password values
const passKeys = {
  uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  lowercase: 'abcdefghijklmnopqrstuvwxyz',
  number: '0123456789',
  symbol: '!@#$%&*()<>{}[]'
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Add event listener to select criteria button
// select.addEventListener("click", writePassword());

// My code
// Generate password definition
function generatePassword() {

  // Prompt for password length
  var lengthConfirm = window.prompt("How long would like your password to be? Min: 8 Max: 128");

  // Confirm all types of char
  if (lengthConfirm >= 8 && lengthConfirm <= 128) {
    var upperConfirm = window.confirm("Would you like to use uppercase letters?");
    var lowerConfirm = window.confirm("Would you like to use lowercase letters?");
    var numberConfirm = window.confirm("Would you like to use numbers?");
    var symbolConfirm = window.confirm("Would you like to use symbols?");
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);