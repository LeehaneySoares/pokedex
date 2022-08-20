export default (target) =>
  target?.figure.addEventListener('click', () => target?.parent.openModal(target.allOfPokemon))