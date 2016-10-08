import firebase from 'firebase'

// Config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider']
// export default function Config ($stateProvider, $urlRouterProvider, $locationProvider) {
export default function ($stateProvider, $urlRouterProvider, $locationProvider) {
  'ngInject'
  // Initialize Firebase
  firebase.initializeApp({
    apiKey: 'AIzaSyC6x7fiWHjoMIEkPWP7fvWPz6wjlexnJWk',
    authDomain: 'acourse-frankind.firebaseapp.com',
    databaseURL: 'https://acourse-frankind.firebaseio.com',
    storageBucket: 'acourse-frankind.appspot.com',
    messagingSenderId: '639177592596'
  })

  $locationProvider.html5Mode(true)
  $urlRouterProvider.otherwise('/')
  $stateProvider
    .state('auth', {
      abstract: true,
      template: require('./views/auth.html')
    })
    .state('auth.signin', {
      url: '/',
      template: require('./views/signin.html'),
      controller: 'SignInController',
      controllerAs: 'vm'
    })
    .state('auth.register', {
      url: '/register',
      template: require('./views/register.html')
      // controller: 'SignUpController',
      // controllerAs: 'vm'
    })
    .state('layout', {
      template: require('./views/layout.html')
    })
    .state('home', {
      url: '/home',
      parent: 'layout',
      template: require('./views/home.html'),
      controller: 'HomeController',
      controllerAs: 'vm'
    })
    .state('profile', {
      url: '/profile',
      parent: 'layout',
      template: require('./views/profile.html')
    })
    .state('edit-profile', {
      url: '/profile/edit',
      parent: 'layout',
      template: require('./views/edit-profile.html'),
      controller: 'EditProfileController',
      controllerAs: 'vm'
    })
}
