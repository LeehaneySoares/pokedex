import styled from './styled.js'

const template = document.createElement('template')
template.innerHTML = `
  ${styled}
  <header>
    <div class="container">
      <img class="header__icon" src="./assets/images/pokedex-icon.png" alt="Logo" />
      <img class="header__logo" src="./assets/images/logo-header.png" alt="Pokedex" />
      <button class="header__menu-mobile">
        <img class="menu-icon" src="./assets/images/menu-hamburguer.png" alt="menu" />
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