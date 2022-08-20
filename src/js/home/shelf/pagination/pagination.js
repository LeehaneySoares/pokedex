import { $ } from '../../shortcut.js'
import button from './button/index.js'

class Pagination {
  #parent
  #hasNextPage
  #pagination

  get action () {
    return 'Ver mais'
  }

  get pagination () {
    return this.#pagination
  }

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
    this.mountButton()
  }

  hiddenButton () {
    this.#hasNextPage = !this.hasNextPage
    this.buttonPaginate.setAttribute('show', this.hasNextPage)
    return this
  }

  mountButton () {
    this.#pagination = button(this)
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