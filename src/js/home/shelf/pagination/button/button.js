export default function (target) {
  const button = document.createElement('button')
  button.setAttribute('class', `pokemon__button`)
  button.setAttribute('show', target.hasNextPage)
  button.textContent = target?.action

  document.querySelector('.pokemon__pagination').append(button)

  button.addEventListener('click', () => target.nextPage())
  return button
}