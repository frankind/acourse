export class UserService {
  constructor ($firebase) {
    'ngInject'
    this.$firebase = $firebase
  }

  get (id) {
    return this.$firebase.onValue(`user/${id}`)
  }
}
