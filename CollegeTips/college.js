// Show popup when any gallery image is clicked
document.addEventListener("DOMContentLoaded", function () {
  const popup = document.querySelector('.popup-img');
  const popupImg = popup.querySelector('img');
  const closeBtn = popup.querySelector('span');

  document.querySelectorAll('.photo-gallery img').forEach(img => {
    img.addEventListener('click', () => {
      popup.style.display = 'block';
      popupImg.src = img.getAttribute('src');
    });
  });

  closeBtn.addEventListener('click', () => {
    popup.style.display = 'none';
  });
});
