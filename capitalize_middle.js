

//*look into split and join to solve:



const string = "lemon joy!"
let newString = ""
const middleString = Math.floor(string.length - 1 / 2)
for (let i = 0; i < string.length-1; i++) {
    if (string[i] == middleString || middleString - 1 || middleString + 1 ) {
        newString += string[i].toUpperCase()
    } else { 
        string[i] += newString
    }
    console.log(newString)
}



const string = "lemon joy!"
let middleThree = string.substring(stringLength/2 - 1, stringLength/2 + 2)
middleThree = string.substring (string.length()/2 - 1, string.length()/2 + 2)

console.log("middleThree: " + middleThree)  