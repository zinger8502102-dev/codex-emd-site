const toggleTocBtn = document.getElementById('toggleToc');
const tocList = document.getElementById('tocList');
const demoBtn = document.getElementById('playDemoBtn');
const demoFrame = document.getElementById('demoFrame');
const demoShell = document.querySelector('.demo-shell');

if (toggleTocBtn && tocList) {
  toggleTocBtn.addEventListener('click', () => {
    const isHidden = tocList.hasAttribute('hidden');
    if (isHidden) {
      tocList.removeAttribute('hidden');
      toggleTocBtn.textContent = 'Hide';
      toggleTocBtn.setAttribute('aria-expanded', 'true');
    } else {
      tocList.setAttribute('hidden', '');
      toggleTocBtn.textContent = 'Show';
      toggleTocBtn.setAttribute('aria-expanded', 'false');
    }
  });
}

if (demoBtn && demoFrame && demoShell) {
  demoBtn.addEventListener('click', () => {
    const source = demoFrame.dataset.url;
    if (source && !demoFrame.src) {
      demoFrame.src = source;
    }
    demoShell.setAttribute('data-loaded', 'true');
  });
}
