
exports.min = function min (array) {
  let result = 0;
  if  (!array || array.length === 0) {
    result = 0;
  } else {
    result = Math.min(...array);
  }
  return result;
}

exports.max = function max (array) {
  let result = 0;
  if (!array || array.length === 0) {
    result = 0;
  } else {
    result = Math.max(...array);
  }
  return result;
}

exports.avg = function avg (array) {
  let result = 0;
  if (!array || !Array.isArray(array) || array.length === 0) {
    result = 0;
    return result;
  } else {
    result = array.reduce((accum, item) => {
      if (item > 0 || item < 0) {
        accum += item;
      }
      return accum;
    });
    return result / array.length;
  }
}
