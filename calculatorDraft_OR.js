//Define & Capture Consts
const operationType = prompt("Please enter an operation: addition, subtraction, multiplication, division or:  +  -    * ")
const number1 = parseFloat(prompt("Please enter first operand"))
const number2 = parseFloat(prompt("Please enter second operand"))

//Begin result options    
if ((operationType == "+") || (operationType == "addition")) {            
    result = number1 + number2  
    const additionResultMessage = `${number1} plus ${number2} is ${result}`
    console.log(additionResultMessage)  

} else if ((operationType == "-") || (operationType == "subtraction")){
    result = number1 - number2 
    const subtractionResultMessage = `${number1} minus ${number2} is ${result}`
    console.log(subtractionResultMessage)

} else if ((operationType == "*") || (operationType == "multiplication")){
    result = number1 * number2 
    const multiplicationResultMessage = `${number1} multiplied by ${number2} is ${result}`
    console.log(multiplicationResultMessage)

} else if ((operationType == "/") || (operationType == "division")){
    result = number1 / number2 
    const divisionResultMessage = `${number1} divided by ${number2} is ${result}`
    console.log(divisionResultMessage)
}


                       
   








