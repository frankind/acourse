class ProfileComponent {
  constructor ($me) {
    'ngInject'
    this.name = ''
    this.aboutMe = ''
    this.photo = ''
    $me.getProfile()
      .first()
      .subscribe(
        (profile) => {
          // console.log(profile)
          this.name = profile.name
          this.aboutMe = profile.aboutMe
          this.photo = profile.photo
        }
    )
  }
}

export default {
  selector: 'profile',
  template: require('./profile.component.html'),
  controller: ProfileComponent
// controllerAs: 'vm'//if not put it will be '$ctrl'
}
