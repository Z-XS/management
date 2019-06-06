import ajax from './ajax'

export const addFoods = (type,url,data) => ajax(type,url,data)
export const getFoods = (type,url,data) => ajax(type,url,data)
export const deleteFood = (type,url,data) => ajax(type,url,data)
export const updateFood = (type,url,data) => ajax(type,url,data)
export const getCount = (type,url,data) => ajax(type,url,data)
export const postCookie = (type,url,data) => ajax(type,url,data)
export const postUserMessage = (data) => ajax('post','http://127.0.0.1:3002/message',data)


// export async function postUserMessage(data) {
//     await ajax('post','http://127.0.0.1:3002/message',data)
 
// }
