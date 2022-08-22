import template from './template.js'
import Shelf from './shelf/index.js'

class Model extends HTMLElement {
  #shelf

  get shelf () {
    return this.#shelf ??= Shelf.create(this)
  }

  constructor () {
    super()
    this.build()
  }

  build () {
    this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(template().content.cloneNode(true))
    this.shadowRoot.querySelector('main').appendChild(this.shelf)
    return this
  }
}

window.customElements.define('poke-model', Model)

export default Model