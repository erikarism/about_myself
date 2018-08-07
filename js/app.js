'use strict'

// Get the user's name
var userName = prompt('Excuse me, who is you?')

alert('Ugh, ' + userName + ", it's you again. Soooo, since i'm probably more important than you, i'm going to ask you 5 yes or no questions about myself. If you fail, it's to the rancor pits with you")

// Ask them five yes/no questions
var answerOne = prompt("Is Erik's favorite color fuchsia?").toLowerCase()

if (answerOne === 'n' || answerOne === 'no') {
  alert('alright, great, 4 more questions!')
} else {
  alert('FAIL!!!! To the Rancor pit!')
}
