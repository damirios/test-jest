function capitalize(string) {
  const letter = string.slice(0, 1);
  return string.slice(0, 1).toUpperCase() + string.slice(1);
}

module.exports = capitalize;