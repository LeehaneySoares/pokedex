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

  constructor (parent) {
    this.#parent = parent
    this.storage()
  }

  async storage () {
    await storage.generatePromises(
      this.startVisible,
      this.limitVisible,
      this
    )
    this.pagination
    return this
  }

  nextPage () {
    this.#startVisible += this.limitVisible
    this.#limitVisible += this.limitVisible
    this.storage()
    return this
  }

  update (snapshot) {
    this.#cards = snapshot.map(pokemon => Card.create(pokemon))
    this.#parent.mount()
    return this
  }

  static create (parent) {
    return new Shelf(parent)
  }
}

export default Shelf