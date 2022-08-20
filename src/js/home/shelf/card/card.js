import * as events from './events/index.js'
import * as storage from './storage/index.js'
import types from './types.js'
import mountFigure from './mountFigure.js'

class Card {
  #allOfPokemon
  #id
  #img
  #name
  #type
  #parent
  #figure

  get allOfPokemon () {
    return this.#allOfPokemon
  }

  get id () {
    return this.#id
  }

  get img () {
    return this.#img
  }

  get figure () {
    return this.#figure
  }

  get name () {
    return this.#name
  }

  get parent () {
    return this.#parent
  }

  get type () {
    return this.#type
  }

  constructor (name, types, img, id, allOfPokemon, parent) {
    this.#allOfPokemon = allOfPokemon
    this.#id = id
    this.#img = img
    this.#name = name
    this.#parent = parent
    this.#type = types
    this.#figure = mountFigure(this)
  }

  template () {
    events.openModal(this)
    return this.figure
  }

  static create (pokemon, parent) {
    const name = pokemon?.name
    const type = types(pokemon?.types)
    const img = storage.getImages(pokemon?.sprites)
    const id = pokemon?.id
    return new Card(name, type, img, id, pokemon, parent)
  }
}

export default Card