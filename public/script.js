// === Smooth Scrolling ===
document.querySelectorAll("a[href^=\"#\"]").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href");
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: "smooth" });
        }
    });
});

// === Header Scroll Effect ===
const header = document.querySelector(".header");
if (header) { // Adicionado verificação para garantir que o header existe
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });
}


// === Active Nav Link on Scroll ===
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-links a"); // Declaração aqui para ser global

if (sections.length > 0 && navLinks.length > 0) { // Verifica se há seções e links
    window.addEventListener("scroll", () => {
        let current = "";
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            // Ajuste offset conforme necessário, por exemplo, com base na altura do header
            // Considera a altura do header fixo para uma detecção mais precisa
            const headerHeight = header ? header.offsetHeight : 0;
            if (pageYOffset >= (sectionTop - headerHeight - 30)) { // Adicionado um offset de 30px
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href").includes(current)) {
                link.classList.add("active");
            }
        });
        // Garante que 'home' esteja ativo se estiver no topo da página
        // Verifica se scrollY está próximo do topo e se não há seção 'current' ativa
        if (window.pageYOffset < (sections[0].offsetTop - (header ? header.offsetHeight : 0) / 2) && current === "") {
             navLinks.forEach(link => link.classList.remove("active"));
             const homeLink = document.querySelector(".nav-links a[href=\"#home\"]");
             if (homeLink) homeLink.classList.add("active");
        }
    });
}


// === Form Validation === (Basic Example)
const contactForm = document.querySelector(".contact-form form");
if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
        // Basic validation can be added here
        // e.preventDefault(); // Uncomment to prevent actual submission for testing
        console.log("Form submitted (or would be)");
        // Add more robust validation logic if needed
    });
}


// ... (Mantenha todo o seu código anterior: Smooth Scrolling, Header Scroll Effect, Active Nav Link on Scroll, Form Validation) ...

// === Mobile Menu Toggle ===
const navToggle = document.querySelector(".nav-toggle"); // Seleciona o novo botão de toggle
const navList = document.querySelector(".nav-list");     // Seleciona a nova lista de navegação

if (navToggle && navList) {
    navToggle.addEventListener("click", () => {
        navList.classList.toggle("active");      // Alterna a classe 'active' na lista
        navToggle.classList.toggle("active");    // Alterna a classe 'active' no botão para a animação do hambúrguer
        
        // Ajuste aria-expanded para acessibilidade
        const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
        navToggle.setAttribute('aria-expanded', !isExpanded);
    });

    // Fechar menu quando um link é clicado (para navegação suave)
    // Garante que o menu feche ao clicar em um item da lista
    navList.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            if (navList.classList.contains('active')) {
                navList.classList.remove('active');
                navToggle.classList.remove('active');
                navToggle.setAttribute('aria-expanded', 'false');
            }
        });
    });
}

// ... (Mantenha todo o seu código posterior: Particle Animation, showToast, DOMContentLoaded) ...


// === Particle Animation (Step 6) ===
// Using particles.js library
// Mover a função showToast e o listener DOMContentLoaded para fora do bloco particlesJS
// para garantir que estejam sempre disponíveis.

// Check if particlesJS is loaded
if (typeof particlesJS !== "undefined") {
    particlesJS("particles-js", {
        "particles": {
            "number": {
                "value": 40, // Adjusted number of particles
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#00f0c0" // Accent color (teal)
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                },
                "polygon": {
                    "nb_sides": 5
                }
            },
            "opacity": {
                "value": 0.5,
                "random": true, // Make opacity random
                "anim": {
                    "enable": true,
                    "speed": 0.5,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 3,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 40,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#00f0c0", // Accent color for lines
                "opacity": 0.4,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 1, // Slightly faster movement
                "direction": "none",
                "random": true, // Random direction
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "grab" // Grab effect on hover
                },
                "onclick": {
                    "enable": true,
                    "mode": "push" // Push particles on click
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 140,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                },
                "repulse": {
                    "distance": 200,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true
    });
} else {
    console.error("particles.js not loaded");
}

// Mover essas funções para fora do bloco particlesJS
function showToast(message, type = "success") {
    const toastContainer = document.getElementById("toast-container");
    if (!toastContainer) { // Adiciona uma verificação para o container do toast
        console.warn("Toast container not found.");
        return;
    }
    const toast = document.createElement("div");
    toast.className = `toast ${type}`;
    toast.innerText = message;

    toastContainer.appendChild(toast);

    setTimeout(() => {
        toast.remove();
    }, 6000); // 4 segundos
}

document.addEventListener("DOMContentLoaded", () => {
    const btnTecnologias = document.getElementById("btn-tecnologias");
    const modal = document.getElementById("modal-tecnologias");
    const closeBtn = modal?.querySelector(".close-button");

    if (btnTecnologias && modal && closeBtn) {
        btnTecnologias.addEventListener("click", () => {
            modal.classList.add("active");
        });

        closeBtn.addEventListener("click", () => {
            modal.classList.remove("active");
        });

        window.addEventListener("click", (e) => {
            if (e.target === modal) {
                modal.classList.remove("active");
            }
        });
    }
});