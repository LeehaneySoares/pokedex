export default function (target) {
  const figure = document.querySelector('.pokemon__figure').cloneNode(true)

  figure.id = `pokemon_${target?.id}`
  figure.className = `pokemon__figure ${target?.type.replace(/\|/, '')}`
  figure.querySelector('img').src = target?.img
  figure.querySelector('img').alt = target?.name
  figure.querySelector('.pokemon__name').innerHTML = target?.name
  figure.querySelector('.pokemon__type').innerHTML = target?.type

  return figure
}