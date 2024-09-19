import { Component } from "../common/Component.js";
import { Header } from "./Header.js";
import { Footer } from "./Footer.js";
import { Sidebar } from "./Sidebar.js";

export class App extends Component {
  render() {
    const appContainer = document.createElement('div')
    appContainer.className = 'container'
    appContainer.innerHTML = `
      <div class="header-wrapper"></div>
      <div class="content">
        <main>
          <h1>Hello World!</h1>
        </main>
        <div class="sidebar-wrapper"></div>
      </div>
      
      <div class="footer-wrapper"></div>
    `

    // Render components
    const header = new Header().render()
    const footer = new Footer({ copyrightText: 'A-0524 All Rights Reserved.' }).render()
    const sidebar = new Sidebar().render()

    // Append components into the DOM
    appContainer.querySelector('.header-wrapper').appendChild(header)
    appContainer.querySelector('.footer-wrapper').appendChild(footer)
    appContainer.querySelector('.sidebar-wrapper').appendChild(sidebar)

    return appContainer;
  }
}