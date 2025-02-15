// You are given all numbers between 1,2,\ldots,n except one. 
// Your task is to find the missing number.
// Input: The first input line contains an integer n.
// The second line contains n-1 numbers. Each number is distinct and between 1 and n (inclusive).
// Output: Print the missing number.

const readline = require('readline');

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let lines = [];

r1.on('line', (line) => {
    lines.push(line)
    if (lines.length == 2) {
        maxNum = Number(lines[0])
        arr = lines[1].split(" ").map(Number)
        missingNumber(maxNum, arr)
        r1.close();
    }
})

function missingNumber(maxNum, arr) {
    expectedSum = maxNum * (maxNum + 1) / 2
    actualSum = arr.reduce((a, b) => a + b, 0)
    missingNumber = expectedSum - actualSum
    console.log(missingNumber)
}