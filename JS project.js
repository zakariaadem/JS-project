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
var price = 50;
document.getElementById("price").innerHTML = price;
document.getElementById("img_50").addEventListener("click", function() {
  if (score > price){
    score = score + score_50
    price+= 100
    document.getElementById("price").innerHTML = price;
  }
});



var price_2 = 600;
var hands = 0;
document.getElementById("price2").innerHTML = price_2;
document.getElementById("img_hand").addEventListener("click", function() {
  if (score > price_2){
    score++;
    hands++;
    price_2 = 1200
    document.getElementById("price2").innerHTML = price_2;
  }
});






//kjører 10 ganger i sekundet
setInterval(function(){
  document.getElementById("score_number").innerHTML = score;
  if (score > price){
    document.getElementById("img_50").className = "img_502";
  }
  else {
    document.getElementById("img_50").className = "img_50";
  }  
}, 10);


setInterval(function() {
    if (score > price_2){
      document.getElementById("img_hand").className = "img_hand2";
    }
    else {
      document.getElementById("img_hand").className = "img_hand";
    }
  
      score += hands;
}, 1000);