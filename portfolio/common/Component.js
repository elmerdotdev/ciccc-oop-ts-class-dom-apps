export class Component {
  constructor(props = {}) {
    this.props = props
    this.element = null
  }

  // Placeholder for child classes to override
  render() {
    throw new Error('Components should use their render() method.')
  }

  // Mount the elements into the DOM
  mount(container) {
    this.element = this.render()
    container.appendChild(this.element)
  }
}