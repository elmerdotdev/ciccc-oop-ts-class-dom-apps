import { Component } from "../common/Component.js";

export class Footer extends Component {
  render() {
    const footer = document.createElement('footer')
    footer.innerHTML = `
      <div class="columns__left">
        <h4>Footer left</h4>
      </div>
      <div class="columns__right">
        <h4>Footer right</h4>
      </div>
      <p>Copyright 2024. ${this.props.copyrightText}</p>
    `

    return footer;
  }
}