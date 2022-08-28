export default (target) => (
  target.querySelector('.modal__close').addEventListener('click', () => target.close()),
  target.querySelector('.modal__overlayer').addEventListener('click', () => target.close())
)