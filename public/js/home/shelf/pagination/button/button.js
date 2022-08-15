import { $ } from '../../../shortcut.js'

const buildPagination = (target) => (
  target.nextPage()
)

export default function (target) {
  const button = document.createElement('button')
  button.setAttribute('class', `pokemon__button`)
  button.setAttribute('show', target.hasNextPage)
  button.textContent = 'Ver mais'

  $('.pokemon__pagination').append(button)

  button.addEventListener('click', () => buildPagination(target))
}