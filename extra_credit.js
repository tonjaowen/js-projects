
//Begin loop-define & capture const.
while (true) {
    const operationType = prompt("Please enter an operation: addition, subtraction, multiplication, division or:  +  -  *  /; q to quit")
 
//Break loop if "q" selected, else prompt for number1.
if (operationType === "q") {
    alert("invalid operand!") 
    break   

} else {           
    const number1 = parseFloat(prompt("Please enter first operand"))

//Alert if operand is invalid & break, else prompt for number2.
if (isNaN(number1)) {
    alert( "invalid operand!")
    alert("Thank you.")
    break   

} else {
    const number2 = parseFloat(prompt("Please enter second operand"))

if (isNaN(number2)) {
    alert( "invalid operand!")
    alert("Thank you.")
    break

//Begin result options with OR option (+, additon...)     
} if ((operationType == "+") || (operationType == "addition")) {            
    result = number1 + number2  
    alert(`${number1} plus ${number2} is ${result}`)    
    alert("Thank you.")

} else if ((operationType == "-") || (operationType == "subtraction")) {
    result = number1 - number2 
    alert(`${number1} minus ${number2} is ${result}`)
    alert("Thank you.")
    
} else if ((operationType == "*") || (operationType == "multiplication")) {
    result = number1 * number2 
    alert(`${number1} multiplied by ${number2} is ${result}`)
    alert("Thank you.")
    
} else if ((operationType == "/") || (operationType == "division")) {
    result = number1 / number2 
    alert(`${number1} divided by ${number2} is ${result}`)
    alert("Thank you.")
     
}

}

}
      
}

