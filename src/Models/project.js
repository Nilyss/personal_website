export class Project {
  constructor(data) {
    this._name = data.name
    this._stack = data.stack
    this._overview = data.overview
    this._image = data.image
    this._url = data.url
    this._YtUrl = data.YtUrl
  }
  get name() {
    return this._name
  }
  get stack() {
    return this._stack
  }
  get overview() {
    return this._overview
  }
  get image() {
    return this._image
  }
  get url() {
    return this._url
  }
  get YtUrl() {
    return this._YtUrl
  }
}
