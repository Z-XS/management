import axios from 'axios'

export default function ajax (type,url,data) {
    return new Promise(function (resolve,reject) {
        let promise
        if(type == "post") {
            promise = axios({
                method:'post',
                url:url,
                data:data
            })
        }else {
            promise = axios({
                method:type,
                url:url,
                params:data
            })
        }

        promise
        .then(res => resolve(res))
        .catch(err => reject(err))
    })
}