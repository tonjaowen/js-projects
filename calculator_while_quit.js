
/*const operationType = prompt("Please enter an operation: addition, subtraction, multiplication, division or:  +  -  *  /; q to quit")

if (operationType === "q") {
    alert("I STOPPED!") 

} else {
        alert(operationType)
        }*/
while (true) {
    const operationType = prompt("Please enter an operation: addition, subtraction, multiplication, division or:  +  -  *  /; q to quit")
if (operationType === "q") {
    alert("I STOPPED!") 
     break   
} else {           
    const number1 = parseFloat(prompt("Please enter first operand"))
    
    const number2 = parseFloat(prompt("Please enter second operand"))

  
//Begin result options      
if ((operationType == "+") || (operationType == "addition")) {            
    result = number1 + number2  
    alert(`${number1} plus ${number2} is ${result}`)    
    alert("Thank you")

} else if ((operationType == "-") || (operationType == "subtraction")){
    result = number1 - number2 
    alert(`${number1} minus ${number2} is ${result}`)
    alert("Thank you")
    
} else if ((operationType == "*") || (operationType == "multiplication")){
    result = number1 * number2 
    alert(`${number1} multiplied by ${number2} is ${result}`)
    alert("Thank you")
    
} else if ((operationType == "/") || (operationType == "division")){
    result = number1 / number2 
    alert(`${number1} divided by ${number2} is ${result}`)
    alert("Thank you")
     
}

}

}
