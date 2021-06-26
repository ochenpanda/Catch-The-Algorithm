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

var gameEl = document.querySelector(".game");
var images = ["✹.svg", "Play.svg", "trending_up.svg", "favorite_border.svg", "home.svg"];
function randomArrayItem(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function addObject() {
  var gameRect = gameEl.getBoundingClientRect();
  var imageEl = document.createElement("img");
  imageEl.classList.add("game-image");
  var src = randomArrayItem(images);
  imageEl.src = src;
  imageEl.style.left = Math.random() * (gameRect.width - 200) + "px";
  imageEl.style.top = Math.random() * gameRect.height + "px";
  gameEl.appendChild(imageEl);
//   // document.getElementsByClassName('star-box').onmouseenter = function() {
//   //   // Do stuff
//   //   console.log("mouseenter");
//   // }
//   // document.getElementsByClassName('star-box').onmouseout = function() {
//   //   // Do stuff
//   //   console.log("mouseout");

//   var symbolsBox = document.querySelector(".symbols");
// symbols.forEach(function (symbol, index) {
//   const symbolEl = document.createElement("div");
//   symbolEl.classList.add("symbol", "symbols-" + (index + 1));

//   // var img = document.createElement("img");
//   img.src = symbol.imgPath;

//   var symbolText = document.createElement("div");
//   symbolText.innerHTML = symbol.text;
//   symbolText.classList.add("symbol-text");

//   symbolEl.appendChild(img);
//   symbolEl.appendChild(symbolText);
//   symbolsBox.appendChild(symbolEl);
// });
  }


// setInterval(addObject, 1000);

for (let i = 0; i < 20; i++) {
  addObject();
}