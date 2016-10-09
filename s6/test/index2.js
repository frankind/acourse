const Rxjs = require('rxjs')

const ob = Rxjs.Observable.from([1, 2, 3, 4, 5])
// .filter((x)=> x%2===0)

ob.subscribe((x) => console.log(x), null, () => console.log('completed'))

ob
  .map((x) => x * 2)
  .subscribe((x) => console.log(x, null, () => console.log('completed')))
  // Hot Observable
  // Cold Observable
  // const s = new Rxjs.Subject()
  // s.next(1)
  // s.next(2)
  // s.subscribe(
  //     (x)=>console.log(x)
  //   )
  // s.next(3)
  // s.subscribe(
  //     (x)=>console.log(x)
  //   )
  // s.next(4)

  // setTimeout(() => {
  //   ob.subscribe(
  //     (x)=>console.log(x)
  //   )
  // },5000)
