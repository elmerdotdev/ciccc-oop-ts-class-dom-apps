import { App } from "./components/App.js";
import { CartContext } from "./context/CartContext.js";

// Get root DOM from HTML
const root = document.querySelector('#app')

// Create instance for cart and app
const cartContext = new CartContext()
const app = new App({ cartContext })

// Mount app into the root DOM
app.mount(root)