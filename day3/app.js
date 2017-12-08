const input = 347991

// let min = [], max = []
// max[1] = 1
// min[1] = 1
// let stop = false
// let rows = 3
// while(!stop) {
//   max[rows] = rows * rows - (rows - 2) * (rows - 2) + max[rows - 2]
//   min[rows] = max[rows -2] + 1
//   if (max[rows] >= input) { stop = true }
//   else { rows += 2 }
// }

// function steps(rows, a) {
//   let iter = Math.floor(rows / 2)

//   let bottom = max[rows] - iter
//   let left = max[rows] - iter * 3
//   let top = max[rows] - iter * 5
//   let right = max[rows] - iter * 7

//   let distanceBottom = Math.abs(bottom - a)
//   let distanceLeft = Math.abs(left - a)
//   let distanceTop = Math.abs(top - a)
//   let distanceRight = Math.abs(right - a)

//   if (distanceBottom <= iter)
//     return distanceBottom + iter
//   else if (distanceLeft <= iter)
//     return distanceLeft + iter
//   else if (distanceTop <= iter)
//     return distanceTop + iter
//   else if (distanceRight <= iter)
//     return distanceRight + iter
// }

// const answer = steps(rows, input)
// console.log('steps ', answer)

matrix = []
pos = {x: 0, y: 0}

function initMatrix() {
  for (let i = 0; i < 100; i++) {
    matrix.push(Array(100).fill(0))
  }

  matrix[matrix.length / 2][matrix.length / 2] = 1
}

function calculateValue() {
  let value = 0
  // W
  if (matrix[pos.x - 1][pos.y])
    value += matrix[pos.x - 1][pos.y]
  // NW
  // N
  // NE
  // E
  // SE
  // S
  // SW

  return value
}

function getNextPos() {
  let temp = {}
  Object.assign(temp, pos)
  temp.x += 1

  return temp
}

initMatrix()

pos.x = matrix.length / 2
pos.y = matrix.length / 2




let nextPos = getNextPos()
pos = nextPos
let value = calculateValue()



matrix[pos.x][pos.y] = value

console.log('squares ', matrix[pos.x][pos.y])
console.log('squares ', matrix[pos.x - 1][pos.y])
// console.log('value ', value)
// console.log('nextPos ', nextPos)
// console.log('nextPos ', pos)