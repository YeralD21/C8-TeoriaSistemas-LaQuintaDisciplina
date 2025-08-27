// Funcionalidad de navegación y efectos interactivos
document.addEventListener('DOMContentLoaded', function() {
    
    // Navegación activa basada en scroll
    const sections = document.querySelectorAll('.chapter');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Función para actualizar el enlace activo en la navegación
    function updateActiveNav() {
        const sections = document.querySelectorAll('.chapter');
        const navLinks = document.querySelectorAll('.nav-link');
        const navbarHeight = 80; // Altura del navbar fijo
        
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - navbarHeight - 100; // Ajuste para el navbar
            const sectionHeight = section.clientHeight;
            if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
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
            // Resaltar términos importantes
            const highlightedText = text.replace(
                /(organizaciones inteligentes|pensamiento sistémico|dominio personal|modelos mentales|visión compartida|aprendizaje en equipo|metanoia|barreras para el aprendizaje|enemigo externo|parábola de la rana hervida|incompetencia calificada|horizonte de aprendizaje|equipo administrativo|estructura sistémica|explicaciones estructurales|políticas operativas|variables clave|patrones de conducta|realimentación compensadora|desplazamiento de la carga|principio de la palanca|límite del sistema|puntos de apalancamiento|zonas de alto apalancamiento|complejidad dinámica|complejidad en los detalles|realimentación reforzadora|realimentación compensadora|efecto Pigmalión|profecía autocumplida|círculos viciosos|círculos virtuosos|procesos compensadores|demoras|arquetipos sistémicos|fallos sistémicos|era de la interdependencia|límites del crecimiento|estructuras genéricas|configuraciones naturales|erosión de las metas|dinámica de la adicción|crisis periódicas|soluciones sintomáticas|soluciones fundamentales|efectos laterales|punto de apalancamiento|economía de medios|crecimiento no sostenido|crecimiento autolimitado|crecimiento autosostenido|crecimiento y subinversión|subinversión|tensión financiera|pautas críticas de desempeño|estructuras sutiles|complejidad creciente|árboles y bosque|información excesiva|información escasa|variables decisivas|variables secundarias|comprensión compartida|arquetipos básicos|patrones amplios|patrones detallados|perspectiva lineal|disciplinas complementarias|alto apalancamiento|bajo apalancamiento|estructuras subyacentes|causas raíz|capacidad de síntesis|discernimiento|equilibrio|navegar la complejidad|piedra angular espiritual|tensión creativa|tensión emocional|conflicto estructural|visión personal|propósito|interés genuino|brecha entre visión y realidad|realidad actual|compromiso con la verdad|subconsciente|comunicación subconsciente|práctica meditativa|concentración en resultados|integración de razón e intuición|cerrar los rizos|compasión|compromiso con la totalidad|crecimiento personal|aprendizaje individual|aprendizaje organizacional|modalidad de aprendizaje continuo|sentido de propósito|realidad como aliado|inquisitividad profunda|desarrollo emocional pleno|recompensa es el viaje|contrato tradicional|bienestar de integrantes|resistencia al dominio personal|cinismo|potencial humano|orden establecido|disciplina del dominio personal|metas y objetivos|visión vs propósito|destino específico|futuro deseado|fuente de energía|fuerza generadora|angustia|estrés|desaliento|desesperanza|preocupación|rebajar la visión|dinámica de desplazamiento de carga|espiral reforzadora|fracaso|frustración|alivio temporario|erosión de metas|tolerancia hacia la tensión emocional|mediocridad|componenda|fracaso como oportunidad|perseverancia|paciencia|actitud ante la realidad|prejuicios|percepción de la realidad|fidelidad a la visión|compromiso con la verdad|creencia dominante|impotencia|indignidad|fuerzas sistémicas|estrategias genéricas|desgaste de la visión|manipulación del conflicto|fuerza de voluntad|manipulación de conflictos|visión negativa|temor al fracaso|angustia y miedo|glorificación del sufrimiento|consecuencias no buscadas|economía de medios|puntos de apalancamiento|creencias fundamentales|psicólogos|experiencias|dominio personal|estructuras profundas|decir la verdad|fórmula|técnica|maneras de limitarnos|engañarnos|teorías|estructuras subyacentes|conflictos estructurales|conducta resultante|señales de advertencia interna|culpar|patrón recurrente|estrategia de fuerza de voluntad|sensación de impotencia|defraudar|escozor de reconocimiento|causas externas|causas estructurales|prisioneros de estructuras|consciencia|designar estructuras|poder de las estructuras|individuos y organizaciones|estructuras actuantes|cambio inmediato|cambio gradual|trabajar creativamente|reconocer origen|combatir estructuras|realidad actual|fuerza generadora|tareas complejas|gracia y facilidad|dimensión de la mente|inconsciente|mente automática|conciencia normal|tareas automáticas|adiestrar el subconsciente|reflexionar sobre aptitudes|relación honda|meditación|plegaria contemplativa|silenciar la mente consciente|dirigir concentración|resultado deseado|proceso|medio|resultado intrínseco|habilidad|tiempo y paciencia|metas personales importantes|razones de dificultad|desafíos|obstáculos|estrategias diversas|falta de disciplina|pensamientos sobre proceso|obnubilar concentración|separar deseos de necesidades|opciones claras|aptitudes del subconsciente|conciencia normal|resultados importantes|usos provechosos|comunicación subconsciente|engañarnos a nosotros mismos|información precisa|datos que distraen|cháchara|principio de tensión creativa|eficacia del subconsciente|concentración clara|interés genuino|resultado deseado|meta correcta|aspiraciones|valores profundos|clave para dominio|comunicación subconsciente|maestros|artes creativas|cambios graduales|cambios sutiles|estructuras del dominio personal|integración de razón e intuición|visión continuamente intensificada|conexión con el mundo|compasión|compromiso con la totalidad|aceptación de intuición|atención a intuición|mundo de negocios|gerentes experimentados|líderes experimentados|corazonadas|reconocer patrones|establecer analogías|paralelismos intuitivos|situaciones dispares|escuelas de administración|cursos sobre intuición|resolución creativa de problemas|reintegración de intuición y racionalidad|organizaciones|sociedad|pasión por recursos|subproducto natural|pensamiento sistémico|clave para integración|intuición|cárcel del pensamiento lineal|causas y efectos próximos|tiempo y espacio|lógica lineal|conflicto entre intuición|pensamiento asistémico|racionalidad vs intuición|perspectiva falsa|sinergia de razón e intuición|grandes pensadores|Einstein|mente racional|principio de relatividad|intuiciones brillantes|proposiciones sucintas|verificación racional|dimensión olvidada|crecimiento personal|cerrar los rizos|fuerzas aparentemente externas|interrelacionadas|actos propios|proceso de cerrar rizos|descubrimientos tempranos|aumentar edad|disminuir descubrimientos|eslabones nuevos|actos y fuerzas externas|desafío|expandir conciencia|expandir comprensión|interdependencia|actos y realidad|conexión con mundo circundante|captar plenamente|múltiples modos|influir sobre realidad|posibilidad|liberar pensamiento|disciplina de ver interrelaciones|erosionar actitudes|acusación|culpa|atrapados en estructuras|estructuras encastradas|modos de pensar|ámbitos interpersonales|ámbitos sociales|tendencia precipitada|hallar defectos|disipar tendencias|apreciación de fuerzas|operar en sistemas|víctimas de sistemas|conducta impuesta|creación propia|estructuras invisibles|no víctimas ni culpables|seres humanos controlados|fuerzas no percibidas|compasión como estado emocional|preocupación mutua|nivel de conciencia|entender sistemas|comprender presiones|desarrollar compasión|desarrollar empatía|compromiso genuino|algo mayor que nosotros mismos|acción del corazón|sincero deseo de servir|servir al mundo|poder espiritual|conectividad|característica de dominio personal|visión más amplia|visualización subconsciente|egocéntrica|conseguir lo que quiero|visión trascendente|interés egoísta|energías para metas estrechas|aprovechar compromiso|descubrimientos valederos|inventos valederos|experimentar poder espiritual|voluntad comprometida|propósito más amplio|grito desde el alma|sacudida y despertar|alentar dominio personal|organización|camino de crecimiento personal|cuestión de elección|obligar desarrollo|resultar contraproducente|dificultades organizacionales|promoción agresiva|líderes interesados|fomentar dominio personal|trabajar sin pausa|alentar clima|principios del dominio personal|vida cotidiana|construir organización|seguro crear visiones|indagación|compromiso con verdad|norma|desafíos al status quo|aspectos borrosos|realidad actual|eludir realidad|disciplina|proceso continuo|individuo abocado|crecimiento personal|ámbito respaldo|organización comprometida|brindar ámbito|alentar continuamente|visión personal|voluntad de enfrentar|brechas honestamente|prácticas productivas|desarrollar dominio personal|desarrollo de perspectiva sistémica|reflexionar sobre supuestos tácitos|expresar visión|escuchar visión|indagación conjunta|diversas personas|realidad actual|disciplinas para construir|organizaciones inteligentes|organizaciones que aprenden|acciones positivas|desarrollo concertado|cinco disciplinas de aprendizaje|estrategia central del liderazgo|ser líder|comprometerse con dominio personal|hablar de dominio personal|abrir mente|actos más elocuentes|palabras|alentar búsqueda|seriedad en búsqueda|propia seriedad|trecho entre el dicho y el hecho|imágenes internas|funcionamiento del mundo|modelos familiares|manejar modelos mentales|afloramiento|verificación|perfeccionamiento|simplificaciones|modelos mentales tácitos|nivel de conciencia|inercia de modelos mentales|conceptos sistémicos|herramientas de administración|apologistas del pensamiento sistémico|prácticas anticuadas|acelerar el aprendizaje|generaciones independientes|corporación|Royal Dutch/Shell|compañía descentralizada|turbulencias petroleras|managers|clarificar supuestos|contradicciones internas|estrategias basadas en conceptos nuevos|ventaja competitiva|autonomía local|operar por consenso|culturas|tradición de consenso|comprensión de modelos mentales compartidos|imagen mental|imagen de la realidad|directivos|escenarios|agua sobre la piedra|planificador de Shell|Pierre Wack|Harvard Business Review|contratiempos|mercado petrolero mundial|nueva era de escasez|menor crecimiento|inestabilidad de precios|época de los rápidos|turbulencia|enfermedades básicas de la jerarquía|organización autoritaria tradicional|dogma|administrar|organizar|controlar|organización inteligente|visión|valores|modelos mentales|empresas saludables|sistematizar maneras|Hanover|Hill O'Brien|rediseñar valores jerárquicos|naturaleza humana|valores centrales|principios|apertura|mérito|enfoque de modelos mentales|enfermedad farsesca|conducta de la gente|reuniones|política burocrática|regla de juego|crear impresión favorable|progresar|quedarse en la cima|localismo|austeridad|procesos de decisión|transformar|exponer|comentar|modos de mirar el mundo|ideas de Argyris|Ciencia de la acción|cuerpo teórico|método|reflexión|indagación|razonamiento|herramientas|organizaciones|rutinas defensivas|aislar|examen|incompetencia calificada|oxímoron|educandos adultos|protegerse del dolor|amenaza|situaciones de aprendizaje|resultados deseados|John Beckett|Universidad de New Hampshire|Pensando sobre el pensamiento|reseña histórica|filosofías de Occidente|filosofías de Oriente|papel de lija en el cerebro|filosofías radicalmente distintas|impacto demoledor|culturas orientales|asuntos morales|asuntos éticos|asuntos administrativos|modos occidentales|conclusiones opuestas|examinar problemas complejos|romper paredes|disciplinas|modos de pensar|comprensión de modelos mentales|managers|supuestos|verdades|modelos mentales incompletos|cultura occidental|crónicamente asistémicos|herramientas para trabajar|semilla potente|prejuicios|pensamiento sistémico|pensar en procesos|instantáneas|alternativa filosófica|reduccionismo|búsqueda de respuestas simples|problemas complejos|aptitudes básicas|análisis de modelos mentales|brincos de abstracción|saltos de observación|generalización|columna izquierda|manifestar|callamos|equilibrar indagación|persuasión|aptitudes para investigación honesta|enfrentar distingos|teorías expuestas|teorías-en-uso|teoría implícita|disciplina|conversación común|problemas complejos|problemas conflictivos|actuar naturalmente|remodelar inclinaciones naturales|conversaciones|aprendizaje genuino|reforzar puntos de vista previos|desarrollo de habilidad|trabajar con modelos mentales|aprendizaje de aptitudes nuevas|implementación de innovaciones institucionales|llevar a la superficie|supuestos básicos|cuestiones de negocios|modelos mentales cruciales|compartidos|tomar decisiones|examinar|radio de acción|conocido|confortable|aptitudes de aprendizaje cara a cara|managers de toda la compañía|hábiles con modelos mentales|aspectos de la disciplina|aptitudes empresariales|cuestiones interpersonales|managers pragmáticos|motivados para aprender|contexto organizacional|educación en modelos mentales|equilibrio entre indagación y persuasión|rechazo|conectada con cuestiones de negocios|aptitudes interpersonales|aprendizaje adaptativo|aprendizaje generativo|managers con aptitudes|reflexionar|indagar|consultores|planificadores|gente de todos los niveles|aflorar modelos mentales|desafiar|circunstancias externas|imponer nuevos razonamientos|institucionalización|examen de modelos mentales|mecanismos|ineludible|práctica|planificación tradicional como aprendizaje|directorios internos|reunir regularmente|directivos superiores|directivos locales|refinar pensamientos|decisiones locales|ventajas de directorios internos|relaciones normales|presentación de informes|manager local|vicepresidente|conocerse|manipular sutilmente|conversaciones|fines predeterminados|fomentar indagaciones penetrantes|presentar|exponer puntos de vista|directorio interno|habilidad esencial|managers locales|articular pensamientos|temas complejos|asimilar|managers locales|preparados|alentar aprendizaje|divisiones|guiar directorios locales|compañía|Hanover|redactar|principios operativos|trabajar con modelos mentales|establecer prioridad|indagación|promover diversidad|perspectivas|conformidad|subrayar importancia|todos los niveles|organización|credo de Hanover|eficacia de líder|continua mejora|modelos mentales|imponer|modelo mental predilecto|decisiones autónomas|funcionar mejor|convicciones más profundas|implementación más efectiva|mejores modelos mentales|adaptarse|ámbitos cambiantes|circunstancias cambiantes|miembros de directorio interno|tomar decisiones directas|ayudar|manager general|verificación|afinamiento|modelo mental del manager general|modelos mentales múltiples|perspectivas múltiples|grupos|dinámicas|conocimientos|trascender|capacidad individual|objetivo|congruencia dentro del grupo|proceso funciona|conducir a congruencia|valía de líderes|aportación|modelos mentales de otros|meta|acuerdo|congruencia|muchos modelos mentales|desacuerdo|examinar|verificar|situaciones que surgen|compromiso con la verdad|derivación del dominio personal|conocer toda la verdad|examinar modelos mentales|diversas posiciones|mejor modelo mental|afrontar problema particular|concentrarse|ayudar|tomar mejor decisión posible|construir mejor modelo mental posible|meta quizá no sea congruencia|proceso conduce a congruencia|funciona|reuniones despiertan discordias|exponer parecer|reconocer méritos|no estar de acuerdo|bien meditado|seguir rumbo|asombroso|gente se lleva mejor|impulsar a llegar a acuerdo|falta de énfasis|congruencia|acuerdo|sorprendente|miembros de equipos sobresalientes|manifestar opiniones|charlaremos y luego sabremos qué hacer|piedra angular|David Bohm|diálogo|corazón de disciplina|aprendizaje en equipo|reflexión e indagación|modelos mentales en niveles personales|niveles interpersonales|aptitudes de aprendizaje|especialistas en ciencia de acción|Chris Argyris|clases amplias|aptitudes para reflexión|aptitudes para indagación|desacelerar procesos de pensamiento|cobrar mayor conciencia|formar modelos mentales|influir sobre actos|operar en interacciones directas|demás|abordar temas complejos|temas conflictivos|Donald Schon|colega de Argyris|MIT|demostrar importancia|reflexión sobre aprendizaje|profesiones|medicina|arquitectura|administración|profesionales|dejar de aprender|graduarse|culto del aprendizaje|reflexión de la acción|capacidad para reflejar pensamiento|actuamos|reflexión en la acción|profesionales destacados|frases|pensar de pie|llevar lucidez a cuestas|aprender haciendo|pensar sobre hacer|pensar sobre cómo hacer algo|hacer algo mientras lo hacemos|buenos yazzistas|improvisar juntos|sentir dirección de música|brotar de aportes entrelazados|infundir nuevo sentido|ajustar ejecución|nuevo sentido elaborado|aptitudes para reflexión|reconocer brincos de abstracción|mente se mueve|velocidad del rayo|irónicamente|vuelve más lento|aprendizaje|brincar tan deprisa|generalizaciones|pensar en verificarlas|castillos en el aire|pensamiento|mayor frecuencia|sospechamos|mente consciente|mal equipada|afrontar gran cantidad|detalles concretos|fotografías de cien individuos|problemas para recordar|cada rostro|recordar categorías|hombres altos|mujeres de rojo|orientales|ancianos|mente racional|extraordinaria facilidad|abstraer|detalles concretos|sustituyendo muchos detalles|conceptos simples|razonar según conceptos|habilidad para razonamiento conceptual abstracto|limitar aprendizaje|conscientes de brincos|particular a general|brincos de abstracción|comunes|temas de negocios|empresa|muchos directivos|convencidos|clientes compran productos|basándose en precio|calidad del servicio|factor|lógico que pensaran así|clientes continuamente buscaban|mayores descuentos|competidores continuamente arrebataban|clientes mediante promociones|especialista en marketing|recién ingresado|compañía|exhortar|superiores|invertir en mejora del servicio|propuesta se rechazó|amabilidad|firmeza|directivos jamás verificaron|idea|brinco de abstracción|transformado en hecho|clientes no se interesan en servicio|clientes compran basándose en precio|quedaron sentados|principal competidor|aumentar gradualmente|participación en mercado|brindando calidad de servicio|clientes jamás habían experimentado|jamás habían pedido|localizar brincos de abstracción|preguntándonos qué creemos|modo en que funciona el mundo|naturaleza de los negocios|gente en general|individuos específicos|datos sobre los cuales se basa|generalización|dispuesto a considerar|generalización puede ser inexacta|equívoca|importante hacerse segunda pregunta|conciencia|respuesta negativa|caso continuar|verificar generalizaciones directamente|inducir a indagar|razones que guían actos de otro|indagación requiere aptitudes|conscientes de brincos de abstracción|conscientes de necesidad de indagación|importante practicar reflexión|disciplina|equilibrio entre indagación y persuasión|gerentes adiestrados|hacer planteos|defenderlos|muchas compañías|gerente eficaz|resolver problemas|deducir qué se debe hacer|lograr respaldo necesario|individuos logran éxito|aptitudes para debatir|influir sobre demás|aptitudes para preguntar|merecen reconocimiento|recompensa|gerentes ascienden|topan con problemas más complejos|variados|experiencia personal|recurrir a perspectiva de otros|necesitar aprender|capacidad para persuasión|contraproducente|impedir mutuo aprendizaje|unir persuasión con indagación|promover aprendizaje cooperativo|dos expertos en persuasión|reunir para deliberación franca|abierta|poco aprendizaje|genuinamente interesados|puntos de vista del otro|mera persuasión|infundir otro tipo de estructura|conversación|agradezco sinceridad|experiencia y juicio|llevar a otras conclusiones|permitir decir por qué no funciona|propuesta|cada parte expone|razonablemente|serenamente|punto de vista|cada vez con mayor energía|posiciones cobran rigidez|persuasión sin indagación|generar más persuasión|arquetipo sistémico|describir lo que ocurre|escalada|misma estructura|carrera armamentista|mayor vehemencia exhiba A|más amenaza a B|argumentar con mayor contundencia|replicar con mayor fiereza|escaladas resultan agotadoras|gerentes prefieren no exponer|diferencias en público|demasiado desgaste|efecto bola de nieve|persuasión reforzadora|detener mediante preguntas sencillas|llegar a esa posición|dar ejemplo|presentar datos|experiencias que corroboren|introducir elemento de indagación|discusión|reunión de equipos gerenciales|varias horas|pocas preguntas|indicio de problemas|asombroso|reuniones llevaban tres horas|sola pregunta|experto en ciencia de acción|mucha indagación|esas reuniones|indagación pura|limitaciones|preguntas cruciales|romper espiral|persuasión reforzadora|aptitudes de grupo|individuo muy restringidas|aprender a combinar|indagación con persuasión|indagación pura limitada|casi siempre tenemos punto de vista|margen de que creamos|único atinado|actitud demasiado inquisitiva|modo de evitar aprendizaje|ocultar perspectiva|muralla de incesantes preguntas|aprendizaje más productivo|gerentes combinan indagación con persuasión|indagación recíproca|explicitar pensamiento|someter al examen público|crear atmósfera de genuina vulnerabilidad|ocultar pruebas|razonamientos que respaldan punto de vista|exponer sin dejar abiertos al escrutinio|indagación y persuasión equilibradas|indagar razonamiento|respaldar puntos de vista ajenos|exponer los nuestros|revelar supuestos|razonamientos|invitar a demás a indagar|opinion|llegar a ella|parece|operar en persuasión pura|meta ganar discusión|combinar indagación y persuasión|meta ya no ganar discusión|hallar mejor argumentación|revelar en modo de usar datos|modo de revelar razonamiento|subyace a abstracciones|operar en persuasión pura|usar datos selectivamente|presentar solo aquellos|confirman posición|explicar razonamiento|exponer solo aquello que favorece|evitar zonas|hallar puntos débiles|combinar persuasión e indagación|dispuestos a confirmar datos|refutar datos|genuinamente interesados|hallar defectos de perspectiva|exponer razonamiento|buscar fallos|comprender razonamiento de otros|ideal|todo un reto|muy difícil|trabajar en organización muy política|no abierta a indagación genuina|práctica de indagación y persuasión|voluntad de exponer limitaciones|razonamiento|admitir errores|demás no se arriesgarán|hacer lo mismo|modelos mentales y quinta disciplina|pensamiento sistémico sin disciplina de modelos mentales|pierde gran parte de potencia|dos disciplinas van de la mano|exponer supuestos ocultos|reestructurar supuestos|revelar causa de problemas cruciales|modelos mentales arraigados|frenar cambios|derivar del pensamiento sistémico|gerentes deben aprender|reflexionar sobre actuales modelos mentales|supuestos predominantes|exponer abiertamente|razones para que modelos mentales cambien|pensamiento sistémico carece de propósito|gerentes creen|perspectivas son hechos|supuestos|dispuestos a cuestionar perspectivas|carecer de aptitudes|indagar modos de pensar propios|modos de pensar ajenos|sufrir limitaciones|experimentar cooperativamente|nuevos modos de pensar|filosofía establecida|comprensión de modelos mentales|organización|gente interpretará mal|propósito del pensamiento sistémico|dibujar diagramas|representar complejos modelos del mundo|mejorar nuestros modelos mentales|pensamiento sistémico igualmente importante|trabajar eficazmente con modelos mentales|investigaciones contemporáneas|demuestran|mayoría de nuestros modelos mentales|defectos sistemáticos|pasar por alto relaciones críticas|realimentación|juzgar erróneamente|demoras temporales|concentrarse en variables|visibles|sobresalientes|no necesariamente puntos de apalancamiento|última instancia|fruto de integración|pensamiento sistémico con modelos mentales|perfeccionamiento de nuestros modelos mentales|pensamos|modificación de nuestro modo de pensar|modelos mentales dominados por hechos|modelos mentales que reconozcan patrones de cambio|largo plazo|estructuras subyacentes|generar patrones|pensamiento lineal|domina mayoría de modelos mentales|utilizados para decisiones críticas|organizaciones inteligentes del futuro|tomar decisiones críticas|basadas en comprensión compartida|interrelaciones|patrones de cambio|sinergia de las cinco disciplinas|interdependencia|sistema integral|transforma individuos|transforma organizaciones|organizaciones inteligentes poderosas|quinta disciplina|integra disciplinas|disciplinas complementarias|fundación sistémica|base conceptual|interrelaciones complejas|empresa tecnológica|límite del crecimiento|éxito inicial|complacencia|innovación continua|barreras y superación|puntos de mayor impacto|enemigo externo|principio de palanca|estructuras de evaluación|competencia destructiva|aprendizaje colectivo|colaboración efectiva|barreras sistémicas|mejora continua|visión y estructura|comportamiento organizacional|ciudad sostenible|políticas|estructuras de incentivos|desarrollo insostenible|desarrollo personal y mental|crecimiento individual|crecimiento organizacional|brincos de abstracción|visión más clara|acciones más efectivas|integración completa|contexto estructural|empresa innovadora|pensamiento sistémico para ver oportunidades|dominio personal para perseverar|modelos mentales para cuestionar supuestos|aplicaciones prácticas por área|sistemas informáticos|desarrollo de software|errores recurrentes|retrasos constantes|procesos de desarrollo deficientes|desplazamiento de carga|parches rápidos|parábola de la rana hervida|degradación gradual|procesos de revisión de código|más pruebas|espacios para compartir conocimientos|mejores prácticas|métricas de evaluación|velocidad sobre calidad|excelencia técnica|metodologías ágiles|tensión creativa|código perfecto|código iterativo|gestión de proyectos|proyectos retrasan|exceden presupuesto|sistema organizacional más amplio|recursos limitados|expectativas crecientes|equipos que no aprenden|errores pasados|comunicación y coordinación|stakeholders|retrospectivas regulares|aprendizaje compartido|estructuras de reporting|ocultan problemas reales|visión clara del éxito|inspira a todos|procesos de planificación|control de cambios|resiliencia|adaptabilidad|líderes de proyecto|planificación perfecta|adaptación continua|gestión del cambio|iniciativas de cambio fracasan|apoyo inicial|múltiples niveles simultáneamente|erosión de metas|resistencia gradual|socava el cambio|causas internas del fracaso|estructuras de poder|recompensas|coaliciones de cambio|aprendan juntas|políticas que contradicen el cambio|narrativa convincente|futuro deseado|rediseñar procesos|sistemas de apoyo al cambio|manejar la incertidumbre|resistencia natural al cambio|patrones de integración|diagnóstico sistémico|secuencia|raíz de problemas complejos|puntos de mayor apalancamiento|cadena de suministro|mapean interrelaciones|patrones de desplazamiento de carga|estructuras de incentivos|transformación organizacional|impulso|estructuras necesarias|cambio organizacional|empresa más innovadora|métricas que premian eficiencia|estructuras organizacionales|experimentación|desarrollo de liderazgo|líderes capaces|sistemas complejos|guiar transformaciones|tensión creativa|nuevas posibilidades|dinámicas organizacionales|articula visión compartida|inspira a otros|principios de integración|sinergia|disciplinas se refuerzan mutuamente|impulso|inefectivo|secuencialidad|base para otras|cuestionarse|efectivo|contextualidad|aplicación de disciplinas|varía según contexto|crisis|transformaciones largas|fundamental|iteratividad|proceso iterativo|aplicación mejora comprensión|capacidad de aplicación futura|reflexiones finales|verdadera potencia|aplican de manera integrada|dominar cada disciplina por separado|capacidad de ver interrelaciones|se refuerzan mutuamente|organizaciones inteligentes|herramientas que se aplican ocasionalmente|capacidades fundamentales|desarrollan continuamente|integran en todos los aspectos|trabajo diario|aprendizaje individual|propiedad de los sistemas|entidades colectivas)/gi,
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
