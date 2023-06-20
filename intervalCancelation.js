const cancellable = function(fn, args, t) {
    fn(...args)
    const id = setInterval(()=>{
      return fn(...args)
    }, t)
    return () => clearInterval(id)
};

const result = []

const fn = (x) => x * 2
const args = [4], t = 20, cancelT = 110

const startTime = new Date().getTime()

const log = (...argsArr) => {    
    result.push('{"time": ' +
          (new Date().getTime() - startTime) + 
          ', "returned": ' +
          fn(...argsArr) + '}');
}
     
const cancel = cancellable(log, args, t);
         
setTimeout(() => {
   cancel()
   console.log(result) // [
                       //      {"time":0,"returned":8},
                       //      {"time":20,"returned":8},
                       //      {"time":40,"returned":8},           
                       //      {"time":60,"returned":8},
                       //      {"time":80,"returned":8},
                       //      {"time":100,"returned":8}
                       //  ]
}, cancelT)