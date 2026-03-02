const repeatString = function(str, num) {
    if (num < 0) {
    return "ERROR";
    }
    
    let newstring = "";
    
    for (let i = 0; i < num; i++) {
        newstring += str;
    }
    return newstring;
};

// Do not edit below this line
module.exports = repeatString;
