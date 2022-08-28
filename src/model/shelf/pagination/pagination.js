import component from './component.js'

class Pagination extends HTMLElement {
  #parent

  static get limitVisible () {
    return 24
  }

  constructor (parent) {
    super()
    this.build()
    this.#parent = parent
  }

  build () {
    this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(
      component.content.cloneNode(true)
    )
    this.mount()
    return this
  }

  mount () {
    const button = this.shadowRoot.querySelector('.pagination__button')
    button.addEventListener('click', () => this.nextPage())
    return this
  }

  nextPage () {
    this.#parent.changePage(Pagination.limitVisible)
    return this
  }

  static create (parent) {
    return new Pagination(parent)
  }
}

window.customElements.define('poke-page', Pagination)

export default Pagination