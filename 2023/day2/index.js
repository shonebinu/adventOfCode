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



function part2(file) {
    function updateMaxValues(input) {
        Object.keys(input).forEach((color) => {
            temp[color] = Math.max(temp[color] || 0, parseInt(input[color]))
        })
    }

    const lines = fs.readFileSync(file, 'utf-8').trim().split('\n');

    const games = [];
    lines.forEach(line => {
        games.push(line.split(': ')[1].split('; '))
    })
    
    let turns = {};

    games.forEach((game, i) => {
        game.forEach((set, j) => {
            set.split(', ').forEach(col => {
                let [num, color] = col.split(' ');
                turns[color] = num;
            })
            games[i][j] = turns;
            turns = {  };
       })
    })

    const maxInGame = [];
    let temp = {red: 0, green: 0, blue: 0};    

    games.forEach(game => {
        game.forEach(set => {
            updateMaxValues(set);
        })
        maxInGame.push(temp);
        temp = {red: 0, green: 0, blue: 0}
    })
    
    let sum = 0;

    maxInGame.forEach(item => {
        sum += (item.red * item.green * item.blue)
    })
    
    console.log(sum)
}





//part1('./input.txt', 12, 13, 14);
part2('./input.txt')