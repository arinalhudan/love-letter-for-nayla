const message = document.getElementById("message");
const nextBtn = document.getElementById("nextBtn");
const finalMessage = document.getElementById("finalMessage");

const text =
"Untuk Nayla... Arinal cuma ingin bilang sesuatu yang mungkin selama ini belum tersampaikan dengan baik.";

let index = 0;

function ketik() {
    if (index < text.length) {
        message.innerHTML += text.charAt(index);
        index++;
        setTimeout(ketik, 45);
    }
}

ketik();

nextBtn.addEventListener("click", function () {
    finalMessage.style.display = "block";
    nextBtn.style.display = "none";
    buatHati();
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth"
    });
});

function buatHati() {
    for (let i = 0; i < 25; i++) {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = "❤️";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = (Math.random() * 3 + 3) + "s";
        heart.style.fontSize = (Math.random() * 20 + 15) + "px";
        document.body.appendChild(heart);
        setTimeout(() => {
            heart.remove();
        }, 6000);
    }
}

setInterval(() => {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "💕";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (Math.random() * 4 + 4) + "s";
    document.body.appendChild(heart);
    setTimeout(() => {
        heart.remove();
    }, 8000);
}, 700);