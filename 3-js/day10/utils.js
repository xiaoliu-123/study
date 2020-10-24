//针对于智慧校园排课系统
var qs = Qs;
var baseURL = 'http://120.26.176.26:7788';
//1.提供登录方法，提供获取token方法
//user = {username:'',password:''}
function getToken(user) {
    var httpRequest = new XMLHttpRequest();
    httpRequest.open('post', baseURL + '/user/login');
    //设置请求头 在发送之前
    httpRequest.setRequestHeader('Content-Type', 'application/json');
    httpRequest.send(JSON.stringify(user));
    httpRequest.onreadystatechange = function () {
        if (httpRequest.readyState === 4 && httpRequest.status === 200) {
            //处理响应数据
            var res = httpRequest.responseText;
            var token = JSON.parse(res).data.token;
            //保存到sesstionStorage中
            sessionStorage.setItem('token', token);
        }
        if (httpRequest.readyState === 4 && httpRequest.status === 500) {
            console.log('错误：', httpRequest.responseText);
        }
    }
}
//2.myAjax对象，对象里有get方法，postForm方法，postJSON方法
var myAjax = {
    get: function (user, params, success, error) {
        var httpRequest = new XMLHttpRequest();
        httpRequest.open('get', baseURL + url + '?' + qs.stringify(params));
        // httpRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        //认证
        httpRequest.setRequestHeader("Authorization", sessionStorage.getItem('token'));
        //发送请求
        httpRequest.send();
        httpRequest.onreadystatechange = function () {
            if (httpRequest.readyState === 4 && httpRequest.status === 200) {
                success(JSON.parse(httpRequest.responseText));
            }
            if (httpRequest.readyState === 4 && httpRequest.status === 500) {
                error(JSON.parse(httpRequest.responseText));
            }
        }
    },
    postForm: function (user, params, success, error) {
        var httpRequest = new XMLHttpRequest();
        httpRequest.open('post', baseURL + url);
        httpRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        //认证
        httpRequest.setRequestHeader("Authorization", sessionStorage.getItem('token'));
        //发送数据
        httpRequest.send(qs.stringify(params));
        httpRequest.onreadystatechange = function () {
            if (httpRequest.readyState === 4 && httpRequest.status === 200) {
                success(JSON.parse(httpRequest.responseText));
            }
            if (httpRequest.readyState === 4 && httpRequest.status === 500) {
                error(JSON.parse(httpRequest.responseText));
            }
        }
    },
    postJson: function (user, params, success, error) {
        var httpRequest = new XMLHttpRequest();
        httpRequest.open('post', baseURL + url);
        httpRequest.setRequestHeader('Content-Type', 'application/json');
        //认证
        httpRequest.setRequestHeader("Authorization", sessionStorage.getItem('token'));
        //发送数据
        httpRequest.send(JSON.stringify(params));
        httpRequest.onreadystatechange = function () {
            if (httpRequest.readyState === 4 && httpRequest.status === 200) {
                success(JSON.parse(httpRequest.responseText));
            }
            if (httpRequest.readyState === 4 && httpRequest.status === 500) {
                error(JSON.parse(httpRequest.responseText));
            }
        }
    },

}


