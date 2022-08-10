var hole = document.getElementById("hole")
var game = document.getElementById("game")
//let bird = document.getElementById("bird")
console.log(hole);

hole.addEventListener("animationiteration",ranHole)

function ranHole(){
    var random = -((Math.random()*350)+150)
    hole.style.top = random+"px";
}