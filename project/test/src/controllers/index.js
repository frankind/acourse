import { SignInController } from './signin.controller'
import { LayoutController } from './layout.controller'
// import { SignUpController } from './signup.controller'
import { ProfileController } from './profile.controller'
import { HomeController } from './home.controller'
import { EditProfileController } from './edit-profile.controller'

export default [
  { name: 'HomeController', controller: HomeController },
  { name: 'SignInController', controller: SignInController },
  { name: 'LayoutController', controller: LayoutController },
  { name: 'ProfileController', controller: ProfileController },
  // { name: 'SignUpController', controller: SignUpController },
  { name: 'EditProfileController', controller: EditProfileController }
]