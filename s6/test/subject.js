const Rxjs = require('rxjs')
// Hot Observable
// const ob = Rxjs.Observable.from([1, 2, 3, 4, 5])
const s = new Rxjs.Subject()
s.subscribe(
  (x) => console.log('a: ' + x)
)
s.next(1)
s.next(2)
s.next(3)
s.subscribe(
  (x) => console.log('b: ' + x)
)
s.next(4)
s.next(5)
s.subscribe(
  (x) => console.log('c: ' + x)
)
s.next(6)
// setTimeout(() => {
//   s.subscribe(
//     (x) => console.log(x)
//   )
// }, 5000)
