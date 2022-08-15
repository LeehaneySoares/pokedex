import { $ } from './shortcut.js.js.js'
import Shelf from './shelf/index.js.js.js'

class Home {
  #shelf
  #section

  get section () {
    return this.#section ??= $('.pokemon__shelf')
  }

  get shelf () {
    return this.#shelf ??= Shelf.create(this)
  }

  get cards () {
    return this.shelf?.cards
  }

  mount () {
    this.cards.forEach(item => this.section.innerHTML += item.template())
    return this
  }

  static create () {
    return new Home()
  }
}

export default Home