export class SignUpController {
  constructor ($firebase, $state) {
    'ngInject'
    this.$firebase = $firebase
    this.$state = $state
  }
  signUp () {
    this.signUpLoading = true
    this.$firebase.signUpWithEmailAndPassword(this.email, this.password)
      .then((res) => {
        this.signUpLoading = false
        this.$state.go('home')
      }, (err) => {
        this.signUpLoading = false
        window.alert(err.message)
      })
  }
}
