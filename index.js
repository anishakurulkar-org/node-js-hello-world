function getGreeting(name = 'World') {
  return `Hello, ${name}!`;
}

if (require.main === module) {
  console.log(getGreeting());
}

module.exports = { getGreeting };