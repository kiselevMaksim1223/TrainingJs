function memoize(fn) {
    const prevState = new Map
    return function (...args) {
        if (prevState.has(JSON.stringify(args))) {
            return prevState.get(JSON.stringify(args))
        } else {
            const res = fn(...args)
            prevState.set(JSON.stringify(args), res)
            return res
        }
    }
}

let callCount = 0;
const memoizedFn = memoize(function (a, b) {
    callCount += 1;
    return a + b;
})

console.log(memoizedFn(2, 3));
console.log(memoizedFn(2, 3));
console.log(memoizedFn(2, 4));
console.log(callCount);