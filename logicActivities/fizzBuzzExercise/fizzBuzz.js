function fizzBuzz(num) {

  if (typeof num !== 'number') {
    console.log(`Invalid input: ${num} is not a number`);
    return num
  }

  if (num >= 0 && num <= 100) {
    // It is important to remember that whenever there is an 'if' like this, the 'if' that tests both conditions has to be tested first. 
    if (num % 2 === 0 && num % 5 === 0) {
      return 'FizzBuzz';
    } else if (num % 3 === 0) {
      return 'Fizz';
    } else if (num % 5 === 0) {
      return 'Buzz';
    }
  }
  return num;
}

for (let i = 0; i <= 100; i++) {
  console.log(`number: ${i} - ${fizzBuzz(i)}`);
}

console.log(fizzBuzz('5'));
console.log(fizzBuzz(111));
