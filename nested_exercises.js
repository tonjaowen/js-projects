


// This produces decreasing "*" and "x".
// Looks like: 5 "*" & 5 "x", 4 "*" & 4 "x"...
const size = 5
for (let i = size - 1; i > 0; i--) {
    let output = ""
    for (let j = 0; j <= i; j++) {
        const space = "*"
        output += space 
    } 
    for (let k = 0; k <= i; k++) {
        const thingToAdd = " x"  
        output += thingToAdd  
    }   
    console.log(output) 
}

// i & j-Loop: This produces decreasing spaces for first part of pyramid assignment (" " 5,4,3,...).

/*
let size = 5
for (let i = 0; i < size; i ++) {
let output = ""
    for (let j = 0;  j < size - i; j ++) {
        output += " "
    }
    for(let k= 0; k<= i; k ++) {
        output += "* "

    }
    console.log(output)
}
*/



    // K-Loop: This is the last part of the pyramid assignment.
    // This loop prints out the "x" that makes the pyramid shape ( x, xx, xxx,...)
    /*    
    }
    for (let k = 0; k <= i; k++) {
        output += "x "
    }
    console.log(output)
}
*/


// This is all the parts of the pyramid put together.
// In total there are three parts (loop i, loop j, loop k.)

/*
const pyramidSize = 5
for (let i = 0; i < pyramidSize; i++) {
    let output = ""
    for (let j = 0; j < pyramidSize - i; j++) {
        output += " "
    }
    for (let k = 0; k <= i; k ++) {
        output += " X"
    }
    console.log(output)
}

*/


/*

// This is the pyramid assignment as a function. Help from Jason.
const pyramidSize = 5
const buildPyramid = (size) => {
    for (let i = 0; i < pyramidSize; i++) {
        let output = ""
        for (let j = 0; j <= pyramidSize - i; j++) {
            output += " " 
        }
        for (let k = 0; k <= i; k++) {
            output += " X"    
        } 
        console.log(output)    
    }
} 
*/   
