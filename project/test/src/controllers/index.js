import { SignInController } from './signin.controller'
// import { SignUpController } from './signup.controller'
import { HomeController } from './home.controller'
import { EditProfileController } from './edit-profile.controller'

export default [
  { name: 'HomeController', controller: HomeController },
  { name: 'SignInController', controller: SignInController },
  // { name: 'SignUpController', controller: SignUpController },
  { name: 'EditProfileController', controller: EditProfileController }
]
