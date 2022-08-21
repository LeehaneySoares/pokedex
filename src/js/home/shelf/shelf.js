import * as storage from './storage/index.js'
import Card from './card/index.js'
import Pagination from './pagination/index.js'
import Modal from './modal/index.js'

class Shelf {
  #cards
  #list
  #parent
  #pagination
  #startVisible
  #modal
  #snapshot

  get cards () {
    return this.#cards ??= []
  }

  get list () {
    return this.#list ??= []
  }

  get modal () {
    return this.#modal
  }

  get pagination () {
    return this.#pagination
  }

  get snapshot () {
    return this.#snapshot ??= {}
  }

  get startVisible () {
    return this.#startVisible ??= 1
  }

  static get limitVisible () {
    return 24
  }
  
  constructor (parent) {
    this.#parent = parent
    this.#modal = Modal.create()
    this.#pagination = Pagination.create(this)
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

  async update (snapshot) {
    this.#snapshot = snapshot
    this.#cards = await this.snapshot.map(pokemon => Card.create(pokemon, this))
    this.#parent.mount()
    return this
  }

  openModal (descriptor, images) {
    this.modal.change(descriptor, images)
    return this
  }

  static create (parent) {
    return new Shelf(parent)
  }
}

export default Shelf