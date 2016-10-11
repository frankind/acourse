import { FirebaseService } from './firebase.service'
import { MeService } from './me.service'
import { CourseService } from './course.service'
export default [
  { name: '$firebase', service: FirebaseService },
  { name: '$course', service: CourseService },
  { name: '$me', service: MeService }
]
