// You have two coin piles containing a and b coins. 
// On each move, you can either remove one coin from the left pile and two coins from the right pile, 
// or two coins from the left pile and one coin from the right pile.
// Your task is to efficiently find out if you can empty both the piles.
// Input: The first input line has an integer t: the number of tests.
// After this, there are t lines, each of which has two integers a and b: 
// the numbers of coins in the piles.
// Output: For each test, print "YES" if you can empty the piles and "NO" otherwise.

let readline = require("readline")

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let lines = [];

r1.on('line', (line) => {
    lines.push(line);
    if (lines.length == Number(lines[0])+1) {
        checkEmpty(lines);
        r1.close();
    }
})

function checkEmpty(lines) {
    let results = [];
    for (let i = 1; i < lines.length; i++) {
        let [a, b] = lines[i].split(" ").map(Number);
        if ((a + b) % 3 === 0 && 2 * Math.min(a, b) >= Math.max(a, b)) {
            results.push("YES");
        } else {
            results.push("NO");
        }
    }
    console.log(results.join("\n"));
}
