// A Gray code is a list of all 2^n bit strings of length n, 
// where any two successive strings differ in exactly one bit 
// (i.e., their Hamming distance is one).
// Your task is to create a Gray code for a given length n.
// Input: The only input line has an integer n.
// Output: Print 2^n lines that describe the Gray code. 
// You can print any valid solution.

const readline = require('readline');

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let lines = [];

r1.on('line', (line) => {
    lines.push(line);
    grayCode(lines);
    r1.close();
});

function grayCode(lines) {
  let length = Number(lines[0]);
  let choices = ["0", "1"];
  let bitString = "";
  let results = [];
  function bitStringGenerator(bitString, length) {
    if (length === 0) {
      results.push(bitString);
      return;
    } else {
      for (let choice of choices) {
        bitStringGenerator(bitString + choice, length - 1);
      };
    };
  }
  bitStringGenerator(bitString, length);
  
};