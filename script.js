// Global Variables

var generateBtn = document.querySelector("#generate");
var confirmLength = "";
var confirmSpecialCharacter;
var confirmNumericCharacter;
var confirmUpperCase;
var confirmLowerCase;
var generatePassword;

var criteria = {
    lowletters: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
    capLetters: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
    num: ["0", "1", "2","3", "4", "5", "6", "7", "8", "9"],
    specChar: ["!", "@", "#"]
}

var getPasswordOptions = {
    confirmLowerCase: confirmLowerCase,
    confirmUpperCase: confirmUpperCase,
    confirmNumericCharacter: confirmNumericCharacter,
    confirmSpecialCharacter: confirmSpecialCharacter
    }

// Function getCriteria() - The user will enter the length they would like their password to be
// The criteria will meet requirements with lowercase, uppercase, numeric and special characters. 
 function getCriteria (){
    var confirmLowerCase = true;
    console.log(confirmLowerCase);

    var confirmUpperCase = true;
    console.log(confirmUpperCase); 

    var confirmNumericCharacter = true;
    console.log(confirmNumericCharacter); 

    var confirmSpecialCharacter = true;
    console.log(confirmSpecialCharacter);
   
    //User enters Length of password - between 8 and 128 characters
    var confirmLength = prompt("How long would you like your password to be? Min:8 Max:128");
    console.log(confirmLength);
        if (confirmLength < 8 || confirmLength > 128){
            alert("Please enter a number between 8 and 128 charcters. Click on Generate Password to Try again.");
            return confirmLength;
        }
        if (isNaN(confirmLength)===true){ 
            alert("Password length must be a numerical value from to 128 characters. ")
        }
    
    var passOptions={
       confirmLength: confirmLength,
       confirmLowerCase: confirmLowerCase,
       confirmUpperCase: confirmUpperCase,
       confirmNumericCharacter: confirmNumericCharacter,
       confirmSpecialCharacter: confirmSpecialCharacter,
    }

   return passOptions

}
//End Criteria function

//Loop
function myLoop(arr){
    var randomIndex = Math.floor(Math.random()*arr.length);
    var randomEl = arr[randomIndex]
    return randomEl
}

//Function to Generate Password that meet the requirements. 
function passGen(){
    var options = getCriteria();
    var result = [];
    var possibleChar = [];
    var guaranteedChar = [];
    if (options.confirmLowerCase === true){
        possibleChar = possibleChar.concat(criteria.lowletters)
        guaranteedChar.push(myLoop(criteria.lowletters))
    }
    if (options.confirmUpperCase === true){
        possibleChar = possibleChar.concat(criteria.capLetters)
        guaranteedChar.push(myLoop(criteria.capLetters))
    }
    if (options.confirmNumericCharacter === true){
        possibleChar = possibleChar.concat(criteria.num)
        guaranteedChar.push(myLoop(criteria.num))
    }
    if (options.confirmSpecialCharacter === true){
        possibleChar = possibleChar.concat(criteria.specChar)
        guaranteedChar.push(myLoop(criteria.specChar))
    }
    for (var i=0; i < options.confirmLength; i++) {
        result.push(myLoop(possibleChar));
      }
    for (var i = 0; i < options.length; i++) {
      var possibleChar = myLoop(possibleChar);
      result.push(possibleChar);
      }
    for (var i = 0; i < guaranteedChar.length; i++) {
      result[i] = guaranteedChar[i];
      }
    return result.join('');
}
//End Function

//Function to show password in #password element 
function writePassword() {
    var password = passGen();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
  }

  //The browser waits for a user to click the button
  generateBtn.addEventListener("click", writePassword);