// Consider an algorithm that takes as input a positive integer n. 
// If n is even, the algorithm divides it by two, and 
// if n is odd, the algorithm multiplies it by three and adds one. 
// The algorithm repeats this, until n is one. For example, the sequence for n=3 is as follows:
// $$ 3 => 10 => 5 => 16 => 8 => 4 => 2 => 1$$

// Input: The only input line contains an integer n.
// Output: Print a line that contains all values of n during the algorithm.

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('', (n) => {
    weirdAlgorithm(parseInt(n))
    rl.close();
});


function weirdAlgorithm(n) {
    result = [n];
    while (n != 1) {
        if (n % 2 == 0) {
            n /= 2;
        } else {
            n = n * 3 + 1
        }
        result.push(n)
    }
    console.log(result.join(" "))
}
