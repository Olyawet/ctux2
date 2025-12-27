/* Строфы */
const stanzas = [
`Ночь за окном была густой и чёрной,
Вдруг тихий снег на землю пошёл.
Сначала редкой, нежной позолотой,
А после — плотный, белый ковёр.`,

`Он падал на землю, на ветки, на крышу —
Белый, тихий, настоящий.
Я смотрела.
Мне было хорошо.`,

`Он падал в свете фонаря ночного,
Словно пух с небес, летя в тиши.
И мир на время стал другим,
И этим мгновением дорожи.`
];

const poemDiv = document.getElementById("poem");

/* Собираем весь текст в одну строку для расчёта скорости */
const fullText = stanzas.join("\n\n");
const totalTime = 30000; // 30 секунд
const interval = totalTime / fullText.length;

let globalIndex = 0;
let currentStanza = 0;
let currentChar = 0;

/* Создаём контейнеры строф */
stanzas.forEach(() => {
    const block = document.createElement("div");
    block.className = "stanza";
    block.style.marginBottom = "1.2em";
    poemDiv.appendChild(block);
});

const stanzaBlocks = document.querySelectorAll(".stanza");

function typeNextChar() {
    if (currentStanza >= stanzas.length) return;

    const stanzaText = stanzas[currentStanza];
    const block = stanzaBlocks[currentStanza];

    if (currentChar < stanzaText.length) {
        block.textContent += stanzaText[currentChar];
        currentChar++;
        globalIndex++;
        setTimeout(typeNextChar, interval);
    } else {
        currentStanza++;
        currentChar = 0;
        if (currentStanza < stanzas.length) {
            setTimeout(typeNextChar, interval);
        }
    }
}

typeNextChar();

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
