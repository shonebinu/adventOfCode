const fs = require('fs')

const lines = fs.readFileSync('input.txt', 'utf-8').trim().split('\n')

const regexNum = /\d+/g;
let match;

const regexSym = /[*]/g
let symMatch;

const gears = {};

lines.forEach((line, index) => {
  while ((match = regexNum.exec(line)) !== null) {
    [row, col, colEnd, len] = [index, match.index, match.index + match[0].length - 1, match[0].length]
    col === 0 ? left = 0 : left = col - 1;
    colEnd === line.length - 1 ? right = line.length - 1 : right = colEnd + 1;
    
    if (line[left] === '*') {
      gearInsert(index, left, match[0])
    }
    
    if (line[right] === '*') {
      gearInsert(index, right, match[0])
    }

    row === 0 ? top = 0 : top = row - 1;
    row === lines.length - 1 ? bottom = lines.length - 1 : bottom = row + 1;

    while ((symMatch = regexSym.exec(lines[top].slice(left, right + 1))) !== null) {
      gearInsert(top, symMatch.index + left, match[0])
    }

    while ((symMatch = regexSym.exec(lines[bottom].slice(left, right + 1))) !== null) {
      gearInsert(bottom, symMatch.index + left, match[0])
    }

  }
})

function gearInsert(x, y, item) {
  key = `${x}-${y}`;
  if (!gears.hasOwnProperty(key))
    gears[key] = [Number(item)]
  else 
    gears[key].push(Number(item));
}

let sum = 0;

for (const key in gears) {
  if (gears[key].length > 1) 
    sum += gears[key].reduce((x, y) => x * y, 1)
}

console.log(sum)
