import _ from 'lodash'

export class DetailController {
  constructor ($stateParams, $http, LIB_URL) {
    this.type = $stateParams.type
    this.data = $stateParams.data
    this.list = []
    $http.get(LIB_URL)
      .then((res) => res.data)
      .then((res) => {
        this.list = _(res)
          .filter((track) => track[this.type] === this.data)
          .value()
      })
  }
}
