import * as storage from './storage/index.js'
import Pagination from './pagination/index.js'
import PokeCard from './card/pokeCard.js'
import template from './template.js'

class Shelf extends HTMLElement {
  #cards
  #startVisible = 1
  #pagination

  get cards () {
    return this.#cards ??= []
  }

  get pagination () {
    return this.#pagination ??= Pagination.create(this)
  }

  get startVisible () {
    return this.#startVisible
  }

  constructor () {
    super()
    this.build()
  }

  build () {
    this.appendChild(template.content.cloneNode(true))
    this.appendChild(this.pagination)
    this.storage()
    return this
  }

  changePage (pageActual) {
    this.#startVisible += pageActual
    this.storage()
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

  static create () {
    return new Shelf()
  }
}

window.customElements.define('poke-shelf', Shelf)

export default Shelf