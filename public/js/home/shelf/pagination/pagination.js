import button from './button/index.js'

class Pagination {
  #parent
  #more = 0

  get more () {
    return this.#more
  }

  static get limitVisible () {
    return 24
  }

  constructor (parent) {
    this.#parent = parent
    this.mountButton()
  }

  mountButton () {
    button(this)
    return this
  }

  inc () {
    this.#parent.nextPage()
    return this
  }

  static create (parent) {
    return new Pagination(parent)
  }
}

export default Pagination