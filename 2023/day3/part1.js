const fs = require('fs')

const lines = fs.readFileSync('input.txt', 'utf-8').trim().split('\n')

const regexNum = /\d+/g;
let match;

const regexSym = /[^0-9.]/g;

const partNums = [];

lines.forEach((line, index) => {
  while ((match = regexNum.exec(line)) !== null) {
    [row, col, colEnd, len] = [index, match.index, match.index + match[0].length - 1, match[0].length]
    col === 0 ? left = 0 : left = col - 1;
    colEnd === line.length - 1 ? right = line.length - 1 : right = colEnd + 1;
    
    // checking left and right of the number for any symbols
    if (line[left].match(regexSym) || line[right].match(regexSym))
      partNums.push(Number(match[0]))

    row === 0 ? top = 0 : top = row - 1;
    row === lines.length - 1 ? bottom = lines.length - 1 : bottom = row + 1;

    // checking if the top and bottom has a matching along with the diagonals
    if (lines[top].slice(left, right + 1).match(regexSym) || lines[bottom].slice(left, right + 1).match(regexSym))
      partNums.push(Number(match[0]))
  }
})

let sum = 0;

partNums.forEach(num => sum += num)

console.log(sum)
