/**
 * Created by roy on 2017/8/9.
 */
var roles = JSON.parse(sessionStorage.getItem("playerRole"));
var num = window.sessionStorage.getItem("number");
console.log(roles);
console.log(num);

var addRole="";
for(a=0;a<num;a++){
    addRole +='<div class="role">' +
        '<div class="role-player">'+roles[a]+'</div >'+
        '<div class="role-number">' +(a+1)+ '号</div> '+
        '</div>';
}
$(".box").eq(0).html(addRole);

var day=1;
function startGame() {
    window.location.href='../task4/task4-1.html';
    sessionStorage.setItem("dayNumber",JSON.stringify(day));

}
var allPlayers = [];
//定义一个所有玩家的数组，数组中的每一项都是对象，对象中包含玩家的状态，id，号码；
for (var a = 0; a < num; a++) {
    allPlayers[a] = {};
    allPlayers[a].id = roles[a];
    allPlayers[a].status = "live";
    allPlayers[a].number = a + 1;
}
sessionStorage.setItem("allPlayers",JSON.stringify(allPlayers));
var dieNums = [];

sessionStorage.setItem("dieNums",JSON.stringify(dieNums));
var dieNum = [];
//在该页面定义一个死亡玩家的空数组，并存储，便于在其他页面增加死亡玩家号码；
sessionStorage.setItem("dieNum",JSON.stringify(dieNum));
console.log(allPlayers);






















