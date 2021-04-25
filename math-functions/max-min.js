// Given a string of numbers with spaces, return a string as such "max min".
// My solution, while a perfectly acceptable solution, uses a lot of computing power.

function highAndLow(numbers){
    arr = numbers.split(" ").sort((a,b) => +a - +b);
    return arr[arr.length-1] + " " + arr[0];
};

// This solution must take and sort every number. Whereas the best practice solution utilizes the Math.max.apply and Math.min.apply functions
// This means that computing is less and only needs to move numbers if a number is greater/less than current min/max

// Best Practice

function highAndLow(numbers){
    numbers = numbers.split(' ').map(Number);
    return Math.max.apply(0, numbers) + ' ' + Math.min.apply(0, numbers);
};