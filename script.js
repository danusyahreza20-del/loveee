const hearts = document.querySelector(".hearts");
const button = document.querySelector(".btn");
const message = document.querySelector(".message");
const music = document.getElementById("music");

// =======================
// cekkkkkkk
// =======================

music.addEventListener("loadeddata", () => {
    console.log("audio berhasil dimuat");
});

music.addEventListener("canplay", () => {
    console.log("audio siap diputar");
});

music.addEventListener("play", () => {
    console.log("agu diputar");
});

music.addEventListener("pause", () => {
    console.log("jeda");
});

music.addEventListener("ended", () => {
    console.log("selesai");
});

music.addEventListener("error", () => {
    console.log("erorrrrrrr");
    alert("not found");
});

// =======================
// snimasi
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
// pencek 
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

        button.textContent = "pencekk agy";
        message.textContent = "sayangggg";

    }

});
