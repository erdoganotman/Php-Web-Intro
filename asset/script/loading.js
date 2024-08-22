function changeImage() {
    document.getElementById("myImage").src = "asset/img/web2.svg";
    playSound();
    
    // 5 saniye sonra web1.svg'ye geri dön
    setTimeout(function() {
        document.getElementById("myImage").src = "asset/img/web1.svg";
    }, 200); // 5000 milisaniye (5 saniye)
}

function playSound() {
    var audio = new Audio('asset/sound/click.wav');
    audio.play();
}

// Prevent image saving
document.addEventListener("contextmenu", function(e) {
    e.preventDefault();
}, false);
document.addEventListener("keydown", function(e) {
    if (e.ctrlKey && e.shiftKey && e.keyCode === 73) {
        e.preventDefault();
    }
}, false);

// Prevent image dragging
document.addEventListener("dragstart", function(e) {
    e.preventDefault();
}, false);

// Add keyboard event listener to switch image on any key press
document.addEventListener("keydown", function(e) {
    changeImage();
}, false);

img.addEventListener('mousedown', (e) => {
    e.preventDefault();
  });
