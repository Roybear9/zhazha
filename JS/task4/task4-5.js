/**
 * Created by roy on 2017/8/21.
 */
/**
 * Created by roy on 2017/8/18.
 */
/**
 * Created by Administrator on 2017/6/26.
 */
var allPlayers = JSON.parse(sessionStorage.getItem("allPlayers"));
var n = JSON.parse(sessionStorage.getItem("n"));
var days = JSON.parse(sessionStorage.getItem("dayNumber"));
var result = JSON.parse(sessionStorage.getItem("result"));
var dieNums = JSON.parse(sessionStorage.getItem("dieNums"));
var num = window.sessionStorage.getItem("number");

//将最后一次杀死的玩家号码取出来，放到n数组中；
n.push(dieNums[dieNums.length-1]);

n.splice(0, 1);
console.log(n);
console.log(days);
console.log(allPlayers);



n.splice((n.length-1), 1);
console.log(n.length);


var m = Math.round(n.length/2);
console.log(m);

for (var day = 0; day < m; day++) {
    //if的判断条件是：是最后一天而且死亡玩家是奇数；
    if (day === parseInt(n.length/2) && (n.length%2 === 1)) {
        $(".content").append(
            "<div class='day'>" +
            "<h3>" + "第" + (day+1) + "天" + "</h3>" +
            "<p class='time1'>" + "晚上：" + n[day*2] + "号被杀手杀死，"+ n[day*2]  + "号是平民" + "</p>" + "<br>" + "</div>");
    }else {
        $(".content").append(
            "<div class='day'>" +
            "<h3>" + "第" + (day+1) + "天" + "</h3>" +
            "<p class='time1'>" + "晚上：" + n[day*2] + "号被杀手杀死，"+ n[day*2]  + "号是平民" + "</p>" +
            "<p class='time1'>" + "白天：" + n[day*2+1] +"号被全民投票投死，"+ n[day*2+1]  + "号是" + allPlayers[n[day*2+1]-1].id + "</p>" + "<br>" + "</div>");
    }
}
function again() {
    sessionStorage.removeItem("b1","day","dieNum","dieNums","num","roles","allPlayers","role","n","days");

    window.location.href='../task2/task2.html';
}