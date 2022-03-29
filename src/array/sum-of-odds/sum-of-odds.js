/*
Create a function `sum` which returns the sum of all odd values contained in a number array.

If the array is empty or null, return zero.

Example:
* [] -> 0
* [1, 2, 3] -> 4

*/

// TODO add your code here

function sum(array) {
    if (array === [] || array === null) {
        return 0;
    } else {
        let a = 0;
        for (let i = 0; i < array.length; i++) {

            if (array[i] % 2 !== 0) {
                a = a + array[i];
            }
        }
        return a;
    }
}

module.exports = sum;

// const number = 6;
// const result = number % 4;
