var arrTab = [
     ["公告1", "公告2", "公告3" ,"公告4"],
     ["公告5", "公告6", "公告7" ,"公告8"],
     ["公告9", "公告10", "公告11" ,"公告12"],
     ["公告13", "公告14", "公告15" ,"公告16"],
     ["公告17", "公告18", "公告19" ,"公告20"]
];

window.onload = function(){

    var oTab = document.getElementsByClassName('tab')[0],
        aTabLi = oTab.getElementsByTagName('li'),
        aBoxA = oTab.getElementsByClassName('box')[0].getElementsByTagName('a');

    for (var i = 0; i < aTabLi.length; i++) {
        aTabLi[i].index = i;
        aTabLi[i].onmouseover = function(){
            for (var j = 0; j < aBoxA.length; j++) {
                aBoxA[j].innerHTML = arrTab[this.index][j];
            }
        }
        
    }

}