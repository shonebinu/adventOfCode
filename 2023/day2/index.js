const fs = require('fs');

function part1(file, limRed, limGreen, limBlue) {

    const lines = fs.readFileSync(file, 'utf-8').trim().split('\n');

    const limit = {
        red: limRed,
        green: limGreen,
        blue: limBlue,
    }

    const games = [];

    lines.forEach(line => {
        games.push(line.split(': ')[1].split('; '));
    })

    const notPossible = new Set();

    games.forEach((game, index) => {
        game.forEach(set => {
            set.split(', ').forEach(col => {
                let [num, color] = col.split(' ');
                if (num > limit[color]) 
                    notPossible.add(index+1);
            })
        })
    })

    let sumId = 0;

    for (let i = 1; i <= lines.length; i++) {
        if (!notPossible.has(i)) sumId += i;
    }

    console.log(sumId)
}

part1('./input.txt', 12, 13, 14);