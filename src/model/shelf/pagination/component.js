import styled from './styled.js'

const template = document.createElement('template')
template.innerHTML = `
${styled}
<div class="pokemon__pagination">
  <button class="pagination__button">
    <span>Ver mais</span>
  </button>
</div>
`

export default template