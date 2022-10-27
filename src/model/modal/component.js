import styled from './styled.js'
import * as images from '../../images'

const template = document.createElement('template')

template.innerHTML = `
  ${styled}
  <aside class="modal">
    <button class="modal__close">
      <img src="${images.close}" />
    </button>
    <div class="modal__sup">
    </div>
    <ul class="modal__stat">
    </ul>
    <ul class="modal__moves"></ul>
  </aside>
  <div class="modal__overlayer"></div>
`

export default template