const modal = document.querySelector('.modal__area')
const overlayer = document.querySelector('.modal__overlayer')
const main = document.createElement('div')
const img = document.createElement('img')
const description = document.createElement('article')
const title = document.createElement('h2')
const subtitle = document.createElement('span')
let keys = ''
let values = ''

function closed (target) {
  modal.querySelector('.modal__close')
    .addEventListener('click', () => (
      target.close(modal),
      description.innerHTML = ''
    )
  )
}

function styled (target) {
  target.style.top = 0
}

export default function (info) {
  const type = info.types.split(' | ')
  modal.setAttribute('show', info.opened)
  
  title.textContent = info.name
  subtitle.textContent = info.types
  main.append(title)
  main.append(subtitle)

  img.setAttribute('class', 'modal__img')
  img.src = info.img
  main.appendChild(img)
  
  main.setAttribute('class', `bk ${type[0]}`)

  description.setAttribute('class', 'modal__desc')

  keys = Object.keys(info.stats)
  values = Object.values(info.stats)

  keys.forEach((item, index) => description.innerHTML += `
    <strong>${item}: </strong>
    <progress value="${values[index]}" max="100"></progress>
  `)
  
  modal.appendChild(main)
  modal.appendChild(description)
  styled(modal)
  closed(info)
}