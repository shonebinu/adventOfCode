const fs = require('fs');

function part1(file) {
    const lines = fs.readFileSync(file, 'utf-8').trim().split('\n');

    const pattern = /[^0-9.]/g;
    const symbols = [];
    const regex = /\d+/g; 
    const matches = [];
    let match;
    
    lines.forEach((line, index) => {
        while ((match = regex.exec(line)) !== null) {
            matches.push({
                num: match[0],
                x: index, 
                y: match.index, 
                yend: match.index + match[0].length - 1,
            })
        }
    })

    lines.forEach((line, index) => {
        while ((match = pattern.exec(line)) !== null) {
            symbols.push({
                sym: match[0], 
                x: index,
                y: match.index,
                yend: match.index + match[0].length - 1
            })
        }
    })
    
    console.log(matches)
    console.log(symbols)
}


part1('./example.txt');
