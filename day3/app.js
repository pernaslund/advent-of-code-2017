const input = 347991

let min = [], max = []
max[1] = 1
min[1] = 1
let stop = false
let rows = 3
while(!stop) {
  max[rows] = rows * rows - (rows - 2) * (rows - 2) + max[rows - 2]
  min[rows] = max[rows -2] + 1
  if (max[rows] >= input) { stop = true }
  else { rows += 2 }
}

function steps(rows, a) {
  let iter = Math.floor(rows / 2)

  let bottom = max[rows] - iter
  let left = max[rows] - iter * 3
  let top = max[rows] - iter * 5
  let right = max[rows] - iter * 7

  let distanceBottom = Math.abs(bottom - a)
  let distanceLeft = Math.abs(left - a)
  let distanceTop = Math.abs(top - a)
  let distanceRight = Math.abs(right - a)

  if (distanceBottom <= iter)
    return distanceBottom + iter
  else if (distanceLeft <= iter)
    return distanceLeft + iter
  else if (distanceTop <= iter)
    return distanceTop + iter
  else if (distanceRight <= iter)
    return distanceRight + iter
}

const answer = steps(rows, input)
console.log('steps ', answer)