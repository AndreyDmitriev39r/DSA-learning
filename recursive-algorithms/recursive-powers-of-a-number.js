// khan academy's pseudocode

// compute x^n, where x is any real number and n is any integer

// The base case is when 
//  n = 0, and x^0 = 1

// If n is positive and even, recursively compute 
// y = x^(n/2) , and then x^n = y * y.
// Notice that you can get away with making just one recursive call in this case, computing 
// x^(n/2) just once, and then you multiply the result of this recursive call by itself.

// If n is positive and odd, recursively compute x^(n-1),
// so that the exponent either is 0 or is positive and even. Then, 
// x^n = x^(n-1) * x .

// If n is negative, recursively compute x^(-n) , so that the exponent becomes positive.
// Then, x^n = 1 / x^(-n).

// own solution w/out hints

const recursivePowers = (num, exp) => {
  // base case
  if (exp === 0) return 1;  
  if (exp > 0) {
    //  case exp is even and positive
    if (exp % 2 === 0) {
      const sqrtNum = recursivePowers(num, exp / 2);
      return sqrtNum * sqrtNum;
    // case exp is odd and positive
    } else {
      return num * recursivePowers(num, exp - 1);
    }
  // case exp is negative
  } else return 1 / recursivePowers(num, -exp);  
}

// console.log(recursivePowers(3, 0));
// console.log(recursivePowers(16, -1));

// khan academy's version

// utils

const isEven = (n) => n % 2 === 0;
const isOdd = (n) => !isEven(n);

// main

const power = (x, n) => {
  if (n === 0) return 1;
  if (n < 0) return 1 / power(x, -n);
  if (isOdd(n)) return x * power(x, n - 1);
  if (isEven(n)) {
    const sqrtNum = power(x, n / 2);
    return sqrtNum * sqrtNum;
  }
};