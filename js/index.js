window.onload = () => {
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');
  const img = new Image();

  img.src = '/Users/henri/Desktop/lab-canvas-race-car/images/road.png';

  img.onload = () => {
    ctx.drawImage(img, 0, 0);
  };

  document.getElementById('start-button').onclick = () => {
    startGame();
  };
  function startGame() {
    console.log('le jeu a commence !');
  }
};
