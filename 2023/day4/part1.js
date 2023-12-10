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

let points = 0

win.forEach((w, index) => {
  
  let point = 0;

  for (let i = 0; i < own[index].length; i++) {

    for (let j = 0; j < w.length; j++) {

      if (w[j] === own[index][i]) { 
        if (point === 0) 
          point = 1 
        else 
          point *= 2
      }
    }
  }
  points += point
})

console.log(points)
