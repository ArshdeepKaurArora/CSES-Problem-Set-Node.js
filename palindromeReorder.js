// Given a string, your task is to reorder its letters in such a way 
// that it becomes a palindrome (i.e., it reads the same forwards and backwards).
// Input: The only input line has a string of length n consisting of characters A–Z.
// Output: Print a palindrome consisting of the characters of the original string. 
// You may print any valid solution. If there are no solutions, print "NO SOLUTION".

let readline = require("readline")

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let lines = [];

r1.on('line', (line) => {
    lines.push(line);
    if (lines.length == 1) {
        checkReorder(lines);
        r1.close();
    }
})

function checkReorder(lines) {
    let charList = lines[0].split('');
    let charCount = {};
    let firstHalf = [];
    let lastHalf = [];
    let midValue = [];
    for (let i = 0; i < charList.length; i++) {
        charCount[charList[i]] = (charCount[charList[i]] || 0) + 1;
    }

    let nonRepeatChar = 0;
    for (let char in charCount) {
        if (charCount[char] % 2 != 0) {
            nonRepeatChar++;
        }
    };

    if (nonRepeatChar > 1) {
        console.log("NO SOLUTION");
    } else {
        for (let [key, val] of Object.entries(charCount)) {
            if (val % 2 == 0) {
                firstHalf.push(key.repeat(val / 2));
                lastHalf.push(key.repeat(val / 2));
            } else if (val % 2 == 1 && val > 1) {
                firstHalf.push(key.repeat((val-1)/2));
                lastHalf.push(key.repeat((val-1)/2));
                midValue.push(key);
            } else {
                midValue.push(key);
            }
        }
        reorderList = firstHalf.concat(midValue).concat(lastHalf.reverse());
        console.log(reorderList.join(""));
    }
}