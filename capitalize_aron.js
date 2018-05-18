// This returns all uppercase letter.
// Declare const string "aron racho".
const lowerCaseString = "aron racho"
// Declare empty string. 
let upperCaseString = ""
// Loop through each letter of the string.
for (let i = 0; i < lowerCaseString.length; i++) {
    // Concatenate each letter after it is converted to uppercase.
    upperCaseString += lowerCaseString[i].toUpperCase()
}
// UpperCaseString is no longer empty, it contains "Aron Racho"
console.log(upperCaseString)
 


/*
const string = "lemon joy!"
let newString = ""
const middleString = Math.floor(string.length - 1 / 2)
for (let i = 0; i < string.length-1; i++) {
    if (string[i] === middleString || middleString - 1 || middleString + 1 ) {
        newString += string[i].toUpperCase()
    } else { 
        string[i] += newString
    }
    console.log(newString)
}

*/

