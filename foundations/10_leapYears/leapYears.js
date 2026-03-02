const leapYears = function(year) {
    let divisibleByFour = year % 4 === 0;
    let divisibleByHundred = year % 100 === 0;
    let divisibleByFourhundred = year % 400 === 0;

    if (divisibleByFour && (divisibleByFourhundred || !divisibleByHundred)) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
