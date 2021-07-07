var generateBtn = document.querySelector("#generate");
var numbers = "0123456789";
var specialcharacters = "!@#$%^&*()_-+={}[];:'`~<,>.?/|"
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercase = "abcdefghijklmnopqrstuvwxyz";

//Function used to determine the length of the password
function DetermineLength() {
    passwordlength = prompt("How many characters would you like your password to include ? Please choose between 8 and 128 characters. ");
    if (passwordlength < 8) {
        alert("You must pick a NUMBER between 8 - 128 characters ");
        DetermineLength();
    } else if (passwordlength > 128) {
        alert("You must pick a NUMBER between 8 - 128 characters ");
        DetermineLength();
    } else if (isNaN(passwordlength)) {
        alert("You must pick a NUMBER between 8-128 characters");
        DetermineLength();
    } else {
        console.log("Your Password length is: " + passwordlength + " characters.");
    }
    return passwordlength;
}

//Function used to determine whether the user wants to include uppercase characters in the password
function DetermineUppercase() {
    uppercaseChoice = window.confirm("Would you like your password to include uppercase letters?");
    if (uppercaseChoice) {
        console.log("Yes, the user would like their password to contain uppercase letters.");
    } else {
        console.log("No, the user does not want their password to contain uppercase letters.");
    }
    return uppercaseChoice;
}

//Function used to determine whether the user wants to include numbers in the password
function DetermineNumber() {
    numberChoice = window.confirm("Would you like your password to include numbers?");
    if (numberChoice) {
        console.log("Yes, the user would like their password to contain numbers.");
    } else {
        console.log("No, the user does not want their password to contain numbers.");
    }
    return numberChoice;
}

//Function used to determine whether the user wants to include special characters in the password
function DetermineSpecial() {
    specialChoice = window.confirm("Would you like your password to include special characters?");
    if (specialChoice) {
        console.log("Yes, the user would like their password to contain special characters.");
    } else {
        console.log("No, the user does not want their password to contain special characters.");
    }
    return specialChoice;
}

/*generatePassword function is used to take the values from the previous functions and generate a password using Javascript's random number generator and the 
the charAt method */
function generatePassword() {
    passwordlength = DetermineLength();
    uppercaseChoice = DetermineUppercase();
    numberChoice = DetermineNumber();
    specialChoice = DetermineSpecial();

    var characters = lowercase;
    var password = "";
    if (uppercaseChoice && numberChoice && specialChoice) {
        characters += uppercase + numbers + specialcharacters;

    } else if (uppercaseChoice && numberChoice) {
        characters += uppercase + numbers;

    } else if (numberChoice && specialChoice) {
        characters += numbers + specialcharacters;

    } else if (uppercaseChoice && specialChoice) {
        characters += uppercase + specialcharacters;

    } else if (uppercaseChoice) {
        characters += uppercase;

    } else if (numberChoice) {
        characters += numbers;

    } else if (specialChoice) {
        characters += specialcharacters;

    } else {
        characters === lowercase;
    }
    for (var i = 0; i < passwordlength; i++) {
        password += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return password;
}

// Write password to the #password input
function writePassword() {
    passwordfinal = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = passwordfinal;
}
// Event Listener on "Generate Password" Button
generateBtn.addEventListener("click", writePassword);