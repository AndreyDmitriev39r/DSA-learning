// video link https://www.youtube.com/watch?v=js9160AAKTk

// The reason for usage of global variable memo here
// is because this is an example how data accumulated in previous function calls
// can be used in following function calls

// seems like approach with const factMemo = (n, memo) =>...
// won't add anything for efficiency here
// digital ocean example ??? too many calls, but try time measuring(they claim it is faster)
// https://www.digitalocean.com/community/tutorials/js-understanding-recursion

var memo = {};
var factorial = function(n) {
    if (n === 0) {
        return 1;
    } else if (memo.hasOwnProperty(n)) {
        return memo[n];
    } else {
        console.log(`recursive call will be done, n is ${n}`)
        var result = factorial(n - 1) * n;
        memo[n] = result;
        return result;
    }
};

factorial(2);
factorial(5);