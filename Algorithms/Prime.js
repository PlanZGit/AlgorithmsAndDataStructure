function isPrime(n) {
  if (n < 2) {
    return false;
  }
  //   if (n === 2 || n === 3 || n === 5) {
  //     return true;
  //   }
  //   if (n % 2 === 0 || n % 3 === 0 || n % 5 === 0) {
  //     return false;
  //   }

  for (let i = 2; i < Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(isPrime(1));
console.log(isPrime(5));
console.log(isPrime(4));

//Big-O = O(sqrt(n))
