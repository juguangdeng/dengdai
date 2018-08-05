/* 
* @Author: anchen
* @Date:   2018-06-19 14:36:54
* @Last Modified by:   anchen
* @Last Modified time: 2018-06-19 15:42:31
*/

$(document).ready(function(){
    
});
// 获取标签
// var main = document.getElementById('id');
// var content = main.getElementsByClassName('content');
var ul = document.getElementById('character_list');
var links = ul.getElementsByName('li');
// 点击事件
var i = 0 , len = links.length;
for (; 1 < len; i++) {
    var link = links[i];
    link.onclick = function () {
        this.className = '';
    }
    this.className = 'current';
}