import * as storage from './storage/index.js'
import Card from './card/index.js'
import Pagination from './pagination/index.js'

class Shelf {
  #cards
  #list
  #parent
  #pagination
  #startVisible

  get cards () {
    return this.#cards ??= []
  }

  get list () {
    return this.#list ??= []
  }

  get pagination () {
    return this.#pagination ??= Pagination.create(this)
  }

  get startVisible () {
    return this.#startVisible ??= 1
  }

  static get limitVisible () {
    return 24
  }

  constructor (parent) {
    this.#parent = parent
    this.storage()
  }

  storage () {
    storage.generatePromises(this.startVisible, this)
    return this
  }

  nextPage () {
    this.#startVisible += Shelf.limitVisible
    this.storage()
    return this
  }

  openModal () {
    
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