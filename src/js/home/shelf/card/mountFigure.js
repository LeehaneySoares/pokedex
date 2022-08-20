export default function (target) {
  const figure = document.querySelector('.pokemon__figure').cloneNode(true)
  const type = target.type.split(' | ')
  console.log(type)

  figure.id = `pokemon_${target?.id}`
  figure.className = `pokemon__figure ${type[0]}`
  figure.querySelector('img').src = target?.img
  figure.querySelector('img').alt = target?.name
  figure.querySelector('.pokemon__name').innerHTML = target?.name
  figure.querySelector('.pokemon__type').innerHTML = target?.type

  return figure
}