// You are given a DNA sequence: a string consisting of characters A, C, G, and T. 
// Your task is to find the longest repetition in the sequence. 
// This is a maximum-length substring containing only one type of character.
// Input: The only input line contains a string of n characters.
// Output: Print one integer: the length of the longest repetition.

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let lines = [];

rl.on('line', (line) => {
    lines.push(line)
    if (lines.length == 1) {
        longestRepetition(lines[0])
        rl.close();
    }
})

function longestRepetition(line) {
    let max = 1;
    let count = 1;
    for (let i = 1; i < line.length; i++) {
        if (line[i] == line[i-1]) {
            count ++;
            max = Math.max(max, count);
        } else {
            count = 1
        }
    }
    console.log(max)
}