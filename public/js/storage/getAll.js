import generatePromises from './generatePromises.js'

export default (id) => (
  fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(response => response.json())
)
  