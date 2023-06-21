class EventEmitter {
    subStorage = {}
    res
    subscribe(event, cb) {
        if(this.subStorage.hasOwnProperty(event)){
            this.subStorage[event].push(cb)
        } else {
            if(cb) this.subStorage[event] = [cb]
            else this.subStorage[event] = []
        }

      return {
          unsubscribe: () => {
            this.subStorage[event][0] = undefined
          }
      };
    }
  
    emit(event, args = []) {
        this.res = []
        if(!this.subStorage[event] || !this.subStorage[event].length){
            return []
        } else {
        for (let i = 0; i < this.subStorage[event].length; i++) {
            this.res.push(this.subStorage[event][i](...args))
        }
        return this.res
    }
    }

    getRes() {
        return this.subStorage
    }
  }

  const emit = new EventEmitter
//   emit.subscribe("event", () => 3)
//   emit.subscribe("event", () => 1)
//   console.log(emit.getRes());
//   console.log(emit.subscribe().unsubscribe());
// //   emit.subscribe("event", () => 3)
// //   emit.subscribe("event", () => 4)
// // emit.subscribe("event")
// emit.subscribe("event")
// console.log(emit.getRes());
//   console.log(emit.emit("event"))
// emit.subscribe("firstEvent", function cb1(...args) { return args.join(','); });
// console.log(emit.emit("firstEvent", [1, 2, 3])); // ["1,2,3"]
// console.log(emit.emit("firstEvent", [3, 4, 6])); // ["3,4,6"]
const sub1 = emit.subscribe("firstEvent", x => x + 1);
const sub2 = emit.subscribe("firstEvent", x => x + 2);
console.log(emit.getRes());
// sub1.unsubscribe(); // undefined
sub2.unsubscribe(); 
console.log(emit.getRes());
console.log(emit.emit("firstEvent", [5])); // [7]