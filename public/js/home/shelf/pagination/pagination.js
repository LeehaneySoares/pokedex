import { $ } from '../../shortcut.js'
import button from './button/index.js'

class Pagination {
  #parent
  #hasNextPage

  get hasNextPage () {
    return this.#hasNextPage ??= true
  }

  get buttonPaginate () {
    return $('.pokemon__button')
  }

  static get limitPokemons () {
    return 1512
  }

  constructor (parent) {
    this.#parent = parent
    button(this)
  }

  hiddenButton () {
    this.#hasNextPage = !this.hasNextPage
    this.buttonPaginate.setAttribute('show', this.hasNextPage)
    return this
  }

  nextPage () {
    this.#parent.startVisible <= Pagination.limitPokemons
      ? this.#parent.nextPage()
      : this.hiddenButton()
    return this
  }

  static create (parent) {
    return new Pagination(parent)
  }
}

export default Pagination