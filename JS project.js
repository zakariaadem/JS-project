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
  document.getElementById("score_number").innerHTML = score;
}


document.getElementById("img_50").addEventListener("click", function() {
  if (score > 15){
    score = score + 50
    
  }
});









//kjører 10 ganger i sekundet
setInterval(function(){
  if (score > 15){
    document.getElementById("img_50").className = "img_502";
    document.getElementById("score_number").innerHTML = score;

    /*score++;*/
  }

}, 10);