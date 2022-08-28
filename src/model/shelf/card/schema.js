import * as services from './services/index.js'

export default (target) => ({
  name: target?.name,
  stats: target?.pokemon?.stats,
  type: target?.type,
  url: target?.img
})