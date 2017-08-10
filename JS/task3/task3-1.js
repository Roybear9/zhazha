/**
 * Created by roy on 2017/8/9.
 */

var roles = JSON.parse(sessionStorage.getItem("playerRole"));
var num = window.sessionStorage.getItem("number");
console.log(roles);
console.log(num);

var step=1;
var a=0;
var b=1;

$(".person").css('display','none');
$(".master").css('display','flex');
$("#end").css('display','none');
$("#next").css('display','none');
$("#deal").css('display','block');


$(".playerNumber").html(b);
$(".nub-a").html(step);

function aaaa() {

    if(a<num-1){
        $("#deal").css('display','none');
        $(".person").css('display','flex');
        $(".master").css('display','none');
        $("#end").css('display','none');
        $("#next").css('display','block');
        $(".name").html(roles[a]);
        console.log(roles[a]);

        step++;
        $(".nub-b").html(step);
        $(".playerNumber").html(b);
        a++;
        b++;
    }else if(a=num){
        $(".person").css('display','flex');
        $(".master").css('display','none');
        $("#end").css('display','block');
        $("#next").css('display','none');
        $("#deal").css('display','none');
        $(".name").html(roles[a-1]);
        console.log(roles[a-1]);

    }

}
function bbbb() {
    $(".person").css('display','none');
    $(".master").css('display','flex');
    $("#end").css("display","none");
    $("#next").css('display','none');
    $("#deal").css('display','block');
    $(".nub-a").html(step);
    $(".playerNumber").html(b);
}



























