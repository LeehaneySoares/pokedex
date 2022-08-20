export default function (stats) {
  const output = {}
  stats.forEach(item => Object.assign(output, {
    [item.stat.name]: item.base_stat
  }))

  return output
}