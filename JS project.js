function bigImg(x) {
  x.style.height = "370px";
  x.style.width = "360px";
}
function normalImg(x) {
  x.style.height = "350px";
  x.style.width = "340px";
}



/* Click_power Function*/
var name_of_function = " Click Power =  ";
var score = 0;
var click_power = 1;
document.getElementById("click_power").innerHTML = name_of_function + click_power;
function get_score(){
  score = score + click_power;
  if (score >= 5000){
    click_power = 2;
    document.getElementById("click_power").innerHTML = name_of_function + click_power;
  }
}




/* +50 function*/
var name_of_function2 = " (+50 function)";
var score_50 = 50;
var price = 50;
document.getElementById("price").innerHTML = price + name_of_function2;
document.getElementById("img_50").addEventListener("click", function() {
  if (score > price){
    score = score + score_50
    price+= 100
    document.getElementById("price").innerHTML = price + name_of_function2;
  }
});



/* Auto Hand_Clicker Function*/
var name_of_function3 = " (Auto Hand Clicker Function)";
var price_2 = 1000;
var hands = 0;
document.getElementById("price2").innerHTML = price_2 + name_of_function3;
document.getElementById("img_hand").addEventListener("click", function() {
  if (score > price_2){
    score++;
    hands++;
    price_2+= 4000
    document.getElementById("price2").innerHTML = price_2 + name_of_function3;
  }
});



/* Golden Cookie Function*/
var lowest_price = 10000;
var highest_price = 12000;
var golden_cookie = 10000;
document.getElementById("golden_cookie").addEventListener("click", function() {
  if (score > lowest_price && score < highest_price){
    score = score + golden_cookie
       lowest_price+= 90000
    highest_price+= 100000
    golden_cookie+= 90000

  }
});



var random_golden_cookie_power = 10000;
document.getElementById("random_golden_cookie").addEventListener("click", function() {
  score = score + random_golden_cookie_power
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


setInterval(function() {
  if (score > lowest_price && score < highest_price){
    document.getElementById("golden_cookie").className = "golden_cookie2";
  }
  else {
    document.getElementById("golden_cookie").className = "golden_cookie";
  }
}, 10);



setInterval(function() {
  var random_number = Math.floor((Math.random() * 100)) + 1;
  if (random_number <= 10){
    document.getElementById("random_golden_cookie").className = "random_golden_cookie2";  
    setTimeout(function(){
      document.getElementById("random_golden_cookie").className = "random_golden_cookie";  
    }, 500);
  }
  
  console.log(random_number)
}, 1000);


