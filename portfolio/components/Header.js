import { Component } from "../common/Component.js";
import { Menu } from "./Menu.js";

export class Header extends Component {
  render() {
    const header = document.createElement('header')
    header.innerHTML = `
      <div>
        <span>LOGO</span>
      </div>
      <nav></nav>
    `

    // Create instance of menu component and render
    const menu = new Menu().render()
    header.querySelector('nav').appendChild(menu)

    return header;
  }
}