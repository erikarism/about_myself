'use strict'

// Get the user's name
var userName = prompt('Excuse me, who is you?')

alert('Ugh, ' + userName + ', it\'s you again. Soooo, since i\'m probably more important than you, i\'m going to ask you 5 yes or no questions about myself. If you fail, it\'s to the rancor pits with you!')

// Ask them five yes/no questions
var answerOne = prompt('Is Erik\'s favorite color fuchsia?').toLowerCase()

if (answerOne === 'n' || answerOne === 'no') {
  alert('Alright, great, 4 more questions!')
} else {
  alert('FAIL!!!! To the Rancor pit!')
}
console.log(userName + ' was asked if erik\'s favorite color Fuchsia. ' + userName + ' responded ' + answerOne)

var answerTwo = prompt('Was Erik the king of Narnia but then impeached because he accidentally ate the Faun?').toLowerCase()

if (answerTwo === 'y' || answerTwo === 'yes') {
  alert('Yeah, that was an embarrising moment for me...')
} else {
  alert('FAIL!!!! To the Rancor pit!')
}
console.log(userName + ' was asked if Erik the king of Narnia but then impeached because he accidentally ate the Faun. ' + userName + ' responded ' + answerTwo)

var answerThree = prompt('Can Erik do a triple backflip?').toLowerCase()

if (answerThree === 'n' || answerThree === 'no') {
  alert('If you count him landing on his face after the first flip then yes...')
} else {
  alert('FAIL!!!! To the Rancor pit!')
}
console.log(userName + ' was asked if Erik can do a triple backlfip. ' + userName + ' responded ' + answerThree)

var answerFour = prompt('Does Erik own a ferrari?').toLowerCase()

if (answerFour === 'n' || answerFour === 'no') {
  alert('You guess correctly that he is broke... like really broke')
} else {
  alert('FAIL!!!! To the Rancor pit!')
}
console.log(userName + ' was asked if Erik owns a Ferrari. ' + userName + ' responded ' + answerFour)

var answerFive = prompt('Is Erik the greatest person in the world?').toLowerCase()

if (answerFive === 'y' || answerFive === 'yes') {
  alert('You guessed correct! He is probably better than you even though he was impeached from Narnia... doesn\'t own a ferrari.... or can\'t do a triple backflip.')
} else {
  alert('FAIL!!!! To the Rancor pit!')
}
console.log(userName + ' was asked if Erik is the greatest person in the world. ' + userName + ' responded ' + answerFive)
