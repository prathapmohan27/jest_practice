const calculator = (() => {
  function convert(n) {
    return Number(n);
  }
  function sum(a, b) {
    return convert(a) + convert(b);
  }
  function mul(a, b) {
    return convert(a) * convert(b);
  }

  function sub(a, b) {
    return convert(a) - convert(b);
  }
  function divide(a, b) {
    if (a === 0 || b === 0) {
      return null;
    }
    return convert(a) / convert(b);
  }
  return {
    sum,
    mul,
    sub,
    divide,
  };
})();

module.exports = calculator;
