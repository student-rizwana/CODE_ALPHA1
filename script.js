// Image click event to open modal
const images = document.querySelectorAll('.image-item img');

images.forEach((img) => {
  img.addEventListener('click', () => {
    const modal = document.createElement('div');
    modal.classList.add('modal');
    const modalImg = document.createElement('img');
    modalImg.src = img.src;
    modal.appendChild(modalImg);
    document.body.appendChild(modal);

    // Close modal on click
    modal.addEventListener('click', () => {
      modal.remove();
    });
  });
});
