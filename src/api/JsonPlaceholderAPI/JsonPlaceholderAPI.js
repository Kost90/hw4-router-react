import { JSON_PLACEHOLDER_BASE_URL } from '../../constans/index'
import { API } from '../API/API'

class JsonPlaceholderAPI extends API {
  constructor(url) {
    super(url)
  }

  async getPhotos({ signal }) {
    const response = await this.fetch({ path: 'photos', signal })

    return response.slice(0, 20)
  }

  async getUsers({ signal }) {
    return await this.fetch({ path: 'users', signal })
  }

  async getUser({ signal, userId }) {
    return await this.fetch({ path: `users/${userId}`, signal })
  }

  async getPosts({signal}){
    const response = await this.fetch({path: 'posts', signal})

    return response.slice(0,20)
  }

  async getPost({signal, id}){
    return await this.fetch({path:`posts/${id}`, signal})
  }

  async getComments({signal}){
    const response = await this.fetch({path:'comments', signal})
    return response.slice(0,20)
  }

  async deleteUser({ signal, userId }) {
    return await this.fetch({ path: `users/${userId}`, signal, method: 'DELETE' })
  }

  async deletePost({ signal, id }) {
    return await this.fetch({ path: `posts/${id}`, signal, method: 'DELETE' })
  }
}

export default new JsonPlaceholderAPI(JSON_PLACEHOLDER_BASE_URL)
