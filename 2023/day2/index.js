const fs = require('fs');

function part1(file) {
    const lines = fs.readFileSync(file, 'utf-8').trim().split('\n');

    for (let i = 0; i < lines.length; i++) {
        lines[i] = lines[i].split(':')[1].trim()
                    .split(';');
     
        for (let j = 0; j < lines[i].length; j++)
            lines[i][j] = lines[i][j].trim();
    }

    const colors = [];

    lines.forEach(line => {
        let red = 0, green = 0, blue = 0;

        for (let i = 0; i < line.length; i++) {
            if (line[i].includes('red')) 
                red += Number(line[i].at(line[i].indexOf('red') - 2))
            if (line[i].includes('green'))
                green += Number(line[i].at(line[i].indexOf('green') - 2))
            if (line[i].includes('blue'))
                blue += Number(line[i].at(line[i].indexOf('blue') - 2))
        }
        colors.push({
            "red": red, "green": green, "blue": blue
        })
    });

    console.log(colors)
}

part1('./example.txt');