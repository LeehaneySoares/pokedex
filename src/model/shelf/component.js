import styled from './styled.js'

const template = document.createElement('template')
template.innerHTML = `
  ${styled}
  <section class="poke__shelf"></section>
`
export default template