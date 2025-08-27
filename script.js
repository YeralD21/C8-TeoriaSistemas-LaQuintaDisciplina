// Funcionalidad de navegación y efectos interactivos
document.addEventListener('DOMContentLoaded', function() {
    
    // Navegación activa basada en scroll
    const sections = document.querySelectorAll('.chapter');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Función para actualizar navegación activa
    function updateActiveNav() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.pageYOffset >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    }
    
    // Escuchar scroll para actualizar navegación
    window.addEventListener('scroll', updateActiveNav);
    
    // Scroll suave para enlaces de navegación
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Ajuste para navbar
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Efecto de parallax sutil en el navbar
    let lastScrollTop = 0;
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            // Scrolling down
            navbar.style.transform = 'translateY(-100%)';
        } else {
            // Scrolling up
            navbar.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop;
    });
    
    // Animación de aparición para las tarjetas de disciplinas
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observar las tarjetas de disciplinas
    const disciplineCards = document.querySelectorAll('.discipline-card');
    disciplineCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
    
    // Efecto de hover mejorado para las tarjetas
    disciplineCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Función para resaltar texto importante
    function highlightImportantText() {
        const paragraphs = document.querySelectorAll('.content-block p');
        
        paragraphs.forEach(paragraph => {
            const text = paragraph.innerHTML;
            const highlightedText = text.replace(
                /(organizaciones inteligentes|pensamiento sistémico|dominio personal|modelos mentales|visión compartida|aprendizaje en equipo|metanoia|barreras para el aprendizaje|enemigo externo|parábola de la rana hervida|incompetencia calificada|horizonte de aprendizaje|equipo administrativo|estructura sistémica|explicaciones estructurales|políticas operativas|variables clave|patrones de conducta|realimentación compensadora|desplazamiento de la carga|principio de la palanca|límite del sistema|puntos de apalancamiento|zonas de alto apalancamiento|complejidad dinámica|complejidad en los detalles|realimentación reforzadora|realimentación compensadora|efecto Pigmalión|profecía autocumplida|círculos viciosos|círculos virtuosos|procesos compensadores|demoras|arquetipos sistémicos|fallos sistémicos|era de la interdependencia|límites del crecimiento|estructuras genéricas|configuraciones naturales|erosión de las metas|dinámica de la adicción|crisis periódicas|soluciones sintomáticas|soluciones fundamentales|efectos laterales|punto de apalancamiento|economía de medios|crecimiento no sostenido|crecimiento autolimitado|crecimiento autosostenido|crecimiento y subinversión|subinversión|tensión financiera|pautas críticas de desempeño|estructuras sutiles|complejidad creciente|árboles y bosque|información excesiva|información escasa|variables decisivas|variables secundarias|comprensión compartida|arquetipos básicos|patrones amplios|patrones detallados|perspectiva lineal|disciplinas complementarias|alto apalancamiento|bajo apalancamiento|estructuras subyacentes|causas raíz|capacidad de síntesis|discernimiento|equilibrio|navegar la complejidad|piedra angular espiritual|tensión creativa|tensión emocional|conflicto estructural|visión personal|propósito|interés genuino|brecha entre visión y realidad|realidad actual|compromiso con la verdad|subconsciente|comunicación subconsciente|práctica meditativa|concentración en resultados|integración de razón e intuición|cerrar los rizos|compasión|compromiso con la totalidad|crecimiento personal|aprendizaje individual|aprendizaje organizacional|modalidad de aprendizaje continuo|sentido de propósito|realidad como aliado|inquisitividad profunda|desarrollo emocional pleno|recompensa es el viaje|contrato tradicional|bienestar de integrantes|resistencia al dominio personal|cinismo|potencial humano|orden establecido|disciplina del dominio personal|metas y objetivos|visión vs propósito|destino específico|futuro deseado|fuente de energía|fuerza generadora|angustia|estrés|desaliento|desesperanza|preocupación|rebajar la visión|dinámica de desplazamiento de carga|espiral reforzadora|fracaso|frustración|alivio temporario|erosión de metas|tolerancia hacia la tensión emocional|mediocridad|componenda|fracaso como oportunidad|perseverancia|paciencia|actitud ante la realidad|prejuicios|percepción de la realidad|fidelidad a la visión|compromiso con la verdad|creencia dominante|impotencia|indignidad|fuerzas sistémicas|estrategias genéricas|desgaste de la visión|manipulación del conflicto|fuerza de voluntad|manipulación de conflictos|visión negativa|temor al fracaso|angustia y miedo|glorificación del sufrimiento|consecuencias no buscadas|economía de medios|puntos de apalancamiento|creencias fundamentales|psicólogos|experiencias|dominio personal|estructuras profundas|decir la verdad|fórmula|técnica|maneras de limitarnos|engañarnos|teorías|estructuras subyacentes|conflictos estructurales|conducta resultante|señales de advertencia interna|culpar|patrón recurrente|estrategia de fuerza de voluntad|sensación de impotencia|defraudar|escozor de reconocimiento|causas externas|causas estructurales|prisioneros de estructuras|consciencia|designar estructuras|poder de las estructuras|individuos y organizaciones|estructuras actuantes|cambio inmediato|cambio gradual|trabajar creativamente|reconocer origen|combatir estructuras|realidad actual|fuerza generadora|tareas complejas|gracia y facilidad|dimensión de la mente|inconsciente|mente automática|conciencia normal|tareas automáticas|adiestrar el subconsciente|reflexionar sobre aptitudes|relación honda|meditación|plegaria contemplativa|silenciar la mente consciente|dirigir concentración|resultado deseado|proceso|medio|resultado intrínseco|habilidad|tiempo y paciencia|metas personales importantes|razones de dificultad|desafíos|obstáculos|estrategias diversas|falta de disciplina|pensamientos sobre proceso|obnubilar concentración|separar deseos de necesidades|opciones claras|aptitudes del subconsciente|conciencia normal|resultados importantes|usos provechosos|comunicación subconsciente|engañarnos a nosotros mismos|información precisa|datos que distraen|cháchara|principio de tensión creativa|eficacia del subconsciente|concentración clara|interés genuino|resultado deseado|meta correcta|aspiraciones|valores profundos|clave para dominio|comunicación subconsciente|maestros|artes creativas|cambios graduales|cambios sutiles|estructuras del dominio personal|integración de razón e intuición|visión continuamente intensificada|conexión con el mundo|compasión|compromiso con la totalidad|aceptación de intuición|atención a intuición|mundo de negocios|gerentes experimentados|líderes experimentados|corazonadas|reconocer patrones|establecer analogías|paralelismos intuitivos|situaciones dispares|escuelas de administración|cursos sobre intuición|resolución creativa de problemas|reintegración de intuición y racionalidad|organizaciones|sociedad|pasión por recursos|subproducto natural|pensamiento sistémico|clave para integración|intuición|cárcel del pensamiento lineal|causas y efectos próximos|tiempo y espacio|lógica lineal|conflicto entre intuición|pensamiento asistémico|racionalidad vs intuición|perspectiva falsa|sinergia de razón e intuición|grandes pensadores|Einstein|mente racional|principio de relatividad|intuiciones brillantes|proposiciones sucintas|verificación racional|dimensión olvidada|crecimiento personal|cerrar los rizos|fuerzas aparentemente externas|interrelacionadas|actos propios|proceso de cerrar rizos|descubrimientos tempranos|aumentar edad|disminuir descubrimientos|eslabones nuevos|actos y fuerzas externas|desafío|expandir conciencia|expandir comprensión|interdependencia|actos y realidad|conexión con mundo circundante|captar plenamente|múltiples modos|influir sobre realidad|posibilidad|liberar pensamiento|disciplina de ver interrelaciones|erosionar actitudes|acusación|culpa|atrapados en estructuras|estructuras encastradas|modos de pensar|ámbitos interpersonales|ámbitos sociales|tendencia precipitada|hallar defectos|disipar tendencias|apreciación de fuerzas|operar en sistemas|víctimas de sistemas|conducta impuesta|creación propia|estructuras invisibles|no víctimas ni culpables|seres humanos controlados|fuerzas no percibidas|compasión como estado emocional|preocupación mutua|nivel de conciencia|entender sistemas|comprender presiones|desarrollar compasión|desarrollar empatía|compromiso genuino|algo mayor que nosotros mismos|acción del corazón|sincero deseo de servir|servir al mundo|poder espiritual|conectividad|característica de dominio personal|visión más amplia|visualización subconsciente|egocéntrica|conseguir lo que quiero|visión trascendente|interés egoísta|energías para metas estrechas|aprovechar compromiso|descubrimientos valederos|inventos valederos|experimentar poder espiritual|voluntad comprometida|propósito más amplio|grito desde el alma|sacudida y despertar|alentar dominio personal|organización|camino de crecimiento personal|cuestión de elección|obligar desarrollo|resultar contraproducente|dificultades organizacionales|promoción agresiva|líderes interesados|fomentar dominio personal|trabajar sin pausa|alentar clima|principios del dominio personal|vida cotidiana|construir organización|seguro crear visiones|indagación|compromiso con verdad|norma|desafíos al status quo|aspectos borrosos|realidad actual|eludir realidad|disciplina|proceso continuo|individuo abocado|crecimiento personal|ámbito respaldo|organización comprometida|brindar ámbito|alentar continuamente|visión personal|voluntad de enfrentar|brechas honestamente|prácticas productivas|desarrollar dominio personal|desarrollo de perspectiva sistémica|reflexionar sobre supuestos tácitos|expresar visión|escuchar visión|indagación conjunta|diversas personas|realidad actual|disciplinas para construir|organizaciones inteligentes|organizaciones que aprenden|acciones positivas|desarrollo concertado|cinco disciplinas de aprendizaje|estrategia central del liderazgo|ser líder|comprometerse con dominio personal|hablar de dominio personal|abrir mente|actos más elocuentes|palabras|alentar búsqueda|seriedad en búsqueda|propia seriedad)/gi,
                '<span class="highlight">$1</span>'
            );
            paragraph.innerHTML = highlightedText;
        });
    }
    
    // Aplicar resaltado
    highlightImportantText();
    
    // Botón de "Volver arriba"
    const backToTopButton = document.createElement('button');
    backToTopButton.innerHTML = '↑';
    backToTopButton.className = 'back-to-top';
    backToTopButton.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: linear-gradient(135deg, #667eea, #764ba2);
        color: white;
        border: none;
        font-size: 20px;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 1000;
        box-shadow: 0 5px 15px rgba(102, 126, 234, 0.3);
    `;
    
    document.body.appendChild(backToTopButton);
    
    // Mostrar/ocultar botón de volver arriba
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopButton.style.opacity = '1';
            backToTopButton.style.visibility = 'visible';
        } else {
            backToTopButton.style.opacity = '0';
            backToTopButton.style.visibility = 'hidden';
        }
    });
    
    // Funcionalidad del botón volver arriba
    backToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Efecto de hover para el botón
    backToTopButton.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1)';
    });
    
    backToTopButton.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
    
    // Contador de progreso de lectura
    const progressBar = document.createElement('div');
    progressBar.className = 'reading-progress';
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 3px;
        background: linear-gradient(90deg, #667eea, #764ba2);
        z-index: 1001;
        transition: width 0.3s ease;
    `;
    
    document.body.appendChild(progressBar);
    
    // Actualizar barra de progreso
    function updateProgressBar() {
        const scrollTop = window.pageYOffset;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        
        progressBar.style.width = scrollPercent + '%';
    }
    
    window.addEventListener('scroll', updateProgressBar);
    
    // Efecto de typing para el título principal
    const navTitle = document.querySelector('.nav-title');
    const originalText = navTitle.textContent;
    navTitle.textContent = '';
    
    let i = 0;
    const typeWriter = () => {
        if (i < originalText.length) {
            navTitle.textContent += originalText.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    };
    
    // Iniciar efecto de typing después de un breve delay
    setTimeout(typeWriter, 500);
    
    // Función para agregar efectos de partículas en el fondo (opcional)
    function createParticle() {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: fixed;
            width: 2px;
            height: 2px;
            background: rgba(255, 255, 255, 0.5);
            border-radius: 50%;
            pointer-events: none;
            z-index: -1;
        `;
        
        particle.style.left = Math.random() * window.innerWidth + 'px';
        particle.style.top = window.innerHeight + 'px';
        
        document.body.appendChild(particle);
        
        const animation = particle.animate([
            { transform: 'translateY(0px)', opacity: 1 },
            { transform: `translateY(-${window.innerHeight}px)`, opacity: 0 }
        ], {
            duration: Math.random() * 3000 + 2000,
            easing: 'linear'
        });
        
        animation.onfinish = () => {
            particle.remove();
        };
    }
    
    // Crear partículas cada 2 segundos
    setInterval(createParticle, 2000);
    
    // Inicializar algunas partículas al cargar
    for (let i = 0; i < 10; i++) {
        setTimeout(createParticle, i * 200);
    }
});

// Agregar estilos CSS adicionales dinámicamente
const additionalStyles = `
    .highlight {
        background: linear-gradient(120deg, rgba(102, 126, 234, 0.2), rgba(118, 75, 162, 0.2));
        padding: 2px 4px;
        border-radius: 4px;
        font-weight: 600;
    }
    
    .back-to-top:hover {
        background: linear-gradient(135deg, #764ba2, #667eea) !important;
        transform: scale(1.1) !important;
    }
    
    .reading-progress {
        box-shadow: 0 2px 10px rgba(102, 126, 234, 0.3);
    }
`;

const styleSheet = document.createElement('style');
styleSheet.textContent = additionalStyles;
document.head.appendChild(styleSheet);
