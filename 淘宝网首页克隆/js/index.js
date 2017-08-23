// 数据
// menu
var arr = [
    {
        title : "女装",
        items : ["秋新品" ,"连衣裙", "针织衫", "毛衣", "短外套" ,"风衣", "裤子", "卫衣/ 绒衫", "T恤", "阔腿裤" ,"衬衫", "牛仔裤", "毛呢外套" ,"半身裙" ,"大码女装", "时尚套装" ,"西装", "蕾丝/ 雪纺", "打底衫" ,"夹克", "皮衣", "妈妈装" ,"民族舞台", "腔调", "红人私服", "甜美风", "文艺风" ,"街头风", "原创单品", "通勤风"," 婚纱礼服"]
    },
    {
        title : "男装",
        items: ["原创设计款", "风格潮店", "外套", "夹克", "衬衫", "T恤" ,"运动外套", "棒球服", "明星网红", "牛仔外套" ,"卫衣", "西装" ,"风衣", "皮衣" ,"针织衫" ,"POLO衫", "套装", "开衫", "呢大衣" ,"休闲裤" ,"牛仔裤" ,"运动裤", "九分裤", "哈伦裤", "阔腿裤", "马甲" ,"棉衣" ,"穿搭攻略" ,"专柜大牌", "中老年" ,"情侣装", "大码"]
    },
    {
        title : "内衣",
        items: ["睡衣冬", "保暖内衣", "内裤女" ,"内裤男", "长袖睡衣", "珊瑚绒睡衣" ,"夹棉睡衣" ,"裤袜", "长筒袜" ,"棉袜", "情侣睡衣", "秋裤" ,"保暖背心", "睡袍", "男士睡衣", "无钢圈文胸", "塑身衣" ,"内衣套装", "文胸套装", "打底裤", "连体睡衣", "睡裙女冬", "聚拢文胸", "男士袜子", "棉袜女" ,"卡通睡衣"]
    }
]
window.onload = function(){
    var oPop = document.getElementsByClassName('popup')[0];
    var oPopL = document.getElementsByClassName('popup_left')[0];
    var aSpan = document.getElementsByClassName('menu')[0].getElementsByTagName('ul')[0].getElementsByTagName('li')[0].getElementsByTagName('span');
    var aLi = document.getElementsByClassName('menu')[0].getElementsByTagName('ul')[0].getElementsByTagName('li');

    // 用数据填充menu
    function fillMenu(){
        for(var i=0;i<arr.length;i++){
            var li = document.createElement('li');
            var h3 = document.createElement('h3');
            h3.innerHTML = arr[i].title + "<span>更多 ></span>";
            li.appendChild(h3);
            for(var j=0;j<arr[i].items.length;j++){
                var a = document.createElement('a');
                a.innerHTML = arr[i].items[j];
                li.appendChild(a);
            }
            oPopL.appendChild(li);
            aSpan[i].innerHTML = arr[i].title;
        }
    }
    fillMenu();

    // 鼠标移入显示popup
    for(var i=0;i<aLi.length;i++){
        aLi[i].onmouseover = function(){
            oPop.style.display = 'block';
        }
        aLi[i].onmouseout = function(){
            oPop.style.display = 'none';
        }
    }
    oPop.onmouseover = function(){
        this.style.display = 'block';
    }
    oPop.onmouseout = function(){
        this.style.display = 'none';
    }

    // slideUp轮播图
    // 
    var oSlideUp = document.getElementsByClassName('slide_up')[0];
    var oSlideUpUl = oSlideUp.getElementsByTagName('ul')[0];
    var oLeft = document.getElementsByClassName('slide_up_left')[0];
    var oRight = document.getElementsByClassName('slide_up_right')[0];
    var aSlideUpBtn = document.getElementsByClassName('button')[0].getElementsByTagName('span');
    
    oSlideUp.num = 1;
    // 控制左右箭头显示
    oSlideUp.onmouseover = function(){
        oLeft.style.display = "block";
        oRight.style.display = "block";
    }
    oSlideUp.onmouseout = function(){
        oLeft.style.display = "none";
        oRight.style.display = "none";
    }
    // 左右箭头点击
    oLeft.onclick = function(){
        if (onOff) {
             move(520);
        }
    }
    oRight.onclick = function(){
        if (onOff) {
            move(-520);
        }
    }
    // 自动播放
    var oSlideup.timer = null;
    oSlideup.timer = setInterval(function(){
        move(520);
    },500);
    
    // 指示器状态及动作
    for(var i = 0;i<aSlideUpBtn.length;i++){
        aSlideUpBtn[i].index = i;
        aSlideUpBtn[i].onmouseover = function(){
            oSlideUpUl.style.left = -520*(i+1) + 'px';
        }
        switch(oSlideUpUl.offsetLeft)
        {
            case 520 || 3120:
                for(var i = 0;i<aSlideUpBtn.length;i++){
                    aSlideUpBtn[i].style.background = ;
                }
                aSlideUpBtn[0].style.background = ;
            case 1040:
                
        }
    }
    
    
    var onOff = true;
    function move(x){
        onOff = false;
        doMove(oSlideUpUl, 'left', 90, (oSlideUpUl.offsetLeft + x), function () {
            if (oSlideUpUl.offsetLeft >= 0) {
                oSlideUpUl.style.left = -2600 + 'px';
            }
            if (oSlideUpUl.offsetLeft <= - 3120) {
                oSlideUpUl.style.left = -520 + 'px';
            }
            onOff = true;
        });
    }
}

// 功能函数
function doMove(obj, attr, dir, target, endFn){
    dir = parseInt(getStyle(obj, attr)) < target ? dir : -dir;
    clearInterval(obj.timer);
    obj.timer = setInterval(function(){
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
function getStyle(obj, attr){
    return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj)[attr];
}
