'use-strict'

export default function (pokemon) {
  let prefix = '00'
  if (pokemon?.id > 9) { prefix = '0' }
  if (pokemon?.id > 99) { prefix = '' }
  const url = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${prefix+pokemon?.id}.png`
  try {
    return url
  } catch (error) {
    return ''
  }
}