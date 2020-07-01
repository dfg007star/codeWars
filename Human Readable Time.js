function humanReadable(seconds) {
  let numhours = Math.floor(seconds / 3600),
    numminutes = Math.floor((seconds % 3600) / 60),
    numseconds = (seconds % 3600) % 60,
    time = [numhours, numminutes, numseconds];

  for (let i = 0; i < time.length; i++) {
    if (time[i] < 10) {
      time[i] = '0' + time[i];
    } else time[i] = `${time[i]}`;
  }
  return time.join(':');
}
console.log(humanReadable());
