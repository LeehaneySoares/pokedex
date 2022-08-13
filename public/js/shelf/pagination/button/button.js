import { $ } from '../../../shortcut.js'

export default function () {
  const button = document.createElement('button')
  button.setAttribute('class', 'pokemon__button')
  button.textContent = 'Ver mais'
  $('.pokemon__pagination').append(button)
}