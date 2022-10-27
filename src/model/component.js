import styled from './styled.js'
import * as images from '../images'

const template = document.createElement('template')
template.innerHTML = `
  ${styled}
  <header>
    <div class="container">
      <img class="header__icon" src="${images.pokedexIcon}" alt="Logo" />
      <img class="header__logo" src="${images.logoHeader}" alt="Pokedex" />
      <button class="header__menu-mobile">
        <img class="menu-icon" src="${images.menuHamburguer}" alt="menu" />
      </button>
    </div>
  </header>
  <main class="main container">
  </main>
  <footer class="footer">
    <div class="container">
      <span>© Copyright, Leehaney Soares - Developer</span>
    </div>
  </footer>
`

export default template