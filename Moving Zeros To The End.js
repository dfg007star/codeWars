var moveZeros = function (arr) {
  let result = [],
    zero = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      zero.push(arr[i]);
    } else result.push(arr[i]);
  }

  return result.concat(zero);
};

console.log(moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]));
