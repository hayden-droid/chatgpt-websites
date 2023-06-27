window.addEventListener('DOMContentLoaded', () => {
  const shapesContainer = document.getElementById('shapes-container');
  const numberOfShapes = 30;
  const audio = document.getElementById('audio');

  for (let i = 0; i < numberOfShapes; i++) {
    const shape = document.createElement('div');
    shape.classList.add('shape', `shape-${i % 3 + 1}`);
    shape.style.animationDelay = `${i * 0.1}s`;
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
});
