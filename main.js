(() => {
  'use strict';

  const menuToggle = document.getElementById('menuToggle');
  const mobileNav = document.getElementById('mobileNav');
  function closeMenu() {
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Open menu');
    mobileNav.hidden = true;
    document.body.classList.remove('menu-open');
  }
  menuToggle.addEventListener('click', () => {
    const open = menuToggle.getAttribute('aria-expanded') !== 'true';
    menuToggle.setAttribute('aria-expanded', String(open));
    menuToggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    mobileNav.hidden = !open;
    document.body.classList.toggle('menu-open', open);
  });
  mobileNav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });
  window.addEventListener('resize', () => { if (window.innerWidth > 780) closeMenu(); });

  const previews = {
    aim: {
      category: 'COMBAT / 01', index: '01 / 03', title: 'Aim settings', description: 'Your settings. Your precision.',
      labels: ['Aim assistance', 'Multi-point', 'Adaptive profile'],
      hints: ['Master control', 'Advanced targeting', 'Personalized preferences'],
      range: 'Field of view', unit: '°', value: 48, config: 'CUSTOM PROFILE', checked: [true,true,false]
    },
    visuals: {
      category: 'VISUALS / 02', index: '02 / 03', title: 'Visual settings', description: 'See it your way.',
      labels: ['Player outlines', 'Information labels', 'Accent highlights'],
      hints: ['Custom visibility', 'Contextual display', 'Personalized color'],
      range: 'Opacity', unit: '%', value: 76, config: 'VISUAL PROFILE', checked: [true,true,true]
    },
    skins: {
      category: 'STUDIO / 03', index: '03 / 03', title: 'Inventory studio', description: 'An aesthetic that is yours.',
      labels: ['Preview items', 'Finish selection', 'Saved preferences'],
      hints: ['Loadout concepts', 'Color customization', 'Quick access'],
      range: 'Preview scale', unit: '%', value: 62, config: 'STUDIO PROFILE', checked: [true,false,true]
    }
  };
  const previewCategory = document.getElementById('previewCategory');
  const previewTitle = document.getElementById('previewTitle');
  const previewDescription = document.getElementById('previewDescription');
  const previewIndex = document.getElementById('previewIndex');
  const previewRange = document.getElementById('previewRange');
  const previewValue = document.getElementById('rangeValue');
  const rangeLabel = document.getElementById('rangeLabel');
  const configName = document.getElementById('configName');
  let currentPreview = 'aim';
  function updateSlider() {
    previewValue.textContent = previewRange.value + previews[currentPreview].unit;
    previewRange.style.setProperty('--fill', previewRange.value + '%');
  }
  function setPreview(key) {
    const data = previews[key];
    if (!data) return;
    currentPreview = key;
    previewCategory.textContent = data.category;
    previewIndex.textContent = data.index;
    previewTitle.textContent = data.title;
    previewDescription.textContent = data.description;
    rangeLabel.textContent = data.range;
    previewRange.value = String(data.value);
    configName.textContent = data.config;
    [1, 2, 3].forEach((num, i) => {
      document.getElementById('settingLabel' + num).textContent = data.labels[i];
      document.getElementById('settingHint' + num).textContent = data.hints[i];
    });
    document.querySelectorAll('.toggle-switch').forEach((button, i) => {
      button.classList.toggle('is-on', data.checked[i]);
      button.setAttribute('aria-pressed', String(data.checked[i]));
      button.setAttribute('aria-label', 'Toggle ' + data.labels[i].toLowerCase());
    });
    document.querySelectorAll('[data-preview]').forEach(button => {
      const isActive = button.dataset.preview === key;
      button.classList.toggle('active', isActive);
      button.setAttribute('aria-pressed', String(isActive));
    });
    updateSlider();
  }
  document.querySelectorAll('[data-preview]').forEach(button => button.addEventListener('click', () => setPreview(button.dataset.preview)));
  document.querySelectorAll('.toggle-switch').forEach((button, index) => button.addEventListener('click', () => {
    const isOn = button.getAttribute('aria-pressed') !== 'true';
    button.setAttribute('aria-pressed', String(isOn));
    button.classList.toggle('is-on', isOn);
    previews[currentPreview].checked[index] = isOn;
  }));
  previewRange.addEventListener('input', () => { previews[currentPreview].value = Number(previewRange.value); updateSlider(); });
  updateSlider();

  const showcaseModes = {
    aim: { kicker: 'PRECISION / REIMAGINED', title: 'Everything in your sights.', text: 'Thoughtfully organized controls give you the freedom to build a setup that feels entirely your own.', tags: ['FINE CONTROL', 'PERSONAL PROFILES', 'LIVE PREVIEW'], counter: '01 / 03' },
    visuals: { kicker: 'VISUALS / REDEFINED', title: 'A clearer point of view.', text: 'Find a visual language that fits the way you play, from useful detail to clean, minimal presentation.', tags: ['VISUAL PROFILES', 'CUSTOM ACCENTS', 'CLEAR LAYOUTS'], counter: '02 / 03' },
    studio: { kicker: 'STYLE / UNRESTRICTED', title: 'Create your signature.', text: 'A dedicated place for visual experimentation, personal taste, and the details that make a loadout feel yours.', tags: ['ITEM CONCEPTS', 'COLOR EXPLORATION', 'PERSONAL STYLE'], counter: '03 / 03' }
  };
  const showcaseTabs = [...document.querySelectorAll('.showcase-tab')];
  const showcasePanel = document.getElementById('showcaseContent');
  const showcaseIllustration = document.getElementById('showcaseIllustration');
  function setShowcase(key, shouldFocus = false) {
    const data = showcaseModes[key];
    if (!data) return;
    showcaseIllustration.dataset.activeMode = key;
    document.getElementById('showcaseKicker').textContent = data.kicker;
    document.getElementById('showcaseTitle').textContent = data.title;
    document.getElementById('showcaseText').textContent = data.text;
    document.getElementById('showcaseCounter').textContent = data.counter;
    const tagsNode = document.getElementById('showcaseTags');
    tagsNode.replaceChildren(...data.tags.map(label => { const span = document.createElement('span'); span.textContent = label; return span; }));
    showcaseTabs.forEach(tab => {
      const active = tab.dataset.mode === key;
      tab.classList.toggle('active', active);
      tab.setAttribute('aria-selected', String(active));
      tab.tabIndex = active ? 0 : -1;
      if (active) { showcasePanel.setAttribute('aria-labelledby', tab.id); if (shouldFocus) tab.focus(); }
    });
  }
  showcaseTabs.forEach((tab, index) => {
    tab.addEventListener('click', () => setShowcase(tab.dataset.mode));
    tab.addEventListener('keydown', event => {
      if (!['ArrowLeft','ArrowRight','ArrowUp','ArrowDown','Home','End'].includes(event.key)) return;
      event.preventDefault();
      const next = event.key === 'Home' ? 0 : event.key === 'End' ? showcaseTabs.length - 1 : (index + (['ArrowRight','ArrowDown'].includes(event.key) ? 1 : -1) + showcaseTabs.length) % showcaseTabs.length;
      setShowcase(showcaseTabs[next].dataset.mode, true);
    });
  });

  const revealElements = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, io) => {
      entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('is-visible'); io.unobserve(entry.target); } });
    }, {threshold: .12, rootMargin: '0px 0px -30px 0px'});
    revealElements.forEach(element => observer.observe(element));
  } else { revealElements.forEach(element => element.classList.add('is-visible')); }
  if (!matchMedia('(prefers-reduced-motion: reduce)').matches && matchMedia('(pointer: fine)').matches) {
    const stage = document.getElementById('visualStage');
    stage.addEventListener('pointermove', event => {
      const rect = stage.getBoundingClientRect();
      stage.style.setProperty('--mx', ((event.clientX - rect.left) / rect.width - .5).toFixed(3));
      stage.style.setProperty('--my', ((event.clientY - rect.top) / rect.height - .5).toFixed(3));
    });
    stage.addEventListener('pointerleave', () => { stage.style.setProperty('--mx', 0); stage.style.setProperty('--my', 0); });
  }
  document.getElementById('footerYear').textContent = String(new Date().getFullYear());
})();