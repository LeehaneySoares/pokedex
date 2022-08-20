import Home from './home/index.js'
import render from './render.js'

const home = async function () {
  Home
    .create()
    .mount()

  render()
}

export default home()