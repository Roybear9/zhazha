/**
 * Created by roy on 2017/8/16.
 */
var num = window.sessionStorage.getItem("number");

var day=JSON.parse(sessionStorage.getItem("dayNumber"));
var b1 = JSON.parse(sessionStorage.getItem("b1"));


var dieNums = JSON.parse(sessionStorage.getItem("dieNums"));
console.log(dieNums);
var dieNum = JSON.parse(sessionStorage.getItem("dieNum"));
if (dieNums === null) {
}else {
    dieNum.push(dieNums[dieNums.length-1]);
}
// 最简单数组去重法
var n = []; //一个新的临时数组
function unique(array){
//遍历当前数组
    for(var i = 0; i < array.length; i++){
//如果当前数组的第i已经保存进了临时数组，那么跳过，
//否则把当前项push到临时数组里面
        if (n.indexOf(array[i]) === -1) {
            n.push(array[i]);
        }
    }
    return n;
}
unique(dieNum);
console.log(n);
console.log(dieNum);
console.log(b1);

sessionStorage.setItem("n",JSON.stringify(n));
sessionStorage.setItem("dieNum",JSON.stringify(dieNum));



$('.days').html("第"+day+"天");




console.log(day);
    function Click2() {
        if ($("#killsomebody").css("background-color") === "rgb(41, 189, 224)") {
            alert("请按照顺序点击！")
        } else {
            $('#deadsay').css({
                'background-color': 'gray',
                "pointer-events":"none",
                'cursor': 'not-allowed'
            });
            alert("亡灵说话");
        }
    }
    function Click3() {
        if ($("#deadsay").css("background-color") === "rgb(41, 189, 224)") {
            alert("请按照顺序点击！")
        } else {
            $('#aliveturn').css({
                'background-color': 'gray',
                "pointer-events":"none",
                'cursor': 'not-allowed'
            });

            alert("玩家依次发言");

        }
    }
if(b1==="rgb(41, 189, 224)"){
    $('#killsomebody').css({
        'background-color':'gray',
        "pointer-events":"none",
        'cursor': 'not-allowed'
    });
}



    function Click1() {
        var role=0;
        var b = $("#killsomebody").css("background-color");

            window.sessionStorage.setItem("roleDay",role);
            $('#killsomebody').css({
                'background-color':'gray',
                "pointer-events":"none",
                'cursor': 'not-allowed'
            });
            sessionStorage.setItem("b1",JSON.stringify(b));
            window.location.href="../task4/task4-2.html";
        }



    function Click4() {
        var role = 1;
        if ($("#aliveturn").css("background-color") === "rgb(41, 189, 224)") {
            alert("请按照顺序点击！")
        } else {
            window.location.href = "../task4/task4-3.html";
            window.sessionStorage.setItem("roleDay", role);
            $('#vote').css({
                'background-color': 'gray',
                "pointer-events":"none",
                'cursor': 'not-allowed'
            });

        }
    }


function gameOver() {
    if (confirm("确定结束该游戏吗？")) {
        sessionStorage.removeItem("b1","day","dieNum","dieNums","num","roles","allPlayers","role","n","days");

        window.location.href='../task2/task2.html';
    }
}









