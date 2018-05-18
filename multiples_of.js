var num = 10,
//reverse = false;
reverse = true

if(!reverse) for( var i=0;i<num;i++) log(i);
else         while(num-- )      log(num);

   // to avoid duplication if the code gets long
function log( num ) { console.log( num ); }








// This for loop counts up to midpoint and then counts down to 0.
/*
const midpointPct = 0.5
const totalArraySize = 10
let midPoint = midpointPct * totalArraySize
let currentValue = 0

for (i = 0; i < totalArraySize; i++) {
    if (i < midPoint) {
        currentValue += 1

    } else { (i >= midPoint)  
        currentValue -= 1
    }
    console.log(currentValue)
}

*/
// counting up to midpoint & down to 0
//for loop with if else statements. Works but not what Aron wants.
/*
const number = 10
let value = 0

for (i = 0; i < number; i ++) {
    if (value < 50/number) {
        value += 1    
    
    } else  { (value >= 50/number) 
        value -= 1  
    }
    console.log(value)
}
*/

// with while loop.
// this works but not what Aron wants
 /*
const number = .100
let point = .5/number
let value = 0

while (value < point) {
    value += 1  
    console.log(value)  
}

while (value > 0) {
    value -= 1  
    console.log(value)  
}  
    

// For loop that decreases by 3's and ends with 0 rather than a negative number.
// decrement with for loop and if statement to break before "-".
/*
const start = 9
let value = start
const decrement = 3

for (let i = 0; i < start/decrement; i++) {
    value -= decrement 
    if (value < 0) {
        break
    } 
    console.log(value)          
}
*/
/* While loop decreases by 10.
// decrement with while loop to break before "-".  
let value = 100
const decrement = 10
while (value >= decrement) {
    value -= decrement
    console.log(value)
}

*/



// increses by 2, 3, 5....breaks at 100.
// uses for loop

/*
let limit = 100
let value = 0
let increment = 3
for (let i = 0; i < limit/increment; i++) {
    value += increment 
    console.log(value) 
}
*/

/*
// increase by 5 breaks loop at 100 using if statement.
// uses for and if statement
let limit = 100
let increment = 5
value = 0
for (let i = 0; i <= 100; i++) {
    value += 5
    if (value > 100) {
        break
    }
    console.log(value)  
}

/*
//increase by 5, breaks loop at 100 using while statement.
// while statement
const limit = 100
let value = 0
const increment = 5
while (value <=50) {
    value += increment 
    console.log(value) 
}

*/



