const removeFromArray = function(array, ...argument) {
    newArray = array.filter(element => !argument.includes(element));
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
