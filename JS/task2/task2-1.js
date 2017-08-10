/**
 * Created by roy on 2017/8/8.
 */



var personNum=document.getElementById("change");
var rangeNum=document.getElementById("number");
function chooseNumber() {


    if (personNum.value>=4 && personNum.value<=18){
        rangeNum.value=personNum.value;
    }else {
        alert('请输入正确的值');
        rangeNum.value=4;
        personNum.value=4;
    }
    
}
function changeNumber() {
    personNum.value=rangeNum.value;
}
function minus() {
    rangeNum.value--;
    personNum.value = rangeNum.value;
    if (personNum.value<4) {
        personNum.value = 4;
    } else {
        personNum.value = rangeNum.value;
    }
}
function plus() {
    rangeNum.value++;
    personNum.value = rangeNum.value;
    if (personNum.value>18) {
        rangeNum.value = 18;
    } else {
        personNum.value = rangeNum.value;
    }
}

var killer=[];
var civilian=[];
var all={};
var check=[];
function setting() {

    var check1=[];

    killer=Math.floor(personNum.value/4);
    civilian=personNum.value-killer;
    console.log(killer);

    all.length=personNum.value;
    for (a=0 ;a < personNum.value;a++){
        all[a]="平民";
    }
    for (b=0;b<killer;b++){
        check[b]=Math.floor(Math.random()*personNum.value);

        if(check1.indexOf(check[b])<0){
            check1.push(check[b])
        }else{
            b--;
        }
        console.log(check1);
        all[check1[b]]="杀手";
    }
    // console.log(all);
    // for (b=0;b<killer;b++){
    //     var x=Math.floor(Math.random()*personNum.value);
    //     all[x]="杀手";
        // all.splice(x,1);

    // }
    // console.log(all);
}
function add() {
    setting();
    var adder="";
    for(c=0;c<personNum.value;c++){
        adder +='<div class="detail">' +
            '<span class="detail-role">'+all[c]+'</span >'+
            '<span class="detail-num">' +(c+1)+ '号</span> '+
            '</div>';
    }

    $(".play").eq(0).html(adder);

}
function skip() {
    if (killer.length !== 0) {
        sessionStorage.setItem("playerRole",JSON.stringify(all));
        sessionStorage.setItem("number",rangeNum.value);
        window.location.href="../task3/task3-1.html";
    } else {
        alert("请设置身份");
    }
}
























