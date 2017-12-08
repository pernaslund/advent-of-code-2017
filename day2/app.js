const fsp = require('fs-extra');

(async () => {
  let input
  try {
    input = await fsp.readFileSync(__dirname + '/input.txt', { encoding: 'utf-8' })
  } catch (e) {
    console.log('error: ', e)
  }

  // part 1

  const data = input.split(/\n/).map(row => row.split(/\s/).map(Number).filter(Boolean))
  const sum = data.reduce((acc, curr) => acc + checkSum(curr), 0)
  console.log('sum1 ', sum)

  // part 2

  const sorted = data.map(row => row.sort((a, b) => b - a))
  const sum2 = data.reduce((acc, curr) => acc + evenlyDivisable(curr), 0)

  console.log('sum2 ', sum2)
})();

function checkSum (row) {
  let biggest = row[0], smallest = row[0]
  for (let i = 1; i < row.length; i++) {
    if (biggest < row[i])
      biggest = row[i]
    if (smallest > row[i])
      smallest = row[i]
  }

  return biggest - smallest
}

function evenlyDivisable(row) {
  for (let i = 0; i < row.length - 1; i++) {
    let a = row[i]
    for (let j = i + 1; j < row.length; j++) {
      let b = row[j]
      if (a % b === 0) {
        return a / b
      }
    }
  }
}
