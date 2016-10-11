class CourseViewContoller {
  constructor ($course, $state) {
    'ngInject'
    this.$course = $course
    this.courseId = $state.params.id
    this.course = null
  }
  $postLink () {
    $('.rating').rating()
  }
  $onInit () {
    this.course$ = this.$course.get(this.courseId)
      .subscribe((course) => {
        this.course = course
      })
  }
  $onDestroy () {
    this.course$.unsubscribe()
  }
}
export default {
  selector: 'courseView',
  template: require('./course-view.component.html'),
  controller: CourseViewContoller
}
