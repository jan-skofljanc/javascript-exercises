const convertToCelsius = function(tempF) {
  let convertedC = (tempF - 32) / 1.8;
  return Math.round(convertedC * 10) / 10;
};

const convertToFahrenheit = function(tempC) {
  let convertedF = tempC * 1.8 + 32;
  return Math.round(convertedF * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
