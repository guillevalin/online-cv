export type Lang = 'en' | 'es';

export const LANGS: Lang[] = ['en', 'es'];

export const t = {
  en: {
    htmlLang: 'en',
    meta: {
      title: 'Guillermo Valin — Software Engineer & Technology Leader',
      description:
        'Software engineer and technology leader with 13+ years building AI, blockchain, and cloud systems across retail, logistics, banking, and crypto.',
    },
    nav: {
      switchLang: 'Español',
      switchLangHref: '/es/',
    },
    hero: {
      eyebrow: 'Software engineer & technology leader',
      name: 'Guillermo Valin',
      lede:
        'I build AI, blockchain, and cloud systems — and lead the teams that ship them. 13+ years across retail, logistics, banking, and crypto.',
      contact: 'Get in touch',
      cvEn: 'CV (EN)',
      cvEs: 'CV (ES)',
      linkedin: 'LinkedIn',
    },
    now: {
      title: 'Now',
      subtitle:
        'Engineering partner to dcSpark, AgentLayer, and Midnight City — all through Codigo Once — and building Threshold as a personal product.',
      items: [
        {
          name: 'dcSpark',
          tag: 'Decentralized AI',
          year: '2025',
          copy:
            'Shipping Shinkai — a decentralized AI agent creator with a libp2p network between nodes, Coinbase x402 payments, and provider compatibility layers for Ollama, Anthropic, OpenAI, Grok, and Gemini. Also built the Shinkai App Store and MCP Dockmaster. Running cloud infra on GCP + Cloudflare and CI/CD on GitHub Actions.',
          url: 'https://shinkai.com',
        },
        {
          name: 'AgentLayer',
          tag: 'Enterprise AI',
          year: '2026',
          copy:
            'A marketplace of certified AI agents for enterprise teams — competitive intelligence, financial audit, lead generation, ticketing, logistics tracking. Integrated with ERP, CRM, and data warehouses.',
          url: 'https://agentlayer.cl',
        },
        {
          name: 'Midnight City',
          tag: 'AI simulation',
          year: '2026',
          copy:
            'A 2D AI simulation platform where users explore stories, characters, and locations brought to life by AI.',
          url: 'https://midnight.city',
        },
        {
          name: 'Threshold',
          tag: 'Personal product',
          year: '2026',
          copy:
            'An AI running coach that uses Strava training and Oura recovery data as context for adaptive, day-to-day guidance — no static plans.',
          url: 'https://threshold.codigoonce.com',
        },
      ],
    },
    experience: {
      title: 'Selected experience',
      viewMore: 'Show earlier roles',
      viewLess: 'Hide earlier roles',
      items: [
        {
          role: 'Senior Software Engineer',
          company: 'dcSpark · via Codigo Once',
          duration: 'Jan 2025 – Present',
          bullets: [
            'Core contributor to the Shinkai Node orchestrating AI agents and managing models.',
            'Implemented flexible AI workflow features empowering user customization.',
            'Designed CI/CD pipelines automating tests, builds, and deployments for rapid releases.',
            'Provisioned scalable cloud environments with Docker, GCP Cloud Run, and Cloudflare Workers using IaC.',
          ],
        },
        {
          role: 'Chief Product & Technology Officer',
          company: 'Cotalker',
          duration: 'Mar 2023 – Dec 2024',
          bullets: [
            'Led Engineering & Product strategy, aligning backlog and roadmap with business and user vision.',
            'Retained largest accounts (CGE, BCI) and increased recurring revenue by 60% in 12 months.',
            'Migrated infrastructure from AWS to GCP, cutting cloud spend by 50% in 2024.',
            'Achieved ISO 27001 certification, opening doors to new enterprise clients.',
          ],
        },
        {
          role: 'Chief Technology Officer',
          company: 'Cotalker',
          duration: 'Jun 2020 – Mar 2023',
          bullets: [
            'Created a highly available distributed architecture and founded the SRE team, cutting critical incidents by 75%.',
            'Introduced an internship program that attracted talent and boosted project throughput.',
            'Aligned Product, Operations, Marketing, and Customer Success with strategic vision.',
            'Managed and mentored a 10-person engineering team reporting directly to the CEO.',
          ],
        },
        {
          role: 'Head of IT Operations',
          company: 'Cotalker',
          duration: 'Jan 2018 – Jun 2020',
          bullets: [
            'Established Projects & Support areas to implement improvements and manage incidents.',
            'Secured the COPEC contract in a pre-sales role; the success case now represents 80% of the portfolio.',
            'Delivered projects for corporate clients (COPEC, CGE, BCI) leading to contracts longer than 5 years.',
            'Designed solution architectures and optimized processes to support company growth.',
          ],
        },
      ],
      earlierItems: [
        {
          role: 'IT Project Manager',
          company: 'Megamedia',
          duration: 'Aug 2016 – Dec 2017',
          bullets: [
            'Directed company-wide digitalization of administrative and accounting processes, training 500+ staff.',
            'Served as technology advisor during the merger of Megavisión and Bethia Communications.',
            'Configured SAP account and company structure as part of post-merger integration.',
          ],
        },
        {
          role: 'IT Project Engineer',
          company: 'Megamedia',
          duration: 'Jun 2014 – Aug 2016',
          bullets: [
            'Gathered requirements and delivered tech projects to optimize administrative workflows.',
            'Built an SAP PS control scheme improving production budget accuracy.',
            'Automated SAP accounting settlements, lowering processing time by 70%.',
          ],
        },
        {
          role: 'Business Analyst / Software Engineer',
          company: 'El Mercurio',
          duration: 'Dec 2012 – Jun 2014',
          bullets: [
            'Led development of the economicos.cl classifieds site and publisher with electronic payments.',
            'Managed software projects translating stakeholder needs into web tools.',
          ],
        },
        {
          role: 'R&D Engineer',
          company: 'Synopsys',
          duration: 'Jan 2011 – Dec 2012',
          bullets: [
            'Developed key features for new EDA software, saving license royalty costs.',
            'Collaborated with distributed teams in the US, Switzerland, and India to deliver quality releases.',
          ],
        },
      ],
    },
    skills: {
      title: 'Stack',
      groups: [
        { label: 'Languages', tags: ['Rust', 'TypeScript', 'JavaScript', 'Python', 'C#'] },
        { label: 'Frontend', tags: ['React', 'Vue.js', 'Angular', 'Astro'] },
        {
          label: 'Backend & Cloud',
          tags: ['Node.js', 'Docker', 'Kubernetes', 'GCP', 'AWS', 'Cloudflare', 'Terraform'],
        },
        { label: 'Data', tags: ['PostgreSQL', 'MongoDB', 'Redis', 'MySQL'] },
      ],
    },
    education: {
      title: 'Education',
      items: [
        {
          degree: "Engineer's Degree, Electrical & Electronics Engineering",
          institution: 'Universidad Técnica Federico Santa María (UTFSM)',
          description:
            "Five-year program in electronics, communications, and computer engineering. Graduated on the University's Honor List (2005–2010).",
        },
        {
          degree: 'Diploma in Software Engineering & IT Project Management',
          institution: 'Universidad Andrés Bello',
          description:
            'Postgraduate studies focused on software development best practices, agile methodologies, and leading large-scale IT projects (2015–2016).',
        },
      ],
      languages: {
        label: 'Languages',
        items: ['Spanish (Native)', 'English (Fluent)', 'Portuguese (Intermediate)'],
      },
    },
    footer: {
      tagline: 'Based in Chile. Available for select engagements through',
      company: 'Codigo Once',
      companyHref: 'https://codigoonce.com',
      copy: 'Guillermo Valin',
    },
  },
  es: {
    htmlLang: 'es',
    meta: {
      title: 'Guillermo Valin — Ingeniero de Software y Líder Tecnológico',
      description:
        'Ingeniero de software y líder tecnológico con más de 13 años construyendo sistemas de IA, blockchain y nube en retail, logística, banca y cripto.',
    },
    nav: {
      switchLang: 'English',
      switchLangHref: '/',
    },
    hero: {
      eyebrow: 'Ingeniero de software y líder tecnológico',
      name: 'Guillermo Valin',
      lede:
        'Construyo sistemas de IA, blockchain y nube, y lidero los equipos que los despliegan. Más de 13 años en retail, logística, banca y cripto.',
      contact: 'Contáctame',
      cvEn: 'CV (EN)',
      cvEs: 'CV (ES)',
      linkedin: 'LinkedIn',
    },
    now: {
      title: 'Ahora',
      subtitle:
        'Partner de ingeniería para dcSpark, AgentLayer y Midnight City — todo a través de Codigo Once — y construyendo Threshold como producto personal.',
      items: [
        {
          name: 'dcSpark',
          tag: 'IA descentralizada',
          year: '2025',
          copy:
            'Construyendo Shinkai — un creador descentralizado de agentes de IA con red libp2p entre nodos, pagos con el protocolo x402 de Coinbase y capas de compatibilidad con Ollama, Anthropic, OpenAI, Grok y Gemini. También la Shinkai App Store y MCP Dockmaster. Gestionando infraestructura cloud en GCP + Cloudflare y CI/CD en GitHub Actions.',
          url: 'https://shinkai.com',
        },
        {
          name: 'AgentLayer',
          tag: 'IA empresarial',
          year: '2026',
          copy:
            'Un marketplace de agentes de IA certificados para equipos empresariales — inteligencia competitiva, auditoría financiera, lead generation, ticketing, tracking de despachos. Integrado con ERP, CRM y data warehouses.',
          url: 'https://agentlayer.cl',
        },
        {
          name: 'Midnight City',
          tag: 'Simulación IA',
          year: '2026',
          copy:
            'Una plataforma de simulación 2D donde los usuarios exploran historias, personajes y lugares cobrados vida por IA.',
          url: 'https://midnight.city',
        },
        {
          name: 'Threshold',
          tag: 'Producto personal',
          year: '2026',
          copy:
            'Un coach de running con IA que usa entrenamientos de Strava y datos de recuperación de Oura como contexto para entregar guía adaptativa, día a día — sin planes estáticos.',
          url: 'https://threshold.codigoonce.com',
        },
      ],
    },
    experience: {
      title: 'Experiencia seleccionada',
      viewMore: 'Mostrar roles anteriores',
      viewLess: 'Ocultar roles anteriores',
      items: [
        {
          role: 'Ingeniero de Software Senior',
          company: 'dcSpark · vía Codigo Once',
          duration: 'Ene 2025 – Presente',
          bullets: [
            'Contribuidor principal del Shinkai Node que orquesta agentes de IA y gestiona modelos.',
            'Implementé funciones flexibles de flujos de trabajo de IA que potencian la personalización del usuario.',
            'Diseñé pipelines CI/CD que automatizan pruebas, builds y despliegues para lanzamientos ágiles.',
            'Aprovisioné entornos cloud escalables con Docker, GCP Cloud Run y Cloudflare Workers usando IaC.',
          ],
        },
        {
          role: 'Chief Product & Technology Officer',
          company: 'Cotalker',
          duration: 'Mar 2023 – Dic 2024',
          bullets: [
            'Lideré la estrategia de Ingeniería y Producto, alineando backlog y roadmap con la visión del negocio y los usuarios.',
            'Retuve las cuentas más grandes (CGE, BCI) e incrementé el ingreso recurrente en un 60% en 12 meses.',
            'Migré la infraestructura de AWS a GCP, reduciendo el gasto en la nube en un 50% en 2024.',
            'Logré la certificación ISO 27001, abriendo puertas a nuevos clientes corporativos.',
          ],
        },
        {
          role: 'Chief Technology Officer',
          company: 'Cotalker',
          duration: 'Jun 2020 – Mar 2023',
          bullets: [
            'Creé una arquitectura distribuida de alta disponibilidad y fundé el equipo de SRE, reduciendo los incidentes críticos en un 75%.',
            'Implementé un programa de pasantías que atrajo talento y aumentó el rendimiento de proyectos.',
            'Alineé Producto, Operaciones, Marketing y Customer Success con la visión estratégica.',
            'Gestioné y guié un equipo de ingeniería de 10 personas reportando directamente al CEO.',
          ],
        },
        {
          role: 'Head of IT Operations',
          company: 'Cotalker',
          duration: 'Ene 2018 – Jun 2020',
          bullets: [
            'Establecí las áreas de Proyectos y Soporte para implementar mejoras y gestionar incidentes.',
            'Aseguré el contrato con COPEC en rol de preventa; el caso de éxito representa hoy el 80% del portafolio.',
            'Entregué proyectos para clientes corporativos (COPEC, CGE, BCI) generando contratos de más de 5 años.',
            'Diseñé arquitecturas de solución y optimicé procesos para apoyar el crecimiento de la empresa.',
          ],
        },
      ],
      earlierItems: [
        {
          role: 'IT Project Manager',
          company: 'Megamedia',
          duration: 'Ago 2016 – Dic 2017',
          bullets: [
            'Dirigí la digitalización de procesos administrativos y contables de toda la compañía, capacitando a más de 500 colaboradores.',
            'Serví como asesor tecnológico durante la fusión de Megavisión y Bethia Communications.',
            'Configuré la cuenta y la estructura de la compañía en SAP como parte de la integración post-fusión.',
          ],
        },
        {
          role: 'Ingeniero de Proyectos TI',
          company: 'Megamedia',
          duration: 'Jun 2014 – Ago 2016',
          bullets: [
            'Levanté requerimientos y entregué proyectos tecnológicos para optimizar flujos administrativos.',
            'Construí un esquema de control SAP PS que mejoró la precisión del presupuesto de producciones.',
            'Automaticé liquidaciones contables en SAP, reduciendo el tiempo de proceso en un 70%.',
          ],
        },
        {
          role: 'Analista de Negocio / Ingeniero de Software',
          company: 'El Mercurio',
          duration: 'Dic 2012 – Jun 2014',
          bullets: [
            'Lideré el desarrollo del sitio de clasificados economicos.cl y su publicador con pagos electrónicos.',
            'Gestioné proyectos de software traduciendo necesidades de stakeholders en herramientas web.',
          ],
        },
        {
          role: 'Ingeniero de I&D',
          company: 'Synopsys',
          duration: 'Ene 2011 – Dic 2012',
          bullets: [
            'Desarrollé funciones clave para nuevo software EDA, ahorrando costos de regalías de licencias.',
            'Colaboré con equipos distribuidos en EE. UU., Suiza e India para entregar releases de calidad.',
          ],
        },
      ],
    },
    skills: {
      title: 'Stack',
      groups: [
        { label: 'Lenguajes', tags: ['Rust', 'TypeScript', 'JavaScript', 'Python', 'C#'] },
        { label: 'Frontend', tags: ['React', 'Vue.js', 'Angular', 'Astro'] },
        {
          label: 'Backend y Nube',
          tags: ['Node.js', 'Docker', 'Kubernetes', 'GCP', 'AWS', 'Cloudflare', 'Terraform'],
        },
        { label: 'Datos', tags: ['PostgreSQL', 'MongoDB', 'Redis', 'MySQL'] },
      ],
    },
    education: {
      title: 'Educación',
      items: [
        {
          degree: 'Título de Ingeniero Civil Electrónico',
          institution: 'Universidad Técnica Federico Santa María (UTFSM)',
          description:
            'Programa de cinco años que abarca fundamentos de electrónica, telecomunicaciones e ingeniería informática. Graduado en la Lista de Honor de la Universidad (2005–2010).',
        },
        {
          degree: 'Diplomado en Ingeniería de Software y Gestión de Proyectos TI',
          institution: 'Universidad Andrés Bello',
          description:
            'Estudios de posgrado centrados en mejores prácticas de desarrollo de software, metodologías ágiles y liderazgo de proyectos TI a gran escala (2015–2016).',
        },
      ],
      languages: {
        label: 'Idiomas',
        items: ['Español (Nativo)', 'Inglés (Fluido)', 'Portugués (Intermedio)'],
      },
    },
    footer: {
      tagline: 'Con base en Chile. Disponible para proyectos seleccionados a través de',
      company: 'Codigo Once',
      companyHref: 'https://codigoonce.com',
      copy: 'Guillermo Valin',
    },
  },
} as const;
