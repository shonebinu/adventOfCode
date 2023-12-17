const fs = require('fs')

let lines = fs.readFileSync('example.txt', 'utf-8').trim().split('\n')

let seeds = lines[0].split(': ')[1].split(' ').map(Number)

lines = lines.splice(2, lines.length - 2)

const seedToSoil = []
const soilToFert = []
const fertToWat = []
const watToLight = []
const lightToTemp = []
const tempToHumid = []
const humToLoc = []


let i = 0

for (i+=1 ;lines[i] != ''; i++)
  seedToSoil.push(lines[i].split(' ').map(Number))

for (i+=2; lines[i] != ''; i++)
  soilToFert.push(lines[i].split(' ').map(Number))

for (i+=2; lines[i] != ''; i++)
  fertToWat.push(lines[i].split(' ').map(Number))

for (i+=2; lines[i] != ''; i++)
  watToLight.push(lines[i].split(' ').map(Number))

for (i+=2; lines[i] != ''; i++)
  lightToTemp.push(lines[i].split(' ').map(Number))

for (i+=2; lines[i] != ''; i++)
  tempToHumid.push(lines[i].split(' ').map(Number))

for (i+=2; i < lines.length; i++)
  humToLoc.push(lines[i].split(' ').map(Number))

let soils = []

seeds.forEach((seed, i) => {
  seedToSoil.forEach((map, j) => {
    if (seed >= map[1] && seed < map[1]+map[2]) {
      let diff = seed - map[1]
      soils.push(diff + map[0])
      seeds.splice(seeds.splice(seeds.indexOf(seed), 1))
    }
  })
})

soils = soils.concat(seeds)

console.log(soils)
