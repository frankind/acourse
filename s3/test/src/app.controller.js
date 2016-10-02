import _ from 'lodash'

export class AppController {
  constructor ($http, LIB_URL) {
    this.name = 'frankind'
    this.list = []
    this.select = 'Artist'
    this.tracks = []
    $http.get(LIB_URL)
      .then((res) => res.data)
      .then((res) => {
        this.tracks = res
        this.resetList()
      })
  }
  resetList () {
    this.list = _(this.tracks)
      .map((track) => track[this.select])
      .uniq()
      .value()
      // console.log(vm.list)
  }
}
