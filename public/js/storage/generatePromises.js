import getAll from './getAll.js'

export default () =>
  Array(150).fill().map((_, index) => (
    getAll(index + 1).then(response => response)
  ))