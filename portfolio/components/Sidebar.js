import { Component } from "../common/Component.js";

export class Sidebar extends Component {
  render() {
    const sidebar = document.createElement('aside')
    sidebar.innerHTML = `
      <div>
        <h2>Quick Links</h2>
        <p>The quick brown fox jumps over the lazy dog.</p>
      </div>
    `

    return sidebar;
  }
}