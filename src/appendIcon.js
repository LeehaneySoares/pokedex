import * as images from './images'

export default (function () {
  const head = document.head;
  const link = document.createElement('link');
  link.setAttribute('rel', 'icon');
  link.setAttribute('type', 'image/png');
  link.setAttribute('href', images.pokedexIcon);

  head.appendChild(link);
  
})()