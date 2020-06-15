const letters = ['a', 'e', 'i', 'o', 'u'];
function encode(string) {
  let result = '';
  again: for (let i = 0; i < string.length; i++) {
    for (let y = 0; y < letters.length; y++) {
      if (string[i] === letters[y]) {
        result += 1 + letters.indexOf(letters[y]);
        if (i === string.length) {
          return result;
        }
        continue again;
      }
    }
    result += string[i];
  }
  return result;
}

function decode(string) {
  let result = '';
  for (let i = 0; i < string.length; i++) {
    for (let y = 0; y < letters.length; y++) {
      if (
        string[i] === '1' ||
        string[i] === '2' ||
        string[i] === '3' ||
        string[i] === '4' ||
        string[i] === '5'
      ) {
        console.log('yes');
        result += letters[string[i] - 1];
        i++;
        if (i === string.length) {
          return result;
        }
      }
    }
    result += string[i];
  }
  return result;
}

console.log(encode('hrphtwqtmeewqngkkq'));
