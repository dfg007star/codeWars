function rgb(r, g, b) {
  let hex = [r, g, b];

  for (let i = 0; i < hex.length; i++) {
    if (hex[i] > 255) {
      hex[i] = 255;
    }
    if (hex[i] < 0) {
      hex[i] = 0;
    }
    hex[i] = Number(hex[i]).toString(16);
    if (hex[i].length < 2) {
      hex[i] = '0' + hex[i];
    }
  }
  return hex.join('').toString().toUpperCase();
}

console.log(rgb(300, 255, 255));
