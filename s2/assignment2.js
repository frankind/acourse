const library = require('./library')
const _ = require('lodash')
// console.log(library)

const result = _(library)
  .groupBy('Artist')
  // .map((value , key) => {

  // })
  .map((tracks, artist) => {
    return {
      artist,
      avg: _(tracks).map((track) => track['Total Time']).mean()
    }
  })
  .value()
console.log(result)
