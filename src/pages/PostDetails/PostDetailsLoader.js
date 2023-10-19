import JsonPlaceholderAPI from '../../api/JsonPlaceholderAPI/JsonPlaceholderAPI.js'

export const postDetailsLoader = async ({ params: { id }, request: { signal } }) => {
  return await JsonPlaceholderAPI.getPost({ signal, id })
}