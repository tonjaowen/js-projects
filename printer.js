// given a constant variable i
// use a for loop with a counter variable j
// which iterates i number of times
// each time appending a character "x"
// to a mutable variable called output
// which is initialized with a blank string ""
// then print the variable output to the console

// if i is 5
// at the end of the program
// we should see:
// 
// xxxxx

// in memory (while the for loop is running):
// when i = 0
// output is "x"
// when i = 1
// output is "xX"
// when i = 2
// output is "xxx"
// when i = 3
// output is "xxxx"
// when i = 4
// output is "xxxxx"

for (let j = 0; j < size - i; j++) {
    const thingToAdd = "*"
    output += thingToAdd 
}
console.log(output)