/**
 * @fileoverview Portfolio Core Script: Dynamic Color Theme Engine, 3D Holographic Brain,
 * Multilingual Support, Live LIF Neuron Oscilloscope, and GitHub Telemetry integration.
 */

// ─── TRANSLATIONS ───────────────────────────────────────────────────────────
const translations = {
  en: {
    nav_about: "About",
    nav_projects: "Projects",
    nav_research: "Research",
    nav_skills: "Skills",
    nav_contact: "Contact",
    hero_badge: "Computational Neuroscience & Bio-Inspired AI",
    hero_btn_projects: "Explore Projects",
    download_cv: "Download CV",
    brain_3d_title: "3D Holographic Connectome",
    neuron_widget_title: "Live LIF Neuron Oscilloscope",
    stimulate_btn: "⚡ Inject Synaptic Current",
    about_tag: "01 // Background",
    about_title: "About Me",
    about_lead: "I'm Efekan, a developer deeply immersed in computational neuroscience. My focus lies in understanding and simulating how artificial agents can learn, decide, and exhibit emergent consciousness.",
    about_sub: "Transitioning from backend systems to modeling neural mechanisms, I build bio-inspired neural networks, transformer-brain alignment probes, and motivational engines simulating internal cognitive drives.",
    stat_axon_desc: "Neuroanatomical decoding accuracy on Allen Brain Atlas (AxonLM)",
    stat_snn_desc: "Biophysical Spiking Neural Network & internal drive simulations",
    projects_tag: "02 // Systems & Research",
    projects_title: "Highlighted Projects",
    axonlm_desc: "Neuroanatomical connectivity is linearly decodable from transformer Feed-Forward Network (FFN) activations. Validated with AUC=0.963 against the Allen Brain Atlas.",
    neuroconscious_desc: "A modular artificial consciousness architecture simulating internal emotional states, motivational drives, and synthetic cognitive agency.",
    shipoffools_desc: "AI-driven social agent-based modeling (ABM) analyzing human psychology, trust networks, and power distribution.",
    lif_desc: "Visual simulation of Leaky Integrate-and-Fire biophysical neuron voltage dynamics, refractory states, and spike trains.",
    drug_desc: "Supervised machine learning pipeline predicting consumption patterns based on demographic and personality traits.",
    research_tag: "03 // Academic & Open Science",
    research_title: "Research & Identifiers",
    github_tag: "04 // Code Telemetry",
    github_title: "GitHub Telemetry",
    skills_tag: "05 // Toolchain & Competencies",
    skills_title: "Skills & Technologies",
    skills_group_neuro: "🧠 Neuroscience & AI",
    skills_group_systems: "⚙️ Systems & Engineering",
    languages_tag: "06 // Human Dialects",
    languages_title: "Languages",
    contact_tag: "07 // Transmission",
    contact_title: "Let's Connect",
    contact_subtitle: "Open for collaborations on computational neuroscience, artificial consciousness research, and bio-inspired AI architectures.",
    footer: "© 2026 Efekan Salman • Built with bio-inspired neural sparks ⚡"
  },
  tr: {
    nav_about: "Hakkımda",
    nav_projects: "Projeler",
    nav_research: "Araştırma",
    nav_skills: "Beceriler",
    nav_contact: "İletişim",
    hero_badge: "Hesaplamalı Nörobilim & Biyo-İlhamlı YZ",
    hero_btn_projects: "Projeleri Keşfet",
    download_cv: "CV İndir",
    brain_3d_title: "3B Holografik Konnektom",
    neuron_widget_title: "Canlı LIF Nöron Osiloskopu",
    stimulate_btn: "⚡ Sinaptik Akım Enjekte Et",
    about_tag: "01 // Arka Plan",
    about_title: "Hakkımda",
    about_lead: "Hesaplamalı nörobilim alanına derinden odaklanmış bir geliştiriciyim. Temel hedefim; yapay ajanların nasıl öğrenebileceğini, karar verebileceğini ve bilinç dinamiklerini nasıl sergileyebileceğini modellemektir.",
    about_sub: "Backend sistemlerinden sinirsel mekanizmaların modellenmesine geçiş yaparak biyo-ilhamlı sinir ağları, transformer-beyin hizalama probları ve içsel bilişsel dürtüleri simüle eden motivasyon motorları geliştiriyorum.",
    stat_axon_desc: "Allen Brain Atlas üzerinde nöroanatomik çözme doğruluğu (AxonLM)",
    stat_snn_desc: "Biyofiziksel Spiking Sinir Ağı & iç durum simülasyonları",
    projects_tag: "02 // Sistemler & Araştırma",
    projects_title: "Öne Çıkan Projeler",
    axonlm_desc: "Nöroanatomik bağlantısallık, transformer Feed-Forward Network (FFN) aktivasyonlarından doğrusal olarak deşifre edilebilir. Allen Brain Atlas üzerinde AUC=0.963 ile doğrulandı.",
    neuroconscious_desc: "İçsel duygusal durumları, motivasyonel dürtüleri ve sentetik bilişsel eylemliliği simüle eden modüler bir yapay bilinç mimarisi.",
    shipoffools_desc: "İnsan psikolojisini, güven ağlarını ve güç dağılımını analiz eden YZ destekli etmen-tabanlı (ABM) sosyal simülasyon.",
    lif_desc: "Leaky Integrate-and-Fire biyofiziksel nöron voltaj dinamiklerinin, refrakter durumların ve spike dizilerinin görsel simülasyonu.",
    drug_desc: "Demografik ve kişilik özelliklerine dayalı tüketim kalıplarını tahmin eden denetimli makine öğrenimi boru hattı.",
    research_tag: "03 // Akademik & Açık Bilim",
    research_title: "Araştırma & Tanımlayıcılar",
    github_tag: "04 // Kod Telemetrisi",
    github_title: "GitHub Telemetrisi",
    skills_tag: "05 // Araçlar & Yetkinlikler",
    skills_title: "Beceriler & Teknolojiler",
    skills_group_neuro: "🧠 Nörobilim & YZ",
    skills_group_systems: "⚙️ Sistemler & Mühendislik",
    languages_tag: "06 // Konuşulan Diller",
    languages_title: "Diller",
    contact_tag: "07 // İletişim",
    contact_title: "Bağlantı Kuralım",
    contact_subtitle: "Hesaplamalı nörobilim, yapay bilinç araştırmaları ve biyo-ilhamlı YZ mimarileri konularında iş birliklerine açığım.",
    footer: "© 2026 Efekan Salman • Biyo-ilhamlı sinir kıvılcımlarıyla inşa edildi ⚡"
  },
  fr: {
    nav_about: "À propos",
    nav_projects: "Projets",
    nav_research: "Recherche",
    nav_skills: "Compétences",
    nav_contact: "Contact",
    hero_badge: "Neurosciences Computationnelles & IA Bio-Inspirée",
    hero_btn_projects: "Explorer les Projets",
    download_cv: "Télécharger CV",
    brain_3d_title: "Connectome Holographique 3D",
    neuron_widget_title: "Oscilloscope Neurone LIF en Direct",
    stimulate_btn: "⚡ Injecter un Courant Synaptique",
    about_tag: "01 // Contexte",
    about_title: "À Propos de Moi",
    about_lead: "Je suis Efekan, développeur passionné par les neurosciences computationnelles. Mon objectif est de comprendre et de simuler la manière dont les agents artificiels apprennent, décident et développent une conscience.",
    about_sub: "Passant des systèmes backend à la modélisation des mécanismes neuronaux, je conçois des réseaux neuronaux bio-inspirés, des sondes d'alignement transformeur-cerveau et des moteurs de motivation cognitive.",
    stat_axon_desc: "Précision de décodage neuroanatomique sur l'Allen Brain Atlas (AxonLM)",
    stat_snn_desc: "Réseaux neuronaux à impulsions biophysiques (SNN) et simulations d'états internes",
    projects_tag: "02 // Systèmes & Recherche",
    projects_title: "Projets en Vedette",
    axonlm_desc: "La connectivité neuroanatomique est linéairement décodable à partir des activations FFN des transformeurs. Validé avec AUC=0.963 sur Allen Brain Atlas.",
    neuroconscious_desc: "Une architecture modulaire de conscience artificielle simulant les états émotionnels internes et les pulsions motivationnelles.",
    shipoffools_desc: "Simulation sociale basée sur des agents (ABM) explorant la psychologie humaine et la dynamique du pouvoir.",
    lif_desc: "Simulation visuelle de la dynamique de tension d'un neurone LIF, des états réfractaires et des trains d'impulsions.",
    drug_desc: "Pipeline d'apprentissage automatique supervisé prédisant les habitudes de consommation à partir de traits démographiques.",
    research_tag: "03 // Académique & Science Ouverte",
    research_title: "Recherche & Identifiants",
    github_tag: "04 // Télémétrie du Code",
    github_title: "Télémétrie GitHub",
    skills_tag: "05 // Boîte à Outils & Compétences",
    skills_title: "Compétences & Technologies",
    skills_group_neuro: "🧠 Neurosciences & IA",
    skills_group_systems: "⚙️ Systèmes & Ingénierie",
    languages_tag: "06 // Langues",
    languages_title: "Langues",
    contact_tag: "07 // Transmission",
    contact_title: "Connectons-nous",
    contact_subtitle: "Ouvert aux collaborations en neurosciences computationnelles, recherche sur la conscience artificielle et architectures d'IA bio-inspirée.",
    footer: "© 2026 Efekan Salman • Conçu avec des étincelles neuronales bio-inspirées ⚡"
  }
};

// ─── THEME PALETTES & SWITCHER ───────────────────────────────────────────────
const themePalettes = {
  emerald: {
    neuronColor: "rgba(52, 211, 153, ",
    spikeColor: "rgba(16, 185, 129, ",
    synapseColor: "rgba(52, 211, 153, ",
    oscColor: "#10b981",
    brainPoint: 0x34d399,
    brainTract: 0x059669,
    brainSpark: 0x6ee7b7,
  },
  cyan: {
    neuronColor: "rgba(56, 189, 248, ",
    spikeColor: "rgba(34, 211, 238, ",
    synapseColor: "rgba(125, 211, 252, ",
    oscColor: "#22d3ee",
    brainPoint: 0x38bdf8,
    brainTract: 0x0284c7,
    brainSpark: 0x22d3ee,
  },
  violet: {
    neuronColor: "rgba(192, 132, 252, ",
    spikeColor: "rgba(245, 158, 11, ",
    synapseColor: "rgba(168, 85, 247, ",
    oscColor: "#c084fc",
    brainPoint: 0xc084fc,
    brainTract: 0x7c3aed,
    brainSpark: 0xf59e0b,
  },
  indigo: {
    neuronColor: "rgba(129, 140, 248, ",
    spikeColor: "rgba(165, 180, 252, ",
    synapseColor: "rgba(99, 102, 241, ",
    oscColor: "#818cf8",
    brainPoint: 0x818cf8,
    brainTract: 0x4f46e5,
    brainSpark: 0xa5b4fc,
  },
  crimson: {
    neuronColor: "rgba(244, 63, 94, ",
    spikeColor: "rgba(251, 113, 133, ",
    synapseColor: "rgba(225, 29, 72, ",
    oscColor: "#f43f5e",
    brainPoint: 0xf43f5e,
    brainTract: 0xbe123c,
    brainSpark: 0xfb7185,
  },
};

let activeSynapticCanvas = null;
let activeOscilloscope = null;
let activeBrain3D = null;

/**
 * Applies a theme across CSS root, Canvas background, 3D Brain, and Oscilloscope.
 * 
 * @param {string} theme - Theme identifier ('emerald', 'cyan', 'violet', 'indigo', 'crimson').
 * @returns {void}
 */
function applyTheme(theme) {
  if (!themePalettes[theme]) theme = "emerald";
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("neuro_theme", theme);

  const palette = themePalettes[theme];
  if (activeSynapticCanvas) {
    activeSynapticCanvas.updateColors({
      neuronColor: palette.neuronColor,
      spikeColor: palette.spikeColor,
      synapseColor: palette.synapseColor,
    });
  }

  if (activeOscilloscope) {
    activeOscilloscope.setWaveformColor(palette.oscColor);
  }

  if (activeBrain3D) {
    activeBrain3D.updateColors({
      pointColor: palette.brainPoint,
      tractColor: palette.brainTract,
      sparkColor: palette.brainSpark,
    });
  }

  const select = document.getElementById("themeSelect");
  if (select && select.value !== theme) {
    select.value = theme;
  }
}

document.getElementById("themeSelect")?.addEventListener("change", (e) => {
  applyTheme(e.target.value);
});

// ─── TYPING ANIMATION ────────────────────────────────────────────────────────
const typingPhrases = {
  en: [
    "Simulating artificial minds & consciousness...",
    "Decoding transformer activations with Allen Brain Atlas...",
    "Modeling biophysical Leaky Integrate-and-Fire neurons...",
    "Architecting internal drives & synthetic agency...",
  ],
  tr: [
    "Yapay zihinleri ve bilinci simüle ediyorum...",
    "Allen Brain Atlas ile transformer aktivasyonlarını çözümlüyorum...",
    "Biyofiziksel LIF nöron modelleri geliştiriyorum...",
    "İçsel dürtüler ve sentetik eylemlilik mimarileri kuruyorum...",
  ],
  fr: [
    "Simulation d'esprits artificiels et de conscience...",
    "Décodage des activations de transformeurs avec l'Allen Brain Atlas...",
    "Modélisation de neurones LIF biophysiques...",
    "Conception de pulsions internes et d'agentivité synthétique...",
  ],
};

let typingIndex = 0;
let charIndex = 0;
let isDeleting = false;
let currentLang = "en";
let typingTimeout;

function typeText() {
  const phrases = typingPhrases[currentLang] || typingPhrases.en;
  const el = document.getElementById("typing-text");
  if (!el) return;

  const current = phrases[typingIndex % phrases.length];

  if (isDeleting) {
    charIndex--;
  } else {
    charIndex++;
  }

  el.textContent = current.substring(0, charIndex);

  let speed = isDeleting ? 30 : 65;

  if (!isDeleting && charIndex === current.length) {
    speed = 2000;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    typingIndex++;
    speed = 350;
  }

  clearTimeout(typingTimeout);
  typingTimeout = setTimeout(typeText, speed);
}

// ─── LANGUAGE SWITCHER ────────────────────────────────────────────────────────
function applyTranslations(lang) {
  const t = translations[lang];
  if (!t) return;
  currentLang = lang;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (t[key] !== undefined) {
      el.innerHTML = t[key];
    }
  });

  // Reset typing animation
  clearTimeout(typingTimeout);
  typingIndex = 0;
  charIndex = 0;
  isDeleting = false;
  typeText();
}

document.getElementById("langSelect")?.addEventListener("change", (e) => {
  applyTranslations(e.target.value);
});

// ─── LIVE LIF NEURON OSCILLOSCOPE SIMULATOR ──────────────────────────────────
class NeuronOscilloscope {
  /**
   * Initializes the real-time LIF Neuron Oscilloscope widget.
   * Model: Leaky Integrate-and-Fire with refractory membrane dynamics.
   * 
   * @param {string} canvasId - DOM Canvas element ID.
   */
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext("2d");

    // Biophysical LIF parameters (scaled to physiological units)
    this.vRest = -70.0;      // Resting potential (mV)
    this.vReset = -75.0;     // Reset potential after spike (mV)
    this.vThreshold = -50.0; // Firing threshold (mV)
    this.vPeak = 30.0;       // Peak spike amplitude (mV)
    this.voltage = this.vRest;
    this.tau = 20.0;         // Membrane time constant (ms)
    this.refractory = 0;     // Refractory counter (steps)
    this.injectedCurrent = 0.0;
    this.waveformColor = "#10b981";

    this.history = new Array(80).fill(this.vRest);

    this.voltageEl = document.getElementById("osc-voltage");
    this.stateEl = document.getElementById("osc-state");
    this.stimulateBtn = document.getElementById("stimulate-btn");

    this.bindEvents();
    this.start();
  }

  /**
   * Updates waveform rendering color.
   * 
   * @param {string} color - Hex/RGB color string.
   */
  setWaveformColor(color) {
    this.waveformColor = color;
  }

  /**
   * Binds stimulation button events and triggers 3D Brain spike cascade.
   * 
   * @returns {void}
   */
  bindEvents() {
    this.stimulateBtn?.addEventListener("click", () => {
      this.injectedCurrent += 18.5; // Inject large current impulse

      // Synchronize with 3D Holographic Brain spike cascade
      if (activeBrain3D) {
        activeBrain3D.triggerSpikeCascade();
      }
    });
  }

  /**
   * Advances the biophysical differential equation by 1 step (dt).
   * Formula: dV/dt = -(V - V_rest)/tau + I_syn / C_m
   * 
   * @returns {void}
   */
  step() {
    // Baseline Poisson micro-noise
    const noise = (Math.random() - 0.48) * 0.8;

    if (this.refractory > 0) {
      this.refractory--;
      this.voltage = this.vReset;
    } else {
      // Integrate current and leak towards rest
      this.voltage += (-(this.voltage - this.vRest) / this.tau) + this.injectedCurrent + noise;
      this.injectedCurrent *= 0.82; // Rapid current decay

      // Spike detection
      if (this.voltage >= this.vThreshold) {
        this.voltage = this.vPeak;
        this.refractory = 6; // Refractory delay
      }
    }

    // Push to waveform history buffer
    this.history.shift();
    this.history.push(this.voltage);

    // Update telemetry UI
    if (this.voltageEl) {
      this.voltageEl.textContent = `${this.voltage.toFixed(1)} mV`;
    }
    if (this.stateEl) {
      if (this.voltage >= this.vThreshold) {
        this.stateEl.textContent = "SPIKE!";
        this.stateEl.className = "telemetry-val state-firing";
      } else if (this.refractory > 0) {
        this.stateEl.textContent = "Refractory";
        this.stateEl.className = "telemetry-val";
      } else {
        this.stateEl.textContent = "Integrating";
        this.stateEl.className = "telemetry-val";
      }
    }
  }

  /**
   * Renders the waveform on the oscilloscope canvas.
   * 
   * @returns {void}
   */
  render() {
    const w = this.canvas.width;
    const h = this.canvas.height;
    this.ctx.clearRect(0, 0, w, h);

    // Draw grid lines
    this.ctx.strokeStyle = "rgba(255, 255, 255, 0.06)";
    this.ctx.lineWidth = 1;
    for (let y = 15; y < h; y += 20) {
      this.ctx.beginPath();
      this.ctx.moveTo(0, y);
      this.ctx.lineTo(w, y);
      this.ctx.stroke();
    }

    // Draw Threshold line
    const threshY = h - ((this.vThreshold - (-80)) / (40 - (-80))) * h;
    this.ctx.strokeStyle = "rgba(244, 63, 94, 0.35)";
    this.ctx.setLineDash([4, 4]);
    this.ctx.beginPath();
    this.ctx.moveTo(0, threshY);
    this.ctx.lineTo(w, threshY);
    this.ctx.stroke();
    this.ctx.setLineDash([]);

    // Draw Membrane Voltage Waveform
    this.ctx.beginPath();
    this.ctx.strokeStyle = this.waveformColor;
    this.ctx.lineWidth = 2.2;
    this.ctx.shadowColor = this.waveformColor;
    this.ctx.shadowBlur = 8;

    const stepX = w / (this.history.length - 1);
    for (let i = 0; i < this.history.length; i++) {
      const v = this.history[i];
      const y = h - ((v - (-80)) / (40 - (-80))) * (h - 10) - 5;
      const x = i * stepX;

      if (i === 0) this.ctx.moveTo(x, y);
      else this.ctx.lineTo(x, y);
    }

    this.ctx.stroke();
    this.ctx.shadowBlur = 0; // Reset shadow
  }

  /**
   * Main animation loop.
   * 
   * @returns {void}
   */
  start() {
    const loop = () => {
      this.step();
      this.render();
      requestAnimationFrame(loop);
    };
    loop();
  }
}

// ─── GITHUB TELEMETRY ────────────────────────────────────────────────────────
async function loadGithubStats() {
  const username = "efekansalman";
  const container = document.getElementById("github-stats-container");
  if (!container) return;

  try {
    const userRes = await fetch(`https://api.github.com/users/${username}`);
    if (!userRes.ok) throw new Error("GitHub API error");
    const user = await userRes.json();

    const repoRes = await fetch(
      `https://api.github.com/users/${username}/repos?per_page=100&sort=updated`
    );
    const repos = await repoRes.json();

    const totalStars = repos.reduce((acc, r) => acc + r.stargazers_count, 0);
    const totalForks = repos.reduce((acc, r) => acc + r.forks_count, 0);
    const topLanguages = {};
    repos.forEach((r) => {
      if (r.language) topLanguages[r.language] = (topLanguages[r.language] || 0) + 1;
    });
    const sortedLangs = Object.entries(topLanguages)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5);

    container.innerHTML = `
      <div class="gh-stats-grid">
        <div class="gh-stat-card">
          <span class="gh-stat-icon">📦</span>
          <span class="gh-stat-value">${user.public_repos}</span>
          <span class="gh-stat-label">Repositories</span>
        </div>
        <div class="gh-stat-card">
          <span class="gh-stat-icon">⭐</span>
          <span class="gh-stat-value">${totalStars}</span>
          <span class="gh-stat-label">Total Stars</span>
        </div>
        <div class="gh-stat-card">
          <span class="gh-stat-icon">🍴</span>
          <span class="gh-stat-value">${totalForks}</span>
          <span class="gh-stat-label">Total Forks</span>
        </div>
        <div class="gh-stat-card">
          <span class="gh-stat-icon">👥</span>
          <span class="gh-stat-value">${user.followers}</span>
          <span class="gh-stat-label">Followers</span>
        </div>
      </div>
      <div class="gh-languages">
        <p style="margin-bottom:14px; color: var(--accent-sky); font-weight:600; font-family: var(--font-brand);">Core Language Distribution</p>
        ${sortedLangs
        .map(
          ([lang, count]) => `
          <div class="lang-bar-wrap">
            <span class="lang-name">${lang}</span>
            <div class="lang-bar-bg">
              <div class="lang-bar-fill" style="width:${Math.min(
            100,
            (count / repos.length) * 100 * 3
          )}%"></div>
            </div>
            <span class="lang-count">${count} repos</span>
          </div>`
        )
        .join("")}
      </div>
    `;

    setTimeout(() => {
      document.querySelectorAll(".lang-bar-fill").forEach((bar) => {
        bar.style.transition = "width 1.2s cubic-bezier(.4,0,.2,1)";
      });
    }, 100);
  } catch (err) {
    container.innerHTML = `<p style="color:#64748b; text-align:center;">Telemetry stream unavailable. Reconnecting...</p>`;
    console.error(err);
  }
}

// ─── SKILL BARS ANIMATION ────────────────────────────────────────────────────
function animateSkillBars() {
  const bars = document.querySelectorAll(".skill-bar-fill");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const bar = entry.target;
          const target = bar.getAttribute("data-width");
          bar.style.width = target + "%";
          observer.unobserve(bar);
        }
      });
    },
    { threshold: 0.2 }
  );
  bars.forEach((bar) => observer.observe(bar));
}

// ─── INIT ─────────────────────────────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  const initialTheme = localStorage.getItem("neuro_theme") || "emerald";
  const palette = themePalettes[initialTheme] || themePalettes.emerald;

  // 1. Initialize interactive synaptic background canvas
  if (window.SynapticCanvas) {
    activeSynapticCanvas = new SynapticCanvas("synapse-canvas", {
      neuronColor: palette.neuronColor,
      spikeColor: palette.spikeColor,
      synapseColor: palette.synapseColor,
    });
  }

  // 2. Initialize 3D Holographic Brain Connectome
  if (window.HolographicBrain3D) {
    activeBrain3D = new HolographicBrain3D("brain-3d-container", {
      pointColor: palette.brainPoint,
      tractColor: palette.brainTract,
      sparkColor: palette.brainSpark,
    });
  }

  // 3. Initialize real-time LIF Neuron Oscilloscope widget
  activeOscilloscope = new NeuronOscilloscope("osc-canvas");

  // Apply saved or default theme
  applyTheme(initialTheme);

  typeText();
  loadGithubStats();
  animateSkillBars();
  applyTranslations("en");
});
