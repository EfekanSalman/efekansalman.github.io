document.addEventListener("DOMContentLoaded", function () {
  const langSelect = document.getElementById("langSelect");
  const translations = {
    tr: {
      aboutTitle: "Hakkımda",
      aboutText: `Ben Efekan, hesaplamalı sinirbilim alanında çalışan bir geliştiriciyim. Yapay ajanların nasıl öğrenebileceği, karar verebileceği ve bilinç geliştirebileceği üzerine çalışıyorum.
İstanbul Gelişim Üniversitesi'nden 2 yıllık Bilgisayar Programcılığı bölümünden mezun oldum. Backend Java ile başlayan yolculuğum artık sinirsel mekanizmaların modellenmesine ve motivasyonel sistemlere odaklanıyor.`,
      projectsTitle: "Projeler",
      projects: [
        {
          title: "Yapay Bilinç Motoru",
          description: "Yapay dürtülere dayalı içsel durumları, motivasyon sistemlerini ve ajan karar mekanizmasını simüle eden modüler bir mimari."
        },
        {
          title: "Yapay Yaşam Simülasyonu",
          description: "Çok ajanlı biyolojik esinli simülasyon; otonom davranış, bellek ve çevresel adaptasyonu modeller."
        },
        {
          title: "LIF Nöron Simülatörü",
          description: "Python ve spike mantığı kullanılarak nöronların ateşleme davranışını görsel olarak modelleyen araç."
        }
      ],
      skillsTitle: "Yetenekler & Teknolojiler",
      languagesTitle: "Diller",
      contactTitle: "İletişim",
      connectText: "Bağlantı Kur"

    },
    fr: {
      aboutTitle: "À propos de moi",
      aboutText: `Je suis Efekan, un développeur spécialisé en neurosciences computationnelles. Je travaille sur la façon dont les agents artificiels peuvent apprendre, décider et développer une conscience.
Diplômé d’un programme de deux ans en programmation informatique à l’Université d’Istanbul Gelişim. Mon parcours a commencé par le backend Java et se concentre désormais sur la modélisation des mécanismes neuronaux et des systèmes motivationnels.`,
      projectsTitle: "Projets",
      projects: [
        {
          title: "Moteur de Conscience Artificielle",
          description: "Architecture modulaire simulant les états internes, systèmes motivationnels et prise de décision des agents artificiels."
        },
        {
          title: "Simulation de Vie Artificielle",
          description: "Simulation bio-inspirée multi-agents modélisant l'autonomie, la mémoire et l'adaptation environnementale."
        },
        {
          title: "Simulateur de Neurone LIF",
          description: "Modèle visuel du comportement de décharge neuronale à l’aide de Python et de la logique d’impulsion."
        }
      ],
      skillsTitle: "Compétences & Technologies",
      languagesTitle: "Langues",
      contactTitle: "Contact",
      connectText: "Connecter"
    },
    en: {
      aboutTitle: "About Me",
      aboutText: `I’m Efekan, a developer deeply immersed in computational neuroscience. My focus lies in understanding and simulating how artificial agents can learn, decide, and become conscious.
I hold a 2-year degree in Computer Programming and have since transitioned from backend Java systems to modeling neural mechanisms and motivational engines.`,
      projectsTitle: "Highlighted Projects",
      projects: [
        {
          title: "Artificial Consciousness Engine",
          description: "A modular architecture simulating internal states, motivational systems, and agent decision-making based on artificial drives."
        },
        {
          title: "Artificial Life Simulation",
          description: "Multi-agent biologically inspired simulation modeling autonomous behavior, memory, and environmental adaptation."
        },
        {
          title: "LIF Neuron Simulator",
          description: "Visual model of neuron firing using Python and spiking logic."
        }
      ],
      skillsTitle: "Skills & Technologies",
      languagesTitle: "Languages",
      contactTitle: "Let's Connect",
      connectText: "Connect"
    }
  };

  langSelect.addEventListener("change", (e) => {
    const lang = e.target.value;
    const t = translations[lang];

    document.querySelector("#about .section-title").textContent = t.aboutTitle;
    document.querySelector("#about p").textContent = t.aboutText;

    document.querySelector("#projects .section-title").textContent = t.projectsTitle;
    const projectCards = document.querySelectorAll("#projects .project-card");
    projectCards.forEach((card, index) => {
      if (t.projects[index]) {
        card.innerHTML = `
          <strong>${t.projects[index].title}</strong><br>
          ${t.projects[index].description}
        `;
      }
    });

    document.querySelector("#skills .section-title").textContent = t.skillsTitle;
    document.querySelector("#languages .section-title").textContent = t.languagesTitle;
    document.querySelector("#contact .section-title").textContent = t.contactTitle;
    document.querySelector("#contact p").childNodes[0].textContent = `${t.connectText}: `;
  });
});
