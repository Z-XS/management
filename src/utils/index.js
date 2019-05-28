import ajax from './ajax'

export const addFoods = (type,url,data) => ajax(type,url,data)
export const getFoods = (type,url,data) => ajax(type,url,data)
export const deleteFood = (type,url,data) => ajax(type,url,data)
export const updateFood = (type,url,data) => ajax(type,url,data)
export const getCount = (type,url,data) => ajax(type,url,data)