const hearts = document.querySelector(".hearts");
const button = document.querySelector(".btn");
const message = document.querySelector(".message");
const music = document.getElementById("music");

// =======================
// Cek status audio
// =======================

music.addEventListener("loadeddata", () => {
    console.log("✅ Audio berhasil dimuat");
});

music.addEventListener("canplay", () => {
    console.log("▶️ Audio siap diputar");
});

music.addEventListener("play", () => {
    console.log("🎵 Lagu diputar");
});

music.addEventListener("pause", () => {
    console.log("⏸ Lagu dijeda");
});

music.addEventListener("ended", () => {
    console.log("🏁 Lagu selesai");
});

music.addEventListener("error", () => {
    console.log("❌ Audio gagal dimuat");
    alert("File lagu.mp3 tidak ditemukan atau tidak bisa diputar.");
});

// =======================
// Animasi hati
// =======================

setInterval(() => {

    const heart = document.createElement("div");

    heart.innerHTML = "❤";
    heart.classList.add("floating-heart");

    heart.style.left = Math.random() * window.innerWidth + "px";

    heart.style.fontSize = (15 + Math.random() * 25) + "px";

    heart.style.animationDuration = (3 + Math.random() * 4) + "s";

    hearts.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 7000);

}, 300);

// =======================
// Tombol Play / Pause
// =======================

let playing = false;

button.addEventListener("click", async () => {

    if (!playing) {

        try {

            await music.play();

            playing = true;

            button.textContent = "belentiyy";
            message.textContent = "babyy kesayangannn abanggg yg paling wucuww";

        } catch (err) {

            console.error(err);

            alert("Lagu gagal diputar.\n\nPeriksa apakah file lagu.mp3 ada dan bisa dibaca.");

        }

    } else {

        music.pause();

        playing = false;

        button.textContent = "pencekk iniy";
        message.textContent = "sayangggg";

    }

});
