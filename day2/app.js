const fsp = require('fs-extra');

(async () => {
  let input
  try {
    input = await fsp.readFileSync(__dirname + '/input.txt', { encoding: 'utf-8' })
  } catch (e) {
    console.log('error: ', e)
  }

  const data = input.split(/\n/).map(row => row.split(/\s/).map(Number).filter(Boolean))
  
  const sum = data.reduce((acc, curr) => acc + checkSum(curr), 0)
  console.log('sum ', sum)
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
