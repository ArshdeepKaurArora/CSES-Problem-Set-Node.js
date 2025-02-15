readline = require("readline");

const r1 =readline.createInstance({
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
    let checkDivision = num (1+num)/2;
    if (checkDivision % 2 != 0) {
        console.log("NO");
    } else {
        console.log("YES");
        let set1 = [];
        let set2 = [];
        let divisionSum = checkDivision / 2;
        for (let i = num; i > 0; i--) {
            if (i < divisionSum) {
                set1.push(i);
                divisionSum -= i;
            } else {
                set2.push(i);
            }
        }
        console.log(set1.length + "\n" + set1.join(" ") + "\n" + set2.length + "\n" + set2.join(" "));

    }
}