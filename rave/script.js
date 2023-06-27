window.addEventListener('DOMContentLoaded', () => {
  const shapesContainer = document.getElementById('shapes-container');
  const raveContainer = document.getElementById('rave-container');
  const raveText = document.getElementById('rave');
  const shootingStar = document.getElementById('shooting-star');
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

  // Trigger shooting star
  setTimeout(() => {
    raveText.style.opacity = '1';
    shootingStar.style.opacity = '1';
    shootingStar.addEventListener('animationend', () => {
      raveText.style.opacity = '0';
      animateRaveText();
    });
  }, 2000);

  function animateRaveText() {
    const letters = raveText.innerText.split('');
    raveText.innerHTML = '';

    letters.forEach(letter => {
      const span = document.createElement('span');
      span.innerText = letter;
      raveText.appendChild(span);
    });

    const spanLetters = raveText.querySelectorAll('span');

    spanLetters.forEach((span, index) => {
      const delay = Math.random() * 2 + 1; // Random delay between 1 and 3 seconds
      const x = Math.random() * 100 - 50; // Random x position between -50 and 50
      const y = Math.random() * 100 - 50; // Random y position between -50 and 50

      span.style.transition = `transform ${delay}s`;
      span.style.transform = `translate(${x}vw, ${y}vh)`;
      span.style.opacity = '0';

      setTimeout(() => {
        span.style.transition = 'none';
        span.style.transform = 'translate(0, 0)';
        span.style.opacity = '1';
      }, delay * 1000);
    });

    setTimeout(() => {
      raveText.innerHTML = raveText.innerText;
    }, (letters.length + 1) * 1000); // Delay before rejoining the letters
  }

  function getRandomPosition() {
    return Math.random() * 80; // Adjust the range as needed
  }
});
