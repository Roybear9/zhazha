/**
 * Created by roy on 2017/8/3.
 */
var box = document.getElementsByClassName('item');
function twinkl()
{
    function randomRgbColor() { //随机生成RGB颜色
        var r = Math.floor(Math.random() * 256); //随机生成256以内r值
        var g = Math.floor(Math.random() * 256); //随机生成256以内g值
        var b = Math.floor(Math.random() * 256); //随机生成256以内b值
        return "rgb(" + r + ',' + g + ',' + b + ")"//返回rgb(r,g,b)格式颜色
    }
    var all = [];
    for (var j = 0; j < box.length; j++) {
        all.push(box[j])
    }
    for (var y = 0; y < all.length; y++) {
        all[y].style.backgroundColor = "rgb(255, 165, 0)";
    }
        for (j = 0;j < 3;j++){
            var x = Math.floor(Math.random() * all.length);
            all[x].style.backgroundColor =randomRgbColor();
            all.splice(x, 1);
        }
}
var time;
function test(){
    time=setInterval( "twinkl()",1000);
}
function start(){
    clearInterval(time);
    test();
}
function stop(){
    clearInterval(time);
    for (n=0;n<9;n++){
        box[n].style.backgroundColor="rgb(255,165,0)";
    }
}













