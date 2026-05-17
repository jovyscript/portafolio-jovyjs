import { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


// --- DICCIONARIO DE TRADUCCIONES ---
const translations = {
  es: {
    nav: {
      experience: "Experiencia",
      projects: "Proyectos",
      stack: "Stack",
      education: "Formación",
      contact: "Contacto",
    },
    hero: {
      greeting: "Hola 🌎, soy",
      role_title: "Desarrolladora Full Stack Java & Cloud (GCP)",
      role_desc_1: "Transformo ideas complejas en soluciones",
      role_desc_bold_1: "Spring Boot",
      role_desc_2: "seguras, respaldadas por experiencia profesional en",
      role_desc_bold_2: "IBM",
      role_desc_3: "y",
      role_desc_bold_3: "Google Cloud",
      role_desc_4: "Lista para construir Backend y Frontend escalables.",
      btn_projects: "Ver Proyectos",
    },
    about: {
      title: "Acerca de Mí",
      p1: "Desarrolladora Full Stack Junior (Java/Spring) con una visión única sobre cómo la tecnología se integra al negocio. Mi enfoque no solo está en construir sistemas complejos, sino en asegurar que sean",
      p1_bold: "funcionales, fáciles de comprender",
      p1_end: "y centrados en la experiencia del usuario final.",
      diff_title: "Mi Diferenciador:",
      diff_text:
        "Mi trayectoria me ha enseñado el valor real de los datos, gracias a mi práctica en IBM con Google Cloud (GCP) y BigQuery. Esta experiencia me permite enfocar cada línea de código de Spring Boot con una perspectiva analítica y una intensa",
      diff_bold: "atención al detalle",
      goal_title: "Compromiso con la Excelencia:",
      goal_text:
        "Me motivan profundamente los desafíos y la curiosidad me impulsa a investigar hasta alcanzar la excelencia. Este compromiso se refleja en mis logros académicos (Distinción Máxima) y en mi certificación Full Stack (Medalla de Oro 98/100). Mi objetivo es claro: integrarme a un equipo estable donde pueda",
      goal_bold: "aportar ideas frescas",
      goal_end: "y continuar aplicando soluciones creativas.",
    },
    projects: {
      title: "Proyectos Destacados",

      ruka: {
        title: "Ruka Kumey MVP 🧘‍♀️",
        badge: "Producto en Producción",
        desc: "Sistema integral de gestión de reservas para un centro de pilates y yoga. Vendido y operando en producción. Gestiona aforos y membresías con acceso basado en 3 roles (Admin, Profesor, Alumna).",
        frontend: "React + CSS",
        backend: "Node.js (Express) + Bcrypt",
        database: "MySQL",
        infra: "VPS propio, Nginx, PM2 & Resend API",
        btn_code: "Ver Código",
        btn_demo: "Demo en Vivo",
      },

      resistance: {
        title: "The Resistance Web ⚡",
        badge: "Arquitectura Serverless",
        desc: "Una plataforma de noticias diseñada con un enfoque único: Presupuesto $0. Utiliza la API de Blogger como base de datos Headless, logrando un rendimiento excepcional.",
        cost_title: "Coste Operativo",
        cost_desc: "$0/mes (Infraestructura Google)",
        btn_code: "Ver Código",
        btn_demo: "Demo en Vivo",
      },
    },
    experience: {
      title: "Experiencia Profesional (IBM & Cloud)",
      ibm_data: {
        title: "Prácticante de Ingeniería de Datos",
        subtitle: "IBM (Proyecto cliente Softys) | Ago 2024 – Ene 2025",
        badge: "Cloud & Data",
        desc: "Participación activa en la migración de datos de gran volumen, validando la integridad del proceso en la infraestructura Cloud.",
      },
      ibm_doc: {
        title: "Analista de Documentación",
        subtitle: "IBM (Back Office / PMO) | Feb 2025 – May 2025",
        badge: "Gestión & PMO",
        desc: "Soporte al Project Management Office (PMO), garantizando la correcta documentación y cumplimiento normativo de contratos y procedimientos internos.",
      },
    },
    stack: {
      title: "Mi Stack Tecnológico",
    },
    education: {
      title: "Formación Académica",
      analyst: {
        title: "Analista Programador",
        badge: "Título Profesional",
        subtitle:
          "Instituto Profesional (Santo Tomás) | Distinción Máxima (promedio 6.4)",
        desc: "Formación integral en ingeniería de software. Bases sólidas en lógica, estructuras de datos, modelado UML y gestión de proyectos TI.",
        tags: ["Ingeniería de Software", "Bases de Datos", "Gestión Ágil"],
      },
      bootcamp: {
        title: "Desarrollador Full Stack Java",
        badge: "Certificación Bootcamp",
        subtitle:
          "Bootcamp Intensivo Banco de Chile - Skillnest | Cinturón Negro (98/100)",
        desc: "Especialización en arquitectura backend empresarial. Desarrollo de APIs seguras y escalables utilizando el ecosistema Spring.",
      },
    },
    contact: {
      title: "¿Creamos algo increíble?",
      desc: "Me encanta colaborar en proyectos que requieren creatividad técnica. Si buscas una desarrolladora detallista, envíame un mensaje.",
      btn: "Enviar Correo",
    },
    footer: "Hecho con 💜 y React.",
  },
  en: {
    nav: {
      experience: "Experience",
      projects: "Projects",
      stack: "Stack",
      education: "Education",
      contact: "Contact",
    },
    hero: {
      greeting: "Hi 🌎, I'm",
      role_title: "Full Stack Java & Cloud Developer (GCP)",
      role_desc_1: "I transform complex ideas into secure",
      role_desc_bold_1: "Spring Boot",
      role_desc_2: "solutions, backed by professional experience at",
      role_desc_bold_2: "IBM",
      role_desc_3: "and",
      role_desc_bold_3: "Google Cloud",
      role_desc_4: "Ready to build scalable Backend and Frontend applications.",
      btn_projects: "View Projects",
    },
    about: {
      title: "About Me",
      p1: "Junior Full Stack Developer (Java/Spring) with a unique vision on how technology integrates into business. My focus is not only on building complex systems, but ensuring they are",
      p1_bold: "functional, easy to understand",
      p1_end: "and centered on the end-user experience.",
      diff_title: "My Differentiator:",
      diff_text:
        "My career has taught me the real value of data, thanks to my internship at IBM with Google Cloud (GCP) and BigQuery. This experience allows me to approach every line of Spring Boot code with an analytical perspective and intense",
      diff_bold: "attention to detail",
      goal_title: "Commitment to Excellence:",
      goal_text:
        "I am deeply motivated by challenges, and curiosity drives me to research until I reach excellence. This commitment is reflected in my academic achievements (Maximum Distinction) and my Full Stack certification (Gold Medal 98/100). My goal is clear: to join a stable team where I can",
      goal_bold: "contribute fresh ideas",
      goal_end: "and continue applying creative solutions.",
    },
    projects: {
      title: "Featured Projects",

      ruka: {
        title: "Ruka Kumey MVP 🧘‍♀️",
        badge: "In Production",
        desc: "Comprehensive booking management system for a pilates and yoga center. Sold and currently in production. Manages capacity and memberships with 3 role-based access levels (Admin, Teacher, Student).",
        frontend: "React + CSS",
        backend: "Node.js (Express) + Bcrypt",
        database: "MySQL",
        infra: "Custom VPS, Nginx, PM2 & Resend API",
        btn_code: "View Code",
        btn_demo: "Live Demo",
      },

      resistance: {
        title: "The Resistance Web ⚡",
        badge: "Serverless Architecture",
        desc: "A news platform designed with a unique approach: $0 Budget. It uses the Blogger API as a Headless CMS, achieving exceptional performance.",
        cost_title: "Operational Cost",
        cost_desc: "$0/mo (Google Infrastructure)",
        btn_code: "View Code",
        btn_demo: "Live Demo",
      },
    },
    experience: {
      title: "Professional Experience (IBM & Cloud)",
      ibm_data: {
        title: "Data Engineering Intern",
        subtitle: "IBM (Softys Client Project) | Aug 2024 – Jan 2025",
        badge: "Cloud & Data",
        desc: "Active participation in high-volume data migration, validating process integrity within Cloud infrastructure.",
      },
      ibm_doc: {
        title: "Documentation Analyst",
        subtitle: "IBM (Back Office / PMO) | Feb 2025 – May 2025",
        badge: "Management & PMO",
        desc: "Support for the Project Management Office (PMO), ensuring correct documentation and regulatory compliance of contracts and internal procedures.",
      },
    },
    stack: {
      title: "Tech Stack",
    },
    education: {
      title: "Education & Certifications",
      analyst: {
        title: "System Analyst / Programmer",
        badge: "Professional Degree",
        subtitle:
          "Professional Institute (Santo Tomás) | Maximum Distinction (GPA 6.4)",
        desc: "Comprehensive training in software engineering. Strong foundations in logic, data structures, UML modeling, and IT project management.",
        tags: ["Software Engineering", "Databases", "Agile Management"],
      },
      bootcamp: {
        title: "Full Stack Java Developer",
        badge: "Bootcamp Certification",
        subtitle:
          "Banco de Chile Intensive Bootcamp - Skillnest (formaly Coding Dojo) | Black Belt (98/100)",
        desc: "Specialization in enterprise backend architecture. Development of secure and scalable APIs using the Spring ecosystem.",
      },
    },
    contact: {
      title: "Let's build something amazing",
      desc: "I love collaborating on projects that require technical creativity. If you are looking for a detail-oriented developer, send me a message.",
      btn: "Send Email",
    },
    footer: "Made with 💜 and React.",
  },
};

// Componente Card (Sin cambios, solo tipos)
const Card = ({
  icon,
  title,
  subtitle,
  date,
  description,
  tags,
  link,
  distinction,
}: any) => (
  <div className="relative group p-[2px] rounded-2xl bg-gradient-to-r from-jovy-celeste via-white/10 to-jovy-lila opacity-90 hover:opacity-100 transition-all duration-300 hover:shadow-[0_0_30px_rgba(125,211,252,0.15)]">
    <div className="bg-slate-900 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-start gap-6 relative h-full">
      <div className="flex-shrink-0 w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center border border-white/10 group-hover:scale-110 group-hover:bg-jovy-celeste/20 group-hover:border-jovy-celeste/50 transition-all duration-300">
        <span className="text-3xl">{icon}</span>
      </div>
      <div className="flex-1 text-center md:text-left">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
          <h3 className="text-xl font-bold text-white group-hover:text-jovy-celeste transition-colors">
            {title}
          </h3>
          <span className="inline-block px-3 py-1 bg-jovy-celeste/10 text-jovy-celeste text-xs font-bold border border-jovy-celeste/20 rounded-full mt-2 md:mt-0 uppercase tracking-wider">
            {distinction || date}
          </span>
        </div>
        <p className="text-slate-300 font-medium mb-2">{subtitle}</p>
        <p className="text-slate-400 text-sm leading-relaxed mb-4">
          {description}
        </p>
        {tags && (
          <div className="flex flex-wrap gap-2 justify-center md:justify-start">
            {tags.map((tag: string) => (
              <span
                key={tag}
                className="px-2 py-1 text-xs text-slate-300 bg-slate-800/50 rounded border border-slate-700"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block text-jovy-lila hover:text-white transition text-sm font-medium"
          >
            Ver Proyecto →
          </a>
        )}
      </div>
    </div>
  </div>
);

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [lang, setLang] = useState<"es" | "en">("es");

  const toggleLang = () => setLang((prev) => (prev === "es" ? "en" : "es"));
  const t = translations[lang];

  const customColors = {
    "jovy-bg": "#0f172a",
    "jovy-lila": "#d8b4fe",
    "jovy-celeste": "#7dd3fc",
  };

  const rootStyle = {
    "--color-jovy-bg": customColors["jovy-bg"],
    "--color-jovy-lila": customColors["jovy-lila"],
    "--color-jovy-celeste": customColors["jovy-celeste"],
  } as React.CSSProperties;

  return (
    <div
      style={rootStyle}
      className="min-h-screen font-sans bg-jovy-bg text-slate-300 selection:bg-jovy-lila selection:text-slate-900"
    >
      {/* --- NAV --- */}
      <nav className="fixed w-full backdrop-blur-md bg-jovy-bg/80 border-b border-white/5 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-jovy-celeste to-jovy-lila tracking-tighter">
            JovyJS
          </div>

          {/* Menu Desktop */}
          <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
            <a
              href="#experiencia"
              className="hover:text-jovy-celeste transition-colors duration-300"
            >
              {t.nav.experience}
            </a>
            <a
              href="#proyectos"
              className="hover:text-jovy-lila transition-colors duration-300"
            >
              {t.nav.projects}
            </a>
            <a
              href="#habilidades"
              className="hover:text-jovy-celeste transition-colors duration-300"
            >
              {t.nav.stack}
            </a>
            <a
              href="#formacion"
              className="hover:text-jovy-lila transition-colors duration-300"
            >
              {t.nav.education}
            </a>
            <a
              href="#contacto"
              className="hover:text-jovy-celeste transition-colors duration-300"
            >
              {t.nav.contact}
            </a>

            {/* Botón Idioma Desktop */}
            <button
              onClick={toggleLang}
              className="px-3 py-1 rounded-full border border-slate-600 hover:border-jovy-celeste hover:text-white transition-all text-xs font-bold flex items-center gap-2"
            >
              <span>{lang === "es" ? "🇺🇸 EN" : "🇪🇸 ES"}</span>
            </button>
          </div>

          <div className="md:hidden flex items-center gap-4">
            {/* Botón Idioma Móvil */}
            <button
              onClick={toggleLang}
              className="text-xl border border-slate-700 rounded-full px-2 py-1"
            >
              {lang === "es" ? "🇺🇸" : "🇪🇸"}
            </button>
            <button
              className="text-slate-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              ☰
            </button>
          </div>
        </div>

        {/* Menu Móvil */}
        {isMenuOpen && (
          <div className="md:hidden bg-jovy-bg border-b border-white/5 p-4 space-y-4 text-center">
            <a
              href="#experiencia"
              className="block hover:text-jovy-celeste"
              onClick={() => setIsMenuOpen(false)}
            >
              {t.nav.experience}
            </a>
            <a
              href="#proyectos"
              className="block hover:text-jovy-lila"
              onClick={() => setIsMenuOpen(false)}
            >
              {t.nav.projects}
            </a>
            <a
              href="#habilidades"
              className="block hover:text-jovy-celeste"
              onClick={() => setIsMenuOpen(false)}
            >
              {t.nav.stack}
            </a>
            <a
              href="#formacion"
              className="block hover:text-jovy-lila"
              onClick={() => setIsMenuOpen(false)}
            >
              {t.nav.education}
            </a>
            <a
              href="#contacto"
              className="block hover:text-jovy-celeste"
              onClick={() => setIsMenuOpen(false)}
            >
              {t.nav.contact}
            </a>
          </div>
        )}
      </nav>

      {/* --- HERO SECTION --- */}
      <header className="pt-44 pb-20 px-6 max-w-6xl mx-auto">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            {t.hero.greeting}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-jovy-celeste via-jovy-lila to-purple-400">
              Jovy
            </span>
          </h1>

          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 tracking-tight">
            {t.hero.role_title}
          </h2>
          <p className="text-xl text-slate-400 mb-8 leading-relaxed">
            {t.hero.role_desc_1} <strong>{t.hero.role_desc_bold_1}</strong>{" "}
            {t.hero.role_desc_2} <strong>{t.hero.role_desc_bold_2}</strong>{" "}
            {t.hero.role_desc_3} <strong>{t.hero.role_desc_bold_3}</strong>.{" "}
            {t.hero.role_desc_4}
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#proyectos"
              className="px-8 py-3 bg-jovy-lila hover:bg-white text-slate-900 rounded-full font-bold transition duration-300 shadow-[0_0_20px_rgba(216,180,254,0.3)] hover:shadow-[0_0_30px_rgba(216,180,254,0.5)]"
            >
              {t.hero.btn_projects}
            </a>
            <a
              href="https://github.com/jovyscript"
              target="_blank"
              rel="noreferrer"
              className="px-8 py-3 border border-slate-600 hover:border-jovy-celeste text-slate-300 hover:text-jovy-celeste rounded-full font-medium transition duration-300"
            >
              GitHub
            </a>
          </div>
        </div>
      </header>

      {/* --- ACERCA DE MÍ --- */}
      <section
        id="acerca-de"
        className="py-12 px-6 max-w-6xl mx-auto border-t border-white/5"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-6">
            {t.about.title}
          </h2>

          <p className="text-xl text-slate-300 leading-relaxed border-l-4 border-jovy-lila pl-4 italic">
            {t.about.p1} <strong>{t.about.p1_bold}</strong> {t.about.p1_end}
          </p>

          <p className="text-lg text-slate-400 leading-relaxed mt-6">
            <strong className="text-white">{t.about.diff_title}</strong>{" "}
            {t.about.diff_text} <strong>{t.about.diff_bold}</strong>.
          </p>

          <p className="text-lg text-slate-400 leading-relaxed mt-4">
            <strong className="text-white">{t.about.goal_title}</strong>{" "}
            {t.about.goal_text} <strong>{t.about.goal_bold}</strong>{" "}
            {t.about.goal_end}
          </p>
        </div>
      </section>

     {/* --- PROYECTOS --- */}
      <section id="proyectos" className="py-20 px-6 max-w-6xl mx-auto">
        <div className="flex items-center mb-12">
          <span className="w-12 h-1 bg-gradient-to-r from-jovy-celeste to-jovy-lila mr-4 rounded-full"></span>
          <h2 className="text-3xl font-bold text-white">{t.projects.title}</h2>
        </div>

        {/* 1. TARJETA THE RESISTANCE WEB */}
        <div className="group relative bg-slate-900/50 border border-white/10 rounded-3xl overflow-hidden hover:border-jovy-lila/50 transition-all duration-500 shadow-xl">
          <div className="absolute -inset-1 bg-gradient-to-r from-jovy-celeste to-jovy-lila opacity-10 group-hover:opacity-20 blur transition duration-500"></div>

          <div className="relative p-8 md:p-12 bg-slate-900/90 h-full rounded-3xl">
            <div className="flex flex-col md:flex-row gap-10">
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-4 mb-4">
                  <h3 className="text-3xl font-bold text-white group-hover:text-jovy-lila transition-colors">
                    {t.projects.resistance.title}
                  </h3>
                  <span className="px-3 py-1 bg-jovy-lila/10 text-jovy-lila text-xs font-bold border border-jovy-lila/20 rounded-full uppercase tracking-wide">
                    {t.projects.resistance.badge}
                  </span>
                </div>

                <p className="text-slate-300 mb-8 text-lg leading-relaxed">
                  {t.projects.resistance.desc}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  <div className="bg-white/5 p-4 rounded-2xl border border-white/5 hover:border-jovy-celeste/30 transition">
                    <h4 className="text-jovy-celeste text-sm font-bold mb-1">
                      Frontend
                    </h4>
                    <p className="text-sm text-slate-400">
                      Next.js 15 + TypeScript
                    </p>
                  </div>
                  <div className="bg-white/5 p-4 rounded-2xl border border-white/5 hover:border-jovy-lila/30 transition">
                    <h4 className="text-jovy-lila text-sm font-bold mb-1">
                      Data Layer
                    </h4>
                    <p className="text-sm text-slate-400">
                      Google Blogger API v3 (Headless)
                    </p>
                  </div>
                  <div className="bg-white/5 p-4 rounded-2xl border border-white/5 hover:border-pink-300/30 transition">
                    <h4 className="text-pink-300 text-sm font-bold mb-1">
                      Styling
                    </h4>
                    <p className="text-sm text-slate-400">Tailwind CSS</p>
                  </div>
                  <div className="bg-white/5 p-4 rounded-2xl border border-white/5 hover:border-emerald-300/30 transition">
                    <h4 className="text-emerald-300 text-sm font-bold mb-1">
                      {t.projects.resistance.cost_title}
                    </h4>
                    <p className="text-sm text-slate-400">
                      {t.projects.resistance.cost_desc}
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <a
                    href="https://github.com/jovyscript/theresistance-web"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 px-5 py-2.5 rounded-full font-medium transition text-sm border border-white/10 hover:border-jovy-lila/30"
                  >
                    <svg
                      className="w-5 h-5 mr-2 fill-current"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                    </svg>
                    {t.projects.resistance.btn_code}
                  </a>
                  <a
                    href="https://theresistance.cl/"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center text-slate-900 bg-jovy-celeste hover:bg-white px-5 py-2.5 rounded-full font-bold transition text-sm shadow-lg shadow-jovy-celeste/20 hover:shadow-jovy-celeste/40"
                  >
                    <span className="mr-2">🚀</span>{" "}
                    {t.projects.resistance.btn_demo}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 2. TARJETA RUKA KUMEY MVP */}
        <div className="mt-12 group relative bg-slate-900/50 border border-white/10 rounded-3xl overflow-hidden hover:border-jovy-celeste/50 transition-all duration-500 shadow-xl">
          <div className="absolute -inset-1 bg-gradient-to-r from-jovy-lila to-jovy-celeste opacity-10 group-hover:opacity-20 blur transition duration-500"></div>

          <div className="relative p-8 md:p-12 bg-slate-900/90 h-full rounded-3xl">
            <div className="flex flex-col gap-10">
              
              {/* Bloque Superior: Información y Stack */}
              <div>
                <div className="flex flex-wrap items-center gap-4 mb-4">
                  <h3 className="text-3xl font-bold text-white group-hover:text-jovy-celeste transition-colors">
                    {t.projects.ruka.title}
                  </h3>
                  <span className="px-3 py-1 bg-emerald-500/10 text-emerald-400 text-xs font-bold border border-emerald-500/20 rounded-full uppercase tracking-wide">
                    {t.projects.ruka.badge}
                  </span>
                </div>

                <p className="text-slate-300 mb-8 text-lg leading-relaxed max-w-4xl">
                  {t.projects.ruka.desc}
                </p>

                {/* Arquitectura Grid de Tecnologías */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                  <div className="bg-white/5 p-4 rounded-2xl border border-white/5 hover:border-jovy-celeste/30 transition">
                    <h4 className="text-jovy-celeste text-sm font-bold mb-1">Frontend</h4>
                    <p className="text-sm text-slate-400">{t.projects.ruka.frontend}</p>
                  </div>
                  <div className="bg-white/5 p-4 rounded-2xl border border-white/5 hover:border-jovy-lila/30 transition">
                    <h4 className="text-jovy-lila text-sm font-bold mb-1">Backend (API)</h4>
                    <p className="text-sm text-slate-400">{t.projects.ruka.backend}</p>
                  </div>
                  <div className="bg-white/5 p-4 rounded-2xl border border-white/5 hover:border-pink-300/30 transition">
                    <h4 className="text-pink-300 text-sm font-bold mb-1">Data Layer</h4>
                    <p className="text-sm text-slate-400">{t.projects.ruka.database}</p>
                  </div>
                  <div className="bg-white/5 p-4 rounded-2xl border border-white/5 hover:border-emerald-300/30 transition">
                    <h4 className="text-emerald-300 text-sm font-bold mb-1">DevOps & Auth</h4>
                    <p className="text-sm text-slate-400">{t.projects.ruka.infra}</p>
                  </div>
                </div>

                {/* Botones de Links */}
                <div className="flex gap-4">
                  <a href="https://github.com/jovyscript/ruka-frontend" target="_blank" rel="noreferrer" className="flex items-center text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 px-5 py-2.5 rounded-full font-medium transition text-sm border border-white/10 hover:border-jovy-celeste/30">
                    <svg className="w-5 h-5 mr-2 fill-current" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
                    {t.projects.ruka.btn_code}
                  </a>
                  <a href="https://rukakumey.cl/" target="_blank" rel="noreferrer" className="flex items-center text-slate-900 bg-jovy-lila hover:bg-white px-5 py-2.5 rounded-full font-bold transition text-sm shadow-lg shadow-jovy-lila/20 hover:shadow-jovy-lila/40">
                    <span className="mr-2">🚀</span> {t.projects.ruka.btn_demo}
                  </a>
                </div>
              </div>

              {/* 👇 Bloque Inferior: CARRUSEL DE IMÁGENES 👇 */}
              <div className="mt-6 border border-white/10 rounded-2xl overflow-hidden shadow-2xl bg-slate-950">
                <Swiper
                  // Configuración del Carrusel
                  modules={[Navigation, Pagination, Autoplay]} // Módulos que usaremos
                  spaceBetween={0}        // Sin espacio entre fotos
                  slidesPerView={1}       // Una foto a la vez
                  navigation              // Flechas activas
                  pagination={{ clickable: true }} // Puntitos abajo activos
                  loop={true}             // Infinito
                  autoplay={{             // Se mueve solo cada 5 segs
                    delay: 5000,
                    disableOnInteraction: false,
                  }}
                  className="w-full h-auto jovy-swiper" // Clase custom para estilos
                >
                  {/* Foto 1: Calendario Semanal */}
                  <SwiperSlide>
                    <div className="aspect-[16/9] w-full">
                      <img 
                        src="/projects/ruka-calendar.png" 
                        alt="Vista del Calendario Semanal" 
                        className="w-full h-full object-contain"
                        loading="lazy"
                      />
                    </div>
                  </SwiperSlide>

                  {/* Foto 2: Vista Alumna */}
                  <SwiperSlide>
                    <div className="aspect-[16/9] w-full">
                      <img 
                        src="/projects/ruka-student.png" 
                        alt="Vista de la Alumna" 
                        className="w-full h-full object-contain"
                        loading="lazy"
                      />
                    </div>
                  </SwiperSlide>

                  {/* Foto 3: Mail Resend */}
                  <SwiperSlide>
                    <div className="aspect-[16/9] w-full">
                      <img 
                        src="/projects/ruka-mail.png" 
                        alt="Correo de Onboarding Resend" 
                        className="w-full h-full object-contain"
                        loading="lazy"
                      />
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>

            </div>
          </div>
        </div>

      </section>
      {/* --- EXPERIENCIA PROFESIONAL --- */}
      <section
        id="experiencia"
        className="py-20 px-6 max-w-6xl mx-auto border-t border-white/5"
      >
        <div className="flex items-center mb-12">
          <span className="w-12 h-1 bg-gradient-to-r from-jovy-lila to-jovy-celeste mr-4 rounded-full"></span>
          <h2 className="text-3xl font-bold text-white">
            {t.experience.title}
          </h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          {/* Tarjeta IBM - Prácticante */}
          <Card
            icon="☁️"
            title={t.experience.ibm_data.title}
            subtitle={t.experience.ibm_data.subtitle}
            distinction={t.experience.ibm_data.badge}
            description={t.experience.ibm_data.desc}
            tags={[
              "GCP",
              "BigQuery",
              "SQL Avanzado",
              "SAP HANA",
              "SCRUM",
              "Python",
            ]}
            date={null}
            link={null}
          />

          {/* Tarjeta IBM - Analista */}
          <Card
            icon="💼"
            title={t.experience.ibm_doc.title}
            subtitle={t.experience.ibm_doc.subtitle}
            distinction={t.experience.ibm_doc.badge}
            description={t.experience.ibm_doc.desc}
            tags={["Documentación", "Contratos", "Procedimientos Internos"]}
            date={null}
            link={null}
          />
        </div>
      </section>

      {/* --- SKILLS --- */}
      <section id="habilidades" className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">
          {t.stack.title}
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          {[
            "Java (Spring Boot)",
            "API REST",
            "GCP (Google Cloud)",
            "BigQuery",
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "SQL / MySQL",
            "JPA / Hibernate",
            "JavaScript (ES6+)",
            "React",
            "Agile Scrum",
            "Git / GitHub",
            "Python",
            "Docker",
            "Bcrypt",
          ].map((skill: string) => (
            <div
              key={skill}
              className="px-6 py-3 bg-slate-800/50 rounded-full border border-slate-700 hover:border-jovy-lila hover:bg-slate-800 transition-all duration-300 cursor-default hover:shadow-[0_0_15px_rgba(216,180,254,0.2)]"
            >
              <span className="text-slate-300 font-medium group-hover:text-white">
                {skill}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* --- FORMACIÓN --- */}
      <section
        id="formacion"
        className="py-20 px-6 max-w-6xl mx-auto border-t border-white/5"
      >
        <h2 className="text-3xl font-bold text-white mb-12 text-center">
          {t.education.title}
        </h2>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* 1. Título de Analista */}
          <div className="relative group p-[2px] rounded-2xl bg-gradient-to-r from-jovy-celeste via-white/10 to-jovy-lila opacity-90 hover:opacity-100 transition-all duration-300 hover:shadow-[0_0_30px_rgba(125,211,252,0.15)]">
            <div className="bg-slate-900 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 relative h-full">
              <div className="flex-shrink-0 w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center border border-white/10 group-hover:scale-110 group-hover:bg-jovy-celeste/20 group-hover:border-jovy-celeste/50 transition-all duration-300">
                <span className="text-3xl">📜</span>
              </div>
              <div className="flex-1 text-center md:text-left">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                  <h3 className="text-xl font-bold text-white group-hover:text-jovy-celeste transition-colors">
                    {t.education.analyst.title}
                  </h3>
                  <span className="inline-block px-3 py-1 bg-jovy-celeste/10 text-jovy-celeste text-xs font-bold border border-jovy-celeste/20 rounded-full mt-2 md:mt-0 uppercase tracking-wider">
                    {t.education.analyst.badge}
                  </span>
                </div>
                <p className="text-slate-300 font-medium mb-2">
                  {t.education.analyst.subtitle}
                </p>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                  {t.education.analyst.desc}
                </p>
                <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                  {t.education.analyst.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs text-slate-300 bg-slate-800/50 border border-slate-700 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 2. Java Bootcamp */}
          <div className="relative group p-[2px] rounded-2xl bg-gradient-to-r from-jovy-lila via-white/10 to-jovy-celeste opacity-90 hover:opacity-100 transition-all duration-300 hover:shadow-[0_0_30px_rgba(216,180,254,0.15)]">
            <div className="bg-slate-900 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 relative h-full">
              <div className="flex-shrink-0 w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center border border-white/10 group-hover:scale-110 group-hover:bg-jovy-lila/20 group-hover:border-jovy-lila/50 transition-all duration-300">
                <span className="text-3xl">🎓</span>
              </div>
              <div className="flex-1 text-center md:text-left">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                  <h3 className="text-xl font-bold text-white group-hover:text-jovy-lila transition-colors">
                    {t.education.bootcamp.title}
                  </h3>
                  <span className="inline-block px-3 py-1 bg-jovy-lila/10 text-jovy-lila text-xs font-bold border border-jovy-lila/20 rounded-full mt-2 md:mt-0 uppercase tracking-wider">
                    {t.education.bootcamp.badge}
                  </span>
                </div>
                <p className="text-slate-300 font-medium mb-2">
                  {t.education.bootcamp.subtitle}
                </p>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                  {t.education.bootcamp.desc}
                </p>
                <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                  {[
                    "Java 17",
                    "Spring Boot",
                    "Spring Security",
                    "JPA / Hibernate",
                    "MySQL",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs text-slate-300 bg-slate-800/50 rounded border border-slate-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- CONTACTO --- */}
      <section
        id="contacto"
        className="py-20 px-6 max-w-4xl mx-auto text-center"
      >
        <div className="bg-gradient-to-b from-slate-800/50 to-slate-900/50 p-12 rounded-3xl border border-white/5">
          <h2 className="text-3xl font-bold text-white mb-6">
            {t.contact.title}
          </h2>
          <p className="text-slate-400 mb-8 text-lg max-w-2xl mx-auto">
            {t.contact.desc}
          </p>
          <a
            href="mailto:hello@jovyjs.com"
            className="inline-block px-10 py-4 bg-gradient-to-r from-jovy-lila to-jovy-celeste hover:from-white hover:to-white text-slate-900 font-bold rounded-full transition-all duration-300 shadow-xl shadow-purple-900/20 transform hover:-translate-y-1"
          >
            {t.contact.btn}
          </a>
        </div>
      </section>

      <footer className="py-8 text-center text-slate-500 text-sm border-t border-white/5">
        <p>
          &copy; {new Date().getFullYear()} JovyJS. {t.footer}
        </p>
      </footer>
    </div>
  );
}

export default App;
