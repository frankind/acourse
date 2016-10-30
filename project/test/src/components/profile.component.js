import { Observable } from 'rxjs'

class ProfileComponent {
  constructor ($me) {
    'ngInject'
    this.name = ''
    this.aboutMe = ''
    this.photo = ''
    this.isInstructor = false
    this.courses = []

    this.profiles$ = Observable.combineLatest(
      $me.getProfile(),
      $me.myOwnCourse()
    )
      .subscribe(
        ([profile, courses]) => {
          this.name = profile.name
          this.aboutMe = profile.aboutMe
          this.photo = profile.photo
          this.isInstructor = profile.isInstructor
          this.courses = courses
          console.log('name: ' + this.name)
        }
    )
  }
  $onDestroy () {
    this.profiles$.unsubscribe()
  }
}

export default {
  selector: 'profile',
  template: require('./profile.component.html'),
  controller: ProfileComponent
}
