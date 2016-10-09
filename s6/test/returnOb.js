const Rxjs = require('rxjs')

// Normal return
// function getUser(id) {
//   return {
//     id: id
//   }
// }
// Return with Observable
function getUser (id) {
  // return Rxjs.Observable.of({id})
  // Simulate delay
  // return Rxjs.Observable.timer((10 - id) * 100).map(() => ({id}))
  // Or using delay
  return Rxjs.Observable.of({id}).delay((10 - id) * 100)
}
const ob = Rxjs.Observable
  // .from([{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }])
  .from([ 1, 2, 3, 4 ])
  // .concatMap(getUser) // concatMap it will wait each data
  .flatMap(getUser) // flatmap will return data in Observable
  .toArray() // it will wait everything done then it will call to Array
  // .map(getUser) //if we use map only it will get Observable

ob.subscribe(
  (x) => console.log(x),
  null,
  () => console.log('completed')
)
