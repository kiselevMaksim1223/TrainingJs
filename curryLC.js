const curry = function (fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn(...args)
    } else return curry(fn.bind(this,...args))
  }
}

function sum(a, b) { return a + b; }
const csum = curry(sum);
console.log(csum(1)(2));  // 3
