const Rxjs = require('rxjs')

const ob = Rxjs.Observable.from([1, 2, 3, 4, 5])
// const ob = Rxjs.Observable.of([1,2,3,4,5])
// const ob = Rxjs.Observable.create((o) => {
//   o.next(1)
//   o.next(2)
//   o.next(3)
//   o.next(4)
//   o.next(5)
//   o.complete()
//   // return () => {
//   //   console.log('dispose')
//   // }
// })

const q = ob.subscribe(
  (x) => {
    console.log('next ' + x)
  },
  (err) => {
    console.log('error ' + err)
  },
  () => {
    console.log('completed')
  }
)
setTimeout(() => {
  q.unsubscribe()
}, 2000)
