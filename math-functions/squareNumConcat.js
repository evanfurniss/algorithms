//This algorithm was to take an int, square the value of each digit in order and concat to one another, remaining as an int.

//Topics covered: square, forEach, map, array functions

//The 'Number' or '+' before the return says to take the value of what is being returned and return it as type int.
//I learned the difference between the .forEach() and .map() functions today. 
//forEach takes the value, of each index in the array and the return value replaces that index value.
//map takes the value of each index in an array and returns a copy of the array with the new value, leaving the original array untouched.
//If you need to maintain a static value in the original array but want to change values of indexes permenantly when chaning, for each is your best bet.
//If the original array is not important/you only need the output but neither permanently .map is a better function.

//Below is my code, which I am was able to rework slightly after seeing the best response.

function squareDigits(num){
    let n = num.toString().split('');
    let m = '';
    n.forEach(num => {
      m = ('' + m + Math.pow(parseInt(num), 2))
    });
    return +m;
  }

//After a minor rework of the best response, I got this and saw more clearly why .map() was a better function to use in that moment.

function squareDigits(num){  
    return +(('' + num).split('').map(val => val * val).join(''));
};