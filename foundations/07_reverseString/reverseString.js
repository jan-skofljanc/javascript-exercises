const reverseString = function(str) {
    var splitStr = str.split(""); // creates and array of each letter
    var reverseStr = splitStr.reverse(); // reverses the array
    var joinStr = reverseStr.join(""); // joins the array back to a string

    return joinStr;
};

// Do not edit below this line
module.exports = reverseString;
