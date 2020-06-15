function spinWords(words) {
  let w = words.split(' ');
  console.log(w.length - 1);
  let result = '';
  for (let i = 0; i < w.length; i++) {
    if (w[i].length > 4 && i < w.length - 1) {
      result += w[i].split('').reverse().join('') + ' ';
    } else if (i < w.length - 1) {
      result += w[i] + ' ';
    } else if (w[i].length > 4 && i == w.length - 1) {
      result += w[i].split('').reverse().join('');
    } else result += w[i];
  }
  return result;
}

console.log(spinWords('Welcome to paradise my lovely friend'));
