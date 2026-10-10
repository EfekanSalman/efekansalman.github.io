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
    nav_all_systems: "All Systems",
    menu_open: "Open menu",
    menu_close: "Close menu",
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
    nav_all_systems: "Tüm Sistemler",
    menu_open: "Menüyü aç",
    menu_close: "Menüyü kapat",
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
    nav_all_systems: "Tous les systèmes",
    menu_open: "Ouvrir le menu",
    menu_close: "Fermer le menu",
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
    nav_all_systems: "Alle systemen",
    menu_open: "Menu openen",
    menu_close: "Menu sluiten",
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

// Copy for the featured case studies and the cinematic interface.
const caseStudyTranslations = {
  en: {
    nav_projects: "Case Studies", nav_other_projects: "Other Projects",
    projects_tag: "02 // Further Work", projects_title: "Other Projects",
    hero_cinematic_title: '<span class="title-gradient">Decoding Neural Dynamics</span><br><span class="title-sub-giant">&amp; Artificial Minds</span>',
    lif_hud_title: "Biophysical LIF HUD", lif_live: "Live Spiking",
    hero_scroll_cue: "SCROLL TO EXPLORE THE CONNECTOME",
    theme_select_label: "Select color theme", language_select_label: "Select language",
    theme_cyan: "Electric Cyan", theme_violet: "Cosmic Violet", theme_indigo: "Obsidian Indigo",
    nav_aria: "Primary navigation", locale_nav_label: "Language versions", cases_aria: "Featured project case studies", hud_aria: "Neural telemetry",
    hud_scan: "NEURAL SCAN:", hud_connectome: "CONNECTOME:", hud_firing: "FIRING RATE:",
    hud_rest: "SYNAPTIC REST", hud_connectome_status: "CONNECTOME SCAN",
    hud_probe: "COGNITIVE PROBE", hud_transmission: "NEURAL TRANSMISSION",
    osc_spike: "SPIKE!", osc_refractory: "Refractory", osc_integrating: "Integrating",
    case_problem: "Problem", case_contribution: "My contribution", case_method: "Method", case_result: "Result",
    case_source: "Code and methods on GitHub", case_architecture: "ARCHITECTURE SNAPSHOT",
    case_axon_act: "CASE 01 // TRANSFORMER–BRAIN ALIGNMENT", case_axon_badge: "LLM × Neuroscience",
    case_axon_title: "AxonLM: probing neuroanatomy in a language model",
    case_axon_problem: "Can transformer representations encode neuroanatomical connectivity?",
    case_axon_contribution: "Built the modular PyTorch GPT-2 research codebase and FFN probing scripts.",
    case_axon_method: "Linear probes on feed-forward activations, compared with Allen Brain Atlas connectivity.",
    case_axon_result: "The repository reports AUC 0.963 for neuroanatomical decoding.",
    case_axon_visual_label: "REPORTED AUC",
    case_axon_visual_note: "Value reported in the AxonLM repository; this is a scale marker, not a ROC curve.",
    case_axon_chart_label: "Reported AxonLM AUC: 0.963 on a zero to one scale",
    case_neuro_act: "CASE 02 // COGNITIVE ARCHITECTURE", case_neuro_badge: "Agent simulation",
    case_neuro_title: "NeuroConscious: an extensible agent testbed",
    case_neuro_problem: "How can internal needs and mood shape an agent's decisions in a virtual world?",
    case_neuro_contribution: "Designed the modular agent architecture and its internal state, mood, and motivation components.",
    case_neuro_method: "Object-oriented Python modules connect changing internal state to action selection and environment interaction.",
    case_neuro_result: "An open-source testbed for experimenting with autonomous, biologically inspired behavior.",
    case_neuro_flow_1: "Internal state", case_neuro_flow_2: "Mood &amp; motivation", case_neuro_flow_3: "Agent action",
    case_snn_act: "CASE 03 // SYNAPTIC PLASTICITY", case_snn_badge: "Neuromorphic simulation",
    case_snn_title: "STDP-SNN: exploring spike-driven learning",
    case_snn_problem: "How do spike timing and lateral competition change synaptic weights?",
    case_snn_contribution: "Built a spiking-network simulator with an interactive exploration interface.",
    case_snn_method: "Leaky integrate-and-fire neurons, STDP learning, and winner-take-all inhibition.",
    case_snn_result: "A simulator for observing spike activity and plasticity; no benchmark score is published here.",
    case_snn_flow_1: "Input current", case_snn_flow_2: "LIF spikes", case_snn_flow_3: "STDP update"
  },
  tr: {
    nav_projects: "Vaka Çalışmaları", nav_other_projects: "Diğer Projeler",
    projects_tag: "02 // Diğer Çalışmalar", projects_title: "Diğer Projeler",
    hero_cinematic_title: '<span class="title-gradient">Nöral Dinamikleri</span><br><span class="title-sub-giant">ve Yapay Zihinleri Çözümlemek</span>',
    lif_hud_title: "Biyofiziksel LIF Paneli", lif_live: "Canlı Spike",
    hero_scroll_cue: "KONNEKTOMU KEŞFETMEK İÇİN KAYDIR",
    theme_select_label: "Renk temasını seç", language_select_label: "Dil seç",
    theme_cyan: "Elektrik Mavisi", theme_violet: "Kozmik Mor", theme_indigo: "Koyu İndigo",
    nav_aria: "Ana gezinme", locale_nav_label: "Dil sürümleri", cases_aria: "Öne çıkan proje vaka çalışmaları", hud_aria: "Sinirsel telemetri",
    hud_scan: "SİNİRSEL TARAMA:", hud_connectome: "KONNEKTOM:", hud_firing: "ATEŞLEME HIZI:",
    hud_rest: "SİNAPTİK DİNLENME", hud_connectome_status: "KONNEKTOM TARAMASI",
    hud_probe: "BİLİŞSEL PROB", hud_transmission: "SİNİRSEL İLETİM",
    osc_spike: "SPIKE!", osc_refractory: "Refrakter", osc_integrating: "Bütünleştiriyor",
    case_problem: "Problem", case_contribution: "Katkım", case_method: "Yöntem", case_result: "Sonuç",
    case_source: "Kod ve yöntemler GitHub'da", case_architecture: "MİMARİ AKIŞ",
    case_axon_act: "VAKA 01 // TRANSFORMER–BEYİN HİZALAMASI", case_axon_badge: "LLM × Nörobilim",
    case_axon_title: "AxonLM: dil modelinde nöroanatomi probu",
    case_axon_problem: "Transformer temsilleri nöroanatomik bağlantısallığı kodlayabilir mi?",
    case_axon_contribution: "Modüler PyTorch GPT-2 araştırma altyapısını ve FFN prob betiklerini geliştirdim.",
    case_axon_method: "İleri beslemeli katman aktivasyonlarını doğrusal problarla Allen Brain Atlas bağlantısallığıyla karşılaştırdım.",
    case_axon_result: "Proje deposu nöroanatomik çözümleme için AUC 0.963 bildiriyor.",
    case_axon_visual_label: "BİLDİRİLEN AUC",
    case_axon_visual_note: "AxonLM deposunda bildirilen değer; bu bir ROC eğrisi değil, ölçek işaretidir.",
    case_axon_chart_label: "AxonLM için bildirilen AUC: sıfır ile bir ölçeğinde 0.963",
    case_neuro_act: "VAKA 02 // BİLİŞSEL MİMARİ", case_neuro_badge: "Etmen simülasyonu",
    case_neuro_title: "NeuroConscious: genişletilebilir etmen deney alanı",
    case_neuro_problem: "İçsel ihtiyaçlar ve ruh hâli sanal dünyadaki etmen kararlarını nasıl etkiler?",
    case_neuro_contribution: "Modüler etmen mimarisini; içsel durum, ruh hâli ve motivasyon bileşenlerini tasarladım.",
    case_neuro_method: "Nesne yönelimli Python modülleri değişen içsel durumu eylem seçimi ve ortam etkileşimine bağlıyor.",
    case_neuro_result: "Biyolojik esinli otonom davranışı denemek için açık kaynaklı bir deney alanı.",
    case_neuro_flow_1: "İçsel durum", case_neuro_flow_2: "Ruh hâli ve motivasyon", case_neuro_flow_3: "Etmen eylemi",
    case_snn_act: "VAKA 03 // SİNAPTİK PLASTİSİTE", case_snn_badge: "Nöromorfik simülasyon",
    case_snn_title: "STDP-SNN: spike temelli öğrenmeyi incelemek",
    case_snn_problem: "Spike zamanlaması ve yanal rekabet sinaptik ağırlıkları nasıl değiştirir?",
    case_snn_contribution: "Etkileşimli inceleme arayüzüne sahip bir spiking ağ simülatörü geliştirdim.",
    case_snn_method: "LIF nöronları, STDP öğrenmesi ve kazanan hepsini alır inhibisyonu.",
    case_snn_result: "Spike etkinliğini ve plastisiteyi gözlemlemeye yarayan simülatör; burada yayımlanmış karşılaştırma puanı yok.",
    case_snn_flow_1: "Giriş akımı", case_snn_flow_2: "LIF spike'ları", case_snn_flow_3: "STDP güncellemesi"
  },
  fr: {
    nav_projects: "Études de cas", nav_other_projects: "Autres projets",
    projects_tag: "02 // Autres travaux", projects_title: "Autres projets",
    hero_cinematic_title: '<span class="title-gradient">Décoder la dynamique neuronale</span><br><span class="title-sub-giant">et les esprits artificiels</span>',
    lif_hud_title: "Tableau LIF biophysique", lif_live: "Impulsions en direct",
    hero_scroll_cue: "DÉFILER POUR EXPLORER LE CONNECTOME",
    theme_select_label: "Choisir le thème de couleur", language_select_label: "Choisir la langue",
    theme_cyan: "Cyan électrique", theme_violet: "Violet cosmique", theme_indigo: "Indigo obscur",
    nav_aria: "Navigation principale", locale_nav_label: "Versions linguistiques", cases_aria: "Études de cas des projets phares", hud_aria: "Télémétrie neuronale",
    hud_scan: "BALAYAGE NEURAL :", hud_connectome: "CONNECTOME :", hud_firing: "FRÉQUENCE :",
    hud_rest: "REPOS SYNAPTIQUE", hud_connectome_status: "BALAYAGE DU CONNECTOME",
    hud_probe: "SONDE COGNITIVE", hud_transmission: "TRANSMISSION NEURONALE",
    osc_spike: "IMPULSION !", osc_refractory: "Réfractaire", osc_integrating: "Intégration",
    case_problem: "Problème", case_contribution: "Ma contribution", case_method: "Méthode", case_result: "Résultat",
    case_source: "Code et méthodes sur GitHub", case_architecture: "APERÇU DE L'ARCHITECTURE",
    case_axon_act: "CAS 01 // ALIGNEMENT TRANSFORMEUR–CERVEAU", case_axon_badge: "LLM × Neurosciences",
    case_axon_title: "AxonLM : sonder la neuroanatomie d'un modèle de langage",
    case_axon_problem: "Les représentations d'un transformeur encodent-elles la connectivité neuroanatomique ?",
    case_axon_contribution: "J'ai développé la base de recherche GPT-2 modulaire en PyTorch et les scripts de sondage FFN.",
    case_axon_method: "Sondes linéaires sur les activations des couches feed-forward, comparées à la connectivité de l'Allen Brain Atlas.",
    case_axon_result: "Le dépôt indique une AUC de 0,963 pour le décodage neuroanatomique.",
    case_axon_visual_label: "AUC INDIQUÉE",
    case_axon_visual_note: "Valeur indiquée dans le dépôt AxonLM ; il s'agit d'un repère d'échelle, pas d'une courbe ROC.",
    case_axon_chart_label: "AUC AxonLM indiquée : 0,963 sur une échelle de zéro à un",
    case_neuro_act: "CAS 02 // ARCHITECTURE COGNITIVE", case_neuro_badge: "Simulation d'agents",
    case_neuro_title: "NeuroConscious : banc d'essai extensible pour agents",
    case_neuro_problem: "Comment les besoins internes et l'humeur orientent-ils les décisions d'un agent virtuel ?",
    case_neuro_contribution: "J'ai conçu l'architecture modulaire et ses composants d'état interne, d'humeur et de motivation.",
    case_neuro_method: "Des modules Python orientés objet relient l'état interne à la sélection d'actions et aux interactions avec l'environnement.",
    case_neuro_result: "Un banc d'essai open source pour expérimenter les comportements autonomes bio-inspirés.",
    case_neuro_flow_1: "État interne", case_neuro_flow_2: "Humeur et motivation", case_neuro_flow_3: "Action de l'agent",
    case_snn_act: "CAS 03 // PLASTICITÉ SYNAPTIQUE", case_snn_badge: "Simulation neuromorphique",
    case_snn_title: "STDP-SNN : explorer l'apprentissage par impulsions",
    case_snn_problem: "Comment le timing des impulsions et la compétition latérale modifient-ils les poids synaptiques ?",
    case_snn_contribution: "J'ai développé un simulateur de réseau à impulsions avec une interface d'exploration interactive.",
    case_snn_method: "Neurones LIF, apprentissage STDP et inhibition winner-take-all.",
    case_snn_result: "Un simulateur pour observer l'activité et la plasticité ; aucun score de référence n'est publié ici.",
    case_snn_flow_1: "Courant d'entrée", case_snn_flow_2: "Impulsions LIF", case_snn_flow_3: "Mise à jour STDP"
  },
  nl: {
    nav_projects: "Casestudies", nav_other_projects: "Andere projecten",
    projects_tag: "02 // Overig werk", projects_title: "Andere projecten",
    hero_cinematic_title: '<span class="title-gradient">Neurale dynamiek ontrafelen</span><br><span class="title-sub-giant">en kunstmatige geesten</span>',
    lif_hud_title: "Biofysisch LIF-paneel", lif_live: "Live spikes",
    hero_scroll_cue: "SCROLL OM HET CONNECTOOM TE VERKENNEN",
    theme_select_label: "Kies kleurthema", language_select_label: "Kies taal",
    theme_cyan: "Elektrisch cyaan", theme_violet: "Kosmisch violet", theme_indigo: "Donker indigo",
    nav_aria: "Hoofdnavigatie", locale_nav_label: "Taalversies", cases_aria: "Casestudies van uitgelichte projecten", hud_aria: "Neurale telemetrie",
    hud_scan: "NEURALE SCAN:", hud_connectome: "CONNECTOOM:", hud_firing: "VUURFREQUENTIE:",
    hud_rest: "SYNAPTISCHE RUST", hud_connectome_status: "CONNECTOOMSCAN",
    hud_probe: "COGNITIEVE PROBE", hud_transmission: "NEURALE TRANSMISSIE",
    osc_spike: "SPIKE!", osc_refractory: "Refractair", osc_integrating: "Integreert",
    case_problem: "Probleem", case_contribution: "Mijn bijdrage", case_method: "Methode", case_result: "Resultaat",
    case_source: "Code en methoden op GitHub", case_architecture: "ARCHITECTUUROVERZICHT",
    case_axon_act: "CASE 01 // TRANSFORMER–BREINUITLIJNING", case_axon_badge: "LLM × Neurowetenschap",
    case_axon_title: "AxonLM: neuroanatomie peilen in een taalmodel",
    case_axon_problem: "Kunnen transformerrepresentaties neuroanatomische connectiviteit vastleggen?",
    case_axon_contribution: "Ik bouwde de modulaire PyTorch GPT-2-onderzoeksbasis en FFN-probescripts.",
    case_axon_method: "Lineaire probes op feed-forward-activaties, vergeleken met connectiviteit uit de Allen Brain Atlas.",
    case_axon_result: "De repository rapporteert AUC 0,963 voor neuroanatomische decodering.",
    case_axon_visual_label: "GERAPPORTEERDE AUC",
    case_axon_visual_note: "Waarde uit de AxonLM-repository; dit is een schaalmarkering, geen ROC-curve.",
    case_axon_chart_label: "Gerapporteerde AxonLM-AUC: 0,963 op een schaal van nul tot één",
    case_neuro_act: "CASE 02 // COGNITIEVE ARCHITECTUUR", case_neuro_badge: "Agentsimulatie",
    case_neuro_title: "NeuroConscious: uitbreidbare testomgeving voor agents",
    case_neuro_problem: "Hoe beïnvloeden interne behoeften en stemming beslissingen van een agent in een virtuele wereld?",
    case_neuro_contribution: "Ik ontwierp de modulaire agentarchitectuur en de onderdelen voor interne toestand, stemming en motivatie.",
    case_neuro_method: "Objectgeoriënteerde Python-modules koppelen de interne toestand aan actiekeuze en omgevingsinteractie.",
    case_neuro_result: "Een open-source testomgeving voor autonoom, biologisch geïnspireerd gedrag.",
    case_neuro_flow_1: "Interne toestand", case_neuro_flow_2: "Stemming en motivatie", case_neuro_flow_3: "Actie van agent",
    case_snn_act: "CASE 03 // SYNAPTISCHE PLASTICITEIT", case_snn_badge: "Neuromorfe simulatie",
    case_snn_title: "STDP-SNN: leren op basis van spikes verkennen",
    case_snn_problem: "Hoe veranderen spiketiming en laterale competitie synaptische gewichten?",
    case_snn_contribution: "Ik bouwde een spiking-netwerksimulator met een interactieve verkenningsinterface.",
    case_snn_method: "Leaky integrate-and-fire-neuronen, STDP-leren en winner-take-all-remming.",
    case_snn_result: "Een simulator voor spikeactiviteit en plasticiteit; hier is geen benchmarkscore gepubliceerd.",
    case_snn_flow_1: "Invoerstroom", case_snn_flow_2: "LIF-spikes", case_snn_flow_3: "STDP-update"
  }
};
Object.keys(caseStudyTranslations).forEach((lang) => Object.assign(translations[lang], caseStudyTranslations[lang]));

const labTranslations = {
  "en": {
    "nav_lab": "Lab",
    "lab_open": "Try the interactive lab",
    "lab_tag": "INTERACTIVE FIELD NOTE / 01",
    "lab_title": "Make a neuron fire. Change a synapse.",
    "lab_intro": "Two small experiments show how input current produces spikes and how spike order changes a connection.",
    "lab_model": "Teaching model",
    "lab_lif_title": "When does a neuron fire?",
    "lab_lif_intro": "Increase the input current. Voltage rises to a threshold, then the neuron spikes and resets.",
    "lab_current": "Input current",
    "lab_threshold": "Firing threshold",
    "lab_voltage_chart": "Graph of simulated membrane voltage over 200 milliseconds",
    "lab_voltage": "MEMBRANE VOLTAGE",
    "lab_lif_caption": "Euler simulation: τ = 20 ms, rest/reset = −70 mV, refractory period = 4 ms.",
    "lab_stdp_title": "Which spike comes first?",
    "lab_stdp_intro": "Move the postsynaptic spike. Pre before post strengthens this example synapse; reversing the order weakens it.",
    "lab_timing": "Post − pre timing",
    "lab_timing_chart": "Timeline comparing presynaptic and postsynaptic spike times",
    "lab_pre": "Presynaptic",
    "lab_post": "Postsynaptic",
    "lab_weight_change": "EXAMPLE WEIGHT CHANGE",
    "lab_stdp_caption": "Illustrative pair STDP: A+ = 0.20, A− = 0.22, τ = 20 ms. One pair; no network training or measured result.",
    "lab_note": "A teaching model inspired by the STDP-SNN project; values are illustrative.",
    "lab_source": "Explore the project code"
  },
  "tr": {
    "nav_lab": "Laboratuvar",
    "lab_open": "Etkileşimli laboratuvarı dene",
    "lab_tag": "ETKİLEŞİMLİ DENEY NOTU / 01",
    "lab_title": "Nöronu ateşle. Sinapsı değiştir.",
    "lab_intro": "İki kısa deney, giriş akımının spike ürettiğini ve spike sırasının bağlantıyı nasıl değiştirdiğini gösteriyor.",
    "lab_model": "Eğitim modeli",
    "lab_lif_title": "Nöron ne zaman ateşler?",
    "lab_lif_intro": "Giriş akımını artır. Gerilim eşiğe yükselir; nöron spike üretir ve başlangıç değerine döner.",
    "lab_current": "Giriş akımı",
    "lab_threshold": "Ateşleme eşiği",
    "lab_voltage_chart": "200 milisaniyelik simüle edilmiş membran gerilimi grafiği",
    "lab_voltage": "MEMBRAN GERİLİMİ",
    "lab_lif_caption": "Euler simülasyonu: τ = 20 ms, dinlenme/sıfırlama = −70 mV, refrakter süre = 4 ms.",
    "lab_stdp_title": "Hangi spike önce gelir?",
    "lab_stdp_intro": "Postsinaptik spike zamanını değiştir. Bu örnekte pre önce gelirse bağlantı güçlenir; sıra tersine dönerse zayıflar.",
    "lab_timing": "Post − pre zaman farkı",
    "lab_timing_chart": "Presinaptik ve postsinaptik spike zamanlarını karşılaştıran çizelge",
    "lab_pre": "Presinaptik",
    "lab_post": "Postsinaptik",
    "lab_weight_change": "ÖRNEK AĞIRLIK DEĞİŞİMİ",
    "lab_stdp_caption": "Örnek çiftli STDP: A+ = 0,20, A− = 0,22, τ = 20 ms. Tek spike çifti; ağ eğitimi veya ölçülmüş sonuç değildir.",
    "lab_note": "STDP-SNN projesinden esinlenen bir eğitim modeli; değerler örnektir.",
    "lab_source": "Proje kodunu incele"
  },
  "fr": {
    "nav_lab": "Laboratoire",
    "lab_open": "Essayer le laboratoire interactif",
    "lab_tag": "NOTE EXPÉRIMENTALE / 01",
    "lab_title": "Déclenchez un neurone. Modifiez une synapse.",
    "lab_intro": "Deux expériences montrent comment le courant produit des impulsions et comment leur ordre modifie une connexion.",
    "lab_model": "Modèle pédagogique",
    "lab_lif_title": "Quand un neurone émet-il une impulsion ?",
    "lab_lif_intro": "Augmentez le courant d'entrée. La tension atteint un seuil, puis le neurone émet une impulsion et revient à sa valeur initiale.",
    "lab_current": "Courant d'entrée",
    "lab_threshold": "Seuil de déclenchement",
    "lab_voltage_chart": "Graphique de la tension membranaire simulée sur 200 millisecondes",
    "lab_voltage": "TENSION MEMBRANAIRE",
    "lab_lif_caption": "Simulation d'Euler : τ = 20 ms, repos/réinitialisation = −70 mV, période réfractaire = 4 ms.",
    "lab_stdp_title": "Quelle impulsion vient en premier ?",
    "lab_stdp_intro": "Déplacez l'impulsion postsynaptique. Dans cet exemple, pré avant post renforce la synapse ; l'ordre inverse l'affaiblit.",
    "lab_timing": "Temps post − pré",
    "lab_timing_chart": "Chronologie comparant les impulsions présynaptique et postsynaptique",
    "lab_pre": "Présynaptique",
    "lab_post": "Postsynaptique",
    "lab_weight_change": "VARIATION DE POIDS SIMULÉE",
    "lab_stdp_caption": "STDP illustrative par paire : A+ = 0,20, A− = 0,22, τ = 20 ms. Une paire ; aucun entraînement de réseau ni résultat mesuré.",
    "lab_note": "Modèle pédagogique inspiré du projet STDP-SNN ; les valeurs sont illustratives.",
    "lab_source": "Explorer le code du projet"
  },
  "nl": {
    "nav_lab": "Lab",
    "lab_open": "Probeer het interactieve lab",
    "lab_tag": "INTERACTIEVE ONDERZOEKSNOTITIE / 01",
    "lab_title": "Laat een neuron vuren. Verander een synaps.",
    "lab_intro": "Twee korte experimenten tonen hoe invoerstroom spikes opwekt en hoe de volgorde van spikes een verbinding verandert.",
    "lab_model": "Onderwijsmodel",
    "lab_lif_title": "Wanneer vuurt een neuron?",
    "lab_lif_intro": "Verhoog de invoerstroom. De spanning stijgt tot de drempel; daarna vuurt het neuron en keert terug naar de beginwaarde.",
    "lab_current": "Invoerstroom",
    "lab_threshold": "Vuurdrempel",
    "lab_voltage_chart": "Grafiek van gesimuleerde membraanspanning over 200 milliseconden",
    "lab_voltage": "MEMBRAANSPANNING",
    "lab_lif_caption": "Eulersimulatie: τ = 20 ms, rust/reset = −70 mV, refractaire periode = 4 ms.",
    "lab_stdp_title": "Welke spike komt eerst?",
    "lab_stdp_intro": "Verschuif de postsynaptische spike. In dit voorbeeld versterkt pre vóór post de synaps; de omgekeerde volgorde verzwakt haar.",
    "lab_timing": "Tijd post − pre",
    "lab_timing_chart": "Tijdlijn met presynaptische en postsynaptische spiketijden",
    "lab_pre": "Presynaptisch",
    "lab_post": "Postsynaptisch",
    "lab_weight_change": "VOORBEELD VAN GEWICHTSVERANDERING",
    "lab_stdp_caption": "Illustratieve STDP per paar: A+ = 0,20, A− = 0,22, τ = 20 ms. Eén paar; geen netwerktraining of gemeten resultaat.",
    "lab_note": "Een onderwijsmodel geïnspireerd op het STDP-SNN-project; de waarden zijn illustratief.",
    "lab_source": "Bekijk de projectcode"
  }
};
labTranslations.en.lab_reading = "Background reading:";
labTranslations.tr.lab_reading = "Kaynaklar:";
labTranslations.fr.lab_reading = "Pour aller plus loin :";
labTranslations.nl.lab_reading = "Achtergrondliteratuur:";
labTranslations.en.lab_lif_caption = "Euler simulation: τ = 20 ms, R = 10 MΩ, rest/reset = −70 mV, refractory period = 4 ms.";
labTranslations.tr.lab_lif_caption = "Euler simülasyonu: τ = 20 ms, R = 10 MΩ, dinlenme/sıfırlama = −70 mV, refrakter süre = 4 ms.";
labTranslations.fr.lab_lif_caption = "Simulation d'Euler : τ = 20 ms, R = 10 MΩ, repos/réinitialisation = −70 mV, période réfractaire = 4 ms.";
labTranslations.nl.lab_lif_caption = "Eulersimulatie: τ = 20 ms, R = 10 MΩ, rust/reset = −70 mV, refractaire periode = 4 ms.";
Object.keys(labTranslations).forEach((lang) => Object.assign(translations[lang], labTranslations[lang]));

const calmTranslations = {"en":{"theme_cyan":"Light","theme_violet":"Warm","theme_indigo":"Dark","hero_intro":"I explore the meeting point of computational neuroscience and bio-inspired AI through open, testable projects.","showcase_tag":"SELECTED WORK","showcase_title":"Research in practice.","showcase_intro":"Three projects that connect neural systems, language models, and agent behavior."},"tr":{"theme_cyan":"Açık","theme_violet":"Sıcak","theme_indigo":"Koyu","hero_intro":"Hesaplamalı nörobilim ve biyo-ilhamlı yapay zekânın kesişimini açık, sınanabilir projelerle araştırıyorum.","showcase_tag":"SEÇİLMİŞ ÇALIŞMALAR","showcase_title":"Araştırmanın uygulaması.","showcase_intro":"Sinir sistemlerini, dil modellerini ve etmen davranışını bir araya getiren üç proje."},"fr":{"theme_cyan":"Clair","theme_violet":"Chaud","theme_indigo":"Sombre","hero_intro":"J'explore la rencontre des neurosciences computationnelles et de l'IA bio-inspirée à travers des projets ouverts et vérifiables.","showcase_tag":"PROJETS CHOISIS","showcase_title":"La recherche en pratique.","showcase_intro":"Trois projets reliant systèmes neuronaux, modèles de langage et comportement d'agents."},"nl":{"theme_cyan":"Licht","theme_violet":"Warm","theme_indigo":"Donker","hero_intro":"Ik verken het raakvlak tussen computationele neurowetenschap en bio-geïnspireerde AI met open, toetsbare projecten.","showcase_tag":"GESELECTEERD WERK","showcase_title":"Onderzoek in de praktijk.","showcase_intro":"Drie projecten die neurale systemen, taalmodellen en agentgedrag verbinden."}};
Object.keys(calmTranslations).forEach((lang) => Object.assign(translations[lang], calmTranslations[lang]));

// ─── THEME PALETTES & SWITCHER ───────────────────────────────────────────────
const themePalettes = {
  cyan: { neuronColor: "rgba(110, 137, 172, ", spikeColor: "rgba(73, 112, 163, ", synapseColor: "rgba(150, 170, 196, ", oscColor: "#2463aa", brainPoint: 0x6685ac, brainTract: 0x91a7c1, brainSpark: 0x7594b9 },
  violet: { neuronColor: "rgba(142, 128, 113, ", spikeColor: "rgba(148, 113, 76, ", synapseColor: "rgba(183, 169, 150, ", oscColor: "#8b6b50", brainPoint: 0x947d69, brainTract: 0xb19f8b, brainSpark: 0xa38c76 },
  indigo: { neuronColor: "rgba(125, 147, 180, ", spikeColor: "rgba(165, 189, 224, ", synapseColor: "rgba(105, 129, 163, ", oscColor: "#9ab9e2", brainPoint: 0x88a4cb, brainTract: 0x637d9e, brainSpark: 0xaec5e3 },
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
const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
const lowPowerMode = reducedMotionQuery.matches || window.innerWidth <= 768 || navigator.connection?.saveData === true;

function typeText() {
  const phrases = typingPhrases[currentLang] || typingPhrases.en;
  const el = document.getElementById("typing-text");
  if (!el) return;

  const current = phrases[typingIndex % phrases.length];
  if (lowPowerMode) {
    el.textContent = phrases[0];
    return;
  }

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
  document.documentElement.lang = lang;
  localStorage.setItem("neuro_lang", lang);
  updateMenuLabel();

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

  document.querySelectorAll("[data-i18n-aria-label]").forEach((el) => {
    const key = el.getAttribute("data-i18n-aria-label");
    if (t[key] !== undefined) el.setAttribute("aria-label", t[key]);
  });
  const hudStatus = document.getElementById("hud-status-text");
  if (hudStatus) hudStatus.textContent = t[hudStatus.dataset.statusKey || "hud_rest"];

  // Re-render GitHub telemetry with new language if already cached
  if (cachedGithubStats) {
    renderGithubStats(cachedGithubStats);
  }

}

document.getElementById("langSelect")?.addEventListener("change", (e) => {
  const lang = e.target.value;
  if (!translations[lang] || lang === document.documentElement.lang) return;
  localStorage.setItem("neuro_lang", lang);
  const root = document.documentElement.dataset.siteRoot || "./";
  const destination = lang === "en" ? root : root + lang + "/";
  window.location.assign(new URL(destination + window.location.hash, document.baseURI).href);
});

// ─── MOBILE NAVIGATION ───────────────────────────────────────────────────────
const menuToggle = document.getElementById("menuToggle");
const primaryNavigation = document.getElementById("primary-navigation");

function updateMenuLabel() {
  if (!menuToggle) return;
  const key = menuToggle.getAttribute("aria-expanded") === "true" ? "menu_close" : "menu_open";
  menuToggle.setAttribute("aria-label", translations[currentLang]?.[key] || translations.en[key]);
}

function setMobileMenuOpen(open) {
  if (!menuToggle || !primaryNavigation) return;
  menuToggle.setAttribute("aria-expanded", String(open));
  primaryNavigation.classList.toggle("is-open", open);
  updateMenuLabel();
}

menuToggle?.addEventListener("click", () => {
  setMobileMenuOpen(menuToggle.getAttribute("aria-expanded") !== "true");
});

primaryNavigation?.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", () => setMobileMenuOpen(false));
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && menuToggle?.getAttribute("aria-expanded") === "true") {
    setMobileMenuOpen(false);
    menuToggle.focus();
  }
});

document.addEventListener("pointerdown", (event) => {
  if (menuToggle?.getAttribute("aria-expanded") === "true" && !event.target.closest("nav")) {
    setMobileMenuOpen(false);
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 1100) setMobileMenuOpen(false);
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
      if (reducedMotionQuery.matches) {
        this.step();
        this.render();
      }

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
        this.stateEl.textContent = translations[currentLang]?.osc_spike || translations.en.osc_spike;
        this.stateEl.className = "telemetry-val state-firing";
      } else if (this.refractory > 0) {
        this.stateEl.textContent = translations[currentLang]?.osc_refractory || translations.en.osc_refractory;
        this.stateEl.className = "telemetry-val";
      } else {
        this.stateEl.textContent = translations[currentLang]?.osc_integrating || translations.en.osc_integrating;
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
    if (reducedMotionQuery.matches) {
      this.render();
      return;
    }
    let lastFrame = 0;
    const loop = (time) => {
      if (!lowPowerMode || time - lastFrame >= 33) {
        this.step();
        this.render();
        lastFrame = time;
      }
      requestAnimationFrame(loop);
    };
    requestAnimationFrame(loop);
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

// ─── NEUROAI SCROLLYTELLING & LENIS ENGINE ──────────────────────────────────
let activeLenis = null;

/**
 * Initializes Lenis smooth inertia scrolling and synchronizes it with GSAP ScrollTrigger.
 * 
 * Args:
 *     None
 * 
 * Returns:
 *     void
 * 
 * Raises:
 *     None: Gracefully catches and logs any initialization errors.
 */
function initLenisScroll() {
  if (lowPowerMode || window.innerWidth <= 1024) return;
  // UPDATE: Initialized cinematic smooth inertia scrolling using Lenis engine
  try {
    if (typeof Lenis === 'undefined') {
      console.warn('[NeuroScrolly] Lenis not available. Falling back to native scrolling.');
      return;
    }

    activeLenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.05,
      touchMultiplier: 1.6,
    });

    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);

      // Connect Lenis scroll event to GSAP ScrollTrigger updates
      activeLenis.on('scroll', ScrollTrigger.update);

      // Add Lenis requestAnimationFrame to GSAP ticker for synchronous render loop
      gsap.ticker.add((time) => {
        activeLenis.raf(time * 1000);
      });

      gsap.ticker.lagSmoothing(0);
    } else {
      const step = (time) => {
        activeLenis.raf(time);
        requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    }
  } catch (err) {
    console.error('[NeuroScrolly] Failed to initialize Lenis smooth scroll:', err);
  }
}

/**
 * Configures GSAP ScrollTrigger scrollytelling timelines for 3D connectome and project cards.
 * 
 * Args:
 *     None
 * 
 * Returns:
 *     void
 * 
 * Raises:
 *     None: Gracefully logs exceptions without disrupting page rendering.
 */
function initNeuroScrollytelling() {
  if (reducedMotionQuery.matches || window.innerWidth <= 1024) return;
  // UPDATE: Configured GSAP ScrollTrigger scrollytelling pipeline & telemetry
  try {
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
      document.documentElement.classList.add('showcase-static');
      console.warn('[NeuroScrolly] GSAP or ScrollTrigger missing.');
      return;
    }

    // 1. Live Telemetry HUD Bar updates
    const hudStatus = document.getElementById('hud-status-text');
    const hudBar = document.getElementById('hud-progress-fill');
    const hudVal = document.getElementById('hud-progress-val');
    const hudFiring = document.getElementById('hud-firing-rate');

    let lastY = window.scrollY;
    let lastTime = Date.now();
    let currentHz = 12;

    ScrollTrigger.create({
      start: 'top top',
      end: 'bottom bottom',
      onUpdate: (self) => {
        const pct = Math.round(self.progress * 100);
        if (hudBar) hudBar.style.width = `${pct}%`;
        if (hudVal) hudVal.textContent = `${pct}%`;

        // Calculate dynamic synaptic firing rate based on scroll velocity
        const now = Date.now();
        const dt = Math.max(1, now - lastTime);
        const dy = Math.abs(window.scrollY - lastY);
        const speed = (dy / dt) * 100;
        lastY = window.scrollY;
        lastTime = now;

        const targetHz = Math.min(150, Math.max(12, Math.round(12 + speed * 0.9)));
        currentHz += (targetHz - currentHz) * 0.25;
        if (hudFiring) hudFiring.textContent = `${Math.round(currentHz)} Hz`;

        // Update telemetry status state
        if (hudStatus) {
          const statusKey = self.progress < 0.18 ? 'hud_rest'
            : self.progress < 0.45 ? 'hud_connectome_status'
            : self.progress < 0.75 ? 'hud_probe' : 'hud_transmission';
          hudStatus.dataset.statusKey = statusKey;
          hudStatus.textContent = translations[currentLang]?.[statusKey] || translations.en[statusKey];
        }
      }
    });

    // 2. Hero cinematic fade-out on scroll
    gsap.to('.hero-center-box', {
      opacity: 0,
      y: -70,
      scale: 0.94,
      scrollTrigger: {
        trigger: '.hero-section',
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
      }
    });

    gsap.to('.hero-floating-hud', {
      opacity: 0,
      y: 50,
      scrollTrigger: {
        trigger: '.hero-section',
        start: 'top top',
        end: '70% top',
        scrub: 1,
      }
    });

    // 3. Rockstar/GTA VI Style Pinned Scrollytelling Showcase Timeline
    const slideAxon = document.getElementById('scrolly-slide-axon');
    const slideConscious = document.getElementById('scrolly-slide-conscious');
    const slideSnn = document.getElementById('scrolly-slide-snn');

    const slides = [slideAxon, slideConscious, slideSnn].filter(Boolean);
    const activateSlide = (selected) => {
      slides.forEach((slide) => {
        const active = slide === selected;
        slide.classList.toggle('active-slide', active);
        slide.inert = !active;
      });
    };
    activateSlide(slideAxon);

    gsap.matchMedia().add('(min-width: 1025px)', () => {
      ScrollTrigger.create({
        trigger: '#scrolly-showcase',
        start: 'top top',
        end: '+=1800',
        pin: '.scrolly-pin-wrapper',
        scrub: 1.2,
        onUpdate: (self) => {
          // Drive deep 3D connectome camera dolly and orbital rotation
          if (activeBrain3D) {
            activeBrain3D.setScrollProgress(self.progress);
          }

          // Scrub cinematic editorial scenes
          if (self.progress < 0.35) activateSlide(slideAxon);
          else if (self.progress < 0.70) activateSlide(slideConscious);
          else activateSlide(slideSnn);
        }
      });
    });

    // 4. Stacking & 3D Parallax Reveal for Bento Project Cards
    const cards = document.querySelectorAll('.bento-card');
    cards.forEach((card) => {
      gsap.fromTo(card, 
        { 
          opacity: 0.7, 
          y: 45, 
          scale: 0.95,
          rotateX: 6 
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          rotateX: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 88%',
            end: 'top 52%',
            scrub: 0.6,
          }
        }
      );
    });

    // 4. Section Headers Cyber-HUD Reveal
    const headers = document.querySelectorAll('.section-header');
    headers.forEach((header) => {
      gsap.fromTo(header,
        { opacity: 0, y: 22 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: header,
            start: 'top 85%',
            toggleActions: 'play none none none'
          }
        }
      );
    });

  } catch (err) {
    console.error('[NeuroScrolly] Scrollytelling setup exception:', err);
  }
}

// ─── INIT ─────────────────────────────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  let initialTheme = localStorage.getItem("neuro_theme");
  if (!themePalettes[initialTheme]) initialTheme = "cyan";
  const palette = themePalettes[initialTheme];

  // 2. Initialize 3D Holographic Brain Connectome
  if (window.HolographicBrain3D && window.innerWidth > 760) {
    activeBrain3D = new HolographicBrain3D("brain-3d-container", {
      pointColor: palette.brainPoint,
      tractColor: palette.brainTract,
      sparkColor: palette.brainSpark,
      pointCount: lowPowerMode ? 700 : 1200,
      tractCount: lowPowerMode ? 16 : 28,
      maxPixelRatio: lowPowerMode ? 1 : 1.5,
      maxFps: lowPowerMode ? 15 : 24,
      reducedMotion: reducedMotionQuery.matches,
      autoRotateSpeed: 0.00035,
    });
  }

  // 3. Initialize real-time LIF Neuron Oscilloscope widget

  // 4. Apply saved or default theme
  applyTheme(initialTheme);

  // 5. Apply saved or default language
  const pageLang = translations[document.documentElement.lang] ? document.documentElement.lang : "en";
  const langSelect = document.getElementById("langSelect");
  if (langSelect) langSelect.value = pageLang;
  applyTranslations(pageLang);

  // 6. Initialize NeuroAI Scrollytelling and Lenis Smooth Scroll
  document.documentElement.classList.add("showcase-static");

  loadGithubStats();
  animateSkillBars();
});
