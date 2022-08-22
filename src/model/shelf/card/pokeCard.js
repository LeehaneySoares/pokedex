import getImages from './getImages.js'
import template from './template.js'
import types from './types.js'

class PokeCard extends HTMLElement {
  #id
  #img
  #name
  #parent
  #type

  get img () {
    return this.#img ??= ''
  }

  get name () {
    return this.#name ??= ''
  }

  get type () {
    return this.#type ??= ''
  }

  constructor (name, id, type, img, parent) {
    super()
    this.#name = name
    this.#id = id
    this.#type = type
    this.#img = img
    this.#parent = parent
    this.build()
  }

  build () {
    this.appendChild(template.content.cloneNode(true))
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
    return this
  }

  static create (pokemon, parent) {
    const name = pokemon?.name
    const id = pokemon?.id
    const type = types(pokemon?.types)
    const img = getImages(pokemon)
    return new PokeCard(name, id, type, img, parent)
  }
}

window.customElements.define('poke-card', PokeCard)

export default PokeCard