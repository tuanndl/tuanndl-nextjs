const FontFaceObserver = require('fontfaceobserver')

const arrFont = [
  {
    link: 'https://fonts.googleapis.com/css?family=Space+Mono&display=swap',
    name: 'Space Mono'
  },
  {
    link: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900',
    name: 'Roboto'
  },
  {
    link: 'https://fonts.googleapis.com/css?family=IBM+Plex+Serif&display=swap',
    name: 'IBM Plex Serif'
  }
];
const Fonts = () => {
  for (const item of arrFont) {
    const link = document.createElement('link');
    link.href = item.link;
    link.rel = 'stylesheet';

    document.head.appendChild(link);

    const Font = new FontFaceObserver(item.name);

    Font.load()
  }
}

export default Fonts;