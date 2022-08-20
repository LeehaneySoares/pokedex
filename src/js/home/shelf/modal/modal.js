import template from './template.js'

class Modal {
  #abilities
  #baseExp
  #description
  #especies
  #height
  #img
  #moves
  #name
  #species
  #stats
  #types
  #weight

  change (descriptor) {
    this.#abilities = descriptor?.abilities
    this.#baseExp = descriptor?.['base_experience']
    this.#height = descriptor?.height
    this.#img = descriptor?.sprites
    this.#moves = descriptor?.moves
    this.#name = descriptor?.name
    this.#species = descriptor?.species
    this.#stats = descriptor?.stats
    this.#types = descriptor?.types
    this.#weight = descriptor?.weight
    this.open()
    return this
  }

  close () {
    return this
  }

  open () {
    template()
    return this
  }

  static create () {
    return new Modal()
  }
}

export default Modal