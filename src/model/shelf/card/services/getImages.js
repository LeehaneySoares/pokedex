'use-strict'

export default function (id) {
  let prefix = '00'
  if (id > 9) { prefix = '0' }
  if (id > 99) { prefix = '' }
  const url = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${prefix+id}.png`
  try {
    return url
  } catch (error) {
    return ''
  }
}