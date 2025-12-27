/* Текст стиха */
const text = `
Ночь за окном была густой и чёрной,
Вдруг тихий снег на землю пошёл.
Сначала редкой, нежной позолотой,
А после — плотный, белый ковёр.

Он падал на землю, на ветки, на крышу —
Белый, тихий, настоящий.
Я смотрела.
Мне было хорошо.

Он падал в свете фонаря ночного,
Словно пух с небес, летя в тиши.
И мир на время стал другим,
И этим мгновением дорожи.
`;

/* Разбиваем на слова */
const words = text.trim().split(/\s+/);

/* 30 секунд на весь стих */
const totalTime = 30000;
const interval = totalTime / words.length;

let index = 0;
const poemDiv = document.getElementById("poem");

function showNextWord() {
    if (index < words.length) {
        const span = document.createElement("span");
        span.textContent = words[index] + " ";
        span.style.opacity = 0;
        span.style.transition = "opacity 0.8s ease";
        poemDiv.appendChild(span);

        setTimeout(() => {
            span.style.opacity = 1;
        }, 50);

        index++;
        setTimeout(showNextWord, interval);
    }
}

showNextWord();

/* Анимация снега */
function createSnowflake() {
    const snow = document.createElement("div");
    snow.classList.add("snowflake");
    snow.textContent = "❄";

    snow.style.left = Math.random() * 100 + "vw";
    snow.style.fontSize = (Math.random() * 10 + 10) + "px";
    snow.style.animationDuration = (Math.random() * 5 + 5) + "s";

    document.body.appendChild(snow);

    setTimeout(() => snow.remove(), 10000);
}

setInterval(createSnowflake, 150);
