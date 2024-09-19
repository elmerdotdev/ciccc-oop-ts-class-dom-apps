import { Component } from "../common/Component.js";

export class Menu extends Component {
  render() {
    const menu = document.createElement('menu')
    menu.innerHTML = `
      <li><a href="#">Home</a></li>
      <li><a href="#">Blog</a></li>
      <li><a href="#">About Us</a></li>
      <li><a href="#">Contact Us</a></li>
    `

    return menu;
  }
}