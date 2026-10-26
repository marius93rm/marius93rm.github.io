(() => {
  'use strict';
  const data = document.querySelector('#showcase-data');
  if (!data) return;
  const { projects, labels } = JSON.parse(data.textContent);
  const $ = selector => document.querySelector(selector);
  const player = $('[data-player]');
  const screen = $('[data-screen]');
  const frame = $('.browser-frame');
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  const finePointer = matchMedia('(hover: hover) and (pointer: fine)');
  const duration = 5400;
  let projectIndex = 0;
  let sceneIndex = 0;
  let elapsed = 0;
  let previousTime = 0;
  let paused = reducedMotion.matches;
  let inView = true;
  let loading = false;
  let requestId = 0;
  let raf = 0;
  let cinema = false;
  let touchStart = null;
  let visibleImage = $('.screen-image');
  const pad = value => String(value).padStart(2, '0');
  const icons = {
    pause: '<path d="M9 5v14M15 5v14"/>',
    play: '<path d="m8 5 11 7-11 7Z"/>'
  };
  const thumbs = [...document.querySelectorAll('[data-project]')];
  const prevSide = $('[data-prev-scene]');
  const nextSide = $('[data-next-scene]');

  document.querySelectorAll('.scene-controls, .project-arrows, [data-cinema], .satellite').forEach(el => el.hidden = false);
  thumbs.forEach(link => { link.setAttribute('role', 'button'); link.removeAttribute('target'); });

  function updatePlay() {
    const button = $('[data-play]');
    button.setAttribute('aria-label', paused ? labels.play : labels.pause);
    button.setAttribute('aria-pressed', String(paused));
    button.querySelector('svg').innerHTML = icons[paused ? 'play' : 'pause'];
    $('[data-motion-note]').hidden = !reducedMotion.matches || !paused;
  }

  function setPaused(value) {
    paused = value;
    previousTime = 0;
    updatePlay();
    schedule();
  }

  function schedule() {
    cancelAnimationFrame(raf);
    if (!paused && !document.hidden && inView && !loading) raf = requestAnimationFrame(tick);
  }

  function tick(time) {
    if (previousTime) elapsed += time - previousTime;
    previousTime = time;
    frame.style.setProperty('--progress', String(Math.min(elapsed / duration, 1)));
    if (elapsed >= duration) {
      const last = sceneIndex === projects[projectIndex].scenes.length - 1;
      show(last ? (projectIndex + 1) % projects.length : projectIndex, last ? 0 : sceneIndex + 1);
      return;
    }
    schedule();
  }

  function renderMeta(manual) {
    const project = projects[projectIndex];
    const scene = project.scenes[sceneIndex];
    $('[data-title]').textContent = project.name;
    $('[data-category]').textContent = project.category;
    $('[data-domain]').textContent = project.kind === 'repository' ? `${project.domain} · ${labels.local}` : project.domain;
    $('.stage-index').textContent = pad(projectIndex + 1);
    $('.index-count').firstChild.textContent = `${pad(projectIndex + 1)} `;
    const visit = $('[data-visit]');
    visit.href = project.url;
    visit.querySelector('span').textContent = project.kind === 'repository' ? labels.repo : labels.open;
    visit.setAttribute('aria-label', `${project.kind === 'repository' ? labels.repo : labels.open} — ${project.name}`);
    $('[data-scene-count]').textContent = `${pad(sceneIndex + 1)} / ${pad(project.scenes.length)}`;
    thumbs.forEach((link, i) => {
      link.classList.toggle('is-selected', i === projectIndex);
      link.setAttribute('aria-pressed', String(i === projectIndex));
      link.removeAttribute('aria-current');
    });
    const scenes = $('[data-scenes]');
    // Preserve the focused scene button while its view changes.
    if (scenes.dataset.project !== project.id) {
      scenes.replaceChildren(...project.scenes.map((item, i) => {
        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'scene-button';
        button.dataset.scene = String(i);
        button.textContent = item.label;
        const progress = document.createElement('span');
        progress.className = 'scene-progress';
        progress.setAttribute('aria-hidden', 'true');
        button.append(progress);
        button.addEventListener('click', () => { setPaused(true); show(projectIndex, i, true); });
        return button;
      }));
      scenes.dataset.project = project.id;
    }
    [...scenes.children].forEach((button, i) => {
      button.setAttribute('aria-pressed', String(i === sceneIndex));
      button.classList.toggle('is-complete', i < sceneIndex);
    });
    prevSide.querySelector('img').src = project.scenes[(sceneIndex + project.scenes.length - 1) % project.scenes.length].src;
    nextSide.querySelector('img').src = project.scenes[(sceneIndex + 1) % project.scenes.length].src;
    if (manual) {
      $('[data-announcement]').textContent = `${project.name}. ${scene.label}. ${sceneIndex + 1} / ${project.scenes.length}.`;
      history.replaceState(null, '', `#${project.id}`);
    }
    // Preload only the next scene and next project's opening view.
    [project.scenes[(sceneIndex + 1) % project.scenes.length], projects[(projectIndex + 1) % projects.length].scenes[0]].forEach(item => {
      const image = new Image(); image.src = item.src;
    });
  }

  async function show(nextProject, nextScene = 0, manual = false) {
    const id = ++requestId;
    loading = true;
    schedule();
    const project = projects[nextProject];
    const scene = project.scenes[nextScene];
    const image = new Image();
    image.className = 'screen-image';
    image.alt = `${project.name} — ${scene.label}`;
    image.width = 1280; image.height = 800;
    image.src = scene.src;
    try { await image.decode(); } catch {
      if (id !== requestId) return;
      // Keep the last successful frame visible; never replace it with a broken image.
      loading = false;
      setPaused(true);
      $('[data-announcement]').textContent = `${project.name} — ${labels.open}`;
      return;
    }
    if (id !== requestId) return;
    projectIndex = nextProject;
    sceneIndex = nextScene;
    elapsed = 0;
    previousTime = 0;
    frame.style.setProperty('--progress', '0');
    screen.querySelectorAll('.is-leaving').forEach(el => el.remove());
    const old = visibleImage;
    old.classList.remove('is-current');
    old.classList.add('is-leaving');
    old.alt = '';
    old.setAttribute('aria-hidden', 'true');
    screen.append(image);
    visibleImage = image;
    // Flush the initial frame so the new image can transition in.
    image.getBoundingClientRect();
    image.classList.add('is-current');
    setTimeout(() => old.remove(), reducedMotion.matches ? 0 : 1150);
    renderMeta(manual);
    loading = false;
    schedule();
  }

  function stepProject(direction) {
    setPaused(true);
    show((projectIndex + direction + projects.length) % projects.length, 0, true);
  }

  function stepScene(direction) {
    setPaused(true);
    const length = projects[projectIndex].scenes.length;
    show(projectIndex, (sceneIndex + direction + length) % length, true);
  }

  function setCinema(value) {
    cinema = value;
    player.classList.toggle('is-cinema', cinema);
    document.body.classList.toggle('cinema-open', cinema);
    $('[data-cinema]').setAttribute('aria-pressed', String(cinema));
    $('[data-cinema]').setAttribute('aria-label', cinema ? labels.exitFull : labels.full);
    // Isolate the player while cinema is open and return keyboard focus on close.
    document.querySelectorAll('.site-header, .skip-link, .showcase-intro, .project-index, .showcase-outro, .showcase-footer').forEach(el => el.inert = cinema);
    if (cinema) { player.setAttribute('role', 'dialog'); player.setAttribute('aria-modal', 'true'); }
    else { player.removeAttribute('role'); player.removeAttribute('aria-modal'); }
    $('[data-cinema]').focus({preventScroll:true});
    inView = true;
    schedule();
  }

  $('[data-play]').addEventListener('click', () => setPaused(!paused));
  $('[data-prev]').addEventListener('click', () => stepProject(-1));
  $('[data-next]').addEventListener('click', () => stepProject(1));
  prevSide.addEventListener('click', () => stepScene(-1));
  nextSide.addEventListener('click', () => stepScene(1));
  $('[data-cinema]').addEventListener('click', () => setCinema(!cinema));
  thumbs.forEach((link, i) => {
    link.addEventListener('click', event => { if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return; event.preventDefault(); setPaused(true); show(i, 0, true); });
    link.addEventListener('keydown', event => {
      if (event.key === ' ') { event.preventDefault(); link.click(); }
      const delta = event.key === 'ArrowRight' ? 1 : event.key === 'ArrowLeft' ? -1 : 0;
      if (delta) { event.preventDefault(); thumbs[(i + delta + projects.length) % projects.length].focus(); }
    });
  });
  player.addEventListener('keydown', event => {
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') { event.preventDefault(); stepScene(event.key === 'ArrowRight' ? 1 : -1); }
    if (cinema && event.key === 'Tab') {
      const controls = [...player.querySelectorAll('button:not([tabindex="-1"]), a[href]')].filter(el => el.getClientRects().length);
      const first = controls[0], last = controls.at(-1);
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    }
  });
  document.addEventListener('keydown', event => { if (event.key === 'Escape' && cinema) setCinema(false); });
  // Focus always stops autoplay. It restarts only through the visible Play control.
  player.addEventListener('focusin', event => { if (event.target !== $('[data-play]')) setPaused(true); });
  $('.project-index').addEventListener('focusin', () => setPaused(true));
  screen.addEventListener('pointerdown', event => { if (event.pointerType === 'touch') touchStart = {x:event.clientX, y:event.clientY}; });
  screen.addEventListener('pointerup', event => {
    if (!touchStart) return;
    const x = event.clientX - touchStart.x, y = event.clientY - touchStart.y;
    touchStart = null;
    if (Math.abs(x) > 45 && Math.abs(x) > Math.abs(y) * 1.5) stepScene(x < 0 ? 1 : -1);
  });
  screen.addEventListener('pointercancel', () => { touchStart = null; });
  frame.addEventListener('pointermove', event => {
    if (reducedMotion.matches || !finePointer.matches || cinema) return;
    const rect = frame.getBoundingClientRect();
    frame.style.setProperty('--tilt-x', `${-(event.clientY - rect.top - rect.height / 2) / rect.height * 2}deg`);
    frame.style.setProperty('--tilt-y', `${(event.clientX - rect.left - rect.width / 2) / rect.width * 2}deg`);
  });
  frame.addEventListener('pointerleave', () => { frame.style.setProperty('--tilt-x', '0deg'); frame.style.setProperty('--tilt-y', '0deg'); });
  document.addEventListener('visibilitychange', () => { previousTime = 0; schedule(); });
  new IntersectionObserver(([entry]) => { inView = cinema || entry.isIntersecting; previousTime = 0; schedule(); }, {threshold:.15}).observe(player);
  reducedMotion.addEventListener('change', () => { if (reducedMotion.matches) setPaused(true); updatePlay(); });
  window.addEventListener('hashchange', () => { const i = projects.findIndex(p => `#${p.id}` === location.hash); if (i >= 0) { setPaused(true); show(i); } });
  renderMeta(false);
  updatePlay();
  const initial = projects.findIndex(p => `#${p.id}` === location.hash);
  if (initial > 0) show(initial);
  else schedule();
})();
