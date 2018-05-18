// This is an array of odd and even numbers.
/*
const numberArray = [100, 2, 3, 7, 20, 15, 80, 0]

// We start with 0 as our counter.
let evenCount = 0

// We loop through the length of the array.
for (let i = 0; i < numberArray.length; i++) {
    // We check each number in the array to see if it is even. If true we add 1 to the counter.
    if (numberArray[i] % 2 == 0) {
        evenCount++
    } 
}
// after going through the entire array, counting each number, we console.log the total number of even numbers.
console.log(evenCount)

*/

/*

// This is an array of odd and even numbers.
const numberArray = [100, 2, 3, 7, 20, 15, 80, 0]

// This output message concatenates the even numbers with the string message: "is an even number".
const evenOutput = " is an even number"

// This output message concatenates the odd numbers with the string message: "is an odd number"
const oddOutput = " is an odd number"

// We loop through the length of the array.
for (let i = 0; i < numberArray.length; i++) {
    // We check each number in the array to see if it is even. If true we output the number + "evenNumber" message to console.
    if (numberArray[i] % 2 == 0) {
        console.log(numberArray[i] + evenOutput)
        // if number is not even we output the number + "oddNumber" message to console. 
    } else {
        console.log(numberArray[i] + oddOutput)
    }
}


*/


// This is an array of odd and even numbers.
/*
const numberArray = [100, 2, 3, 7, 20, 15, 80, 0]

// This is the string that will appear in the console. 
let outPutMessage = ""

// We loop through the length of the array.
for (let i = 0; i < numberArray.length; i++) {
    // We check each number in the array to see if it is even. 
    // If true we output the number + the message "is an even number."
    if (numberArray[i] % 2 == 0) {
        outPutMessage = numberArray[i] + " is an even number."    
    } else {
        // if number is not even we output the number + the message "is not an even number."
        outPutMessage = numberArray[i] + " is not an even number."
    }
    console.log(outPutMessage)
}

*/

/*
//let string = "a"
//console.log("a".toUpperCase())

 */
// This returns all uppercase letter.
/*
// Declare const string "aron racho".
const lowerString = "aron racho"
// Declare empty string. 
let UpperString = ""
// Loop through each letter of the string.
for (let i = 0; i < lowerString.length; i++) {
    // Concatenate each letter after it is converted to uppercase.
    UpperString += lowerString[i].toUpperCase()
}
// UpperString is no longer empty, it contains "Aron Racho"
console.log(UpperString)
 
/*

/*
// This returns a capital "A" lowercase "ron racho"
// Declare const string "aron racho".
const lowerString = "aron racho"
// UpperString is no longer empty, it contains "Aron racho"
console.log(lowerString[0].toUpperCase() + lowerString.substr(1))

*/

// Reverse a string "Hello Aron" using for loop.

// Declare const string
const str = ("Hello Aron")
// Declare empty string
let newString = ""
// The starting point of the loop will be (str.length - 1) which corresponds to the 
//last character of the string, "n"
for (let i = str.length - 1; i >= 0; i--) {
    newString += str[i]
}
console.log(newString) 


