function bigImg(x) {
    x.style.height = "370px";
    x.style.width = "360px";
  }
function normalImg(x) {
    x.style.height = "350px";
    x.style.width = "340px";
  }


var score_starter = 0
function get_score(){
  score_starter = score_starter + 1
  document.getElementById("score_number").innerHTML = score_starter
}