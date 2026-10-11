(() => {
  const id = window.SHUROOHAT_ANALYTICS_ID;
  if (!/^G-[A-Z0-9]+$/.test(id || '')) return;
  window.dataLayer = window.dataLayer || [];
  window.gtag = function () { window.dataLayer.push(arguments); };
  const script = document.createElement('script');
  script.async = true;
  script.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(id);
  document.head.append(script);
  window.gtag('js', new Date());
  window.gtag('config', id);
  document.addEventListener('click', event => {
    const target = event.target.closest?.('a,button');
    if (!target) return;
    if (target.matches('.level-toggle') && target.getAttribute('aria-expanded') !== 'true') {
      window.gtag('event', 'open_course', {course_id: target.closest('.level')?.dataset.level || ''});
    }
    if (target.matches('a.platform-button, a.recording-option')) {
      const lesson = target.closest('.lesson');
      const url = target.href;
      window.gtag('event', 'click_lesson', {
        lesson_title: lesson?.querySelector('h6')?.textContent || document.querySelector('#recordings-dialog-lesson')?.textContent || '',
        platform: /youtu\.be|youtube\.com/.test(url) ? 'youtube' : 'facebook',
        link_url: url,
        course_id: target.closest('.level')?.dataset.level || ''
      });
    }
    if (target.matches('a') && target.href.startsWith('https://t.me/minhajaldaarisin/')) {
      window.gtag('event', 'open_book_pdf', {link_url: target.href});
    }
  }, true);
})();
