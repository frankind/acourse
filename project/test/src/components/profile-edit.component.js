class ProfileEditComponent {
  constructor ($me, $state, $scope) {
    'ngInject'
    this.$me = $me
    this.$state = $state
    this.name = ''
    this.aboutMe = ''
    this.$scope = $scope
    // const me$ = $me.getProfile()
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
  save () {
    this.saving = true
    this.$me.saveProfile({
      name: this.name,
      aboutMe: this.aboutMe,
      photo: this.photo
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
  selectedFile (file) {
    const f = file.files[ 0 ]
    if (!f) return
    this.$me.upload(f)
      .subscribe((res) => {
        this.photo = res
      })
  }
}

export default {
  selector: 'profileEdit',
  template: require('./profile-edit.component.html'),
  controller: ProfileEditComponent
// controllerAs: 'vm'//if not put it will be '$ctrl'
}
