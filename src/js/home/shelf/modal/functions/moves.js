const limitVisible = 34

export default function (moves) {
  const move = moves.map(item => item.move?.name)

  return move
    .join(', ')
    .substring(0, limitVisible)
    .concat('...')
}