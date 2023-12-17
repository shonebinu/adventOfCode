const fs = require('fs')

let lines = fs.readFileSync('input.txt', 'utf-8').trim().split('\n')

let map = lines[0].split(': ')[1].split(' ').map(Number)

const seedToSoil = []
const soilToFert = []
const fertToWat = []
const watToLight = []
const lightToTemp = []
const tempToHumid = []
const humToLoc = []

let i = 1

function filter(array) {
  for (i+=2; lines[i] != '' && i < lines.length; i++)
    array.push(lines[i].split(' ').map(Number))
}

filter(seedToSoil)
filter(soilToFert)
filter(fertToWat)
filter(watToLight)
filter(lightToTemp)
filter(tempToHumid)
filter(humToLoc)


function mapping(map, array) {
  map.forEach(x => {
    array.forEach(y => {
      if (x >= y[1] && x < y[1]+y[2]) 
        map.splice(map.indexOf(x), 1, y[0] + x - y[1])
    })
  })
}

mapping(map, seedToSoil)
mapping(map, soilToFert)
mapping(map, fertToWat)
mapping(map, watToLight)
mapping(map, lightToTemp)
mapping(map, tempToHumid)
mapping(map, humToLoc)

let smallest = Infinity

map.forEach(x => {
  if (x < smallest)
    smallest = x
})

console.log(smallest)
