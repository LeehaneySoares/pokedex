import * as services from './services/index.js'
import component from './component.js'
import schema from './schema.js'

class PokeCard extends HTMLElement {
  #img
  #name
  #parent
  #pokemon
  #type

  get id () {
    return this.pokemon?.id
  }

  get img () {
    return this.#img ??= ''
  }

  get name () {
    return this.#name ??= ''
  }

  get pokemon () {
    return this.#pokemon ??= ''
  }

  get type () {
    return this.#type ??= ''
  }

  constructor (img, type, name, pokemon, parent) {
    super()
    this.#img = img
    this.#name = name
    this.#parent = parent
    this.#pokemon = pokemon
    this.#type = type
    console.log(pokemon)
    this.build()
  }

  build () {
    this.appendChild(component.content.cloneNode(true))
    this.mount()
    return this
  }

  mount () {
    const figure = this.querySelector('.pokemon__figure')
    const caption = this.querySelector('.pokemon__caption')
    figure.setAttribute('type', this.type.split(' | ')[0])
    figure.querySelector('img').src = this.img
    caption.querySelector('strong').innerText = this.name
    caption.querySelector('span').innerText = this.type
    figure.addEventListener('click', () => this.eventClick())
    return this
  }

  eventClick () {
    this.#parent.openModal(schema(this))
    return this
  }

  static create (pokemon, parent) {
    return new PokeCard(
      services.getImages(pokemon?.id),
      services.getTypes(pokemon?.types),
      pokemon?.name,
      pokemon,
      parent
    )
  }
}

window.customElements.define('poke-card', PokeCard)

export default PokeCard