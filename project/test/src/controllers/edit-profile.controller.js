export class EditProfileController {
  constructor ($me, $state) {
    'ngInject'
    this.$me = $me
    this.$state = $state
    this.name = ''
    this.aboutMe = ''
    // const me$ = $me.getProfile()
    $me.getProfile()
      .first()
      .subscribe(
        (profile) => {
          // console.log(profile)
          this.name = profile.name
          this.aboutMe = profile.aboutMe
        }
    )
  // $me.getProfile((profile) => {
  //   this.name = profile.name
  //   this.aboutMe = profile.aboutMe
  // })
  // No need to unsubscribe if we get only first from observable
  // $scope.$on('$destroy', () => {
  //   console.log('destroy')
  //   me$.unsubscribe()
  // })
  }
  save () {
    this.saving = true
    this.$me.saveProfile({
      name: this.name,
      aboutMe: this.aboutMe
    })
      .subscribe(() => {
        this.saving = false
        this.$state.go('profile')
      })
  // .then(() => {
  //   this.saving = false
  //   this.$state.go('profile')
  // })
  }
}
