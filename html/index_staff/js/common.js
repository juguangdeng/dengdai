/* 
* @Author: anchen
* @Date:   2018-06-25 20:25:57
* @Last Modified by:   anchen
* @Last Modified time: 2018-06-25 21:12:07
*/
// 获取页面滚动出去的距离。处理兼容性
    function getScroll() {
        return {
            scrollTop: document.documentElement.scrollTop || document.body.scrollTop,
            scrollLeft: document.documentElement.scrollLeft || document.body.scrollLeft
        }
    }
    // 让每一个执行动画的元素，记录自己的定时器
    element.timerId = setInterval(function () {
        // 当前坐标
        var current = element.offsetLeft;
        // 步行
        var step = 20;

        // 当前位置 > 目标位置step应该是负数
        if (current > target) {
            step = -Math.abs(step);
        }


        //编程要避免硬编程
        //if（current >= 500）
        //如果当前位置和目标位置的差小于step，就认为到达目标位置
        if (Math.abs(current - target) <= Math.abs(step)) {
            element.style.left = target + 'px';
            clearInterval(element.timerId);
            // 调回函数
            if (callback) {
                callback();
            }
            return;
        }
        current += step;
        element.style.left = current + 'px';
    }, 15);