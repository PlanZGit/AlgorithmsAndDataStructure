# AlgorithmsAndDataStructure

Time Complexity Big-O Guide

- Calculation not dependent on input size -0(1) **Constant**
- loop - O(n) **Linear time**
- nested loop - O(n^2) **Quadratic time**
- Input size reduced by half - 0(log n) **Logarithmic time**

## Algorithms

- [Fibonacci Sequence](Algorithms/Fibonacci.js)

      //sum of the preceding ones
      fibonacci(2)=[0,1]
      fibonacci(3)=[0,1,1]
      fibonacci(7)=[0,1,1,2,3,5,8]

- [Factorial of a number](Algorithms/Factorial.js)

      //Factorial of zero is 1
      factorial(4)=4*3*2*1 = 24
      factorial(5)=5*4*3*2*1 = 120

- [Prime number](Algorithms/Prime.js)

      //Prime is a whole number greater than 1
      //not a product of 2 smaller natural numbers
      isPrime(5)= true (1*5 or 5*1)
      isPrime(4)= false (1*4 or 2*2 or 4*1)

- [Power of Two](Algorithms/PowerOfTwo.js)

      //An integer is a power of two if
      //there exists an integer x such that n === 2^x
      isPowerOfTwo(1) = true(2^0)
      isPowerOfTwo(2) = true(2^1)
      isPowerOfTwo(5) = false

- **Recursion** - is when a function call itself

- **Search algorithms**

  - Linaer search, for loop search

    - arr = [-5 , 2 , 10, 4 ,6] , t = 10, Should return 2
    - arr = [-5 , 2 , 10, 4 ,6] , t = 6, Should return 4
    - arr = [-5 , 2 , 10, 4 ,6] , t = 20, Should return -1

  - Binary search - works on sorted arrays, search middle loop

    - arr = [-5 , 2 , 4, 6 ,10] , t = 10, Should return 4
    - arr = [-5 , 2 , 4, 6 ,10] , t = 6, Should return 3
    - arr = [-5 , 2 , 4, 6 ,10] , t = 20, Should return -1

  - Recursive binary search
