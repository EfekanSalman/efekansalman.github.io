(() => {
  const root = document.getElementById('stdp-lab');
  if (!root) return;
  const current = document.getElementById('lab-current');
  const threshold = document.getElementById('lab-threshold');
  const timing = document.getElementById('lab-timing');
  const voltagePath = document.getElementById('lab-voltage-path');
  const thresholdLine = document.getElementById('lab-threshold-line');
  const thresholdLabel = document.getElementById('lab-threshold-label');
  const copy = {
    en: { spikes: 'spikes / 200 ms', strengthen: 'Connection strengthens', weaken: 'Connection weakens', same: 'No change at the same time' },
    tr: { spikes: 'spike / 200 ms', strengthen: 'Bağlantı güçlenir', weaken: 'Bağlantı zayıflar', same: 'Aynı anda değişim yok' },
    fr: { spikes: 'impulsions / 200 ms', strengthen: 'Connexion renforcée', weaken: 'Connexion affaiblie', same: 'Aucun changement simultané' },
    nl: { spikes: 'spikes / 200 ms', strengthen: 'Verbinding wordt sterker', weaken: 'Verbinding wordt zwakker', same: 'Geen verandering bij gelijktijdigheid' }
  };
  const language = copy[document.documentElement.lang] || copy.en;
  const x = t => 36 + t * 514 / 200;
  const y = v => 152 - (v + 70) * 1.25;

  function renderLif() {
    const input = Number(current.value);
    const firing = Number(threshold.value);
    document.getElementById('lab-current-value').textContent = input.toFixed(1) + ' nA';
    document.getElementById('lab-threshold-value').textContent = '−' + Math.abs(firing) + ' mV';
    const lineY = y(firing);
    thresholdLine.setAttribute('y1', lineY);
    thresholdLine.setAttribute('y2', lineY);
    thresholdLabel.setAttribute('y', lineY - 4);
    thresholdLabel.textContent = '−' + Math.abs(firing);

    let v = -70;
    let refractory = 0;
    let spikes = 0;
    const points = ['M' + x(0).toFixed(1) + ',' + y(v).toFixed(1)];
    for (let t = 1; t <= 200; t++) {
      if (refractory > 0) {
        refractory--;
        v = -70;
      } else {
        v += ((-70 - v) + 10 * input) / 20;
        if (v >= firing) {
          points.push('L' + x(t).toFixed(1) + ',' + y(firing).toFixed(1));
          points.push('L' + x(t).toFixed(1) + ',' + y(25).toFixed(1));
          v = -70;
          points.push('L' + x(t).toFixed(1) + ',' + y(v).toFixed(1));
          refractory = 4;
          spikes++;
          continue;
        }
      }
      points.push('L' + x(t).toFixed(1) + ',' + y(v).toFixed(1));
    }
    voltagePath.setAttribute('d', points.join(' '));
    document.getElementById('lab-spike-count').textContent = spikes + ' ' + language.spikes;
  }

  function renderStdp() {
    const dt = Number(timing.value);
    const change = dt > 0 ? 0.20 * Math.exp(-dt / 20) : dt < 0 ? -0.22 * Math.exp(dt / 20) : 0;
    document.getElementById('lab-timing-value').textContent = (dt > 0 ? '+' : dt < 0 ? '−' : '') + Math.abs(dt) + ' ms';
    document.getElementById('lab-post-spike').style.left = (50 + dt * 0.8) + '%';
    const result = document.getElementById('lab-weight-value');
    result.textContent = (change > 0 ? '+' : change < 0 ? '−' : '') + Math.abs(change).toFixed(3);
    result.classList.toggle('is-negative', change < 0);
    document.getElementById('lab-weight-caption').textContent = change > 0 ? language.strengthen : change < 0 ? language.weaken : language.same;
  }

  current.addEventListener('input', renderLif);
  threshold.addEventListener('input', renderLif);
  timing.addEventListener('input', renderStdp);
  renderLif();
  renderStdp();
})();
