// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Function to generate PassWord
function generatePassword(){
  var ConfirmSpecialCharacter = confirm("Do you want Special Characters included on your Password?");
  var ConfirmUppercase = confirm("Do you want uppercase Characters included on your Password?");
  var ConfirmLowercase = confirm("Do you want Lowercase Characters included on your Password?");
  var ConfirmNumeric = confirm("Do you want Numeric Characters included on your Password?");
  var lengthPassword = prompt("Select the length of your password between 8 and 128 Characters");
  var PasswordCharacters = [];
  var PasswordToPrint = [];


  // Declaring arrays to generate passwords 

  // 33 Characters 
var SpecialCharacters = [" ","!","\"","#", "$", "%", "&", "/'","(",")","*","+",",","-",".","/",":",";",
"<","=",">", "?","@","[","\\","]","^","_","`","{","|","}","~"];

// 26 Characters
var uppercase = ["Q","W","E","R","T","Y","U","I","O","P",
"A","S","D","F","G","H","J","K","L",
"Z","X","C","V","B","N","M"];

// 26 Characters
var lowercase = ["q","w","e","r","t","y","u","i","o","p",
"a","s","d","f","g","h","j","k","l",
"z","x","c","v","b","n","m"]

// 10 characters 
var numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];



var RandomNumber = 0;
  
  
  
    if (lengthPassword >= 8 && lengthPassword <= 128){
        if(ConfirmSpecialCharacter && ConfirmUppercase && ConfirmLowercase && ConfirmNumeric){
          //Concat arrays to get the final Password characters 
          // Copy Special Characters to the PasswordCharacters
          PasswordCharacters = copyArray(SpecialCharacters);
          console.log(PasswordCharacters);
          // Copy uppercase to the PasswordCharacters
          pushingArray( uppercase,PasswordCharacters);
          console.log(PasswordCharacters);
          // Copy Special lowercase to the PasswordCharacters
          pushingArray( lowercase,PasswordCharacters);
          console.log(PasswordCharacters);
          // Copy numeric  to the PasswordCharacters
          pushingArray( numeric,PasswordCharacters);
          console.log(PasswordCharacters);
         //Generate the password to print
          PasswordToPrint = GetPasswordToPrint(lengthPassword,PasswordCharacters);
          return PasswordToPrint.join('');
        }
        else if (ConfirmSpecialCharacter && ConfirmUppercase && ConfirmLowercase){
          //Concat arrays to get the final Password characters 
          // Copy Special Characters to the PasswordCharacters
          PasswordCharacters = copyArray(SpecialCharacters);
          console.log(PasswordCharacters);
          // Copy uppercase to the PasswordCharacters
          pushingArray( uppercase,PasswordCharacters);
          console.log(PasswordCharacters);
          // Copy Special lowercase to the PasswordCharacters
          pushingArray( lowercase,PasswordCharacters);
          console.log(PasswordCharacters);
         //Generate the password to print
          PasswordToPrint = GetPasswordToPrint(lengthPassword,PasswordCharacters);
          return PasswordToPrint.join('');
        }
        else if(ConfirmSpecialCharacter && ConfirmUppercase && ConfirmNumeric){
          //Concat arrays to get the final Password characters 
          // Copy Special Characters to the PasswordCharacters
          PasswordCharacters = copyArray(SpecialCharacters);
          console.log(PasswordCharacters);
          // Copy uppercase to the PasswordCharacters
          pushingArray( uppercase,PasswordCharacters);
          console.log(PasswordCharacters);
          // Copy numeric  to the PasswordCharacters
          pushingArray( numeric,PasswordCharacters);
          console.log(PasswordCharacters);
         //Generate the password to print
          PasswordToPrint = GetPasswordToPrint(lengthPassword,PasswordCharacters);
          return PasswordToPrint.join('');
        }
        else if(ConfirmUppercase && ConfirmLowercase && ConfirmNumeric){
          //Concat arrays to get the final Password characters 
          // Copy Special Characters to the PasswordCharacters
          PasswordCharacters = copyArray(uppercase);
          console.log(PasswordCharacters);
          // Copy Special lowercase to the PasswordCharacters
          pushingArray( lowercase,PasswordCharacters);
          console.log(PasswordCharacters);
          // Copy numeric  to the PasswordCharacters
          pushingArray( numeric,PasswordCharacters);
          console.log(PasswordCharacters);
         //Generate the password to print
          PasswordToPrint = GetPasswordToPrint(lengthPassword,PasswordCharacters);
          return PasswordToPrint.join('');
        }
        else if(ConfirmSpecialCharacter && ConfirmLowercase && ConfirmNumeric){
          //Concat arrays to get the final Password characters 
          // Copy Special Characters to the PasswordCharacters
          PasswordCharacters = copyArray(SpecialCharacters);
          console.log(PasswordCharacters);
          // Copy uppercase to the PasswordCharacters
          pushingArray( lowercase,PasswordCharacters);
          console.log(PasswordCharacters);
          // Copy numeric  to the PasswordCharacters
          pushingArray( numeric,PasswordCharacters);
          console.log(PasswordCharacters);
         //Generate the password to print
          PasswordToPrint = GetPasswordToPrint(lengthPassword,PasswordCharacters);
          return PasswordToPrint.join('');
        } 
        else if(ConfirmSpecialCharacter && ConfirmUppercase){
          //Concat arrays to get the final Password characters 
          // Copy Special Characters to the PasswordCharacters
          PasswordCharacters = copyArray(SpecialCharacters);
          console.log(PasswordCharacters);
          // Copy uppercase to the PasswordCharacters
          pushingArray(uppercase,PasswordCharacters);
          console.log(PasswordCharacters);
         //Generate the password to print
          PasswordToPrint = GetPasswordToPrint(lengthPassword,PasswordCharacters);
          return PasswordToPrint.join('');
        }
        else if(ConfirmLowercase && ConfirmNumeric){
          //Concat arrays to get the final Password characters 
          // Copy Special Characters to the PasswordCharacters
          PasswordCharacters = copyArray(lowercase);
          console.log(PasswordCharacters);
          // Copy uppercase to the PasswordCharacters
          pushingArray(numeric,PasswordCharacters);
          console.log(PasswordCharacters);
         //Generate the password to print
          PasswordToPrint = GetPasswordToPrint(lengthPassword,PasswordCharacters);
          return PasswordToPrint.join('');
        }
        else if(ConfirmSpecialCharacter && ConfirmNumeric){
          //Concat arrays to get the final Password characters 
          // Copy Special Characters to the PasswordCharacters
          PasswordCharacters = copyArray(SpecialCharacters);
          console.log(PasswordCharacters);
          // Copy uppercase to the PasswordCharacters
          pushingArray(numeric,PasswordCharacters);
          console.log(PasswordCharacters);
         //Generate the password to print
          PasswordToPrint = GetPasswordToPrint(lengthPassword,PasswordCharacters);
          return PasswordToPrint.join('');
        }
        else if(ConfirmLowercase && ConfirmUppercase){
          //Concat arrays to get the final Password characters 
          // Copy Special Characters to the PasswordCharacters
          PasswordCharacters = copyArray(lowercase);
          console.log(PasswordCharacters);
          // Copy uppercase to the PasswordCharacters
          pushingArray(uppercase,PasswordCharacters);
          console.log(PasswordCharacters);
         //Generate the password to print
          PasswordToPrint = GetPasswordToPrint(lengthPassword,PasswordCharacters);
          return PasswordToPrint.join('');
        }
        else if (ConfirmSpecialCharacter){
         //Generate the password to print
          PasswordToPrint = GetPasswordToPrint(lengthPassword,SpecialCharacters);
          return PasswordToPrint.join('');
        }
        else if (ConfirmUppercase){
          //Generate the password to print
           PasswordToPrint = GetPasswordToPrint(lengthPassword, uppercase);
           return PasswordToPrint.join('');
         }
         else if (ConfirmLowercase){
          //Generate the password to print
           PasswordToPrint = GetPasswordToPrint(lengthPassword, lowercase);
           return PasswordToPrint.join('');
         }
         else if (ConfirmNumeric){
          //Generate the password to print
           PasswordToPrint = GetPasswordToPrint(lengthPassword, numeric);
           return PasswordToPrint.join('');
         }
         else{
          //Generate the password to print
            alert("You have to chose at least one option")
            return; 
          
          
         }
        

    }
    else{
      alert("Length password between 8 and 128")
      stop;
  
    }
  
  

  


}

// Function to copy an array of 

function copyArray (array){
  var newArray = [];
  for(var i = 0; i < array.length; i++){
    newArray.push(array[i]);
  }
  return newArray;
}
// Function to concat two arrays
function pushingArray (arrayA, ArrayB ){
  for(var i = 0; i < arrayA.length; i++){
      ArrayB.push(arrayA[i]);
  }
  return ArrayB;
}

// Function to get random int 
// this codes comes from https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function GetPasswordToPrint(lengthPassword, PasswordCharacters ){
  var PasswordToPrint = [];
  for ( var j = 0; j < lengthPassword; j++){
    RandomNumber = getRandomInt(0,PasswordCharacters.length - 1);
    console.log(RandomNumber);
    PasswordToPrint.push(PasswordCharacters[RandomNumber]);
  }
  return PasswordToPrint;
}
