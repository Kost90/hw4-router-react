import JsonPlaceholderAPI from "../../api/JsonPlaceholderAPI/JsonPlaceholderAPI";

export const commentLoader = async ({request:{signal}}) =>{
return await JsonPlaceholderAPI.getComments({signal})
}