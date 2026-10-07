const test = require('node:test');
const assert = require('node:assert');
const { getGreeting } = require('./index');

test('getGreeting returns standard greeting by default', () => {
  const result = getGreeting();
  assert.strictEqual(result, 'Hello, World!');
});

test('getGreeting accepts custom name parameter', () => {
  const result = getGreeting('Harness');
  assert.strictEqual(result, 'Hello, Harness!');
});