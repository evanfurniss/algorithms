// My solution, using my first RegExp.

function order(words){
    let wordsArr = words.split(" ");
    let orderArr = [];
    let correctArr = [];
    let newString = "";
    var reg = new RegExp (/^\d+$/);
    
    if (words === ''){
        return '';
    };
    
    for (let i = 0; i < words.length; i++){
        if(reg.test(words.charAt(i))){
            orderArr.push(parseInt(words.charAt(i)) - 1);
        };
    };
    
    for (let i = 0; i < words.length; i++){
        correctArr[orderArr[i]] = wordsArr[i];
    };
    
    for (let i = 0; i < wordsArr.length; i++){
        if (i === wordsArr.length - 1){
            newString = newString.concat(correctArr[i]);
        } else {
            newString = newString.concat(correctArr[i] + " ");
        };
    };
    
    return newString;
};

//I knew that using the 'sort' function and the 'split'/'join' functions I would be able to but could not for the life of me figure out how.
//The best solution is as follows, and I understand why it works.

function order(words){
    return words.split(' ').sort(function(a, b){
        return a.match(/\d/) - b.match(/\d/);
    }).join(' ');
};

// this returns the words, split at each space, sorted by locating the number within each word. The string is then joined together by spaces and that concludes the return.