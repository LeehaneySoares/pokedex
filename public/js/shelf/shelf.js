import Card from './card/index.js'
import Pagination from './pagination/index.js'

class Shelf {
  #cards
  #list
  #pagination

  get cards () {
    return this.#cards ??= []
  }

  get list () {
    return this.#list ??= []
  }

  get pagination () {
    return this.#pagination ??= Pagination.create(this)
  } 

  constructor (cards) {
    for(let card of cards.slice(0, Pagination.limitVisible)) {
      this.cards.push(card.template())
    }
    this.pagination
  }

  static create (pokemons) {
    return new Shelf(
      pokemons.map(pokemon => Card.create(pokemon))
    )
  }
}

export default Shelf