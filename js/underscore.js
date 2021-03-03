let baseUrl ='http://localhost:9528';
function $ajax_(options) {
    var {url, method, data, success} = options;
    method = method.toUpperCase();
    var xhr = new XMLHttpRequest();
    var params = '';
    for (var x in data) {
        params += `${x}=${data[x]}&`;
    }

    params = params.slice(0, params.length - 1);
    if (method === 'GET') {
        url = url + '?' + params;
        xhr.open(method, url, true);
        xhr.send();
    }
    if (method === 'POST') {
        xhr.open(method, url, true);
        xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
        xhr.send(params);
    }

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var data = xhr.responseText;
            success(data);
        }
    }
}

/**
 * 元素距离页面顶部的距离
 * @param el
 * @returns {number|*}
 */
function getElementToPageTop(element) {
    if(element.parentElement) {
        return this.getElementToPageTop(element.parentElement) + element.offsetTop
    }
    return element.offsetTop
}