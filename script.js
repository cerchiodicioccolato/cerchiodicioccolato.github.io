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
let activeOscillators = []; // Para mantener track de los sonidos activos

function iniciarAudio() {
    if (!audioContext) {
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (audioContext.state === 'suspended') {
        audioContext.resume();
    }
    return audioContext;
}

function detenerTodosLosSonidos() {
    activeOscillators.forEach(item => {
        try {
            item.osc.stop();
            item.gain.disconnect();
        } catch(e) {}
    });
    activeOscillators = [];
}

function reproducirNota(nota, esRefuerzo = false) {
    const frecuencias = {
        1: 261.63,  // DO
        2: 293.66,  // RE
        3: 329.63,  // MI
        4: 349.23,  // FA
        5: 392.00,  // SOL
        6: 440.00,  // LA
        7: 493.88   // SI
    };
    
    const frecuencia = frecuencias[nota];
    if (!frecuencia) return;
    
    try {
        const audioCtx = iniciarAudio();
        const ahora = audioCtx.currentTime;
        
        // Detener sonidos anteriores para evitar acumulación
        detenerTodosLosSonidos();
        
        // Configuración según si es refuerzo o no
        const volumenBase = esRefuerzo ? 0.5 : 0.35;
        const volumenArmonico = esRefuerzo ? 0.3 : 0.15;
        const duracion = esRefuerzo ? 1.8 : 1.3;
        
        // Oscilador fundamental (nota base)
        const oscFundamental = audioCtx.createOscillator();
        const gainFundamental = audioCtx.createGain();
        oscFundamental.type = 'sine';
        oscFundamental.frequency.value = frecuencia;
        
        // Oscilador armónico (octava superior) - más brillante
        const oscArmonico = audioCtx.createOscillator();
        const gainArmonico = audioCtx.createGain();
        oscArmonico.type = 'sine';
        oscArmonico.frequency.value = frecuencia * 2;
        
        // Conectar
        oscFundamental.connect(gainFundamental);
        oscArmonico.connect(gainArmonico);
        gainFundamental.connect(audioCtx.destination);
        gainArmonico.connect(audioCtx.destination);
        
        // Guardar para poder detener después
        activeOscillators.push({ osc: oscFundamental, gain: gainFundamental });
        activeOscillators.push({ osc: oscArmonico, gain: gainArmonico });
        
        // Envelope para la fundamental
        gainFundamental.gain.setValueAtTime(0, ahora);
        gainFundamental.gain.linearRampToValueAtTime(volumenBase, ahora + 0.01);
        gainFundamental.gain.exponentialRampToValueAtTime(0.001, ahora + duracion);
        
        // Envelope para el armónico
        gainArmonico.gain.setValueAtTime(0, ahora);
        gainArmonico.gain.linearRampToValueAtTime(volumenArmonico, ahora + 0.02);
        gainArmonico.gain.exponentialRampToValueAtTime(0.001, ahora + duracion - 0.2);
        
        // Si es refuerzo, añadir un tercer armónico más brillante
        if (esRefuerzo) {
            const oscTercera = audioCtx.createOscillator();
            const gainTercera = audioCtx.createGain();
            oscTercera.type = 'sine';
            oscTercera.frequency.value = frecuencia * 1.5;
            
            oscTercera.connect(gainTercera);
            gainTercera.connect(audioCtx.destination);
            
            activeOscillators.push({ osc: oscTercera, gain: gainTercera });
            
            gainTercera.gain.setValueAtTime(0, ahora);
            gainTercera.gain.linearRampToValueAtTime(0.2, ahora + 0.02);
            gainTercera.gain.exponentialRampToValueAtTime(0.001, ahora + duracion - 0.3);
            
            oscTercera.start();
            oscTercera.stop(ahora + duracion - 0.3);
        }
        
        // Iniciar osciladores
        oscFundamental.start();
        oscArmonico.start();
        oscFundamental.stop(ahora + duracion);
        oscArmonico.stop(ahora + duracion - 0.2);
        
        // Limpiar del array después de que terminen
        setTimeout(() => {
            activeOscillators = activeOscillators.filter(item => 
                item.osc !== oscFundamental && item.osc !== oscArmonico
            );
        }, duracion * 1000);
        
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
            background: #5C3E2E;
            color: white;
            padding: 12px 24px;
            border-radius: 40px;
            font-family: 'Montserrat', sans-serif;
            font-size: 0.9rem;
            z-index: 9999;
            box-shadow: 0 5px 20px rgba(0,0,0,0.2);
            border-left: 4px solid #C6A15B;
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
