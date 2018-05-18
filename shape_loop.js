// Begin loop-define & capture const (shapeType)
while (true) {
    const shapeType = prompt("Please enter a shape: square, triangle, or q for quit.")
    // Break loop if "q" selected, else prompt for shapeSize.
    if (shapeType === "q") {
        alert("thank you.")
        break   

    } else {
        const shapeSize = prompt("Please enter a size: 1, 2, 3...")
        
        if (shapeType == "square") {
            let output = ""
            // If Square run block of code
            for (i = 0; i < shapeSize; i++) {
                const thingToAdd = "x"  
                output += thingToAdd   
            }
            for (i = 0; i < shapeSize; i++) {
                console.log(output)
            }
        } else if (shapeType == "triangle") {
            // or else run triangle block of code    
            let result = ""
            for (i = 0; i < shapeSize; i++) {
                const thingToAdd = "x"  
                result += thingToAdd  
                console.log(result) 
            }
        }      
    }
 }



 let result = ""
 for (i = 0; i < 9; i++) {
     const thingToAdd = "x"
     result += thingToAdd
     console.log(result)
 }