import component from './component.js'
import Modal from './modal/index.js'
import Shelf from './shelf/index.js'

class Model extends HTMLElement {
  #modal
  #shelf

  get modal () {
    return this.#modal ??= Modal.create(this)
  }

  get shelf () {
    return this.#shelf ??= Shelf.create(this)
  }

  constructor () {
    super()
    this.build()
  }

  build () {
    this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(component.content.cloneNode(true))
    this.shadowRoot.querySelector('main').appendChild(this.shelf)
    this.shadowRoot.querySelector('main').appendChild(this.modal)
    return this
  }
}

window.customElements.define('poke-model', Model)

export default Model