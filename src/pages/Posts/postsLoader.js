import JsonPlaceholderAPI from "../../api/JsonPlaceholderAPI/JsonPlaceholderAPI";

export const postsLoader = async ({ request: { signal } }) => {
    return await JsonPlaceholderAPI.getPosts({ signal})
  }