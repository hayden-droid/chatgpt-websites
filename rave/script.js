window.addEventListener('DOMContentLoaded', () => {
  const shapesContainer = document.getElementById('shapes-container');
  const lightningContainer = document.createElement('div');
  lightningContainer.id = 'lightning-container';
  document.body.appendChild(lightningContainer);
  const numberOfShapes = 30;
  const audio = document.getElementById('audio');

  for (let i = 0; i < numberOfShapes; i++) {
    const shape = document.createElement('div');
    shape.classList.add('shape', `shape-${i % 3 + 1}`);
    shape.style.animationDelay = `${i * 0.1}s`;
    shape.style.top = `${getRandomPosition()}vh`;
    shape.style.left = `${getRandomPosition()}vw`;
    shapesContainer.appendChild(shape);
  }

  // Play/pause audio on click
  document.addEventListener('click', () => {
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
  });

  // Trigger lightning flash
  setInterval(() => {
    if (Math.random() < 0.2) {
      const lightningFlash = document.createElement('div');
      lightningFlash.classList.add('lightning');
      lightningContainer.appendChild(lightningFlash);
      setTimeout(() => {
        lightningContainer.removeChild(lightningFlash);
      }, 300);
    }
  }, 3000);

  function getRandomPosition() {
    return Math.random() * 80; // Adjust the range as needed
  }
});
