// === Smooth Scrolling ===
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
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
if (header) {
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
const navLinks = document.querySelectorAll(".nav-list1 a");

if (sections.length > 0 && navLinks.length > 0) {
    window.addEventListener("scroll", () => {
        let current = "";
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            const headerHeight = header ? header.offsetHeight : 0;
            if (pageYOffset >= (sectionTop - headerHeight - 30)) {
                current = section.getAttribute("id");
            }
        });

        document.querySelectorAll(".nav-list1 a, .nav-list a").forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href").includes(current)) {
                link.classList.add("active");
            }
        });
        if (window.pageYOffset < (sections[0].offsetTop - (header ? header.offsetHeight : 0) / 2) && current === "") {
             document.querySelectorAll(".nav-list1 a, .nav-list a").forEach(link => link.classList.remove("active"));
             const homeLink = document.querySelector('.nav-list1 a[href="#home"]');
             if (homeLink) homeLink.classList.add("active");
        }
    });
}

// === Form Validation === (Basic Example)
const contactForm = document.querySelector(".contact-form form");
if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
        console.log("Form submitted (or would be)");
    });
}

function showToast(message, type = "success") {
    const toastContainer = document.getElementById("toast-container");
    if (!toastContainer) {
        console.warn("Toast container not found.");
        return;
    }
    const toast = document.createElement("div");
    toast.className = `toast ${type}`;
    toast.innerText = message;

    toastContainer.appendChild(toast);

    setTimeout(() => {
        toast.remove();
    }, 6000);
}

document.addEventListener("DOMContentLoaded", () => {
    
    // === Mobile Navigation Toggle (CORREÇÃO) ===
    const navToggle = document.querySelector('.nav-toggle');
    const navList = document.querySelector('.nav-list');

    if (navToggle && navList) {
        navToggle.addEventListener('click', () => {
            // Alterna a classe 'active' no botão e na lista do menu
            navToggle.classList.toggle('active');
            navList.classList.toggle('active');

            // Impede a rolagem do corpo da página quando o menu está aberto
            if (navList.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        });

        // Fecha o menu quando um dos links é clicado
        document.querySelectorAll('.nav-list a').forEach(link => {
            link.addEventListener('click', () => {
                if (navToggle.classList.contains('active')) {
                    navToggle.classList.remove('active');
                    navList.classList.remove('active');
                    document.body.style.overflow = '';
                }
            });
        });
    }
    // === FIM DA CORREÇÃO ===

    // === Particle Animation (MOVED HERE TO ENSURE DOM IS READY) ===
    // Using particles.js library
    if (typeof particlesJS !== "undefined") {
        particlesJS("particles-js", {
            "particles": {
                "number": {
                    "value": 40, 
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": "#00f0c0" 
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
                    "random": true, 
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
                    "color": "#00f0c0", 
                    "opacity": 0.4,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 1, 
                    "direction": "none",
                    "random": true, 
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
                        "mode": "grab" 
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "push" 
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
        console.error("particles.js not loaded or 'particlesJS' function not found.");
    }
    // === End Particle Animation ===


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

    if (window.location.hash) {
      history.replaceState('', document.title, window.location.pathname + window.location.search);
    }
    window.scrollTo(0, 0);
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);

    const supabaseUrl = "https://ojblhyflwcsckteiypje.supabase.co";
    const supabaseKey =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9qYmxoeWZsd2NzY2t0ZWl5cGplIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU0NTg4NjEsImV4cCI6MjA2MTAzNDg2MX0.-WSO_IgaXW81u8aqtJbRiLky40rFGpgAsRwArAcIU4M";
    const form = document.querySelector(".contact-form form");
    let supabaseClient;

    if (typeof supabase !== 'undefined' && supabase) {
      try {
        const { createClient } = supabase;
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
      if (supabaseClient) {
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
              .select();

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

    // --- LÓGICA DO CHATBOT EMBUTIDO ---
    const chatMessagesContainer = document.getElementById('chatMessages');
    const chatInput = document.getElementById('chatInput');
    const sendChatBtn = document.getElementById('sendChatBtn'); 
    const recordAudioBtn = document.getElementById('recordAudioBtn'); 
    const audioRecordingDisplay = document.getElementById('audioRecordingDisplay');
    const recordingTimer = document.getElementById('recordingTimer');
    const sendAudioBtn = document.getElementById('sendAudioBtn'); 
    const inputWrapper = document.querySelector('.chat-input-area .input-wrapper'); 

    let chatHistory = [];
    const N8N_WEBHOOK_URL = "https://n8n.maia-ia.sbs/webhook/8449b14a-b5eb-4aeb-a09c-96d95f18dd52";
    const SESSION_ID_KEY = 'maiaChatSessionId';
    let currentSessionId = localStorage.getItem(SESSION_ID_KEY);

    let mediaRecorder;
    let audioChunks = [];
    let isRecording = false;
    let timerInterval;
    let secondsRecorded = 0;
    let recordedAudioBlob = null; 

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

    async function addMessageToChat(text, sender, audioBlobUrl = null) {
      const messageDiv = document.createElement('div');
      messageDiv.classList.add('message', sender);
      const messageContentDiv = document.createElement('div');
      messageContentDiv.classList.add('message-content');

      if (sender === 'bot') {
        const botAvatar = document.createElement('div');
        botAvatar.classList.add('bot-avatar');
        botAvatar.textContent = 'IA';
        const messageTextDiv = document.createElement('div');
        messageTextDiv.classList.add('message-text');
        
        messageContentDiv.appendChild(botAvatar);
        messageContentDiv.appendChild(messageTextDiv);
        messageDiv.appendChild(messageContentDiv);

        if (chatMessagesContainer) {
            chatMessagesContainer.appendChild(messageDiv);
            chatMessagesContainer.scrollTop = chatMessagesContainer.scrollHeight;
        }

        for (let i = 0; i < text.length; i++) {
          messageTextDiv.textContent += text.charAt(i);
          if (chatMessagesContainer) chatMessagesContainer.scrollTop = chatMessagesContainer.scrollHeight;
          await delay(30);
        }
      } else { // User message
        const messageTextDiv = document.createElement('div');
        messageTextDiv.classList.add('message-text');
        messageTextDiv.textContent = text;
        messageContentDiv.appendChild(messageTextDiv);

        if (audioBlobUrl) {
            const audioPlayer = document.createElement('audio');
            audioPlayer.controls = true;
            audioPlayer.src = audioBlobUrl;
            audioPlayer.classList.add('audio-player');
            messageContentDiv.appendChild(audioPlayer);
        }
        messageDiv.appendChild(messageContentDiv);
        if (chatMessagesContainer) {
            chatMessagesContainer.appendChild(messageDiv);
            chatMessagesContainer.scrollTop = chatMessagesContainer.scrollHeight;
        }
      }
    }

    // Consolidated function to manage the visibility of input elements
    function setInputMode(mode) {
        if (mode === 'text') {
            // SHOW text input elements
            if (inputWrapper) {
                inputWrapper.style.display = 'flex'; 
                inputWrapper.classList.remove('hidden-for-recording');
            }
            // HIDE audio recording display
            if (audioRecordingDisplay) {
                audioRecordingDisplay.style.display = 'none';
                audioRecordingDisplay.classList.remove('visible');
            }
            // Enable text input
            if (chatInput) {
                chatInput.disabled = false;
                chatInput.value = ''; 
            }
            // Enable send text button
            if (sendChatBtn) {
                sendChatBtn.disabled = false;
                sendChatBtn.style.display = 'flex'; 
            }
            // Ensure recordAudioBtn is enabled and shows mic icon
            if (recordAudioBtn) {
                recordAudioBtn.disabled = false;
                recordAudioBtn.classList.remove('recording');
                recordAudioBtn.innerHTML = '<i class="material-icons">mic</i>'; 
            }
            // Hide and disable sendAudioBtn
            if (sendAudioBtn) { 
                sendAudioBtn.disabled = true;
                sendAudioBtn.style.display = 'none';
            }
            recordedAudioBlob = null; 
        } else if (mode === 'recording') {
            // HIDE text input elements
            if (inputWrapper) {
                inputWrapper.style.display = 'none';
                inputWrapper.classList.add('hidden-for-recording');
            }
            // SHOW audio recording display
            if (audioRecordingDisplay) {
                audioRecordingDisplay.style.display = 'flex';
                audioRecordingDisplay.classList.add('visible');
            }
            // Disable text input (to prevent typing while recording)
            if (chatInput) chatInput.disabled = true;
            
            // Microphone button remains enabled and shows 'stop' icon
            if (recordAudioBtn) recordAudioBtn.disabled = false;

            // Enable sendAudioBtn (the airplane button on the audio display)
            if (sendAudioBtn) {
                sendAudioBtn.disabled = false;
                sendAudioBtn.style.display = 'flex'; 
            }
            // Disable sendChatBtn (the text send button, as it's hidden anyway)
            if (sendChatBtn) sendChatBtn.disabled = true;

        } else if (mode === 'processing') { // When bot is thinking/responding
            // Keep current display state but disable all interactive elements
            if (chatInput) chatInput.disabled = true;
            if (sendChatBtn) sendChatBtn.disabled = true; 
            if (recordAudioBtn) recordAudioBtn.disabled = true; 
            if (sendAudioBtn) sendAudioBtn.disabled = true; 
        }
    }


    function addUserMessage(text) {
      addMessageToChat(text, 'user');
      chatHistory.push({ role: "user", parts: [{ text: text }] });
    }

    function addUserAudioMessage(audioBlobUrl) {
        addMessageToChat("", "user", audioBlobUrl);
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

    async function getBotResponse(userMessage, audioBlob = null) {
      setInputMode('processing'); 
      showTypingIndicator();
      let payload;

      if (audioBlob) {
        const formData = new FormData();
        formData.append('audio', audioBlob, 'audio.webm');
        formData.append('sessionId', currentSessionId);
        payload = formData;
      } else {
        payload = JSON.stringify({ userMessage: userMessage, sessionId: currentSessionId });
      }

      try {
        const fetchOptions = {
          method: 'POST',
          body: payload,
        };

        if (!audioBlob) {
          fetchOptions.headers = { 'Content-Type': 'application/json' };
        }
        
        const response = await fetch(N8N_WEBHOOK_URL, fetchOptions);

        if (!response.ok) {
          const errorText = await response.text();
          console.error('Erro do Webhook n8n:', response.status, response.statusText, errorText);
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
        setInputMode('text'); 
      }
    }

    async function handleSendTextMessage() {
        if (chatInput) {
            const messageText = chatInput.value.trim();
            if (messageText) {
                addUserMessage(messageText);
                chatInput.value = '';
                await getBotResponse(messageText);
            }
        }
    }

    async function handleSendRecordedAudio() {
        if (recordedAudioBlob) {
            showToast("Enviando áudio...", "info");
            const tempBlob = recordedAudioBlob; 
            
            if (isRecording && mediaRecorder && mediaRecorder.state !== 'inactive') {
                mediaRecorder.stop(); 
            }
            
            await getBotResponse(null, tempBlob);
        } else {
            showToast("Nenhum áudio para enviar.", "error");
            setInputMode('text'); 
        }
    }

    // --- AUDIO RECORDING LOGIC ---
    function formatTime(seconds) {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
    }

    if (recordAudioBtn) {
        recordAudioBtn.addEventListener('click', async () => {
            if (!isRecording) {
                // Iniciar gravação
                try {
                    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
                    mediaRecorder = new MediaRecorder(stream);
                    audioChunks = [];
                    secondsRecorded = 0;
                    recordingTimer.textContent = formatTime(secondsRecorded);
                    recordedAudioBlob = null; 
                    
                    // Transição para o modo de gravação
                    setInputMode('recording'); 

                    timerInterval = setInterval(() => {
                        secondsRecorded++;
                        recordingTimer.textContent = formatTime(secondsRecorded);
                    }, 1000);

                    mediaRecorder.ondataavailable = event => {
                        audioChunks.push(event.data);
                    };

                    mediaRecorder.onstop = async () => {
                        clearInterval(timerInterval); 
                        isRecording = false; 

                        // Esta função é chamada quando a gravação é parada.
                        // Agora, ela deve sempre processar e enviar o áudio se houver chunks.
                        // O `recordAudioBtn` com ícone "stop" dispara `mediaRecorder.stop()`,
                        // que por sua vez vem para cá.
                        
                        if (audioChunks.length > 0) {
                            const audioBlob = new Blob(audioChunks, { type: 'audio/webm' });
                            recordedAudioBlob = audioBlob; 
                            const audioBlobUrl = URL.createObjectURL(audioBlob);
                            addUserAudioMessage(audioBlobUrl); 

                            showToast("Gravação finalizada. Enviando áudio...", "info");
                            await getBotResponse(null, recordedAudioBlob); // ENVIA O ÁUDIO E RESETA A INTERFACE
                        } else {
                             showToast("Gravação muito curta ou sem áudio.", "info");
                             setInputMode('text'); 
                        }
                    };

                    mediaRecorder.start();
                    isRecording = true;
                    recordAudioBtn.classList.add('recording');
                    recordAudioBtn.innerHTML = '<i class="material-icons">stop</i>'; 
                    
                    showToast("Gravação iniciada...", "info");

                } catch (err) {
                    console.error('Erro ao acessar o microfone:', err);
                    showToast("Não foi possível acessar o microfone. Verifique as permissões.", "error");
                    setInputMode('text'); 
                    clearInterval(timerInterval);
                }
            } else {
                // Usuário clicou no botão de stop (microfone vermelho).
                // Isso deve parar a gravação e disparar o envio através de mediaRecorder.onstop().
                mediaRecorder.stop();
            }
        });
    }

    if (sendChatBtn) {
        sendChatBtn.addEventListener('click', handleSendTextMessage);
    }
    
    // sendAudioBtn AGORA TEM UM COMPORTAMENTO CLARO: Enviar o áudio
    // se estiver no display de gravação.
    if (sendAudioBtn) {
        sendAudioBtn.addEventListener('click', handleSendRecordedAudio);
    }

    if (chatInput) {
      chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && !chatInput.disabled) {
          e.preventDefault();
          handleSendTextMessage(); 
        }
      });
    }

    // Initial chat logic on load
    if (chatMessagesContainer && chatMessagesContainer.children.length === 0) {
      (async () => {
        await addBotMessage("Olá! Sou a MaIA, sua assistente virtual. Como posso te ajudar hoje?");
        setInputMode('text'); 
      })();
    } else {
      setInputMode('text'); 
    }
  });

  document.addEventListener('DOMContentLoaded', () => {
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const accordionItem = header.closest('.accordion-item');
            const accordionContent = accordionItem.querySelector('.accordion-content');

            document.querySelectorAll('.accordion-item.active').forEach(item => {
                if (item !== accordionItem) {
                    item.classList.remove('active');
                    item.querySelector('.accordion-content').style.maxHeight = 0;
                }
            });

            accordionItem.classList.toggle('active');

            if (accordionItem.classList.contains('active')) {
                accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
            } else {
                accordionContent.style.maxHeight = 0;
            }
        });
    });
});