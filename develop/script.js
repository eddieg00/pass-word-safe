// Assignment code here
var generateBtn = document.querySelector("#generate");

var passwordCriteria = {
	length: "",
	lowercase: "",
	uppercase: "",
	numeric: "",
	specialCharacters: ""
};

var characterTypes = function() {
  passwordCriteria.lowercase = window.prompt("Do you want lowercase characters? type yes or no.")
  passwordCriteria.lowercase = passwordCriteria.lowercase.toLowerCase();
  if (passwordCriteria.lowercase === "yes") {
    window.alert("Lower case selected.");
    passwordCriteria.lowercase = true;
  }
  else if (passwordCriteria.lowercase === "no") {
    window.alert("Lower case deactivated.");
    passwordCriteria.lowercase = false;
  }
  passwordCriteria.uppercase = window.prompt("Do you want uppercase characters? type yes or no.")
  passwordCriteria.uppercase = passwordCriteria.uppercase.toLowerCase();
  if (password.uppercase === "yes") {
    window.alert("Upper case activated.");
    passwordCriteria.uppercase = true;
  }
  else if (passwordCriteria.uppercase === "no") {
    window.alert("Upper case deactivated.");
    passwordCriteria.uppercase = false;
  }
  passwordCriteria.numeric = window.prompt("Do you want numbers? type yes or no");
  passwordCriteria.numeric = passwordCriteria.numeric.toLowerCase();
  if (passwordCriteria.numeric === "yes") {
    window.alert("Numbers activated.");
    passwordCriteria.numeric = true;
  }
  else if (passwordCriteria.numeric === "no") {
    window.alert("Numbers deactivated.");
    passwordCriteria.numeric = false;
  }
  passwordCriteria.specialCharacters = window.prompt("Do you want special characters? Type yes or no");
  passwordCriteria.specialCharacters = passwordCriteria.specialCharacters.toLowerCase();
  if (passwordCriteria.specialCharacters === "yes") {
    window.alert("Special Characters activated.")
    passwordCriteria.specialCharacters = true;
  }
  else if (passwordCriteria.specialCharacters === "no") {
    window.alert("Special Characters deactivated.");
    passwordCriteria.specialCharacters = false;
  }
  if (passwordCriteria.lowercase === false &&
      passwordCriteria.uppercase === false &&
      passwordCriteria.numeric === false &&
      passwordCriteria.specialCharacters === false) {
        window.alert("You must select at least one in order to procced.");
        characterTypes();
      }
}

var generatePassword = function() {
  passwordCriteria.length = window.prompt("Choose password length (at least 8 characters and no more than 128).");
  passwordCriteria.length = parseInt(passwordCriteria.length);
  if (passwordCriteria.length < 8 || passwordCriteria. length > 128) {
    window.alert("Not a valid length. Try again.");
    generatePassword();
  }
  else { 
    window.alert("You have entered a length of " + passwordCriteria.length + ".");
  }

  window.alert("What character types would you like to include? You must choose one.");
  characterTypes();
  window.alert("Generating..."); 

  function makePassword() {
    var characters = "";
    if (passwordCriteria.lowercase === true) {
      characters = characters + "abcdefghijklmnopqrstuvwxyz";
    }
    if (passwordCriteria.uppercase === true) {
      characters = characters + "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if (passwordCriteria.numeric === true) {
      characters = characters + "12345678901234567890";
    }
    if (passwordCriteria.specialCharacters === true) {
      characters = characters + "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
    }
    var result = "";
    var length = passwordCriteria.length;
    for (var i = 0, n = characters.length; i < length; i++) {
        result += characters.charAt (Math.floor(Math.random() * n));
    }
    window.alert("Your password shall be " + result);
    return result;
  }
  makePassword();
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);