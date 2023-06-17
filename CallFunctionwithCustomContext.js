Function.prototype.callPolyfill = function(context, ...args) {
    this.context = context

    return this.bind(this.context, ...args)()
}

function increment() { this.count++; return this.count; }
console.log(increment.callPolyfill({count: 1})); // 2