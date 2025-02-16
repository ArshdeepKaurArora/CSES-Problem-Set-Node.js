readline = require("readline")

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let lines = [];

r1.on("line", (line) => {
    lines.push(line);
    trailingZeros(lines);
    r1.close();
});

function trailingZeros(lines) {
    let n = Number(lines[0]);
    let trailingZeros = 0;
    let quotient = n;
    let currentValue;
    while (quotient >= 5) {
        currentValue = quotient;
        quotient = Math.floor(currentValue / 5);
        trailingZeros += quotient;
    }
    console.log(trailingZeros);
}