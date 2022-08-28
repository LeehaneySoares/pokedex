import * as storage from './storage/index.js'
import Pagination from './pagination/index.js'
import PokeCard from './card/pokeCard.js'
import component from './component.js'

class Shelf extends HTMLElement {
  #cards
  #modal
  #startVisible = 1
  #pagination

  get cards () {
    return this.#cards ??= []
  }

  get modal () {
    return this.#modal ??= ''
  }

  get pagination () {
    return this.#pagination ??= Pagination.create(this)
  }

  get startVisible () {
    return this.#startVisible
  }

  constructor (modal) {
    super()
    this.build()
    this.#modal = modal
  }

  build () {
    this.appendChild(component.content.cloneNode(true))
    this.appendChild(this.pagination)
    this.storage()
    return this
  }

  changePage (pageActual) {
    this.#startVisible += pageActual
    this.storage()
    return this
  }

  openModal (schema) {
    this.modal.changeInfo(schema)
    return this
  }

  storage () {
    storage.generatePromises(this.startVisible, this)
    return this
  }

  async update (snapshot) {
    this.#cards = await snapshot.map(pokemon => PokeCard.create(pokemon, this))
    this.cards.forEach(card =>
      this.querySelector('.poke__shelf').appendChild(card)
    )
    return this
  }

  static create (parent) {
    return new Shelf(parent?.modal)
  }
}

window.customElements.define('poke-shelf', Shelf)

export default Shelf