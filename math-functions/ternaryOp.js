//This algorithm challenge was designed to check two conditions were true. Only two options are possible for outcome, "Senior" or "Open".
//Before submitting my attempt, I reworked my problem to return a single line of code, a huge success for me considering my first algorithm was 20 lines longer than necessary.
//Below is my solution for checking a players age and handicap to put them in the "Senior" or "Open" cateogry for a golf event.

function openOrSenior(data){
    return data.map(player => (player[0] > 54 && player[1] > 7) ? "Senior" : "Open");
};

//Upon looking at best practice answers, I found that my answer was effectively the same as the best practice, minus the destructuring of variables.

//Best practice response
function openOrSenior(data){
    return data.map(([age, handicap]) => (age > 54 && handicap > 7) ? 'Senior' : 'Open');
}