import * as storage from './storage/index.js'
import Card from './card/index.js'
import Pagination from './pagination/index.js'

class Shelf {
  #cards
  #list
  #limitVisible
  #parent
  #pagination
  #startVisible

  get cards () {
    return this.#cards ??= []
  }

  get list () {
    return this.#list ??= []
  }

  get limitVisible () {
    return this.#limitVisible ??= 24
  }

  get pagination () {
    return this.#pagination ??= Pagination.create(this)
  }

  get startVisible () {
    return this.#startVisible ??= 1
  }

  get promises () {
    return Array()
  }

  constructor (parent) {
    this.#parent = parent
    this.storage()
  }

  async storage () {
    const response = await storage.generatePromises(this.startVisible, this.limitVisible)
    this.#cards = response.map(pokemon => Card.create(pokemon))
    this.pagination
    this.#parent.mount()
    return this
  }

  nextPage () {
    this.#startVisible += this.limitVisible
    this.#limitVisible += this.limitVisible
    this.storage()
    return this
  }

  static create (parent) {
    return new Shelf(parent)
  }
}

export default Shelf