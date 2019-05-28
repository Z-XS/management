import axios from 'axios'

export default function ajax (type,url,data) {
    return new Promise(function (resolve,reject) {
        axios({
            method:type,
            url:url,
            params:data
        })
        .then(res => resolve(res))
        .catch(err => reject(err))
    })
}