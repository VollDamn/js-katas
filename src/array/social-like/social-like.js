/*
Create a function `getLikes` which receives an array of names, and returns:
* [] => "Be the first to like this"
* ["Cartman"] => "Cartman likes this"
* ["Kenny", "Cartman"] => "Kenny and Cartman like this"
* ["Stan", "Kyle", "Kenny", "Cartman"] => "Stan and 3 other people like this"

*/

// TODO add your code here

// "Cartman", "Kenny", "Stan", "Kyle"

function getLikes(Names) {

    if (Names.length === 0) {
        return "Be the first to like this";
    } else if (Names.length === 1) {
        return `${Names[0]} likes this`;
    } else if (Names.length === 2) {
        return `${Names[0]} and ${Names[1]} like this`
    } else if (Names.length > 2) {
        return `${Names[0]} and ${Names.length - 1} other people like this`
    }
}


module.exports = getLikes;
