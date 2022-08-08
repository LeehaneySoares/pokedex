import Card from './card/index.js'
import { $ } from '../shortcut.js'

class Shelf {
  #cards

  get cards () {
    return this.#cards ??= []
  }

  constructor (cards) {
    this.#cards = cards
  }

  static create (pokemons) {
    return new Shelf(
      pokemons.map(pokemon => Card.create(pokemon))
    )
  }
}

export default Shelf