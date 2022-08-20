export default function (abilities) {
  const ability = abilities.map(item => item?.ability?.name)
  return ability.join(', ')
}