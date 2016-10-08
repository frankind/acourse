export class MeService {
  constructor ($firebase) {
    'ngInject'
    this.$firebase = $firebase
  }
  saveProfile (profile) {
    // const currentUser = this.$firebase.currentUser()
    // return this.$firebase.set(`user/${currentUser.uid}`, profile)
    return this.$firebase.currentUser
      .flatMap((currentUser) => this.$firebase.set(`user/${currentUser.uid}`, profile))
  }
  // getProfile(callback) {
  getProfile () {
    return this.$firebase.currentUser
      .filter((currentUser) => currentUser !== undefined)
      .flatMap((currentUser) => this.$firebase.onValue(`user/${currentUser.uid}`))
  // const currentUser = this.$firebase.currentUser()
  // return this.$firebase.onValue(`user/${currentUser.uid}`)
  // return this.$firebase.onceValue(`user/${currentUser.uid}`,callback)
  }
}
