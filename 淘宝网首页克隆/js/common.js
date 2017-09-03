// 绑定事件通用函数
function bind(obj, evname, fn){
    if (obj.addEventListener) {
        obj.addEventListener(evname, fn, false);
    } else {
        obj.attachEvent('on'+evname, function(){
            fn.call(obj);
        })
    }
}

function cancelHandler(event) {
    var event = event || window.event;  //用于IE  
    if (event.preventDefault) event.preventDefault();  //标准技术  
    if (event.returnValue) event.returnValue = false;  //IE  
    return false;   //用于处理使用对象属性注册的处理程序  
}  

// 功能函数
function doMove(obj, attr, dir, target, endFn) {
    dir = parseInt(getStyle(obj, attr)) < target ? dir : -dir;
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        var speed = parseInt(getStyle(obj, attr)) + dir;
        if (speed > target && dir > 0 || speed < target && dir < 0) {
            speed = target;
        }
        obj.style[attr] = speed + 'px';
        if (speed == target) {
            clearInterval(obj.timer);
            endFn && endFn();
        }
    }, 30)
}
function getStyle(obj, attr) {
    return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj)[attr];
}