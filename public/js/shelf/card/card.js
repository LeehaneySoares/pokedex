import * as storage from './storage/index.js'

class Card {
  #img
  #name
  #type

  get img () {
    return this.#img
  }

  get name () {
    return this.#name
  }

  get type () {
    return this.#type
  }

  constructor (name, types, img) {
    this.#img = img
    this.#name = name
    this.#type = types[0]?.type.name
  }

  template () {
    return `
      <figure class="pokemon__figure ${this.type}">
        <img src="${this.img}" alt="${this.name}" />
        <figcaption class="pokemon__caption">
          <h3 class="pokemon__name">${this.name}</h3>
          <strong class="pokemon__type">${this.type}</strong>
        </figcaption>
      </figure>
    `
  }

  static create (pokemon) {
    return new Card(
      pokemon?.name,
      pokemon?.types,
      storage.getImages(pokemon?.sprites),
    )
  }
}

export default Card