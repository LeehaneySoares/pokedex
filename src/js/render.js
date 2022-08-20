const attrs = ['rel', 'type', 'href']
const values = ['stylesheet', 'text/css', './src/css/tokens.css']
const tokens = document.createElement('link')

export default () => (
  attrs.forEach((item, index) =>
    tokens.setAttribute(item, values[index])
  ),
  document.querySelector('head').appendChild(tokens)
)