// Problem - give an interger n find the factorial of that integer

function factorial(n) {
  let x = 1;
  for (let i = 2; i <= n; i++) {
    // console.log(i);
    x = x * i;
  }
  return x;
}

console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(3));
console.log(factorial(4));
console.log(factorial(5));
