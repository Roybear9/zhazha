/**
 * Created by roy on 2017/8/17.
 */
/**
 * Created by roy on 2017/8/16.
 */

/**
 * Created by roy on 2017/8/9.
 */
var roles = JSON.parse(sessionStorage.getItem("playerRole"));
var num = window.sessionStorage.getItem("number");
var allPlayers = JSON.parse(sessionStorage.getItem("allPlayers"));
var day=JSON.parse(sessionStorage.getItem("dayNumber"));
var b1 = JSON.parse(sessionStorage.getItem("b1"));

console.log(roles);
console.log(num);
console.log(allPlayers);
console.log(day);
var title=window.sessionStorage.getItem("roleDay");
if (title<1){
    $('.look').html("杀手杀人");
    $('.beginGame').html("杀死");
    console.log(title);
}else{
    $('.look').html("玩家投票");
    $('.beginGame').html("投死");
    console.log(title);

}




// var addRole="";
for(a=0;a<num;a++){
    $(".box").append('<div class="role" ">' +
        '<div class="role-player">'+roles[a]+'</div >'+
        '<div class="role-number">' +(a+1)+ '号</div> '+
        '</div>');
    var allPeople = $(".role-player");
    console.log(allPeople);
    if (allPlayers[a].status === "die" || allPlayers[a].status === "voted") {
        $(allPeople[a]).css("background-color","red");
    }
}

var b="grey";
sessionStorage.setItem("b1",JSON.stringify(b));





var lastNum;
for (var j = 0; j < allPeople.length; j++) {
    allPeople[j].index = j ;
    allPeople[j].onclick = function () {
        var dieNums = [];//每次清空一次数组，保证数组中只获取最后点击的玩家
        //将最后一次点击的玩家的号码获取出来，即投死的玩家号码，放到死亡玩家数组中
        dieNums.push(allPlayers[this.index].number);
        sessionStorage.setItem("dieNums",JSON.stringify(dieNums));
        if (allPlayers[this.index].status === "die" || allPlayers[this.index].status === "voted" ) {
            alert("他已经死了！")
        }else {
            //lastNum是上次点击的玩家的数组下标；lastNum != undefined成立，说明之前点击了别的玩家，则将之前点击的玩家状态还原；
            if (lastNum !== undefined){
                $(allPeople[lastNum]).css("background-color","#f5c97b");
                allPlayers[lastNum].status = "live";
            }
            //将当前点击的玩家背景色更改，状态更改，并将当前点击的玩家的数组下标获取，用于判断如果玩家更改杀死的人员时，将之前的玩家背景色还原，状态还原；
            $(allPeople[this.index]).css("background-color","red");
            allPlayers[this.index].status = "voted";
            lastNum = this.index;
            console.log(allPlayers);
        }
    }
}

var killer = 0;
var water = 0;
function vote() {





    sessionStorage.setItem("allPlayers",JSON.stringify(allPlayers));
    for (var i = 0; i < num; i++) {
        if (allPlayers[i].status === "live") {
            if (allPlayers[i].id === "平民") {
                water++
            } else {
                killer++
            }
        }
    }
    //循环判断玩家对象中，所有活着的杀手和水民的数量，再比较两者的数量，跳转到对应页面；
    if (killer === 0) {
        var result = 1;
        sessionStorage.setItem("result",JSON.stringify(result));
        alert("游戏结束，平民胜利！");
        window.location.href='task4-4.html';
    } else if (killer === water) {
        alert("游戏结束，杀手胜利！");
        window.location.href='task4-4.html';
    } else {
        day++;
        sessionStorage.setItem("dayNumber",JSON.stringify(day));
        window.location.href='task4-1.html';
    }

}
























