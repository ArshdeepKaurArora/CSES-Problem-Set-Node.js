// Your task is to calculate the number of bit strings of length n.
// For example, if n=3, the correct answer is 8, 
// because the possible bit strings are 000, 001, 010, 011, 100, 101, 110, and 111.
// Input: The only input line has an integer n.
// Output: Print the result modulo 10^9+7.

readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let lines = [];

rl.on('line', (line) => {
    lines.push(line)
    bitStrings(lines)
    rl.close();
})

function bitStrings(lines) {
    let n = Number(lines[0]);
    let result = 1;
    for (let i = 0; i < n; i++) {
        result = result * 2 % (Math.pow(10, 9) + 7);
    }
    console.log(result);
}