/*
Create a function `min` which founds the minimum value of a number array.

If the array is empty or null, return null.

Example:
* [1, 2, 3] -> 1
* [3, -2, 1] -> -2
* [] -> null

You can't use the function Math.min()

*/

// TODO add your code here
// order function first then choose the first number
// inside a if statement the else is for null condition 

// const array = [];
// array = [1, 8, 0, 2, 6];
// array.sort();


function min(Array) {
    if (Array === null || Array === []) {
        return null;
    } else {
        Array.sort(function (a, b) { return a - b });
        return Array[0];
    }
}


// // Sort the numbers in ascending order:
// array.sort(function(a, b){return a-b});

// // points[0] is now the lowest value:
// array[0];



module.exports = min;
