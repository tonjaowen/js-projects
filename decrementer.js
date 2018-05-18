// declare a constant variable size
// whose value is 5

// create a for loop using the counter i
// which counts down from 4 to 0
// and uses the constant variable size to control
// total number of iterations of the loop
//
// for each iteration of the loop
// print the current value of the i

// when i = 4
// prints 4
// when i = 3
// prints 3
// when i = 2
// prints 2
// when i = 1
// prints 1
// when i = 0
// prints 0


// this produces 4,3,2,1,0

const size = 5
for (let i = size - 1; i >= 0; i--){
    console.log(i)
}