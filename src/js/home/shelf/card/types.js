export default function (types) {
  const type = types.map(item => item.type?.name)
  return type.join(' | ')
}