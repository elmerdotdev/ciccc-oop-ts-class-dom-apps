export class CartContext {
  constructor() {
    this.cart = [] // this is where products will go
    this.listeners = [] // a collection of func that will listen to changes in cart
  }

  addItem(item) {
    this.cart.push(item)
    this.notifyListeners()
  }

  getCart() {
    return this.cart
  }

  subscribe(listener) {
    this.listeners.push(listener)
  }

  notifyListeners() {
    this.listeners.forEach(listener => listener(this.cart))
  }
}