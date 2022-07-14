function analyzeArray(arrayOfNumbers) {
  let result = {
    average: null,
    min: null,
    max: null,
    length: 0,
  };

  if (arrayOfNumbers.length > 0) {
    result.average = getAverage(arrayOfNumbers);
    result.min = Math.min.apply(null, arrayOfNumbers);
    result.max = Math.max.apply(null, arrayOfNumbers);
    result.length = arrayOfNumbers.length;
  } else {
    return result;
  }
  return result;
}

function getAverage(arr) {
  let average = arr.reduce( (accum, cur) => {
    return accum + cur;
  }, 0);
  return average / arr.length;
  // average = average / arr.length;
}

module.exports = analyzeArray;