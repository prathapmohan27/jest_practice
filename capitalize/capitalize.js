function capitalize(str) {
  return str
    .toLowerCase()
    .split(' ')
    .map((word) => word.replace(/^[a-z]/, word[0].toUpperCase()))
    .join(' ');
}

module.exports = capitalize;
