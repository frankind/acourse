import firebase from 'firebase'
export class AuthController {
  constructor ($scope) {
    this.$scope = $scope
    this.isForgotPassword = false
    this.isSignIn = true
    this.isSignUp = false
    firebase.auth().onAuthStateChanged((user) => {
      console.log(user)
    })
  }
  signUp () {
    firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
      .then((res) => {
        // console.log(res)
        console.log(firebase.auth().currentUser)
      })
  }
  signIn () {
    this.signInLoading = true
    firebase.auth().signInWithEmailAndPassword(this.email, this.password)
      .then((res) => {
        this.$scope.$apply(() => {
          this.signInLoading = false
          console.log(res)
        })
      })
  }
  googleSignIn () {
    const provider = new firebase.auth.GoogleAuthProvider()
      // firebase.auth().signInWithPopup(provider)
    firebase.auth().signInWithRedirect(provider)
      .then((res) => { console.log(res) })
  }
  signout () {
    firebase.auth().signOut()
  }
  doForgotPassword () {
    this.isForgotPassword = true
    this.isSignIn = false
    this.isSignUp = false
  }
  doRegister () {
    this.isForgotPassword = false
    this.isSignIn = false
    this.isSignUp = true
  }
  doSignIn () {
    this.isForgotPassword = false
    this.isSignIn = true
    this.isSignUp = false
  }
}
