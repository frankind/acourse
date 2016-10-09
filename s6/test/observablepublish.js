const Rxjs = require('rxjs')

const ob = Rxjs.Observable
  .from([ 1, 2, 3, 4, 5 ])
  .publish()

ob.subscribe(
  (x) => console.log('a: ' + x)
)
ob.subscribe(
  (x) => console.log('b: ' + x)
)
ob.connect()

// C and D will not get data because of 'connect'' has been closed.
ob.subscribe(
  (x) => console.log('c: ' + x)
)
ob.subscribe(
  (x) => console.log('d: ' + x)
)
