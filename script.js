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
    hero_title: '<span class="title-gradient">Decoding Neural Dynamics</span> & Artificial Minds',
    hero_btn_projects: "Explore Projects",
    download_cv: "Download CV",
    download_cv_full: "Download Curriculum Vitae",
    brain_3d_title: "3D Holographic Connectome",
    badge_360: "360° Interactive",
    hint_drag: "Drag to Rotate",
    hint_spikes: "Spiking Tracts",
    telemetry_membrane: "Membrane V:",
    telemetry_spike_state: "Spike State:",
    state_resting: "Resting",
    stimulate_btn: "Inject Synaptic Current",
    about_tag: "01 // Background",
    about_title: "About Me",
    about_lead: "I'm Efekan, a developer and computational neuroscience explorer focused on simulating artificial consciousness, neural decision-making, and biologically inspired systems through code.",
    about_sub: "Transitioning from backend systems to modeling neural mechanisms, I build biophysical spiking neural networks, transformer-brain alignment probes, and cognitive architectures simulating internal motivational drives.",
    stat_axon_desc: "Neuroanatomical decoding accuracy on Allen Brain Atlas (AxonLM)",
    stat_snn_desc: "Biophysical Spiking Neural Network & STDP synaptic plasticity",
    projects_tag: "02 // Systems & Research",
    projects_title: "Highlighted Projects",
    badge_featured_research: "Featured Research",
    badge_llm_neuro: "LLM ✕ Neuroscience",
    badge_cognitive_arch: "Cognitive Architecture",
    badge_artificial_consciousness: "Artificial Consciousness",
    badge_neuromorphic: "Neuromorphic",
    badge_biophysics: "Biophysics & C",
    badge_abm: "Multi-Agent ABM",
    badge_neural_decoding: "Neural Decoding",
    badge_mlops: "Production MLOps",
    view_github: "View on GitHub",
    view_project: "View",
    axonlm_desc: "Neuroanatomical connectivity is linearly decodable from transformer Feed-Forward Network (FFN) activations. Validated with AUC=0.963 against the Allen Brain Atlas.",
    neuroconscious_desc: "A biologically inspired, modular artificial consciousness engine. Simulates autonomous agents with internal emotional states, episodic/semantic/procedural memory, goal hierarchies, and DQN learning systems.",
    snn_stdp_desc: "Biologically plausible SNN simulator featuring LIF neurons, STDP unsupervised synaptic plasticity, Winner-Take-All lateral inhibition, and interactive Streamlit UI.",
    shipoffools_desc: "AI-driven social agent-based modeling (ABM) exploring human psychology, power dynamics, trust network formation, and dynamic anomaly detection.",
    braindecode_desc: "Decoding brain connectivity, cognitive confusion states, and EEG neural time-series data using Brian2 and signal processing pipelines.",
    drug_desc: "End-to-end production ML pipeline & Dockerized FastAPI service engineered with strict pre-commit validation, Pydantic data contracts, and predictive modeling.",
    research_tag: "03 // Academic & Open Science",
    research_title: "Research & Identifiers",
    research_zenodo_label: "Zenodo Open Science",
    research_zenodo_sub: "Preprints, datasets, and citable open scientific assets.",
    research_orcid_label: "ORCID Registry",
    research_orcid_sub: "Verified scientific researcher identity & contributions.",
    research_hf_label: "Hugging Face",
    research_hf_sub: "Bio-inspired model weights, datasets, and neural spaces.",
    research_medium_label: "Medium Research Blog",
    research_medium_sub: "Essays on computational neuroscience and artificial minds.",
    github_tag: "04 // Code Telemetry",
    github_title: "GitHub Telemetry",
    gh_loading: "Streaming GitHub repository telemetry...",
    gh_repos: "Repositories",
    gh_stars: "Total Stars",
    gh_forks: "Total Forks",
    gh_followers: "Followers",
    gh_distribution: "Core Language Distribution",
    gh_repos_count: "repos",
    skills_tag: "05 // Toolchain & Competencies",
    skills_title: "Skills & Technologies",
    skills_group_neuro: "Neuroscience & AI",
    skills_group_systems: "Systems & Engineering",
    languages_tag: "06 // Human Dialects",
    languages_title: "Languages",
    lang_tr_title: "Turkish",
    lang_tr_level: "Native Proficiency",
    lang_tr_pill: "Native",
    lang_en_title: "English",
    lang_en_level: "Professional Working (B2)",
    lang_en_pill: "B2",
    lang_fr_title: "French",
    lang_fr_level: "Elementary (A2)",
    lang_fr_pill: "A2",
    lang_nl_title: "Dutch",
    lang_nl_level: "Beginner (A1)",
    lang_nl_pill: "A1",
    contact_tag: "07 // Transmission",
    contact_title: "Let's Connect",
    contact_subtitle: "Open for collaborations on computational neuroscience, artificial consciousness research, and bio-inspired AI architectures.",
    footer: "© 2026 Efekan Salman • Built with bio-inspired neural sparks",
    footer_meta: "Computational Neuroscience & Spiking Dynamics"
  },
  tr: {
    nav_about: "Hakkımda",
    nav_projects: "Projeler",
    nav_research: "Araştırma",
    nav_skills: "Beceriler",
    nav_contact: "İletişim",
    hero_badge: "Hesaplamalı Nörobilim & Biyo-İlhamlı YZ",
    hero_title: '<span class="title-gradient">Nöral Dinamikleri</span> & Yapay Zihinleri Çözümlemek',
    hero_btn_projects: "Projeleri Keşfet",
    download_cv: "CV İndir",
    download_cv_full: "Özgeçmişi İndir (CV)",
    brain_3d_title: "3B Holografik Konnektom",
    badge_360: "360° İnteraktif",
    hint_drag: "Döndürmek İçin Sürükleyin",
    hint_spikes: "Spike Yolları",
    telemetry_membrane: "Membran V:",
    telemetry_spike_state: "Spike Durumu:",
    state_resting: "Dinlenmede",
    stimulate_btn: "Sinaptik Akım Enjekte Et",
    about_tag: "01 // Arka Plan",
    about_title: "Hakkımda",
    about_lead: "Hesaplamalı nörobilim alanına odaklanmış bir geliştiriciyim. Yapay bilinç, sinirsel karar mekanizmaları ve biyolojik olarak ilham alan sistemleri kod aracılığıyla simüle ediyorum.",
    about_sub: "Backend sistemlerinden sinirsel mekanizmaların modellenmesine geçiş yaparak biyofiziksel spiking sinir ağları, transformer-beyin hizalama probları ve içsel bilişsel dürtüleri simüle eden mimariler kuruyorum.",
    stat_axon_desc: "Allen Brain Atlas üzerinde nöroanatomik çözme doğruluğu (AxonLM)",
    stat_snn_desc: "Biyofiziksel Spiking Sinir Ağı & STDP sinaptik plastisite",
    projects_tag: "02 // Sistemler & Araştırma",
    projects_title: "Öne Çıkan Projeler",
    badge_featured_research: "Öne Çıkan Araştırma",
    badge_llm_neuro: "LLM ✕ Nörobilim",
    badge_cognitive_arch: "Bilişsel Mimari",
    badge_artificial_consciousness: "Yapay Bilinç",
    badge_neuromorphic: "Nöromorfik",
    badge_biophysics: "Biyofizik & C",
    badge_abm: "Çok Etmenli ABM",
    badge_neural_decoding: "Sinirsel Deşifre",
    badge_mlops: "Prodüksiyon MLOps",
    view_github: "GitHub'da İncele",
    view_project: "İncele",
    axonlm_desc: "Nöroanatomik bağlantısallık, transformer Feed-Forward Network (FFN) aktivasyonlarından doğrusal olarak deşifre edilebilir. Allen Brain Atlas üzerinde AUC=0.963 ile doğrulandı.",
    neuroconscious_desc: "İçsel duygusal durumları, epizodik/semantik/prosedürel bellek hiyerarşilerini ve DQN öğrenme sistemlerini simüle eden modüler yapay bilinç mimarisi.",
    snn_stdp_desc: "LIF nöronları, STDP denetimsiz sinaptik plastisite, Winner-Take-All lateral inhibisyon ve interaktif Streamlit arayüzü içeren biyolojik gerçekçi SNN simülatörü.",
    shipoffools_desc: "İnsan psikolojisini, güç dinamiklerini, güven ağlarını ve dinamik anomali tespitini modelleyen YZ destekli etmen-tabanlı (ABM) sosyal simülasyon.",
    braindecode_desc: "Brian2 ve sinyal işleme boru hatları kullanarak beyin konnektivitesi, zihinsel karmaşıklık durumları ve EEG zaman serilerinin deşifre edilmesi.",
    drug_desc: "Katı pre-commit doğrulaması, Pydantic veri sözleşmeleri ve tahmin modelleri içeren uçtan uca prodüksiyon ML mimarisi ve Dockerized FastAPI servisi.",
    research_tag: "03 // Akademik & Açık Bilim",
    research_title: "Araştırma & Tanımlayıcılar",
    research_zenodo_label: "Zenodo Açık Bilim",
    research_zenodo_sub: "Ön baskılar, veri setleri ve alıntılanabilir açık bilimsel varlıklar.",
    research_orcid_label: "ORCID Kaydı",
    research_orcid_sub: "Doğrulanmış bilimsel araştırmacı kimliği ve katkıları.",
    research_hf_label: "Hugging Face",
    research_hf_sub: "Biyo-ilhamlı model ağırlıkları, veri setleri ve sinirsel alanlar.",
    research_medium_label: "Medium Araştırma Blogu",
    research_medium_sub: "Hesaplamalı nörobilim ve yapay zihinler üzerine makaleler.",
    github_tag: "04 // Kod Telemetrisi",
    github_title: "GitHub Telemetrisi",
    gh_loading: "GitHub depo telemetrisi yükleniyor...",
    gh_repos: "Depolar",
    gh_stars: "Toplam Yıldız",
    gh_forks: "Toplam Fork",
    gh_followers: "Takipçiler",
    gh_distribution: "Temel Dil Dağılımı",
    gh_repos_count: "repo",
    skills_tag: "05 // Araçlar & Yetkinlikler",
    skills_title: "Beceriler & Teknolojiler",
    skills_group_neuro: "Nörobilim & YZ",
    skills_group_systems: "Sistemler & Mühendislik",
    languages_tag: "06 // Konuşulan Diller",
    languages_title: "Diller",
    lang_tr_title: "Türkçe",
    lang_tr_level: "Anadil",
    lang_tr_pill: "Anadil",
    lang_en_title: "İngilizce",
    lang_en_level: "Profesyonel Çalışma (B2)",
    lang_en_pill: "B2",
    lang_fr_title: "Fransızca",
    lang_fr_level: "Temel Seviye (A2)",
    lang_fr_pill: "A2",
    lang_nl_title: "Felemenkçe",
    lang_nl_level: "Başlangıç (A1)",
    lang_nl_pill: "A1",
    contact_tag: "07 // İletişim",
    contact_title: "Bağlantı Kuralım",
    contact_subtitle: "Hesaplamalı nörobilim, yapay bilinç araştırmaları ve biyo-ilhamlı YZ mimarileri konularında iş birliklerine açığım.",
    footer: "© 2026 Efekan Salman • Biyo-ilhamlı sinir kıvılcımlarıyla inşa edildi",
    footer_meta: "Hesaplamalı Nörobilim & Spiking Dinamikleri"
  },
  fr: {
    nav_about: "À propos",
    nav_projects: "Projets",
    nav_research: "Recherche",
    nav_skills: "Compétences",
    nav_contact: "Contact",
    hero_badge: "Neurosciences Computationnelles & IA Bio-Inspirée",
    hero_title: '<span class="title-gradient">Décoder la Dynamique Neuronale</span> & les Esprits Artificiels',
    hero_btn_projects: "Explorer les Projets",
    download_cv: "Télécharger CV",
    download_cv_full: "Télécharger le Curriculum Vitae",
    brain_3d_title: "Connectome Holographique 3D",
    badge_360: "360° Interactif",
    hint_drag: "Faites Glisser pour Tourner",
    hint_spikes: "Faisceaux d'Impulsions",
    telemetry_membrane: "V Membrane:",
    telemetry_spike_state: "État de Spike:",
    state_resting: "Au Repos",
    stimulate_btn: "Injecter un Courant Synaptique",
    about_tag: "01 // Contexte",
    about_title: "À Propos de Moi",
    about_lead: "Je suis Efekan, explorateur en neurosciences computationnelles axé sur la simulation de la conscience artificielle, de la prise de décision neuronale et des systèmes bio-inspirés.",
    about_sub: "Passant des systèmes backend à la modélisation neuronale, je conçois des réseaux à impulsions (SNN), des sondes d'alignement transformeur-cerveau et des architectures cognitives.",
    stat_axon_desc: "Précision de décodage neuroanatomique sur l'Allen Brain Atlas (AxonLM)",
    stat_snn_desc: "Réseaux neuronaux à impulsions (SNN) et plasticité synaptique STDP",
    projects_tag: "02 // Systèmes & Recherche",
    projects_title: "Projets en Vedette",
    badge_featured_research: "Recherche en Vedette",
    badge_llm_neuro: "LLM ✕ Neurosciences",
    badge_cognitive_arch: "Architecture Cognitive",
    badge_artificial_consciousness: "Conscience Artificielle",
    badge_neuromorphic: "Neuromorphique",
    badge_biophysics: "Biophysique & C",
    badge_abm: "ABM Multi-Agents",
    badge_neural_decoding: "Décodage Neural",
    badge_mlops: "MLOps de Production",
    view_github: "Voir sur GitHub",
    view_project: "Voir",
    axonlm_desc: "La connectivité neuroanatomique est linéairement décodable à partir des activations FFN des transformeurs. Validé avec AUC=0.963 sur Allen Brain Atlas.",
    neuroconscious_desc: "Moteur modulaire de conscience artificielle simulant des agents autonomes dotés d'états émotionnels internes, de hiérarchies de mémoire et d'apprentissage DQN.",
    snn_stdp_desc: "Simulateur SNN biologiquement plausible intégrant des neurones LIF, plasticité STDP, inhibition latérale WTA et tableau de bord Streamlit.",
    shipoffools_desc: "Simulation sociale multi-agents (ABM) explorant la psychologie humaine, la dynamique du pouvoir, les réseaux de confiance et la détection d'anomalies.",
    braindecode_desc: "Décodage de la connectivité cérébrale, des états cognitifs et des signaux EEG via Brian2 et pipelines de traitement du signal.",
    drug_desc: "Système de production ML de bout en bout et microservice FastAPI conteneurisé (Docker) avec validation stricte des données et modélisation prédictive.",
    research_tag: "03 // Académique & Science Ouverte",
    research_title: "Recherche & Identifiants",
    research_zenodo_label: "Zenodo Science Ouverte",
    research_zenodo_sub: "Prépublications, ensembles de données et actifs scientifiques ouverts.",
    research_orcid_label: "Registre ORCID",
    research_orcid_sub: "Identité et contributions de chercheur vérifiées.",
    research_hf_label: "Hugging Face",
    research_hf_sub: "Poids de modèles bio-inspirés, ensembles de données et espaces neuronaux.",
    research_medium_label: "Blog de Recherche Medium",
    research_medium_sub: "Essais sur les neurosciences computationnelles et les esprits artificiels.",
    github_tag: "04 // Télémétrie du Code",
    github_title: "Télémétrie GitHub",
    gh_loading: "Diffusion de la télémétrie GitHub...",
    gh_repos: "Dépôts",
    gh_stars: "Étoiles Totales",
    gh_forks: "Forks Totaux",
    gh_followers: "Abonnés",
    gh_distribution: "Distribution des Langages",
    gh_repos_count: "dépôts",
    skills_tag: "05 // Boîte à Outils & Compétences",
    skills_title: "Compétences & Technologies",
    skills_group_neuro: "Neurosciences & IA",
    skills_group_systems: "Systèmes & Ingénierie",
    languages_tag: "06 // Langues",
    languages_title: "Langues",
    lang_tr_title: "Turc",
    lang_tr_level: "Langue Maternelle",
    lang_tr_pill: "Natif",
    lang_en_title: "Anglais",
    lang_en_level: "Niveau Professionnel (B2)",
    lang_en_pill: "B2",
    lang_fr_title: "Français",
    lang_fr_level: "Élémentaire (A2)",
    lang_fr_pill: "A2",
    lang_nl_title: "Néerlandais",
    lang_nl_level: "Débutant (A1)",
    lang_nl_pill: "A1",
    contact_tag: "07 // Transmission",
    contact_title: "Connectons-nous",
    contact_subtitle: "Ouvert aux collaborations en neurosciences computationnelles, recherche sur la conscience artificielle et architectures d'IA bio-inspirée.",
    footer: "© 2026 Efekan Salman • Conçu avec des étincelles neuronales bio-inspirées",
    footer_meta: "Neurosciences Computationnelles & Dynamique d'Impulsions"
  },
  nl: {
    nav_about: "Over mij",
    nav_projects: "Projecten",
    nav_research: "Onderzoek",
    nav_skills: "Vaardigheden",
    nav_contact: "Contact",
    hero_badge: "Computationele Neurowetenschappen & Bio-Geïnspireerde AI",
    hero_title: '<span class="title-gradient">Neurale Dynamiek</span> & Kunstmatige Geesten Decoderen',
    hero_btn_projects: "Verken Projecten",
    download_cv: "Download CV",
    download_cv_full: "Curriculum Vitae Downloaden",
    brain_3d_title: "3D Holografisch Connectoom",
    badge_360: "360° Interactief",
    hint_drag: "Sleep om te Draaien",
    hint_spikes: "Spikende Banen",
    telemetry_membrane: "Membraan V:",
    telemetry_spike_state: "Spike-Toestand:",
    state_resting: "In Rust",
    stimulate_btn: "Synaptische Stroom Injecteren",
    about_tag: "01 // Achtergrond",
    about_title: "Over Mij",
    about_lead: "Ik ben Efekan, een ontwikkelaar en onderzoeker in de computationele neurowetenschappen, gericht op het simuleren van kunstmatig bewustzijn, neurale besluitvorming en biologisch geïnspireerde systemen via code.",
    about_sub: "Van backend-systemen ben ik overgestapt naar het modelleren van neurale mechanismen. Ik bouw biofysische spiking neurale netwerken, transformator-brein afstemmingsprobes en cognitieve architecturen die interne motivaties simuleren.",
    stat_axon_desc: "Neuroanatomische decodeernauwkeurigheid op de Allen Brain Atlas (AxonLM)",
    stat_snn_desc: "Biofysisch Spiking Neuraal Netwerk & STDP synaptische plasticiteit",
    projects_tag: "02 // Systemen & Onderzoek",
    projects_title: "Uitgelichte Projecten",
    badge_featured_research: "Uitgelicht Onderzoek",
    badge_llm_neuro: "LLM ✕ Neurowetenschappen",
    badge_cognitive_arch: "Cognitieve Architectuur",
    badge_artificial_consciousness: "Kunstmatig Bewustzijn",
    badge_neuromorphic: "Neuromorf",
    badge_biophysics: "Biofysica & C",
    badge_abm: "Multi-Agent ABM",
    badge_neural_decoding: "Neurale Decodering",
    badge_mlops: "Productie MLOps",
    view_github: "Bekijk op GitHub",
    view_project: "Bekijk",
    axonlm_desc: "Neuroanatomische connectiviteit is lineair decodeerbaar uit activaties van het Feed-Forward Netwerk (FFN) van transformatoren. Gevalideerd met AUC=0.963 op de Allen Brain Atlas.",
    neuroconscious_desc: "Een biologisch geïnspireerde, modulaire kunstmatige bewustzijnsmotor die autonome agenten simuleert met interne emotionele toestanden, episodisch/semantisch/procedureel geheugen en DQN-leersystemen.",
    snn_stdp_desc: "Biologisch plausibele SNN-simulator met LIF-neuronen, STDP ongesuperviseerde synaptische plasticiteit, Winner-Take-All laterale inhibitie en een interactief Streamlit-dashboard.",
    shipoffools_desc: "Door AI aangedreven sociale agent-gebaseerde modellering (ABM) die menselijke psychologie, machtsdynamieken, vertrouwensnetwerken en dynamische anomaliedetectie onderzoekt.",
    braindecode_desc: "Het decoderen van hersenconnectiviteit, cognitieve verwarringstoestanden en EEG-tijdreeksen met Brian2 en signaalverwerkingspijplijnen.",
    drug_desc: "End-to-end productie ML-pijplijn & gecontaineriseerde FastAPI-service (Docker) met strikte pre-commit validatie, Pydantic datacontracten en voorspellende modellen.",
    research_tag: "03 // Academisch & Open Science",
    research_title: "Onderzoek & Identificatoren",
    research_zenodo_label: "Zenodo Open Science",
    research_zenodo_sub: "Preprints, datasets en citeerbare open wetenschappelijke bronnen.",
    research_orcid_label: "ORCID Register",
    research_orcid_sub: "Geverifieerde identiteit en bijdragen van wetenschappelijk onderzoeker.",
    research_hf_label: "Hugging Face",
    research_hf_sub: "Bio-geïnspireerde modelgewichten, datasets en neurale ruimtes.",
    research_medium_label: "Medium Onderzoeksblog",
    research_medium_sub: "Essays over computationele neurowetenschappen en kunstmatige geesten.",
    github_tag: "04 // Code Telemetrie",
    github_title: "GitHub Telemetrie",
    gh_loading: "GitHub repository telemetrie streamen...",
    gh_repos: "Repositories",
    gh_stars: "Totale Sterren",
    gh_forks: "Totale Forks",
    gh_followers: "Volgers",
    gh_distribution: "Primaire Taaldistributie",
    gh_repos_count: "repos",
    skills_tag: "05 // Toolchain & Competenties",
    skills_title: "Vaardigheden & Technologieën",
    skills_group_neuro: "Neurowetenschappen & AI",
    skills_group_systems: "Systemen & Engineering",
    languages_tag: "06 // Gesproken Talen",
    languages_title: "Talen",
    lang_tr_title: "Turks",
    lang_tr_level: "Moedertaal",
    lang_tr_pill: "Moedertaal",
    lang_en_title: "Engels",
    lang_en_level: "Professioneel Werkend (B2)",
    lang_en_pill: "B2",
    lang_fr_title: "Frans",
    lang_fr_level: "Basisniveau (A2)",
    lang_fr_pill: "A2",
    lang_nl_title: "Nederlands",
    lang_nl_level: "Beginner (A1)",
    lang_nl_pill: "A1",
    contact_tag: "07 // Transmissie",
    contact_title: "Laten we Verbinding Maken",
    contact_subtitle: "Open voor samenwerkingen op het gebied van computationele neurowetenschappen, kunstmatig bewustzijnsonderzoek en bio-geïnspireerde AI-architecturen.",
    footer: "© 2026 Efekan Salman • Gebouwd met bio-geïnspireerde neurale vonken",
    footer_meta: "Computationele Neurowetenschappen & Spiking Dynamiek"
  }
};

// ─── THEME PALETTES & SWITCHER ───────────────────────────────────────────────
const themePalettes = {
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
};

let activeSynapticCanvas = null;
let activeOscilloscope = null;
let activeBrain3D = null;

/**
 * Applies a theme across CSS root, Canvas background, 3D Brain, and Oscilloscope.
 * 
 * @param {string} theme - Theme identifier ('cyan', 'violet', 'indigo').
 * @returns {void}
 */
function applyTheme(theme) {
  if (!themePalettes[theme]) theme = "cyan";
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
  nl: [
    "Simuleren van kunstmatige geesten & bewustzijn...",
    "Decoderen van transformator-activaties met Allen Brain Atlas...",
    "Modelleren van biofysische Leaky Integrate-and-Fire neuronen...",
    "Ontwerpen van interne drijfveren & synthetische autonomie...",
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
  localStorage.setItem("neuro_lang", lang);

  const langSelect = document.getElementById("langSelect");
  if (langSelect && langSelect.value !== lang) {
    langSelect.value = lang;
  }

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (t[key] !== undefined) {
      el.innerHTML = t[key];
    }
  });

  // Re-render GitHub telemetry with new language if already cached
  if (cachedGithubStats) {
    renderGithubStats(cachedGithubStats);
  }

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
    this.waveformColor = "#22d3ee";

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
let cachedGithubStats = null;

function renderGithubStats(data) {
  const container = document.getElementById("github-stats-container");
  if (!container || !data) return;

  const t = translations[currentLang] || translations.en;

  container.innerHTML = `
    <div class="gh-stats-grid">
      <div class="gh-stat-card">
        <span class="gh-stat-icon">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
        </span>
        <span class="gh-stat-value">${data.user.public_repos}</span>
        <span class="gh-stat-label">${t.gh_repos}</span>
      </div>
      <div class="gh-stat-card">
        <span class="gh-stat-icon">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
        </span>
        <span class="gh-stat-value">${data.totalStars}</span>
        <span class="gh-stat-label">${t.gh_stars}</span>
      </div>
      <div class="gh-stat-card">
        <span class="gh-stat-icon">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="6" y1="3" x2="6" y2="15"></line><circle cx="18" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="M18 9a9 9 0 0 1-9 9"></path></svg>
        </span>
        <span class="gh-stat-value">${data.totalForks}</span>
        <span class="gh-stat-label">${t.gh_forks}</span>
      </div>
      <div class="gh-stat-card">
        <span class="gh-stat-icon">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
        </span>
        <span class="gh-stat-value">${data.user.followers}</span>
        <span class="gh-stat-label">${t.gh_followers}</span>
      </div>
    </div>
    <div class="gh-languages">
      <p style="margin-bottom:14px; color: var(--accent-sky); font-weight:600; font-family: var(--font-brand);">${t.gh_distribution}</p>
      ${data.sortedLangs
      .map(
        ([lang, count]) => `
        <div class="lang-bar-wrap">
          <span class="lang-name">${lang}</span>
          <div class="lang-bar-bg">
            <div class="lang-bar-fill" style="width:${Math.min(
          100,
          (count / data.reposLength) * 100 * 3
        )}%"></div>
          </div>
          <span class="lang-count">${count} ${t.gh_repos_count}</span>
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
}

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

    cachedGithubStats = { user, totalStars, totalForks, sortedLangs, reposLength: repos.length };
    renderGithubStats(cachedGithubStats);
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
  let initialTheme = localStorage.getItem("neuro_theme");
  if (!themePalettes[initialTheme]) initialTheme = "cyan";
  const palette = themePalettes[initialTheme];

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

  // Apply saved or default language
  const savedLang = localStorage.getItem("neuro_lang") || "en";
  const langSelect = document.getElementById("langSelect");
  if (langSelect) langSelect.value = savedLang;
  applyTranslations(savedLang);

  loadGithubStats();
  animateSkillBars();
});
