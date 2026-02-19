const envelopeWrapper = document.getElementById('envelope');
const letterContainer = document.getElementById('letter');
const overlay = document.querySelector('.overlay');
const closeIcon = document.querySelector('.close-icon');
const bookContent = document.getElementById('book');
const btnNext = document.getElementById('btn-next');
const btnBack = document.getElementById('btn-back');

envelopeWrapper.addEventListener('click', () => {
    if (!envelopeWrapper.classList.contains('open')) {
        envelopeWrapper.classList.add('open');
        overlay.classList.add('show');
        setTimeout(() => {
            letterContainer.classList.add('show');
            fireConfetti();
        }, 400);
    }
});

function closeLetter() {
    letterContainer.classList.remove('show');
    overlay.classList.remove('show');
    setTimeout(() => {
        envelopeWrapper.classList.remove('open');
        if(bookContent) bookContent.classList.remove('flipped');
    }, 500);
}

closeIcon.addEventListener('click', closeLetter);
overlay.addEventListener('click', closeLetter);

if (btnNext) {
    btnNext.addEventListener('click', () => {
        bookContent.classList.add('flipped');
    });
}

if (btnBack) {
    btnBack.addEventListener('click', () => {
        bookContent.classList.remove('flipped');
    });
}

function fireConfetti() {
    var count = 200;
    var defaults = { origin: { y: 0.7 } };
    function fire(particleRatio, opts) {
        confetti(Object.assign({}, defaults, opts, {
            particleCount: Math.floor(count * particleRatio)
        }));
    }
    fire(0.25, { spread: 26, startVelocity: 55, colors: ['#7b001e', '#d4af37'] });
    fire(0.2, { spread: 60, colors: ['#ffffff'] });
    fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8, colors: ['#7b001e', '#d4af37'] });
    fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2, colors: ['#ffffff'] });
    fire(0.1, { spread: 120, startVelocity: 45, colors: ['#7b001e'] });
}
