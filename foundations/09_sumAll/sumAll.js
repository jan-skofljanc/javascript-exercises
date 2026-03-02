const sumAll = function(start, end) {
    if (start > end) {
        let temporaryNum = start;
        start = end;
        end = temporaryNum;
    }
    if (start < 0) {
        return "ERROR";
    }
    if (end < 0) {
        return "ERROR";
    }
    if (!Number.isInteger(start)) {
        return "ERROR";
    }
    if (!Number.isInteger(end)) {
        return "ERROR";
    }
    
    let sum = 0;
    for (let i = start; i <= end; i++) {
        sum +=i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
