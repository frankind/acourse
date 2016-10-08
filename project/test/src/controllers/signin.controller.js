export class SignInController {
  constructor ($firebase, $state) {
    'ngInject'
    this.$firebase = $firebase
    this.$state = $state
  }
  signIn () {
    this.signInLoading = true
    this.$firebase.signInWithEmailAndPassword(this.email, this.password)
      .then((res) => {
        this.signInLoading = false
        this.$state.go('home')
      }, (err) => {
        this.signInLoading = false
        window.alert(err.message)
      })
  }
  googleSignIn () {
    this.signInGLoading = true
    this.$firebase.signInWithGoogle()
      .then((res) => {
        this.signInGLoading = false
        this.$state.go('home')
      }, (err) => {
        this.signInGLoading = false
        window.alert(err.message)
      })
  }
}
