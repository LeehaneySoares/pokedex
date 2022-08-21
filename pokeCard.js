const template = document.createElement('template')

template.innerHTML = `
  <style>
    .poke-card {
      align-items: center;
      border: 1px solid #ccc;
      border-radius: 5px;
      box-shadow: 3px 3px 2px #ddd;
      cursor: pointer;
      display: flex;
      flex-direction: column;
      gap: 10px;
      justify-content: center;
      padding: 24px;
      width: 275px;
    }

    .poke-card > img {
      background-color: #fff;
      border: 1px solid #ccc;
      border-radius: 80px;
      object-fit: contain;
      width: 150px;
    }

    .name {
      width: 100%;
    }

    .name h3 {
      color: coral;
    }

  </style>

  <div class="poke-card">
    <img />
    <div class="name">
      <h3></h3>
    </div>
  </div>
`

class PokeCard extends HTMLElement {
  #img
  #name
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

  constructor () {
    super()

    this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(template.content.cloneNode(true))
    
    
    
    this.innerHTML = 'PokeCard'
    this.#name = this.getAttribute('name')
    this.#type = this.getAttribute('type')
    this.#img = this.getAttribute('avatar')
    this.innerHTML = this.name
    this.innerHTML += ` | ${this.type}`
    
    this.shadowRoot.querySelector('h3').innerText = this.name
    this.shadowRoot.querySelector('img').setAttribute('src', this.img)
  }
}

window.customElements.define('poke-card', PokeCard)