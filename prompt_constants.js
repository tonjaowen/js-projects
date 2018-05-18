const yourName = prompt("Please enter your name.")
const yourNameGreeting = yourName === "" ? "Please enter your name." : "Thank you."
console.log(yourNameGreeting)
  
const yourAge = prompt("Please enter your age.")
const yourAgeGreeting = yourAge === "" ? "Please enter your age." : "Thank you." 
console.log(yourAgeGreeting)

const yourNameAgeOutput = alert(`Your name is ${yourName}, your age is ${yourAge}.`)
console.log(yourNameAgeOutput)

const friendName = prompt("Please enter your friend's name.")
const friendNameGreeting = friendName === "" ? "Please enter your friend's name." : "Thank you."
console.log(friendNameGreeting)

const friendAge = prompt("Please enter your friend's age.")
const friendAgeGreeting = friendAge === "" ? "Please enter your friend's age." : "Thank you."
console.log(friendAgeGreeting)

const friendNameAgeOutput = alert(`Your friend's name is ${friendName}, your friend's age is ${friendAge}.`)
console.log(friendNameAgeOutput)