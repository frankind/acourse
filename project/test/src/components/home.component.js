class HomeController {
  constructor ($state, $course) {
    'ngInject'
    this.$state = $state
    this.$course = $course
  }

  $onInit () {
    this.courseList = this.$course.list()
      .subscribe((courses) => {
        console.log(courses)
        this.courses = courses
      }
    )
  }
  $onDestroy () {
    console.log('Home destroy')
    this.courseList.unsubscribe()
  }
}
export default {
  selector: 'home',
  template: require('./home.component.html'),
  controller: HomeController
}
