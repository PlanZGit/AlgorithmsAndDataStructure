// Problem - give number n find first n element of Fibonacci sequence

function fibonacci(n) {
  const fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib[n - 1];
}

console.log(fibonacci(10));
