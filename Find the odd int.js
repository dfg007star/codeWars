function findOdd(numbers) {
  //happy coding!
  let myObj = {};
  let odd = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (!myObj[numbers[i]]) {
      myObj[numbers[i]] = 1;
    } else if (myObj[numbers[i]] >= 1) {
      myObj[numbers[i]] += 1;
    }
  }
  for (let key in myObj) {
    if (myObj[key] % 2 !== 0) {
      odd += Number(key);
    } else continue;
  }
  return odd;
}
findOdd([20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5]);
