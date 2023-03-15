// JavaScript code to set a random image.

function diceGame() {
  // An array of image image sources.
  const imageSources = [
    "images/dice1.png",
    "images/dice2.png",
    "images/dice3.png",
    "images/dice4.png",
    "images/dice5.png",
  ];

  //player 1
  const randomIndex1 = Math.floor(Math.random() * imageSources.length);
  const randomImageSource1 = imageSources[randomIndex1];
  const img1 = document.querySelector(".img1");
  img1.src = randomImageSource1;

  // player 2
  const randomIndex2 = Math.floor(Math.random() * imageSources.length);
  const randomImageSource2 = imageSources[randomIndex2];
  const img2 = document.querySelector(".img2");
  img2.src = randomImageSource2;

  // Title change when a player win.
  const titleChange = document.getElementById("title");
  if (randomIndex1 > randomIndex2) {
    titleChange.innerHTML = "🚩Player 1 win";
  } else if (randomIndex2 > randomIndex1) {
    titleChange.innerHTML = "🚩Player 2 win";
  } else {
    titleChange.innerHTML = "Draw";
  }
}
