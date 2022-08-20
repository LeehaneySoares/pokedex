function styled (target) {
  target.style.transition = 'tranform 618ms cubic-bezier(0.77, 0, 0.175, 1)'
  target.style.top = 0
}

export default function (info) {
  const type = info.types.split(' | ')
  const modal = document.querySelector('.modal__area')
  const main = document.createElement('div')
  const description = document.createElement('article')
  const img = document.createElement('img')
  img.setAttribute('class', 'modal__img')
  img.src = info.img

  main.setAttribute('class', `bk ${type[0]}`)
  main.appendChild(img)

  modal.appendChild(main)
  styled(modal)
}