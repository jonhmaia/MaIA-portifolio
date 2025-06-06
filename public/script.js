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

  document.addEventListener('DOMContentLoaded', () => {
    // Remove URL hash para evitar rolagem direta para uma seção
    if (window.location.hash) {
      history.replaceState('', document.title, window.location.pathname + window.location.search);
    }

    // Garante que a página comece no topo
    window.scrollTo(0, 0);

    // Opcional: Adicione um pequeno atraso para garantir que execute após toda a renderização
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);

    // Função showToast
    function showToast(message, type = "info") {
      const container = document.getElementById("toast-container");
      if (!container) {
        console.warn("Toast container não encontrado.");
        return;
      }
      const toast = document.createElement("div");
      toast.className = `toast ${type}`;
      toast.textContent = message;
      container.appendChild(toast);
      setTimeout(() => {
        if (toast.parentNode === container) {
          container.removeChild(toast);
        }
      }, 6000);
    }

    // --- LÓGICA DO FORMULÁRIO SUPABASE ---
    const supabaseUrl = "https://ojblhyflwcsckteiypje.supabase.co";
    const supabaseKey =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9qYmxoeWZsd2NzY2t0ZWl5cGplIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU0NTg4NjEsImV4cCI6MjA2MTAzNDg2MX0.-WSO_IgaXW81u8aqtJbRiLky40rFGpgAsRwArAcIU4M";
    const form = document.querySelector(".contact-form form");
    let supabaseClient; // Declare supabaseClient outside the if block

    // Verifica se a biblioteca Supabase está carregada
    if (typeof supabase !== 'undefined' && supabase) {
      try {
        const { createClient } = supabase; // Destrutura createClient do objeto global supabase
        if (typeof createClient === 'function') {
          supabaseClient = createClient(supabaseUrl, supabaseKey);
        } else {
          console.error("Supabase 'createClient' não é uma função. Verifique a importação da biblioteca Supabase.");
        }
      } catch (e) {
        console.error("Erro ao inicializar o Supabase Client:", e);
      }
    } else {
      console.error("Biblioteca Supabase (objeto global 'supabase') não carregada! Certifique-se de que o script Supabase JS está incluído corretamente no seu HTML antes deste script.");
    }

    if (form) {
      if (supabaseClient) { // Procede apenas se o supabaseClient foi inicializado
        form.addEventListener("submit", async (e) => {
          e.preventDefault();
          const name = form.name.value.trim();
          const email = form.email.value.trim();
          const whatsapp = form.whatsapp?.value?.trim() || "";
          const message = form.message.value.trim();

          if (!name || !email || !message) {
            if (typeof showToast === "function") showToast("Por favor, preencha todos os campos obrigatórios.", "error");
            else console.error("Função showToast não definida.");
            return;
          }
          if (whatsapp && !/^[0-9]{10,15}$/.test(whatsapp)) {
            if (typeof showToast === "function") showToast("Por favor, insira um número de WhatsApp válido.", "error");
            else console.error("Função showToast não definida.");
            return;
          }
          try {
            const { data, error } = await supabaseClient
              .from("contatos")
              .insert([{ name, email, whatsapp, message, processado: false }])
              .select(); // Adicionado .select() para melhor feedback/manejo de erro

            if (error) {
              const errorMessage = error.message || "Ocorreu um erro ao enviar sua mensagem. Tente novamente.";
              if (typeof showToast === "function") showToast("Erro ao enviar: " + errorMessage, "error");
              else console.error("Erro ao enviar: " + errorMessage);
            } else {
              if (typeof showToast === "function") showToast("Mensagem enviada com sucesso! Em breve entraremos em contato.", "success");
              else console.log("Mensagem enviada com sucesso!");
              form.reset();
            }
          } catch (submitError) {
            console.error("Erro no bloco try/catch do formulário Supabase:", submitError);
            if (typeof showToast === "function") showToast("Ocorreu um erro inesperado no envio. Verifique sua conexão.", "error");
            else console.error("Ocorreu um erro inesperado. Verifique sua conexão.");
          }
        });
      } else {
        // Supabase client não pôde ser inicializado, desabilita o formulário
        console.warn("Supabase client não inicializado. O formulário de contato será desabilitado.");
        const submitButton = form.querySelector('button[type="submit"]');
        if (submitButton) {
            submitButton.disabled = true;
            submitButton.textContent = "Contato Indisponível";
        }
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            showToast("Erro: A funcionalidade de contato está temporariamente indisponível devido a um problema de configuração.", "error");
        });
      }
    }
    // --- FIM DA LÓGICA DO FORMULÁRIO SUPABASE ---


    // --- LÓGICA DO CHATBOT EMBUTIDO ---
    const chatMessagesContainer = document.getElementById('chatMessages');
    const chatInput = document.getElementById('chatInput');
    const sendChatBtn = document.getElementById('sendChatBtn');
    let chatHistory = [];
    const N8N_WEBHOOK_URL = "https://n8n.maia-ia.sbs/webhook/8449b14a-b5eb-4aeb-a09c-96d95f18dd52";
    const SESSION_ID_KEY = 'maiaChatSessionId';
    let currentSessionId = localStorage.getItem(SESSION_ID_KEY);

    if (!currentSessionId) {
      if (typeof crypto !== 'undefined' && crypto.randomUUID) {
        currentSessionId = crypto.randomUUID();
      } else {
        currentSessionId = 'sess_' + Date.now().toString(36) + Math.random().toString(36).substr(2, 9);
      }
      localStorage.setItem(SESSION_ID_KEY, currentSessionId);
      console.log("Novo ID de sessão gerado:", currentSessionId);
    } else {
      console.log("ID de sessão existente:", currentSessionId);
    }

    const delay = ms => new Promise(res => setTimeout(res, ms));

    async function addMessageToChat(text, sender) {
      const messageDiv = document.createElement('div');
      messageDiv.classList.add('message', sender);
      const messageTextDiv = document.createElement('div');
      messageTextDiv.classList.add('message-text');

      if (sender === 'bot') {
        const botAvatar = document.createElement('div');
        botAvatar.classList.add('bot-avatar');
        botAvatar.textContent = 'IA';
        const messageContentDiv = document.createElement('div');
        messageContentDiv.classList.add('message-content');
        messageContentDiv.appendChild(botAvatar);
        messageContentDiv.appendChild(messageTextDiv);
        messageDiv.appendChild(messageContentDiv);
      } else {
        messageTextDiv.textContent = text; // Usuário não tem digitação caractere por caractere
        messageDiv.appendChild(messageTextDiv);
      }

      if (chatMessagesContainer) {
        chatMessagesContainer.appendChild(messageDiv);
        chatMessagesContainer.scrollTop = chatMessagesContainer.scrollHeight;
      }

      if (sender === 'bot') {
        for (let i = 0; i < text.length; i++) {
          messageTextDiv.textContent += text.charAt(i);
          if (chatMessagesContainer) chatMessagesContainer.scrollTop = chatMessagesContainer.scrollHeight;
          await delay(30);
        }
      }
    }

    function disableChatInput() {
      if (chatInput) chatInput.disabled = true;
      if (sendChatBtn) sendChatBtn.disabled = true;
    }

    function enableChatInput() {
      if (chatInput) chatInput.disabled = false;
      if (sendChatBtn) sendChatBtn.disabled = false;
    }

    function addUserMessage(text) {
      addMessageToChat(text, 'user'); // Não precisa de await aqui pois não tem delay
      chatHistory.push({ role: "user", parts: [{ text: text }] });
    }

    async function addBotMessage(text) {
      await addMessageToChat(text, 'bot');
      chatHistory.push({ role: "model", parts: [{ text: text }] });
    }

    let typingIndicator = null;

    function showTypingIndicator() {
      if (!typingIndicator && chatMessagesContainer) {
        typingIndicator = document.createElement('div');
        typingIndicator.classList.add('message', 'bot', 'typing-indicator');
        const botAvatar = document.createElement('div');
        botAvatar.classList.add('bot-avatar');
        botAvatar.textContent = 'IA';
        const messageTextDiv = document.createElement('div');
        messageTextDiv.classList.add('message-text');
        messageTextDiv.textContent = "MaIA está digitando...";
        const messageContentDiv = document.createElement('div');
        messageContentDiv.classList.add('message-content');
        messageContentDiv.appendChild(botAvatar);
        messageContentDiv.appendChild(messageTextDiv);
        typingIndicator.appendChild(messageContentDiv);
        chatMessagesContainer.appendChild(typingIndicator);
        chatMessagesContainer.scrollTop = chatMessagesContainer.scrollHeight;
      }
    }

    function removeTypingIndicator() {
      if (typingIndicator && chatMessagesContainer && typingIndicator.parentNode === chatMessagesContainer) {
        chatMessagesContainer.removeChild(typingIndicator);
        typingIndicator = null;
      }
    }

    async function getBotResponse(userMessage) {
      disableChatInput();
      showTypingIndicator();
      const payload = { userMessage: userMessage, sessionId: currentSessionId };

      try {
        const response = await fetch(N8N_WEBHOOK_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });

        if (!response.ok) {
          const errorData = await response.json();
          console.error('Erro do Webhook n8n:', errorData);
          throw new Error(`Webhook Error: ${response.status} ${response.statusText}`);
        }

        const result = await response.json();
        removeTypingIndicator();

        if (typeof result === 'object' && result !== null) {
          let hasMessages = false;
          let i = 0;
          while (result.hasOwnProperty(String(i))) {
            const partText = result[String(i)].trim();
            if (partText) {
              await addBotMessage(partText);
              hasMessages = true;
            }
            i++;
          }
          if (!hasMessages) {
            console.error('Resposta inesperada do n8n: Objeto vazio ou sem partes de mensagem esperadas.', result);
            await addBotMessage("Desculpe, não consegui processar sua mensagem no momento.");
          }
        } else {
          console.error('Resposta inesperada do n8n: Não é um objeto ou formato desconhecido.', result);
          await addBotMessage("Ops! Algo deu errado. Tente novamente mais tarde.");
        }
      } catch (error) {
        console.error('Erro ao buscar resposta do bot via n8n:', error);
        removeTypingIndicator();
        await addBotMessage("Ops! Algo deu errado. Tente novamente mais tarde.");
      } finally {
        enableChatInput();
      }
    }

    async function handleSendMessage() {
      if (!chatInput) return;
      const messageText = chatInput.value.trim();
      if (messageText) {
        addUserMessage(messageText);
        chatInput.value = '';
        await getBotResponse(messageText);
      }
    }

    

     
    // --- FIM DO CÓDIGO PARA MOSTRAR FOOTER ---


    // Lógica inicial do chat
    if (chatMessagesContainer && chatMessagesContainer.children.length === 0) {
      (async () => {
        await addBotMessage("Olá! Sou a MaIA, sua assistente virtual. Como posso te ajudar hoje?");
        enableChatInput();
        // Não é recomendado focar automaticamente em campos de texto em todas as situações
        // if (document.activeElement !== chatInput && chatInput) {
        // chatInput.focus();
        // }
      })();
    } else {
      enableChatInput();
    }

    if (sendChatBtn) {
      sendChatBtn.addEventListener('click', handleSendMessage);
    }
    if (chatInput) {
      chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && !chatInput.disabled) {
          e.preventDefault();
          handleSendMessage();
        }
      });
    }
  });
  document.addEventListener('DOMContentLoaded', () => {
    // Código existente do chatbot e outros se houver...

    // Lógica para o Acordeão (FAQ)
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const accordionItem = header.closest('.accordion-item');
            const accordionContent = accordionItem.querySelector('.accordion-content');

            // Fecha outros itens abertos
            document.querySelectorAll('.accordion-item.active').forEach(item => {
                if (item !== accordionItem) { // Se não for o item clicado
                    item.classList.remove('active');
                    item.querySelector('.accordion-content').style.maxHeight = 0;
                }
            });

            // Alterna a classe 'active' no item clicado
            accordionItem.classList.toggle('active');

            // Ajusta a altura do conteúdo para expandir/recolher
            if (accordionItem.classList.contains('active')) {
                // Define a altura máxima para o scrollHeight do conteúdo
                // Isso permite que o conteúdo se expanda dinamicamente
                accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
            } else {
                accordionContent.style.maxHeight = 0;
            }
        });
    });

    // Você também pode adicionar o código JavaScript para o carrossel de tags aqui,
    // se precisar de controle mais dinâmico ou se a solução CSS não for suficiente.
});