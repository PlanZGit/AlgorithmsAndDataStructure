// Problem - give an positive interger n determine if the power is a power os 2 or not

//Using Math log2 and Number isSafeInteger
function isPowerOfTwo2(n) {
  return Number.isSafeInteger(Math.log2(n));
}

//Bitwise Big-O = O(1)
function isPowerOfTwoBitWise(n) {
  if (n < 1) {
    return false;
  }
  return (n & (n - 1)) === 0;
}

//Using while loop Big-O = O(logn)
function isPowerOfTwo(n) {
  if (n < 1) {
    return false;
  }
  while (n > 1) {
    if (n % 2 !== 0) {
      return false;
    }
    n = n / 2;
  }
  return true;
}

console.log(isPowerOfTwo(0));
console.log(isPowerOfTwo(1));
console.log(isPowerOfTwo(2));
console.log(isPowerOfTwo(5));
console.log(isPowerOfTwo(10));
console.log(isPowerOfTwo(32));
console.log(isPowerOfTwo(1024));
