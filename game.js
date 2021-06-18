var algo = document.querySelector(".algo");
var gameBox = document.querySelector(".game");
var gameBoxRect = gameBox.getBoundingClientRect();
var width = gameBoxRect.width;
var height = gameBoxRect.height;

var algoRect = algo.getBoundingClientRect();
var algoWidth = algo.width;
var algoHeight = algo.height;

console.log(algoWidth, algoHeight);

var algoPosition = [0, 0];

function tick() {
  // обновить игровое поле

  algoPosition[0] = Math.random() * (width - algoWidth);
  algoPosition[1] = Math.random() * (height - algoHeight);
  algo.style.transform =
    "translate(" + algoPosition[0] + "px, " + algoPosition[1] + "px)";
}

setInterval(tick, 100);