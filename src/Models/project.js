export class Project {
  constructor(data) {
    this._id = data._id
    this._name = data.name
    this._stack = data.stack
    this._overview = data.overview
    this._thumbnail = data.thumbnail
    this._images = data.images
    this._url = data.url
    this._YtUrl = data.YtUrl
  }
  get id() {
    return this._id
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
  get thumbnail() {
    return this._thumbnail
  }
  get images() {
    return this._images
  }
  get url() {
    return this._url
  }
  get YtUrl() {
    return this._YtUrl
  }
}
