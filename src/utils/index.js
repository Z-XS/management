import ajax from './ajax'

export const addFoods = (type,url,data) => ajax(type,url,data)
export const getFoods = (type,url,data) => ajax(type,url,data)