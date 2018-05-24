const fs = require('fs')
const fetch = require('node-fetch')
require('dotenv').load()

const readmes = [
  {
    name: 'player specials',
    url:
      'https://bitbucket.org/globalmouth/player-specials/raw/master/README.md',
    file: 'player-specials-readme.md',
  },
  {
    name: 'timeline',
    url: 'https://bitbucket.org/globalmouth/timeline/raw/master/README.md',
    file: 'timeline-readme.md',
  },
]

const getReadme = (url, name, file) =>
  fetch(url, {
    headers: {
      accept:
        'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
      referrer:
        'https://bitbucket.org/globalmouth/player-specials/src/master/README.md',
      cookie: process.env.BITBUCKET_COOKIE,
    },
  })
    .then(res => res.text())
    .then(data => {
      fs.writeFile(file, data, err => {
        if (err) throw err
        console.log(`Saved ${name} readme`)
      })
    })
    .catch(err => console.error(err.message))

Promise.all(
  readmes.map(readme => getReadme(readme.url, readme.name, readme.file))
)
