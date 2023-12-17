const fs = require('fs')

let lines = fs.readFileSync('example.txt', 'utf-8').trim().split('\n')

let seedLine = lines[0].split(': ')[1].split(' ').map(Number)

const seedToSoil = []

function filter(array) {
  for (let i = 3; lines[i] != '' && i < lines.length; i++)
    array.push(lines[i].split(' ').map(Number))
}

seedRange = []

for (let i = 0; i < seedLine.length; i+=2) {
  seedRange.push({
    start: seedLine[i],
    dest: seedLine[i] + seedLine[i+1] - 1
  })
}

// change everything to objects
console.log(seedRange)
