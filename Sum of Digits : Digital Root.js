function digital_root(n) {
  let numbers = String(n);
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers.length === 1) {
      return Number(numbers);
    }
    sum += Number(numbers[i]);
  }
  return digital_root(sum);
}

digital_root(16);
