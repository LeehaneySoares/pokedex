export default (target, images) =>
  target?.figure.addEventListener('click', () => target?.parent.openModal(target.allOfPokemon, images))