const type = []

export default (types) => (
  types.forEach(item => type.push(item.type?.name)),
  type.join(' | ')
)