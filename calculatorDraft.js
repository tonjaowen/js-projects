//Define & Capture Consts
const operationType = prompt("Please enter the operation type, +, -, *, /")
const firstOperand = parseFloat(prompt("Please enter first operand"))
const secondOperand = parseFloat(prompt("Please enter second operand"))

//Begin result options

//Addition result
if (operationType == "+") {
    result = firstOperand + secondOperand
    const additionResultMessage = `${firstOperand} plus ${secondOperand} is ${result}`
    console.log(additionResultMessage)
}  

//Subtraction result
else if (operationType == "-") {
    result = firstOperand - secondOperand
    const subtractResultMessage = `${firstOperand} subtracted by ${secondOperand} is ${result}`
    console.log(subtractResultMessage)
}  

//Multiplication result
else if (operationType == "*") {
    result = firstOperand * secondOperand
    const multiplicationResultMessage = `${firstOperand} multiplied by ${secondOperand} is ${result}`
    console.log(multiplicationResultMessage)
}  

//Divison result
else if (operationType == "/") {
    result = firstOperand / secondOperand
    const multiplicationResultMessage = `${firstOperand} divided by ${secondOperand} is ${result}`
    console.log(multiplicationResultMessage)
}