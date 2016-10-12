import { Observable } from 'rxjs'
class CourseViewContoller {
  constructor ($course, $state, $firebase) {
    'ngInject'
    this.$course = $course
    this.courseId = $state.params.id
    this.course = null
    this.$firebase = $firebase
    this.isApply = false
    this.isOwner = false
    console.log('courseId: ' + this.courseId)
  }

  $onInit () {
    this.course$ = Observable.combineLatest(
      this.$firebase.currentUser().first(),
      this.$course.get(this.courseId)
    )
      .subscribe(
        ([{ uid }, course]) => {
          this.userId = uid
          this.course = course
          this.isOwner = uid === course.owner
          if (course.student) {
            this.isApply = course.student[ uid ]
          }
          // this.isApply = course.student && course.student[ uid ]
          console.log('course: ' + this.course)
          console.log('owner: ' + course.isOwner)
          console.log('uid: ' + uid)
          console.log('isOwner: ' + this.isOwner)
          console.log('isApply: ' + this.isApply)
        })
  // this.course$ = this.$course.get(this.courseId)
  //   .subscribe((course) => {
  //     this.course = course
  //   })
  // this.$firebase.currentUser()
  //   .first()
  //   .subscribe(({uid}) => {
  //     this.userId = uid
  //   })
  }

  $onDestroy () {
    console.log('Course View destroy')
    this.course$.unsubscribe()
  }
}
export default {
  selector: 'courseView',
  template: require('./course-view.component.html'),
  controller: CourseViewContoller
}
