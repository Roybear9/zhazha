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
//根据其他页面传输过来的result结果，来判断是杀手胜利还是水民胜利，对应弹出结果页；
if (result === 1) {
    $(".win-page").append(
        "<img src='waterWin.png'>");
    $(".win-page").after(
        "<p class='nb-p'>" + "太棒了！终于把可恶的杀手都干掉了，为死去的水民复仇了，水民万岁！" + "</p>");
}else {
    $(".win-page").append(
        "<img src='killerWin.png'>");
    $(".win-page").after(
        "<p class='nb-p'>" + "太棒了！你知道么？在捉鬼游戏中只有20%的杀手取得游戏最终的胜利哦！" + "</p>");
}




//在结果页插入每天的死亡玩家的信息的时候，发现如果死亡玩家是奇数的话，会没有最后一天白天的杀人信息，因为最后一天晚上分出胜负了，这样如果每次循环都添加相同的内容的话就会报错，需要根据死亡玩家的是否是奇数，在最后一天添加对应的内容；
var m = Math.round(n.length/2);
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