const openButton = document.getElementById('open-button');
const storybook = document.getElementById('storybook');
const book = document.getElementById('book');
const albumBtn = document.getElementById('album-btn');

// ตอนแรกกดปุ่ม เพื่อโชว์หนังสือ
openButton.addEventListener('click', () => {
  openButton.style.display = 'none';
  storybook.classList.remove('hidden');
});

// พอกดที่หนังสือ ให้เปิดหน้า
book.addEventListener('click', () => {
  book.style.transform = 'rotateY(180deg)';
});

// ไปหน้าอัลบั้ม
albumBtn.addEventListener('click', () => {
  window.location.href = "album.html"; 
});
