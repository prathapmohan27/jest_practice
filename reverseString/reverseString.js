function reverseString(str) {
  let temp = str.toLowerCase().match(/([a-z\s])/g);
  return temp.reverse().join('');
}
module.exports = reverseString;
