import template from './template.js'
import * as f from './functions/index.js'

class Modal {
  #abilities
  #baseExp
  #description
  #height
  #img
  #moves
  #name
  #species
  #stats
  #types
  #weight

  get abilities () {
    return this.#abilities
  }

  get baseExp () {
    return this.#baseExp
  }

  get description () {
    return this.#description
  }

  get height () {
    return this.#height
  }

  get img () {
    return this.#img
  }

  get moves () {
    return this.#moves
  }

  get name () {
    return this.#name
  }

  get species () {
    return this.#species
  }

  get stats () {
    return this.#stats
  }

  get types () {
    return this.#types
  }

  get weight () {
    return this.#weight
  }

  change (descriptor) {
    this.#abilities = f.abilities(descriptor?.abilities)
    this.#baseExp = descriptor?.base_experience
    this.#height = descriptor?.height
    this.#img = f.sprites(descriptor?.sprites)
    this.#moves = f.moves(descriptor?.moves)
    this.#name = descriptor?.name
    this.#species = descriptor?.species?.name
    this.#stats = f.stats(descriptor?.stats)
    this.#types = f.types(descriptor?.types)
    this.#weight = descriptor?.weight
    this.open()
    return this
  }

  close () {
    return this
  }

  open () {
    template(this)
    return this
  }

  static create () {
    return new Modal()
  }
}

export default Modal