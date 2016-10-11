class HomeController {
  constructor ($firebase, $state, $course) {
    'ngInject'
    this.$firebase = $firebase
    this.$state = $state
    this.$course = $course
  }

  $onInit () {
    this.$course.list()
      .subscribe((courses) => {
        this.courses = courses
      }
    )
  }
}
export default {
  selector: 'home',
  template: require('./home.component.html'),
  controller: HomeController
}
