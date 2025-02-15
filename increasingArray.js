// You are given an array of n integers. You want to modify the array so that it is increasing,
//  i.e., every element is at least as large as the previous element.
// On each move, you may increase the value of any element by one. 
// What is the minimum number of moves required?

// Input: The first input line contains an integer n: the size of the array.
//     Then, the second line contains n integers x_1,x_2,\ldots,x_n: the contents of the array.
// Output: Print the minimum number of moves.

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let lines = [];

rl.on('line', (line) => {
    lines.push(line)
    if (lines.length == 2) {
        increasingArray(lines)
        rl.close();
    }
})

function increasingArray(lines) {
    let n = Number(lines[0]);
    let arr = lines[1].split(" ").map(Number);
    let moves = 0;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < arr[i - 1]) {
            moves += arr[i - 1] - arr[i];
            arr[i] = arr[i - 1];
        }
    }
    console.log(moves);
}