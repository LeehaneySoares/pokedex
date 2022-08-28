import component from './component.js'
import addEventElements from './addEventElements.js'
import mountStats from './mountStats.js'

class Modal extends HTMLElement {
  #name
  #opened = false
  #stats
  #type
  #url

  get name () {
    return this.#name ??= ''
  }

  get opened () {
    return this.#opened
  }

  get stats () {
    return this.#stats ??= ''
  }

  get type () {
    return this.#type ??= ''
  }

  get url () {
    return this.#url ??= ''
  }

  constructor () {
    super()
    this.build()
  }

  build () {
    this.appendChild(component.content.cloneNode(true))
    addEventElements(this)
    return this
  }

  close () {
    this.querySelector('.modal').style.right = '-385px'
    this.querySelector('.modal__overlayer').style.display = 'none'
    this.rewind()
    return this
  }

  changeInfo (descriptor) {
    this.#name = descriptor?.name
    this.#stats = mountStats(descriptor?.stats, this)
    this.#type = descriptor?.type
    this.#url = descriptor?.url
    this.mount()
    this.open()
    return this
  }

  mount () {
    const partInf = this.querySelector('.modal__inf')
    const partSup = this.querySelector('.modal__sup')
    partSup.className = `modal__sup ${this.type.split(' | ')[0]}`
    partSup.innerHTML = `
      <strong class="modal__title">
        <h2>${this.name}</h2>
        <span>${this.type}</span>
      </strong>
      <img class="modal__img" src="${this.url}" alt="${this.name}" />
    `
    return this
  }

  open () {
    this.querySelector('.modal').style.right = 0
    this.querySelector('.modal__overlayer').style.display = 'block'
    return this
  }

  rewind () {
    this.querySelector('.modal__stat').innerHTML = ''
    return this
  }

  static create () {
    return new Modal()
  }
}

window.customElements.define('poke-modal', Modal)

export default Modal