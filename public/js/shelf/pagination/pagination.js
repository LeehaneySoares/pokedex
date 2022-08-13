import button from './button/index.js'

class Pagination {
  #parent
  #more

  get parent () {
    return this.#parent
  }

  get more () {
    return this.#more ??= 0
  }

  static get limitVisible () {
    return 24
  }

  constructor (parent) {
    this.#parent = parent
    this.mountButton()
  }

  mountButton () {
    button()
    return this
  }

  inc () {
    this.#more += Pagination.limitVisible
    return this
  }

  static create (parent) {
    return new Pagination(parent)
  }
}

export default Pagination