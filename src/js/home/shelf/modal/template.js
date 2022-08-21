const modal = document.querySelector('.modal__area')
const overlayer = document.querySelector('.modal__overlayer')
const main = document.createElement('div')
const img = document.createElement('img')
const description = document.createElement('article')


function closed (target) {
  modal.querySelector('.modal__close')
    .addEventListener('click', () => target.close(modal))
}

function styled (target) {
  target.style.top = 0
}

export default function (info) {
  const type = info.types.split(' | ')
  
  img.setAttribute('class', 'modal__img')
  img.src = info.img
  
  main.setAttribute('class', `bk ${type[0]}`)
  main.appendChild(img)
  
  modal.appendChild(main)
  styled(modal)
  closed(info)
}