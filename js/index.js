/* 
* @Author: anchen
* @Date:   2018-06-05 23:39:37
* @Last Modified by:   anchen
* @Last Modified time: 2018-06-25 21:47:04
*/
// 1.滚动出现top按钮
var divTop = document.getElementById('top');
window.onscroll = function() {
    var scrollTop = getScroll().scrollTop;
    if (scrollTop >= 10) {
        divTop.style.display = 'block';
    }else
    {
        divTop.style.display = 'none';
    }
}


// top滚动动画
var timerId = null;
divTop.onclick = function () {
    if (timerId) {
        clearInterval(timerId);
    }
    timerId = setInterval(function () {
        var target = 0 ;
        var step = 10;
        var current = getScroll().scrollTop;

        if (current > target) {
            step = -Math.abs(step);
        }

        if (Math.abs(current - target) <= Math.abs(step)) {
            clearInterval(timerId);

            document.documentElement.scrollTop = target;
            return;
        }

        current += step;
        document.documentElement.scrollTop = current;

    }, 5);
}
