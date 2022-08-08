import * as storage from './storage/index.js'
import { $ } from './shortcut.js'
import Shelf from './shelf/index.js'

const section = $('.pokemon__shelf')
const promisePokemon = storage.generatePromises()

const app = () =>
  Promise.all(promisePokemon)
    .then(response => Shelf.create(response).cards)
    .then(cards => cards.forEach(card =>
      section.innerHTML += card.template()
    ))

app()