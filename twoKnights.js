// Your task is to count for k=1,2,...,n the number of ways two knights can be placed 
// on a k \times k chessboard so that they do not attack each other.
// Input: The only input line contains an integer n.
// Output: Print n integers: the results.

const readline = require('readline');

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let lines = [];

r1.on('line', (line) => {
    lines.push(line)
    if (lines.length == 1) {
        twoKnights(lines)
        r1.close();
    }
})

function twoKnights(lines) { 
    let n = Number(lines[0]);
    let totalways;
    let attackingWays;
    let results = [];
    for (let i = 1; i <= n; i++) {
        totalways = i**2 * (i**2 - 1) / 2;
        attackingWays = 4 * (i - 1) * (i - 2);
        netWays = totalways - attackingWays;
        results.push(netWays.toString());
    }
    console.log(results.join("\n"));
}