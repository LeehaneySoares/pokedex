import { $ } from './shortcut.js'
import Shelf from './shelf/index.js'

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

  async mount () {
    await this.cards.forEach(item => this.section.appendChild(item.template()))
    return this
  }

  static create () {
    return new Home()
  }
}

export default Home