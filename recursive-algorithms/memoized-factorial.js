// video link https://www.youtube.com/watch?v=js9160AAKTk

// The reason for usage of global variable memo here
// is because this is an example how data accumulated in previous function calls
// can be used in following function calls

// seems like approach with const factMemo = (n, memo) =>...
// won't add anything for efficiency here
// digital ocean example ??? too many calls, but try time measuring(they claim it is faster)
// https://www.digitalocean.com/community/tutorials/js-understanding-recursion

const factorialFromDO = (n, memo) => {
  memo = memo || {};
  console.log(memo[n])
  if (memo[n]) return memo[n];
  if (n === 0) return 1;
  for (let i = 0; i < n; i++) {    
    memo[n] = n * factorialFromDO(n - 1, memo);
  };

  return memo[n];
};

console.log(factorialFromDO(2));  // 4 milliseconds
// console.log(factorial(120));  // 12 milliseconds
// console.log(factorial(1200)); // 24 milliseconds

// var memo = {};
// var factorial = function(n) {
//     if (n === 0) {
//         return 1;
//     } else if (memo.hasOwnProperty(n)) {
//         return memo[n];
//     } else {
//         console.log(`recursive call will be done, n is ${n}`)
//         var result = factorial(n - 1) * n;
//         memo[n] = result;
//         return result;
//     }
// };

// factorial(2);
// factorial(5);