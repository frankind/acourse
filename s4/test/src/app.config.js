import firebase from 'firebase'
export default function($stateProvider, $urlRouterProvider, $locationProvider) {
    // Initialize Firebase
    firebase.initializeApp({
        apiKey: "AIzaSyC6x7fiWHjoMIEkPWP7fvWPz6wjlexnJWk",
        authDomain: "acourse-frankind.firebaseapp.com",
        databaseURL: "https://acourse-frankind.firebaseio.com",
        storageBucket: "acourse-frankind.appspot.com",
        messagingSenderId: "639177592596"
    })

    console.log(firebase)
    $locationProvider.html5Mode(true)
    $urlRouterProvider.otherwise('/')
    $stateProvider
        .state('auth', {
            url: '/',
            template: require('./views/auth.html'),
            controller: 'AuthController',
            controllerAs: 'vm'
        })
}