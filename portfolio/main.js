// Import the class App
import { App } from "./components/App.js";

// Fetch root DOM element
const root = document.querySelector('#app')

// Create an instance of App
const app = new App()

// Mount App component into our room DOM
app.mount(root)