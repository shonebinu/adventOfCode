const fs = require('fs');

function part1(file, limRed, limGreen, limBlue) {
    let sumId = 0;

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

        // again divide the result or something by creating nested objects, otherwise it might be difficult
        
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

    for (let i = 0; i < colors.length; i++) {
        if (colors[i]["red"] <= limRed &&
            colors[i]["green"] <= limGreen &&
            colors[i]["blue"] <= limBlue)
            sumId += i+1;
    }

    console.log(sumId);
}

part1('./input.txt', 12, 13, 14);