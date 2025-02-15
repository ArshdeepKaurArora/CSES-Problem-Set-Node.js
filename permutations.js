// A permutation of integers 1,2,....,n is called beautiful 
// if there are no adjacent elements whose difference is 1.
// Given n, construct a beautiful permutation if such a permutation exists.
// Input: The only input line contains an integer n.
// Output: Print a beautiful permutation of integers 1,2,...,n. 
// If there are several solutions, you may print any of them. 
// If there are no solutions, print "NO SOLUTION".

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let lines = [];

rl.on('line', (line) => {
    lines.push(line)
    beautifulPermutation(lines)
    rl.close();
})

function beautifulPermutation(lines) {
    let n = Number(lines[0]);
    if (n == 1) {
        console.log(1);
    } else if (n < 4) {
        console.log("NO SOLUTION");
    } else {
        let arr = [];
        for (let i = 2; i <= n; i += 2) {
            arr.push(i);
        }
        for (let i = 1; i <= n; i += 2) {
            arr.push(i);
        }
        console.log(arr.join(" "));
    }
}