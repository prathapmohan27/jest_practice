function caesarCipher(str, n) {
  function check(v) {
    if (v + n > 122) {
      const str = 'abcdefghijklmnopqrstuvwxyz';
      let ans = (v + n - 1) % 122;
      return str.charCodeAt(ans);
    } else {
      return v + n;
    }
  }
  let ans = str.toLowerCase().match(/[a-z]/g);
  return ans
    .map((l) => {
      return String.fromCharCode(check(l.charCodeAt(0)));
    })
    .join('');
}
module.exports = caesarCipher;
