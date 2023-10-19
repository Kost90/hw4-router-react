import { redirect } from 'react-router-dom'

import JsonPlaceholderAPI from '../../api/JsonPlaceholderAPI/JsonPlaceholderAPI.js'

export const destroyPostAction = async ({ params: { id }, request: { signal } }) => {
    await JsonPlaceholderAPI.deleteUser({ signal, id })
  
    return redirect('/posts')
  }