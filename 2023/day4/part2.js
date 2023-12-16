const fs = require('fs')

const lines = fs.readFileSync('input.txt', 'utf-8').trim().split('\n')

const games = [];

lines.forEach(line => {
  games.push(line.split(': ')[1].replace(/\s+/g, ' ').trim())
})

const win = [], own = []

games.forEach(game => {
  win.push(game.split(' | ')[0].trim())
  own.push(game.split(' | ')[1].trim())
})

for (let i = 0; i < win.length; i++) {
  win[i] = win[i].split(' ').map(Number)
  own[i] = own[i].split(' ').map(Number)
}

const matches = {}
const cards = {}

win.forEach((w, index) => {
  matches[index+1] = 0
  cards[index+1] = 1
  for (let i = 0; i < own[index].length; i++) {
    for (let j = 0; j < w.length; j++) {
      if (w[j] === own[index][i]) {
          matches[index+1]++
      }
    }
  }
})

for (const key in cards) {
  for (let i = 0; i < cards[key]; i++) {
    for (let j = 1; j <= matches[key]; j++) {
      cards[parseInt(key)+j]++
    }
  }
}

let sum = 0

for (const key in cards) 
  sum +=  cards[key]

console.log(sum)
