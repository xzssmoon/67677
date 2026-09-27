// ============================================
// ПЕРЕКЛЮЧЕНИЕ СТРАНИЦ
// ============================================
function nextPage(pageNum) {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => card.classList.remove('active'));

    const target = document.getElementById('page' + pageNum);
    if (target) {
        target.classList.add('active');
        createHeartBurst(8);
    }
}

// ============================================
// ПОКАЗ СООБЩЕНИЯ (3 СЕК) + САЛЮТ
// ============================================
function showMessage(text, event) {
    const popup = document.getElementById('popupMessage');
    popup.textContent = text;
    popup.classList.add('show');

    createHeartBurst(40);

    setTimeout(() => {
        popup.classList.remove('show');
    }, 3000);
}

// ============================================
// ЛЕТАЮЩИЕ ЛЕПЕСТКИ
// ============================================
function createPetal() {
    const petals = document.getElementById('petals');
    const petal = document.createElement('div');
    petal.classList.add('petal');

    const emojis = ['🌸', '💕', '✨', '💖', '🌷', '💗', '🌸', '💝'];
    petal.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    petal.style.left = Math.random() * 100 + '%';
    petal.style.fontSize = (Math.random() * 18 + 20) + 'px';
    petal.style.animationDuration = (Math.random() * 8 + 8) + 's';
    petal.style.animationDelay = Math.random() * 2 + 's';

    petals.appendChild(petal);
    setTimeout(() => petal.remove(), 18000);
}

setInterval(createPetal, 900);
for (let i = 0; i < 5; i++) {
    setTimeout(createPetal, i * 200);
}

// ============================================
// САЛЮТ ИЗ СЕРДЕЧЕК
// ============================================
function createHeartBurst(count = 15) {
    const hearts = ['💖', '💕', '❤️', '💗', '💓', '🌸', '💘', '💝', '🌷', '💞'];

    for (let i = 0; i < count; i++) {
        const heart = document.createElement('div');
        heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
        heart.style.position = 'fixed';
        heart.style.left = '50%';
        heart.style.top = '50%';
        heart.style.fontSize = (Math.random() * 40 + 40) + 'px';
        heart.style.pointerEvents = 'none';
        heart.style.zIndex = '9998';
        heart.style.transition = 'all 2s cubic-bezier(0.15, 0.7, 0.3, 1)';
        heart.style.filter = 'drop-shadow(0 0 15px rgba(255, 92, 168, 0.95))';

        document.body.appendChild(heart);

        const angle = Math.random() * Math.PI * 2;
        const distance = Math.random() * 500 + 200;
        const x = Math.cos(angle) * distance;
        const y = Math.sin(angle) * distance;

        requestAnimationFrame(() => {
            heart.style.transform = `translate(${x}px, ${y}px) rotate(${Math.random() * 720}deg) scale(1.3)`;
            heart.style.opacity = '0';
        });

        setTimeout(() => heart.remove(), 2000);
    }
}
