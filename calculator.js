const operationType = prompt("Please enter the operation type, +, -, *, /")

const firstOperand = parseFloat(prompt("Please enter first operand"))
const secondOperand = parseFloat(prompt("Please enter second operand"))
let result

//Addition result

if(operationType ==  "+" ) {
    result = (firstOperand + secondOperand)
}  

else if (operationType == ""){
    result = "Error"
}

else if (firstOperand == ""){
    result = "Error"
}

else if (secondOperand == ""){
    result = "Error"
}

let resultMessage = (` ${firstOperand} plus ${secondOperand} is ${result }`)

console.log (resultMessage)


//Subtraction result

if(operationType ==  "-" ) {
    result = (firstOperand - secondOperand)
}  

else if (operationType == ""){
    result = "Error"
}

else if (firstOperand == ""){
    result = "Error"
}

else if (secondOperand == ""){
    result = "Error"
}


let subtractResultMessage = (` ${firstOperand} subtracted by  ${secondOperand} is ${result }`)

console.log (subtractResultMessage)

//Multiplication result


if(operationType ==  "*" ) {
    result = (firstOperand * secondOperand)
}  

else if (operationType == ""){
    result = "Error"
}

else if (firstOperand == ""){
    result = "Error"
}

else if (secondOperand == ""){
    result = "Error"
}

let multiplicationResultMessage = (` ${firstOperand} multiplied by ${secondOperand} is ${result }`)

console.log (multiplicationResultMessage)


//Division result

if(operationType ==  "/" ) {
    result = (firstOperand / secondOperand)
}  

else if (operationType == ""){
    result = "Error"
}

else if (firstOperand == ""){
    result = "Error"
}

else if (secondOperand == ""){
    result = "Error"
}
let divided =  "/"
let divisionResultMessage = (` ${firstOperand} divided by ${secondOperand} is ${result }`)

console.log (divisionResultMessage)


