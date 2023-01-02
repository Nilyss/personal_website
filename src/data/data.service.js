import axios from 'axios'
import { Project } from '../Models/project'

export default class HttpService {
  projects = '/projects.json'
  async getProjects() {
    const req = await axios.get(`${this.projects}`)
    const res = req.data.projects
    return res.map((project) => new Project(project))
  }
}
