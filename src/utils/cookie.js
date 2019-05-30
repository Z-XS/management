export function setCookie (C_name,C_value,expiredays) {
    var exdate = new Date()
    exdate.setDate(exdate.getDate() + expiredays)
    var n = null
    document.cookie = C_name + "=" + escape(C_value) + ((expiredays == n) ? "" : ";expires=" + exdate.toGMTString())
}

export function getCookie (C_name) {
    var arr,reg = new RegExp("(^| )" + C_name + "=([^;]*)(;|$)")
    if(arr = document.cookie.match(reg)) return arr[2]
}

export function delCookie (C_name) {
    var cval = getCookie(C_name)
    if(cval != null) {
        document.cookie = name + "=" + cval + ";expires=Thu, 01 Jan 1970 00:00:00 GMT"
    }
}