const container = document.querySelector('.container');
const resizeBtn = document.querySelector('.btn-reset');

createGrid(16);

function createGrid(size) {
  container.innerHTML = '';

  const squareSize = `${960 / size}px`;

  for (let i = 0; i < size * size; i++) {
    const square = document.createElement('div');
    square.className = 'square';
    square.style.width = squareSize;
    square.style.height = squareSize;

    square.addEventListener('mouseenter', () => {
      square.classList.add('hovered');
    });

    square.addEventListener('mouseleave', () => {
      square.classList.remove('hovered');
    });

    container.appendChild(square);

    if ((i + 1) % size === 0) {
      container.appendChild(document.createElement('br'));
    }
  }
}

resizeBtn.addEventListener('click', () => {
  let newSize = prompt('Enter the new grid size (1 to 100):');
  newSize = parseInt(newSize);

  if (!isNaN(newSize) && newSize >= 1 && newSize <= 100) {
    createGrid(newSize);
  } else {
    alert('Invalid grid size. Please try again.');
  }
});
