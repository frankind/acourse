class CourseEditController {
  constructor ($course, $stateParams, $state) {
    'ngInject'
    this.$course = $course
    this.courseId = $stateParams.id
    this.course = null
    this.$state = $state

    this.$course.get(this.courseId)
      .first()
      .subscribe((course) => {
        this.course = course
      })
  }
  submit (model) {
    this.$course.save(this.courseId, model)
      .subscribe(
        () => {
          this.$state.go('course-view', {id: this.coureId})
        })
  }
}
export default {
  selector: 'courseEdit',
  template: require('./course-edit.component.html'),
  controller: CourseEditController
}
