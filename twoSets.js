// Your task is to divide the numbers 1,2,\ldots,n into two sets of equal sum.
// Input: The only input line contains an integer n.
// Output: Print "YES", if the division is possible, and "NO" otherwise.
// After this, if the division is possible, print an example of how to create the sets. 
// First, print the number of elements in the first set followed by the elements 
// themselves in a separate line, and then, print the second set in a similar way.

readline = require("readline");

const r1 =readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let lines = [];

r1.on('line', (line) => {
    lines.push(line)
    if (lines.length == 1) {
        twoSets(lines)
        r1.close();
    }
})

function twoSets(lines) {
    let num = Number(lines[0]);
    let checkDivision = num*(1+num)/2;
    if (checkDivision % 2 != 0) {
        console.log("NO");
    } else {
        console.log("YES");
        let set1 = [];
        let set2 = [];
        let divisionSum = checkDivision / 2;
        for (let i = num; i > 0; i--) {
            if (i <= divisionSum) {
                set1.push(i);
                divisionSum -= i;
            } else {
                set2.push(i);
            }
        }
        console.log(set1.length + "\n" + set1.join(" ") + "\n" + set2.length + "\n" + set2.join(" "));

    }
}