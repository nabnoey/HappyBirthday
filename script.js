const openButton = document.getElementById('open-button');
const storybook = document.getElementById('storybook');
const book = document.getElementById('book');
const albumBtn = document.getElementById('album-btn');
const audioPlayer = document.getElementById('audioPlayer'); // ดึง element ของไฟล์เสียง
const playButton = document.getElementById('playButton');   // ดึง element ของปุ่มเล่นเพลง

// ตอนแรกกดปุ่ม เพื่อโชว์หนังสือ
openButton.addEventListener('click', () => {
    openButton.style.display = 'none';
    storybook.classList.remove('hidden');
    // อาจจะเริ่มเล่นเพลงเมื่อเปิดหนังสือ
    if (audioPlayer) {
        audioPlayer.play();
        if (playButton) {
            playButton.textContent = 'หยุดเพลง';
        }
    }
});

// พอกดที่หนังสือ ให้เปิดหน้า (ไม่มีการควบคุมเพลงในส่วนนี้)
book.addEventListener('click', () => {
    book.style.transform = 'rotateY(180deg)';
});

// ไปหน้าอัลบั้ม (ไม่มีการควบคุมเพลงในส่วนนี้)
albumBtn.addEventListener('click', () => {
    window.location.href = "album.html";
});

// ควบคุมการเล่น/หยุดเพลงด้วยปุ่ม (ถ้ามี)
if (playButton && audioPlayer) {
    playButton.addEventListener('click', () => {
        if (audioPlayer.paused) {
            audioPlayer.play();
            playButton.textContent = 'หยุดเพลง';
        } else {
            audioPlayer.pause();
            playButton.textContent = 'เปิดเพลง';
        }
    });
}