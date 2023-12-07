const fs = require('fs');


function part1(file) {

  const lines = fs.readFileSync(file, 'utf-8').trim().split('\n');

  let sum = 0;

  lines.forEach(line => {
    
    let listNum = [];
    
    for (let i = 0; i < line.length; i++) {
      if (line[i] % 1 == 0) listNum.push(line[i]);  
    }

    sum += Number(listNum.at(0) + listNum.at(-1));
      
  })

  console.log(sum);

}



function part2(file) {

  let sum = 0;

  const wordsToNum = {
    "zero": 0,
    "one": 1,
    "two": 2,
    "three": 3,
    "four": 4,
    "five": 5,
    "six": 6,
    "seven": 7,
    "eight": 8,
    "nine": 9,
  };

  const numWords = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
   '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

   const re = new RegExp(numWords.join('|'), 'g');

  const lines = fs.readFileSync(file, 'utf-8').trim().split('\n');

  lines.forEach(line => {

    let match;
    const matches = [];
  
    while ((match = re.exec(line)) !== null) {
      matches.push(match[0]);
    }
  
    const intNums = [];
  
    matches.forEach(num => {
      if (num % 1 == 0) intNums.push(Number(num));
      else intNums.push(wordsToNum[num]);
    })
  
    console.log(intNums);
    sum += Number(`${intNums.at(0)}` + `${intNums.at(-1)}`);

  })

  console.log(sum);

}




//part1('./example.txt');
part2('./input.txt');