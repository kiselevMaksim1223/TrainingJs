function VendingMachine(items, money) {
    this.items = items
    this.money = money

  };
  
  VendingMachine.prototype.vend = function (selection, itemMoney){
    
    const selectedItem = this.items.find(i => i.code === selection)

    if(!selectedItem) {
        const restMoney = new Intl.NumberFormat('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(this.money)
        console.log(restMoney);
        return `Invalid selection! : Money in vending machine = ${restMoney}` 
    }

    if (selectedItem.price > itemMoney) return "Not enough money!"

    if (selectedItem.quantity === 0) return `${selectedItem.name}: Out of stock!`


    if (selectedItem.price < itemMoney) {
        this.money = this.money+selectedItem.money
        const change = (Math.round((itemMoney - selectedItem.price) * 100) / 100).toFixed(2)
        this.items = this.items.map(i => i.code === selectedItem.code ? {...i, quantity: --i.quantity} : i)
        
        return `Vending ${selectedItem.name} with ${change} change.`
    }

    if (selectedItem.price === itemMoney){
        this.items = this.items.map(i => i.code === selectedItem.code ? {...i, quantity: --i.quantity} : i)
        this.money = this.money + selectedItem.price

        return `Vending ${selectedItem.name}`
    }
  };


  const items = [{name:"Smarties", code:"A01", quantity:10, price:0.60},
             {name:"Caramac Bar", code:"A02", quantity:5, price:0.60},
             {name:"Dairy Milk", code:"A03", quantity:1, price:0.65},
             {name:"Freddo", code:"A04", quantity:1, price:0.25}];

const VM = new VendingMachine(items, 13.00)
console.log(VM.vend('A01', 10.00));
console.log(VM.vend('A02', 0.60));
console.log(VM.vend('A04', 0.40));
console.log(VM.vend('A04', 0.40));
console.log(VM.vend('A06', 0.40));