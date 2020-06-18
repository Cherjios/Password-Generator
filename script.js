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
  var ConfirmSpecialCharactere = confirm("Do you want Special Characters included on your Password?");
  var ConfirmUppercase = confirm("Do you want uppercase Characters included on your Password?");
  var ConfirmLowercases = confirm("Do you want Lowercase Characters included on your Password?");
  var ConfirmNumeric = confirm("Do you want Numeric Characters included on your Password?");
  var lengthPassword = prompt("Select the length of your password between 8 and 128 Characters");
  var validatelength = false;
  var PasswordCharacteres = [];


  // Declaring arrays to generate passwords 

var SpecialCharacters = [" ", "!","\"","#", "$", "%", "&", "/'","(",")","*","+",",","-",".","/",":",";",
"<","=",">", "?","@","[","\\","]","^","_","`","{","|","}","~"];

var uppercase = ["Q","W","E","R","T","Y","U","I","O","P",
"A","S","D","F","G","H","J","K","L",
"Z","X","C","V","B","N","M"];

var lowercase = ["q","w","e","r","t","y","u","i","o","p",
"a","s","d","f","g","h","j","k","l",
"z","x","c","v","b","n","m"]

var numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  
  
  while(!validatelength){
    if (lengthPassword >= 8 && lengthPassword <= 128){
        if(ConfirmSpecialCharactere && ConfirmUppercase && ConfirmLowercases && ConfirmNumeric){
          PasswordCharacteres = copyArray(SpecialCharacters);
          PasswordCharacteres = copyArray(uppercase);
          PasswordCharacteres = copyArray(lowercase);
          PasswordCharacteres = copyArray(numeric);
          //Console.log the whole array to generate password
          console.log(PasswordCharacteres);

        }



    }
    else{
      alert("")
  
    }
  }
  
  

  


}

// Function to copy an array of 

function copyArray (array){
  var newArray = []
  for(var i = 0; i < array.length; i++){
    newArray[i] = array.push(i);
  }
  return newArray
}