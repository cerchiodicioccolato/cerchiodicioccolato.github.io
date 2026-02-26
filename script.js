document.addEventListener('DOMContentLoaded', function() {
    const header = document.getElementById('header');
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
            navbar.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
            navbar.classList.remove('scrolled');
        }
    });

    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.querySelector('.nav-menu');
    
    menuToggle.addEventListener('click', function() {
        this.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function() {
            menuToggle.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    const slides = document.querySelectorAll('.hero-slide');
    const indicators = document.querySelectorAll('.indicator');
    let currentSlide = 0;
    let slideInterval;

    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        indicators.forEach(ind => ind.classList.remove('active'));
        
        slides[index].classList.add('active');
        indicators[index].classList.add('active');
        currentSlide = index;
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    slideInterval = setInterval(nextSlide, 5000);

    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            clearInterval(slideInterval);
            showSlide(index);
            slideInterval = setInterval(nextSlide, 5000);
        });
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    const sections = document.querySelectorAll('section[id]');
    
    window.addEventListener('scroll', function() {
        const scrollY = window.scrollY;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionBottom = sectionTop + section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollY >= sectionTop && scrollY < sectionBottom) {
                document.querySelectorAll('.nav-link').forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === '#' + sectionId) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });

    const form = document.getElementById('inspirame-form');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const tipoEvento = document.getElementById('tipo-evento').value;
        const fecha = document.getElementById('fecha').value;
        const hora = document.getElementById('hora').value;
        const colores = document.getElementById('colores').value;
        const presupuesto = document.getElementById('presupuesto').value;
        const inspiracion = document.getElementById('inspiracion').value;
        const nombre = document.getElementById('nombre').value;
        const telefono = document.getElementById('telefono').value;
        const detalles = document.getElementById('detalles').value;
        
        const mensaje = `🍰 *Nuevo mensaje desde la web* 🍰
        
*¿Para qué es?* ${tipoEvento}
*Fecha:* ${fecha}
*Hora:* ${hora || 'No especificada'}
*Colores:* ${colores || 'No especificados'}
💰 *Presupuesto:* ${presupuesto || 'No especificado'}
*Inspiración:* ${inspiracion || 'No especificada'}
*Nombre:* ${nombre}
*Teléfono:* ${telefono}
*Detalles adicionales:* ${detalles || 'Ninguno'}`;
        
        const url = `https://wa.me/5356552059?text=${encodeURIComponent(mensaje)}`;
        window.open(url, '_blank');
    });
});

let audioContext = null;

function iniciarAudio() {
    if (!audioContext) {
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (audioContext.state === 'suspended') {
        audioContext.resume();
    }
    return audioContext;
}

function reproducirNota(nota) {
    const frecuencias = {
        1: 261.63,
        2: 293.66,
        3: 329.63,
        4: 349.23,
        5: 392.00,
        6: 440.00,
        7: 493.88
    };
    
    const frecuencia = frecuencias[nota];
    if (!frecuencia) return;
    
    try {
        const audioCtx = iniciarAudio();
        const ahora = audioCtx.currentTime;
        
        const oscFundamental = audioCtx.createOscillator();
        const gainFundamental = audioCtx.createGain();
        
        oscFundamental.type = 'triangle';
        oscFundamental.frequency.value = frecuencia;
        
        oscFundamental.connect(gainFundamental);
        gainFundamental.connect(audioCtx.destination);
        
        const oscArmonico1 = audioCtx.createOscillator();
        const gainArmonico1 = audioCtx.createGain();
        
        oscArmonico1.type = 'sine';
        oscArmonico1.frequency.value = frecuencia * 2;
        
        oscArmonico1.connect(gainArmonico1);
        gainArmonico1.connect(audioCtx.destination);
        
        const oscArmonico2 = audioCtx.createOscillator();
        const gainArmonico2 = audioCtx.createGain();
        
        oscArmonico2.type = 'sine';
        oscArmonico2.frequency.value = frecuencia * 1.5;
        
        oscArmonico2.connect(gainArmonico2);
        gainArmonico2.connect(audioCtx.destination);
        
        const bufferSize = 4096;
        const noiseNode = audioCtx.createScriptProcessor(bufferSize, 1, 1);
        const gainNoise = audioCtx.createGain();
        
        noiseNode.onaudioprocess = function(e) {
            const output = e.outputBuffer.getChannelData(0);
            for (let i = 0; i < bufferSize; i++) {
                output[i] = Math.random() * 2 - 1;
            }
        };
        
        noiseNode.connect(gainNoise);
        gainNoise.connect(audioCtx.destination);
        
        gainFundamental.gain.setValueAtTime(0, ahora);
        gainFundamental.gain.linearRampToValueAtTime(0.4, ahora + 0.01);
        gainFundamental.gain.exponentialRampToValueAtTime(0.001, ahora + 1.5);
        
        gainArmonico1.gain.setValueAtTime(0, ahora);
        gainArmonico1.gain.linearRampToValueAtTime(0.2, ahora + 0.02);
        gainArmonico1.gain.exponentialRampToValueAtTime(0.001, ahora + 1.2);
        
        gainArmonico2.gain.setValueAtTime(0, ahora);
        gainArmonico2.gain.linearRampToValueAtTime(0.1, ahora + 0.03);
        gainArmonico2.gain.exponentialRampToValueAtTime(0.001, ahora + 1.0);
        
        gainNoise.gain.setValueAtTime(0.02, ahora);
        gainNoise.gain.exponentialRampToValueAtTime(0.001, ahora + 0.1);
        
        oscFundamental.start();
        oscArmonico1.start();
        oscArmonico2.start();
        noiseNode.start ? noiseNode.start() : null;
        
        oscFundamental.stop(ahora + 1.5);
        oscArmonico1.stop(ahora + 1.2);
        oscArmonico2.stop(ahora + 1.0);
        noiseNode.stop ? noiseNode.stop(ahora + 0.15) : null;
        
        setTimeout(() => {
            try {
                noiseNode.disconnect();
            } catch(e) {}
        }, 200);
        
    } catch (error) {
        console.log("Error al reproducir nota:", error);
    }
}

window.addEventListener('load', function() {
    setTimeout(function() {
        const preloader = document.getElementById('preloader');
        if (preloader) {
            preloader.classList.add('oculto');
            
            setTimeout(function() {
                preloader.style.display = 'none';
            }, 1000);
        }
    }, 1500);
});

function precargarTodasLasImagenes() {
    const imagenes = [
        'cumpleanos.webp',
        'quince.webp',
        'boda.webp',
        'personalizados.webp',
        'exoticos.webp',
        'gender-reveal.webp',
        'mesa.webp',
        'logo.webp',
        'pastel.webp',
        'arte.webp',
        'pasion.webp',
        'inspiracion.webp',
        'bodas.webp',
        'xv.webp',
        'lucas.webp',
        'fa.webp',
        'sol.webp',
        'la.webp',
        'si.webp',
        'do.webp'
    ];
    
    let imagenesCargadas = 0;
    const totalImagenes = imagenes.length;
    
    imagenes.forEach(url => {
        const img = new Image();
        img.onload = function() {
            imagenesCargadas++;
            const progreso = (imagenesCargadas / totalImagenes) * 100;
            const barra = document.getElementById('preloader-progreso');
            if (barra) {
                barra.style.width = progreso + '%';
            }
            
            if (imagenesCargadas === totalImagenes) {
                setTimeout(function() {
                    const preloader = document.getElementById('preloader');
                    if (preloader) {
                        preloader.classList.add('oculto');
                        setTimeout(() => {
                            preloader.style.display = 'none';
                        }, 800);
                    }
                }, 500);
            }
        };
        img.onerror = function() {
            imagenesCargadas++;
        };
        img.src = url;
    });
}

document.addEventListener('DOMContentLoaded', function() {
    precargarTodasLasImagenes();
});

(function() {
    document.body.style.userSelect = 'none';
    document.body.style.webkitUserSelect = 'none';
    document.body.style.msUserSelect = 'none';
    document.body.style.mozUserSelect = 'none';

    document.addEventListener('contextmenu', function(e) {
        e.preventDefault();
        
        const mensaje = document.createElement('div');
        mensaje.textContent = '🔒 Contenido protegido © Cerchio di Cioccolato';
        mensaje.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: var(--chocolate, #5C3E2E);
            color: white;
            padding: 12px 24px;
            border-radius: 40px;
            font-family: 'Montserrat', sans-serif;
            font-size: 0.9rem;
            z-index: 9999;
            box-shadow: 0 5px 20px rgba(0,0,0,0.2);
            border-left: 4px solid var(--dorado, #C6A15B);
            opacity: 0;
            transform: translateX(30px);
            transition: all 0.3s ease;
            pointer-events: none;
        `;
        
        document.body.appendChild(mensaje);
        
        setTimeout(() => {
            mensaje.style.opacity = '1';
            mensaje.style.transform = 'translateX(0)';
        }, 10);
        
        setTimeout(() => {
            mensaje.style.opacity = '0';
            mensaje.style.transform = 'translateX(30px)';
            setTimeout(() => mensaje.remove(), 300);
        }, 2000);
    });

    document.addEventListener('dragstart', function(e) {
        if (e.target.tagName === 'IMG') {
            e.preventDefault();
        }
    });

    document.addEventListener('keydown', function(e) {
        if (e.ctrlKey && e.key === 'c') {
            e.preventDefault();
        }
    });
})();