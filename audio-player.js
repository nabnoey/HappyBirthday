let audio = document.getElementById('audioPlayer');
    
    // เมื่อโหลดหน้าใหม่จะตรวจสอบว่าเพลงกำลังเล่นอยู่หรือไม่
    window.onload = function() {
      if (localStorage.getItem('isPlaying') === 'true') {
        audio.play(); // เล่นเพลงต่อหากก่อนหน้านี้เล่นอยู่
      }
    };

    // ฟังก์ชันเพื่อเล่นเพลง
    function playAudio() {
      audio.play();
      localStorage.setItem('isPlaying', 'true'); // บันทึกสถานะการเล่นเพลง
    }

    // เมื่อเพลงเล่น จะบันทึกสถานะ
    audio.onplay = function() {
      localStorage.setItem('isPlaying', 'true');
    };

    // เมื่อเพลงหยุดเล่น จะบันทึกสถานะ
    audio.onpause = function() {
      localStorage.setItem('isPlaying', 'false');
    };

    // เมื่อปิดหน้า จะหยุดเพลง
    window.onbeforeunload = function() {
      audio.pause();
      localStorage.setItem('isPlaying', 'false');
    };