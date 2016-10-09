export class ProfileController {
  constructor ($me, $state, $scope) {
    'ngInject'
    this.$me = $me
    this.$state = $state
    this.$scope = $scope
    // const me$ = $me.getProfile()
    $me.getProfile()
      .first()
      .subscribe(
        (profile) => {
          // console.log(profile)
          this.photo = profile.photo
        }
    )
  }
}
