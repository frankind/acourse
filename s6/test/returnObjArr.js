const Rxjs = require('rxjs')

function getUser (id) {
  return Rxjs.Observable.create((o) => {
    o.next({id})
  })
// return Rxjs.Observable.of({id}).delay((10 - id) * 100)
}
function getAllUserId (id) {
  return Rxjs.Observable.of([1, 2, 3, 4, 5])
}
const ob = getAllUserId()
  .flatMap((ids) =>
    Rxjs.Observable.from(ids)
      .flatMap((id) =>
        getUser(id).first()
      )
   )
  .toArray()
  // .flatMap(Rxjs.Observable.from)
  // .flatMap(getUser)
  // .first()
  // .toArray()

ob.subscribe(
  (x) => console.log(x),
  null,
  () => console.log('completed')
)
