// A number spiral is an infinite grid whose upper-left square has number 1. 
// Here are the first five layers of the spiral:
// Your task is to find out the number in row y and column x.
// Input: The first input line contains an integer t: the number of tests.
// After this, there are t lines, each containing integers y and x.
// Output: For each test, print the number in row y and column x.

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let lines = [];

rl.on('line', (line) => {
    lines.push(line)
    if (lines.length == (Number(lines[0]) + 1)) {
        numberSpiral(lines)
        rl.close();
    }
})

function numberSpiral(lines) {
    let testCount = Number(lines[0])
    let results = [];
    for (let i = 1; i <= testCount; i++) {
        let [y, x] = lines[i].split(" ").map(BigInt);
        let max = y > x ? y : x
        let diagonalValue = max * (max - 1n) + 1n;
        if (max % 2n == 0n) {
            result = diagonalValue + (y - x)
        } else {
            result = diagonalValue + (x - y)
        }
        results.push(result.toString());
    }
    console.log(results.join("\n"));
}