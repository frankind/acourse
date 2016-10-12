import { Observable } from 'rxjs'
class CourseChatController {
  constructor ($firebase, $course, $stateParams, $user) {
    'ngInject'
    this.$course = $course
    this.currentMessage = ''
    this.courseId = $stateParams.id
    this.$firebase = $firebase
    this.messages = []
    
    $firebase.currentUser()
      .first()
      .subscribe(({uid}) => {
        this.userId = uid
      })

    this.course$ = $course.messages(this.courseId)
      .do((message) => {
        $user.get(message.u).first()
          .subscribe(
            (user) => {
              message.user = user
            })
      })
      .subscribe((message) => {
        console.log(message)
        this.messages.push(message)
      })
  }
  send () {
    const message = {
      m: this.currentMessage.trim(),
      u: this.userId,
      t: this.$firebase.timestamp
    }

    console.log(this.currentMessage)
    this.$course.sendMessage(this.courseId, message)
      .subscribe(
        () => {
          this.currentMessage = ''
        }
    )
  }
  $onDestroy () {
    // this.chat$.unsubscribe()
    this.course$.unsubscribe()
  }
}

export default {
  selector: 'courseChat',
  template: require('./course-chat.component.html'),
  controller: CourseChatController
}
