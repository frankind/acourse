const Rxjs = require('rxjs')

// Do like lodash
const ob = Rxjs.Observable
  // .from([ 1, 2, 3, 4, 5 ])
  .from([{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }])
  .do((x) => {
    x.score = 10
  })
  // Example if we use 'map'
  // .map((x) => {
  //   return {
  //     id: x.id,
  //     score: 10
  //   }
  // })
  // .do((x) => {
  //   console.log('#Start DO: ')
  //   console.log(x)
  //   console.log('#End DO: ')
  // })
  // .takeUntil((x) => x < 3)
  // .takeWhile((x) => x < 3)
  // .takeLast(2)
  // .take(2)
  // Test for first
  // .create((o) => {
  //   o.next(1)
  //   o.next(2)
  //   o.next(3)
  //   return () => {
  //     console.log('end')
  //   }
  // })
  // .first()
  // Test for filter and map
  // .filter((x) => x % 2 === 0)
  // .map((x) => x * 2)

ob.subscribe(
  (x) => console.log(x),
  null,
  () => console.log('completed')
)
// Do it separately
// ob
//   .map((x) => x * 2)
//   .subscribe(
//     (x) => console.log(x),
//     null,
//     () => console.log('completed')
// )
