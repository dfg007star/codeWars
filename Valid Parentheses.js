function validParentheses(parens) {
  let x = 0,
    y = 0;
  for (let i = 0; i < parens.length; i++) {
    if (parens[i] === '(') {
      x += 1;
    } else if (parens[i] === ')') {
      y += 1;
    }
  }
  if (
    parens[0] === ')' ||
    parens[parens.length - 1] === '(' ||
    (parens[0] === ')' && parens[parens.length - 1] === '(') ||
    (parens[0] === '(' && parens[1] === ')' && parens[2] === ')')
  ) {
    return false;
  } else if (
    x === y &&
    parens[0] !== ')' &&
    parens[parens.length - 1] !== '('
  ) {
    return true;
  } else return false;
}

console.log(validParentheses('())(()'));
