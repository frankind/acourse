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
      template: require('./views/auth.html'),
      resolve: {
      redirectToHomeIfAuth}
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
      template: require('./views/layout.html'),
      controller: 'LayoutController',
      controllerAs: 'vm',
      resolve: {
      redirectToAuthIfNotAuth}
    })
    .state('home', {
      url: '/home',
      parent: 'layout',
      template: '<home></home>'
    })
    .state('profile', {
      url: '/profile',
      parent: 'layout',
      template: '<profile></profile>'
    })
    .state('edit-profile', {
      url: '/profile/edit',
      parent: 'layout',
      template: '<profile-edit></profile-edit>'
    })
    .state('course-create', {
      url: '/course/create',
      parent: 'layout',
      template: '<course-create></course-create>'
    })
    .state('course-view', {
      url: '/course/:id',
      parent: 'layout',
      template: '<course-view></course-view>'
    })
}

function redirectToHomeIfAuth ($q, $state, $firebase) {
  'ngInject'
  // Redirect without defer
  // $firebase.currentUser()
  //   .subscribe((user) => {
  //     if (user) {
  //       $state.go('home')
  //     }
  //   })
  // Another with defer
  const defer = $q.defer()
  $firebase.currentUser()
    .subscribe((user) => {
      if (user) {
        defer.reject()
        $state.go('home')
      } else {
        defer.resolve()
      }
    })
  return defer.promise
// Normal
// return $q((resolve, reject) => {
//   reject()
// })
}

function redirectToAuthIfNotAuth ($q, $state, $firebase) {
  'ngInject'
  const defer = $q.defer()
  $firebase.currentUser()
    .subscribe((user) => {
      if (!user) {
        defer.reject()
        $state.go('auth.signin')
      } else {
        defer.resolve()
      }
    })
  return defer.promise
}
