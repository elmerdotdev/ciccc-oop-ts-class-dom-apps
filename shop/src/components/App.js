import { Component } from "../common/Component.js";
import { Header } from '../components/Header.js';
import { Cart } from "./Cart.js";
import { ProductList } from "./ProductList.js";

export class App extends Component {
  render() {
    const appContainer = document.createElement('div')
    appContainer.className = 'container'
    appContainer.innerHTML = `
      <div class="header_wrapper"></div>
      <div class="content_wrapper">
        <main>
          <h1>Welcome to my cool shop</h1>
        </main>
        <aside></aside>
      </div>
      <div class="footer_wrapper"></div>
    `

    // Create instance and render
    const header = new Header().render()
    const cart = new Cart({ cartContext: this.props.cartContext }).render()
    const productList = new ProductList({ cartContext: this.props.cartContext })

    // Insert html into DOM
    appContainer.querySelector('.header_wrapper').appendChild(header)
    appContainer.querySelector('aside').appendChild(cart)

    // Trigger mount method of ProductList
    productList.mount(appContainer.querySelector('main'))

    return appContainer;
  }
}