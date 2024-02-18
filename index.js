// code your solution here
function saturdayFun(activity = "roller-skate") {
    return (`This Saturday, I want to ${activity}!`);
}
 
saturdayFun();

const mondayWork = function(todo = "go to the office") {
    return (`This Monday, I will ${todo}.`);
}

mondayWork();

function wrapAdjective (phrase1) {
    return function inner(phrase2 = "special") {
        return `You are ${phrase1}${phrase2}${phrase1}!`;
    } 
}


