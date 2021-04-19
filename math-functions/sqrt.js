// My solution
function isSquare(n) {
    let x = Math.sqrt(n);
    if (x % 1 != 0){
        return false;
    } else if ((x*x) === n) {
        return true;
    } else {
        return false;
    };
};

// Best solution
function isSquare(n) {
    return Math.sqrt(n) % 1 === 0;
};