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























