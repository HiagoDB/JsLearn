function returnGreater(number1, number2){

  if (number1 === number2) {
    console.log(`Both numbers are equal: ${number1}`);
    return number1;
  } else if (number1 > number2) {
    console.log(`The first number is greater: ${number1}`);
    return number1;
  } else {
    console.log(`The second number is greater: ${number2}`);
    return number2;
  }
  
}

let wichIsGreater = returnGreater(21,21)
console.log(wichIsGreater)
//expected = console.log(`Both numbers are equal: ${number1}`)
wichIsGreater = returnGreater(10,1)
console.log(wichIsGreater)
//expected = console.log(`The first number is greater: ${number1}`)
wichIsGreater = returnGreater(1,20)
console.log(wichIsGreater)
//expected = console.log(`The second number is greater: ${number2}`)