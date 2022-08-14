import getAll from './getAll.js'

export default async function (start, limitVisible) {
  const arrayPokemons = []

  for (let index = start; index < limitVisible; index++) {
    await getAll(index)
      .then(response => arrayPokemons.push(response))
  }

  return arrayPokemons
}