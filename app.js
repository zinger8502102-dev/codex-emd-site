const demoFrame = document.getElementById('demoFrame');
const demoCover = document.getElementById('demoCover');
const playDemoBtn = document.getElementById('playDemoBtn');
const playRealBtn = document.getElementById('playRealBtn');
const tocToggle = document.getElementById('tocToggle');
const tocList = document.getElementById('tocList');

if (playDemoBtn && demoFrame && demoCover) {
  playDemoBtn.addEventListener('click', () => {
    if (!demoFrame.src) {
      demoFrame.src = demoFrame.dataset.url;
    }
    demoFrame.style.display = 'block';
    demoCover.style.display = 'none';
  });
}

if (playRealBtn) {
  playRealBtn.addEventListener('click', () => {
    window.open('https://doghousegame.com/go/', '_blank', 'noopener,noreferrer');
  });
}

if (tocToggle && tocList) {
  tocToggle.addEventListener('click', () => {
    const expanded = tocToggle.getAttribute('aria-expanded') === 'true';
    tocToggle.setAttribute('aria-expanded', String(!expanded));
    tocToggle.textContent = expanded ? 'Показать' : 'Скрыть';
    tocList.hidden = expanded;
  });
}

const faqItems = document.querySelectorAll('.faq-list details');
faqItems.forEach((item) => {
  item.addEventListener('toggle', () => {
    if (!item.open) return;
    faqItems.forEach((other) => {
      if (other !== item) other.open = false;
    });
  });
});
