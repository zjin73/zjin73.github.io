const toggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
if (toggle && navigation) {
  toggle.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') !== 'true';
    toggle.setAttribute('aria-expanded', String(open));
    navigation.classList.toggle('open', open);
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && navigation.classList.contains('open')) {
      navigation.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.focus();
    }
  });
}
const carousel = document.querySelector('[data-carousel]');
if (carousel) {
  const slides = [...carousel.querySelectorAll('[data-slide]')];
  const track = carousel.querySelector('.carousel-track');
  const counter = carousel.querySelector('[data-counter]');
  const pause = carousel.querySelector('[data-pause]');
  const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let index = 0;
  let timer;
  let paused = motion.matches;
  let hovered = false;
  let focused = false;
  let visible = true;

  function syncPlayback() {
    clearInterval(timer);
    const stopped = paused || hovered || focused || document.hidden || !visible;
    carousel.classList.toggle('is-paused', stopped || index !== 0);
    pause.textContent = paused ? 'Play' : 'Pause';
    pause.setAttribute('aria-label', paused ? 'Play slideshow' : 'Pause slideshow');
    counter.setAttribute('aria-live', paused ? 'polite' : 'off');
    if (!stopped) timer = setInterval(() => show(index + 1), 6500);
  }

  function show(next, manual = false) {
    index = (next + slides.length) % slides.length;
    track.style.transform = `translateX(-${index * 100}%)`;
    slides.forEach((slide, i) => slide.setAttribute('aria-hidden', String(i !== index)));
    if (manual) paused = true;
    syncPlayback();
    counter.textContent = `${String(index + 1).padStart(2, '0')} / ${String(slides.length).padStart(2, '0')}`;
  }

  carousel.querySelector('[data-prev]').addEventListener('click', () => show(index - 1, true));
  carousel.querySelector('[data-next]').addEventListener('click', () => show(index + 1, true));
  pause.addEventListener('click', () => { paused = !paused; syncPlayback(); });
  carousel.addEventListener('mouseenter', () => { hovered = true; syncPlayback(); });
  carousel.addEventListener('mouseleave', () => { hovered = false; syncPlayback(); });
  carousel.addEventListener('focusin', () => { focused = true; syncPlayback(); });
  carousel.addEventListener('focusout', event => {
    if (!carousel.contains(event.relatedTarget)) { focused = false; syncPlayback(); }
  });
  carousel.addEventListener('keydown', event => {
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      event.preventDefault();
      show(index + (event.key === 'ArrowRight' ? 1 : -1), true);
    }
  });
  document.addEventListener('visibilitychange', syncPlayback);
  motion.addEventListener('change', event => { paused = event.matches; syncPlayback(); });
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(entries => {
      visible = entries[0].isIntersecting;
      syncPlayback();
    }, { threshold: 0.1 }).observe(carousel);
  }
  syncPlayback();
}
