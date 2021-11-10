function bigImg(x) {
  x.style.height = "370px";
  x.style.width = "360px";
}
function normalImg(x) {
  x.style.height = "350px";
  x.style.width = "340px";
}


var score = 0;
var click_power = 1;

function get_score(){
  score = score + click_power;
  if (score == 10){
    click_power = 2
  }
}


var score_50 = 50;
document.getElementById("img_50").addEventListener("click", function() {
  if (score > 15){
    score = score + score_50
  }
});









//kjører 10 ganger i sekundet
setInterval(function(){
  document.getElementById("score_number").innerHTML = score;
  if (score > 15){
    document.getElementById("img_50").className = "img_502";
  }

}, 10);
/*score++;*/