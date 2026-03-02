// ─── TRANSLATIONS ───────────────────────────────────────────────────────────
const translations = {
  en: {
    nav_about: "About",
    nav_projects: "Projects",
    nav_contact: "Contact",
    hero_subtitle: "Simulating artificial minds, neural decision systems, and internal states",
    about_title: "About Me",
    about_text: `I'm Efekan, a developer deeply immersed in computational neuroscience. My focus lies in understanding and
      simulating how artificial agents can learn, decide, and become conscious.<br><br>
      I hold a 2-year degree in Computer Programming and have since transitioned from backend Java systems to modeling
      neural mechanisms and motivational engines.`,
    projects_title: "Highlighted Projects",
    skills_title: "Skills & Technologies",
    languages_title: "Languages",
    contact_title: "Let's Connect",
    download_cv: "Download CV",
    footer: "© 2025 Efekan Salman • Designed with neural sparks ⚡",
    github_title: "GitHub Stats",
  },
  tr: {
    nav_about: "Hakkımda",
    nav_projects: "Projeler",
    nav_contact: "İletişim",
    hero_subtitle: "Yapay zihinleri, sinirsel karar sistemlerini ve iç durumları simüle ediyorum",
    about_title: "Hakkımda",
    about_text: `Hesaplamalı nörobilim alanına derinden dalmış bir geliştiriciyim. Odak noktam; yapay ajanların nasıl öğrenebileceğini,
      karar verebileceğini ve bilinçli hale gelebileceğini anlamak ve simüle etmektir.<br><br>
      Bilgisayar Programcılığı alanında 2 yıllık bir dereceye sahibim ve Java backend sistemlerinden sinirsel mekanizmaların
      ve motivasyon motorlarının modellenmesine geçiş yaptım.`,
    projects_title: "Öne Çıkan Projeler",
    skills_title: "Beceriler & Teknolojiler",
    languages_title: "Diller",
    contact_title: "Bağlanalım",
    download_cv: "CV İndir",
    footer: "© 2025 Efekan Salman • Sinir kıvılcımlarıyla tasarlandı ⚡",
    github_title: "GitHub İstatistikleri",
  },
  fr: {
    nav_about: "À propos",
    nav_projects: "Projets",
    nav_contact: "Contact",
    hero_subtitle: "Simulation d'esprits artificiels, de systèmes de décision neuronale et d'états internes",
    about_title: "À propos de moi",
    about_text: `Je suis Efekan, un développeur profondément immergé dans les neurosciences computationnelles. Je me concentre sur
      la compréhension et la simulation de la façon dont les agents artificiels peuvent apprendre, décider et devenir conscients.<br><br>
      Je suis titulaire d'un diplôme de 2 ans en Programmation Informatique et j'ai depuis migré des systèmes Java backend
      vers la modélisation des mécanismes neuronaux et des moteurs motivationnels.`,
    projects_title: "Projets en vedette",
    skills_title: "Compétences & Technologies",
    languages_title: "Langues",
    contact_title: "Connectons-nous",
    download_cv: "Télécharger CV",
    footer: "© 2025 Efekan Salman • Conçu avec des étincelles neuronales ⚡",
    github_title: "Statistiques GitHub",
  },
};

// ─── TYPING ANIMATION ────────────────────────────────────────────────────────
const typingPhrases = {
  en: [
    "Simulating artificial minds...",
    "Modeling neural decision systems...",
    "Exploring artificial consciousness...",
    "Building bio-inspired AI...",
  ],
  tr: [
    "Yapay zihinleri simüle ediyorum...",
    "Sinirsel karar sistemleri modelliyorum...",
    "Yapay bilinci keşfediyorum...",
    "Biyo-ilhamlı yapay zeka inşa ediyorum...",
  ],
  fr: [
    "Simulation d'esprits artificiels...",
    "Modélisation des systèmes neuronaux...",
    "Exploration de la conscience artificielle...",
    "Construction d'IA bio-inspirée...",
  ],
};

let typingIndex = 0;
let charIndex = 0;
let isDeleting = false;
let currentLang = "en";
let typingTimeout;

function typeText() {
  const phrases = typingPhrases[currentLang];
  const el = document.getElementById("typing-text");
  if (!el) return;

  const current = phrases[typingIndex % phrases.length];

  if (isDeleting) {
    charIndex--;
  } else {
    charIndex++;
  }

  el.textContent = current.substring(0, charIndex);

  let speed = isDeleting ? 40 : 80;

  if (!isDeleting && charIndex === current.length) {
    speed = 1800;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    typingIndex++;
    speed = 400;
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

// ─── GITHUB STATS ─────────────────────────────────────────────────────────────
async function loadGithubStats() {
  const username = "efekansalman"; // GitHub kullanıcı adı
  const container = document.getElementById("github-stats-container");
  if (!container) return;

  try {
    // Fetch user info
    const userRes = await fetch(`https://api.github.com/users/${username}`);
    if (!userRes.ok) throw new Error("GitHub API error");
    const user = await userRes.json();

    // Fetch repos
    const repoRes = await fetch(
      `https://api.github.com/users/${username}/repos?per_page=100&sort=updated`
    );
    const repos = await repoRes.json();

    // Calculate stats
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
        <p style="margin-bottom:12px; color: var(--title-color); font-weight:600;">Top Languages</p>
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

    // Animate bars
    setTimeout(() => {
      document.querySelectorAll(".lang-bar-fill").forEach((bar) => {
        bar.style.transition = "width 1.2s cubic-bezier(.4,0,.2,1)";
      });
    }, 100);

    // Update project cards with GitHub links
    linkProjectsToGitHub(repos);
  } catch (err) {
    container.innerHTML = `<p style="color:#64748b; text-align:center;">GitHub istatistikleri yüklenemedi. Lütfen daha sonra tekrar deneyin.</p>`;
    console.error(err);
  }
}

// ─── LINK PROJECTS TO GITHUB ─────────────────────────────────────────────────
function linkProjectsToGitHub(repos) {
  const projectMap = {
    "Drug Consumption Prediction": "drug-consumption",
    "Crocodylus-Gauge": "crocodylus",
    "Snake Game": "snake",
    "LIF Neuron Simulator": "lif",
  };

  document.querySelectorAll(".project-card").forEach((card) => {
    const titleEl = card.querySelector("strong");
    if (!titleEl) return;
    const title = titleEl.textContent.trim();
    const keyword = projectMap[title] || title.toLowerCase().replace(/\s+/g, "-");

    const match = repos.find(
      (r) =>
        r.name.toLowerCase().includes(keyword.split("-")[0]) ||
        r.name.toLowerCase().includes(keyword)
    );

    if (match) {
      const link = document.createElement("a");
      link.href = match.html_url;
      link.target = "_blank";
      link.className = "gh-project-link";
      link.innerHTML = `<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg> View on GitHub`;
      card.appendChild(link);
    }
  });
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
    { threshold: 0.3 }
  );
  bars.forEach((bar) => observer.observe(bar));
}

// ─── SCROLL FADE-IN ───────────────────────────────────────────────────────────
function initScrollAnimations() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.1 }
  );
  document.querySelectorAll("section, .project-card").forEach((el) => {
    el.classList.add("fade-in-section");
    observer.observe(el);
  });
}

// ─── INIT ─────────────────────────────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  typeText();
  loadGithubStats();
  animateSkillBars();
  initScrollAnimations();
  applyTranslations("en");
});