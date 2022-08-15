import getAll from './getAll.js.js.js'

const limitPokemons = 1512

export default function (start, shelf) {
  const arrayEmpty = Array.from({ length: 24 })
  const arrayPromise = []

  start <= limitPokemons && (
    arrayEmpty.forEach((_, index) =>
      arrayPromise.push(getAll(start + index))
    )
  )

  Promise.all(arrayPromise)
    .then(response => shelf.update(response || []))

  shelf.pagination
}