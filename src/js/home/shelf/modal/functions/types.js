export default function (types) {
  const type = []

  types.forEach(item => type.push(item.type?.name))
  return type.join(' | ')
}