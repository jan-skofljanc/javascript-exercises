const reverseString = function(str) {
    let splitStr = str.split(""); // creates and array of each letter
    let reverseStr = splitStr.reverse(); // reverses the array
    let joinStr = reverseStr.join(""); // joins the array back to a string

    return joinStr;
};

// Do not edit below this line
module.exports = reverseString;
