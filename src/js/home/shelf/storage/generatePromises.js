import getAll from './getAll.js'

export default function (start, shelf) {
  const limitPokemons = 1512
  const arrayEmpty = Array.from({ length: 24 })
  const arrayPromise = []

  start <= limitPokemons && (
    arrayEmpty.forEach((_, index) =>
      arrayPromise.push(getAll(start + index))
    )
  ), 
  Promise.all(arrayPromise)
    .then(response => shelf.update(response || []))
}