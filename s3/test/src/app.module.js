import angular from 'angular'

import Config from './app.config'
import { AppController } from './app.controller'
import { DetailController } from './detail.controller'

angular
  .module('app', ['ui.router'])
  .constant('LIB_URL', 'https://raw.githubusercontent.com/acoshift/course-ngfirebase/master/2-es6-fp/2-fp/library.json')
  .config(Config)
  .controller('AppController', AppController)
  .controller('DetailController', DetailController)
