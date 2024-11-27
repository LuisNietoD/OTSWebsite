document.addEventListener("DOMContentLoaded", () => {
  const colors = document.querySelectorAll(".color");

  // Fade-in animation for all colors on scroll
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
          observer.unobserve(entry.target); // Stop observing once animation is done
        }
      });
    },
    { threshold: 0.2 }
  );

  colors.forEach((color) => observer.observe(color));

  // Copy color code on click
  colors.forEach((color) => {
    color.addEventListener("click", () => {
      const colorCode = color.getAttribute("data-color");
      navigator.clipboard.writeText(colorCode);
      const originalText = color.innerText;
      color.innerText = "Copied!";
      setTimeout(() => {
        color.innerText = originalText || ""; // Reset text
      }, 1000);
    });
  });
});

// Initialisation des particules adaptées à "Over The Shadow"
particlesJS("particles-js", {
  particles: {
    number: {
      value: 100, // Nombre de particules
      density: {
        enable: true,
        value_area: 1000 // Répartition des particules
      }
    },
    color: {
      value: ["#DAA520", "#A0522D", "#F0E68C"] // Couleurs dorées et cuivrées
    },
    shape: {
      type: "circle", // Forme des particules (cercle pour la fluidité)
      stroke: {
        width: 1,
        color: "#2F2F2F" // Bordure sombre pour un look industriel
      }
    },
    opacity: {
      value: 0.6, // Opacité de base
      random: true, // Variation aléatoire de l'opacité
      anim: {
        enable: true, // Animation de l'opacité
        speed: 1,
        opacity_min: 0.3,
        sync: false
      }
    },
    size: {
      value: 4, // Taille moyenne des particules
      random: true, // Taille aléatoire
      anim: {
        enable: true, // Animation de la taille
        speed: 3,
        size_min: 1,
        sync: false
      }
    },
    line_linked: {
      enable: true, // Lignes connectant les particules
      distance: 150, // Distance entre les particules connectées
      color: "#B8860B", // Couleur dorée pour les lignes
      opacity: 0.5, // Transparence des lignes
      width: 1
    },
    move: {
      enable: true, // Animation des particules
      speed: 2, // Vitesse des particules
      direction: "none", // Direction aléatoire
      random: false,
      straight: false,
      out_mode: "out", // Les particules disparaissent hors du cadre
      bounce: false
    }
  },
  interactivity: {
    detect_on: "canvas", // Détection d'interaction sur le canevas
    events: {
      onhover: {
        enable: true, // Les particules réagissent au survol
        mode: "repulse" // Éloignement des particules au survol
      },
      onclick: {
        enable: true, // Interaction au clic
        mode: "push" // Ajout de nouvelles particules au clic
      }
    },
    modes: {
      grab: {
        distance: 140, // Distance de capture des lignes
        line_linked: {
          opacity: 1
        }
      },
      repulse: {
        distance: 200, // Distance de répulsion au survol
        duration: 0.4
      },
      push: {
        particles_nb: 4 // Nombre de particules ajoutées au clic
      }
    }
  },
  retina_detect: true // Amélioration pour les écrans Retina
});


