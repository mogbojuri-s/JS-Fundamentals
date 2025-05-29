// 5-to_integer.js
// This script checks if the first argument is an integer

const arg = process.argv[2];
const number = parseInt(arg);

if (isNaN(number)) {
  console.log('Not a number');
} else {
  console.log('My number: ' + number);
}
