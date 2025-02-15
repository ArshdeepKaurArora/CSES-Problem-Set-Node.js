magicDigits = ["0", "1", "6", "8", "9"]

/**
 * Rotates the given digit value by 180 degrees.
 * This function is specifically designed for the digits 6 and 9,
 * which when rotated 180 degrees, transform into each other.
 *
 * @param {string} value - The digit to be rotated. Expected to be either "6" or "9".
 * @returns {string|undefined} The rotated digit as a string. Returns "9" for "6", "6" for "9",
 *                             and undefined for any other input.
 */
function rotateValue(value) {
    if (value == "6") {
        return "9"
    } else if (value == "9") {
        return "6"
    } else {
        return value
    }
}


/**
 * Checks if a given number is a "magic number".
 * A number is considered magic if it contains only digits 0, 1, 6, 8, 9,
 * or if it remains the same when rotated 180 degrees.
 *
 * @param {number} num - The number to check.
 * @returns {boolean} Returns true if the number is magic, false otherwise.
 */
function checkMagicNumber(num) {
    numList = String(num).split("");
    for (let num of numList) {
        if (!magicDigits.includes(num)) {
            return false
        }
    }
    revNumList = numList.toReversed().map(rotateValue)
    if (numList.join() == revNumList.join()) {
        return true
    } else {
        return false
    }
}

console.log(checkMagicNumber(11))

function generateMagicNumbers(len) {
    magicNumbers = [];
    function generateMagicNumberRec(current, numLength) {
        if (numLength == 0) {
            if (checkMagicNumber(current)) {
                magicNumbers.push(current)
            }
            return
        } else {
            for (let digit of magicDigits) {
                generateMagicNumberRec(current + digit, numLength - 1)
            }
        }
    }
    generateMagicNumberRec("", len)
    return magicNumbers;
}

console.log(generateMagicNumbers(2))