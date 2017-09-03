bind(window, "load", function(){

    // slideUp轮播图
    var oSlideUp = document.getElementsByClassName('slide_up')[0];
    var oSlideUpUl = oSlideUp.getElementsByTagName('ul')[0];
    var oLeft = oSlideUp.getElementsByClassName('slide_up_left')[0];
    var oRight = oSlideUp.getElementsByClassName('slide_up_right')[0];
    var oBtn = oSlideUp.getElementsByClassName('button')[0];
    var aSlideUpBtn = oBtn.getElementsByTagName('span');
    oSlideUp.num = 1; //记录当前为第几张图
    oSlideUp.len = 5;//记录共有几张图片

    // 左右箭头点击
    oLeft.onclick = function () {
        move(oSlideUpUl, 520);
        changeNum(oSlideUp, -1);
        changeBtnStyle(oSlideUp.num, aSlideUpBtn);
        cancelHandler();
    }
    oRight.onclick = function () {
        move(oSlideUpUl, -520);
        changeNum(oSlideUp, 1);
        changeBtnStyle(oSlideUp.num, aSlideUpBtn);
        cancelHandler();
    }

    // 自动播放
    function playUp() {
        oSlideUp.timer = setInterval(function () {
            move(oSlideUpUl, -520);
            changeNum(oSlideUp, 1);
            changeBtnStyle(oSlideUp.num, aSlideUpBtn);
        }, 2000);
    }
    // 停止自动播放
    function stopUp() {
        clearInterval(oSlideUp.timer);
    }

    playUp();
    oSlideUp.onmouseover = function () {
        stopUp();
    };
    oSlideUp.onmouseout = function () {
        playUp();
    };

    // 指示器动作
    for (var i = 0; i < aSlideUpBtn.length; i++) {
        aSlideUpBtn[i].index = i + 1;
        aSlideUpBtn[i].onclick = function () {
            var offset = 520 * (oSlideUp.num - this.index);
            move(oSlideUpUl, offset);
            // oSlideUp.num = this.index ;
            changeNum(oSlideUp, (this.index - oSlideUp.num));
            changeBtnStyle(oSlideUp.num, aSlideUpBtn);
            cancelHandler();
        }
    }

    // 变动当前显示的图片序号
    function changeNum(obj, y){ //obj为num所在的元素
        obj.num += y;
        if (obj.num < 1) {
            obj.num = obj.len;
        } else if (obj.num > obj.len) {
            obj.num = 1;
        }
    }

    function move(obj, x) { //x为移动距离。为正则向右移，为负则向左移。obj为移动的元素
        doMove(obj, 'left', 90, (obj.offsetLeft + x), function () {
            if (obj.offsetLeft >= 0) {
                obj.style.left = -520 * obj.parentNode.len + 'px';
            }
            if (obj.offsetLeft <= -520 * (obj.parentNode.len + 1)) {
                obj.style.left = -520 + 'px';
            }
        });
    }

    // 改变buttons的style
    function changeBtnStyle(num,aBtn) {//obj为num所在的父级，aBtn为按钮组
        resetStyle(aBtn);
        aBtn[num-1].className = "active";
        function resetStyle(aBtn) {
            for (var i = 0; i < aBtn.length; i++) {
                aBtn[i].className = "";
            }
        }
    }

    // slidedown轮播图
    var oSlideDown = document.getElementsByClassName('slide_down')[0];
    var oSlideDownUl = oSlideDown.getElementsByTagName('ul')[0];
    var oLeftDown = oSlideDown.getElementsByClassName('slide_down_left')[0];
    var oRightDown = oSlideDown.getElementsByClassName('slide_down_right')[0];
    var oBtnDown = oSlideDown.getElementsByClassName('button')[0];
    var aSlideDownBtn = oBtnDown.getElementsByTagName('span');
    var aEm = oSlideDown.getElementsByTagName('em');
    oSlideDown.num = 1; //记录当前为第几张图
    oSlideDown.len = 4;//记录共有几张图片
    
    // 填数据
    aEm[1].innerHTML = oSlideDown.len;
    aEm[0].innerHTML = oSlideDown.num;
    
    // 左右箭头点击
    oLeftDown.onclick = function () {
        move(oSlideDownUl, 520);
        changeNum(oSlideDown, -1);
        changeBtnStyle(oSlideDown.num, aSlideDownBtn);
        changeEm();
        cancelHandler();
    }
    oRightDown.onclick = function () {
        move(oSlideDownUl, -520);
        changeNum(oSlideDown, 1);
        changeBtnStyle(oSlideDown.num, aSlideDownBtn);
        changeEm();
        cancelHandler();
    }

    // 自动播放
    function playDown() {
        oSlideDown.timer = setInterval(function () {
            move(oSlideDownUl, -520);
            changeNum(oSlideDown, 1);
            changeBtnStyle(oSlideDown.num, aSlideDownBtn);
            changeEm();
        }, 2000);
    }
    // 停止自动播放
    function stopDown() {
        clearInterval(oSlideDown.timer);
    }

    playDown();
    oSlideDown.onmouseover = function () {
        stopDown();
    };
    oSlideDown.onmouseout = function () {
        playDown();
    };

    // 指示器动作
    for (var j = 0; j < aSlideDownBtn.length; j++) {
        aSlideDownBtn[j].index = j + 1;
        aSlideDownBtn[j].onclick = function () {
            var offset = 520 * (oSlideDown.num - this.index);
            move(oSlideDownUl, offset);
            // oSlideDown.num = this.index;
            changeNum(oSlideDown, (this.index - oSlideDown.num));
            changeBtnStyle(oSlideDown.num, aSlideDownBtn);
            changeEm();
            cancelHandler();
        }
    }

    function changeEm(){
        aEm[0].innerHTML = oSlideDown.num;
    }
})

