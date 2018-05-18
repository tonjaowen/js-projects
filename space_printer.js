// declare a constant variable size
// whose value is 5

// create a for loop using the counter i
// which counts down from 4 to 0
// and uses the constant variable size to control
// total number of iterations of the loop
//
// for each iteration of the loop:

    // use a for loop with a counter variable j
    // which iterates i number of times
    // each time appending a character "x"
    // to a mutable variable called output
    // which is initialized with a blank string ""
    // then print the variable output to the console

// all together this should output as follows.

// i = 4, j = 0
// output should be in memory "x"
// i = 4, j = 1
// output should be in memory "xx"
// i = 4, j = 2
// output should be in memory "xxx"
// i = 4, j = 3
// output should be in memory "xxxx"
// at end of i = 4, print to console
// 
// xxxx

// i = 3, j = 0
// output should be in memory "x"
// i = 3, j = 1
// output should be in memory "xx"
// i = 3, j = 2
// output should be in memory "xxx"
// at end of i = 3, print to console
//
// xxx

// i = 2, j = 0
// output should be in memory "x"
// i = 2, j = 1
// output should be in memory "xx"
// at end of i = 2, print to console
//
// xx

// i = 1, j = 0
// output should be in memory "x"
// at end of i = 1, print to console
//
// x

// i = 0, j = 0
// output should be in memory ""
// at end of i = 1, print to console
//
// NOTHING

// xxxxx
// xxxx
// xxx
// xx
// x
// 

const size = 5
for (let i = 0; i <= size; i++){
    let output = ""
    for (let j = 0; j <= size - i; j++) {
        const thingToAdd = "*"
        output += thingToAdd 
    }
    console.log(output)
        
}
     

 