import { useState } from "react";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    // Usamos tu fondo oscuro base, pero con selección de texto lila
    <div className="min-h-screen font-sans bg-jovy-bg text-slate-300 selection:bg-jovy-lila selection:text-slate-900">
      {/* --- NAV --- */}
      <nav className="fixed w-full backdrop-blur-md bg-jovy-bg/80 border-b border-white/5 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo con gradiente */}
          <div className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-jovy-celeste to-jovy-lila tracking-tighter">
            JovyJS
          </div>

          {/* Menu Desktop */}
          <div className="hidden md:flex space-x-8 text-sm font-medium">
            <a
              href="#proyectos"
              className="hover:text-jovy-lila transition-colors duration-300"
            >
              Proyectos
            </a>
            <a
              href="#habilidades"
              className="hover:text-jovy-celeste transition-colors duration-300"
            >
              Stack
            </a>
            <a
              href="#contacto"
              className="hover:text-jovy-lila transition-colors duration-300"
            >
              Contacto
            </a>
          </div>

          {/* Botón Menu Móvil */}
          <button
            className="md:hidden text-slate-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            ☰
          </button>
        </div>

        {/* Menu Móvil */}
        {isMenuOpen && (
          <div className="md:hidden bg-jovy-bg border-b border-white/5 p-4 space-y-4 text-center">
            <a
              href="#proyectos"
              className="block hover:text-jovy-lila"
              onClick={() => setIsMenuOpen(false)}
            >
              Proyectos
            </a>
            <a
              href="#contacto"
              className="block hover:text-jovy-celeste"
              onClick={() => setIsMenuOpen(false)}
            >
              Contacto
            </a>
          </div>
        )}
      </nav>

      {/* --- HERO SECTION --- */}
      <header className="pt-44 pb-20 px-6 max-w-6xl mx-auto">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            Hola, soy{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-jovy-celeste via-jovy-lila to-purple-400">
              Jovy
            </span>
          </h1>
          <p className="text-xl text-slate-400 mb-8 leading-relaxed">
            Desarrolladora Web Full Stack. Transformo ideas complejas en
            experiencias digitales{" "}
            <span className="text-jovy-lila font-medium">elegantes</span> y{" "}
            <span className="text-jovy-celeste font-medium">escalables</span>.
          </p>
          <div className="flex flex-wrap gap-4">
            {/* Botón Principal Lila Pastel */}
            <a
              href="#proyectos"
              className="px-8 py-3 bg-jovy-lila hover:bg-white text-slate-900 rounded-full font-bold transition duration-300 shadow-[0_0_20px_rgba(216,180,254,0.3)] hover:shadow-[0_0_30px_rgba(216,180,254,0.5)]"
            >
              Ver Proyectos
            </a>
            {/* Botón Secundario Borde */}
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

      {/* --- PROYECTOS --- */}
      <section id="proyectos" className="py-20 px-6 max-w-6xl mx-auto">
        <div className="flex items-center mb-12">
          {/* Línea decorativa celeste */}
          <span className="w-12 h-1 bg-gradient-to-r from-jovy-celeste to-jovy-lila mr-4 rounded-full"></span>
          <h2 className="text-3xl font-bold text-white">
            Proyectos Destacados
          </h2>
        </div>

        {/* TARJETA DEL PROYECTO ESTRELLA */}
        <div className="group relative bg-slate-900/50 border border-white/10 rounded-3xl overflow-hidden hover:border-jovy-lila/50 transition-all duration-500 shadow-xl">
          {/* Glow effect detrás de la tarjeta */}
          <div className="absolute -inset-1 bg-gradient-to-r from-jovy-celeste to-jovy-lila opacity-10 group-hover:opacity-20 blur transition duration-500"></div>

          <div className="relative p-8 md:p-12 bg-slate-900/90 h-full rounded-3xl">
            <div className="flex flex-col md:flex-row gap-10">
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-4 mb-4">
                  <h3 className="text-3xl font-bold text-white group-hover:text-jovy-lila transition-colors">
                    The Resistance Web ⚡
                  </h3>
                  <span className="px-3 py-1 bg-jovy-lila/10 text-jovy-lila text-xs font-bold border border-jovy-lila/20 rounded-full uppercase tracking-wide">
                    Arquitectura Serverless
                  </span>
                </div>

                <p className="text-slate-300 mb-8 text-lg leading-relaxed">
                  Una plataforma de noticias diseñada con un enfoque único:{" "}
                  <strong className="text-white">Presupuesto $0</strong>.
                  Utiliza la API de Blogger como base de datos Headless,
                  logrando un rendimiento excepcional y diseño responsive.
                </p>

                {/* Arquitectura Grid - Estilo más suave */}
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
                    <p className="text-sm text-slate-400">
                      Tailwind CSS (Dark Mode)
                    </p>
                  </div>
                  <div className="bg-white/5 p-4 rounded-2xl border border-white/5 hover:border-emerald-300/30 transition">
                    <h4 className="text-emerald-300 text-sm font-bold mb-1">
                      Coste
                    </h4>
                    <p className="text-sm text-slate-400">
                      $0/mes (Infraestructura Google)
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  {/* Botón Ver Código con Icono GitHub */}
                  <a
                    href="https://github.com/jovyscript/theresistance-web"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 px-5 py-2.5 rounded-full font-medium transition text-sm border border-white/10 hover:border-jovy-lila/30"
                  >
                    {/* SVG del Logo de GitHub */}
                    <svg
                      className="w-5 h-5 mr-2 fill-current"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                    </svg>
                    Ver Código
                  </a>

                  {/* Botón Demo con Cohete */}
                  <a
                    href="https://theresistance.cl/"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center text-slate-900 bg-jovy-celeste hover:bg-white px-5 py-2.5 rounded-full font-bold transition text-sm shadow-lg shadow-jovy-celeste/20 hover:shadow-jovy-celeste/40"
                  >
                    <span className="mr-2">🚀</span> Demo en Vivo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SKILLS --- */}
      <section id="habilidades" className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">
          Mi Stack Tecnológico
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          {[
            "Java",
            "Spring boot",
            "Google Cloud Platform",
            "SQL / MySQL",
            "JavaScript (ES6+)",
            "TypeScript",
            "React",
            "Next.js",
            "Tailwind CSS",
            "Node.js",
            "Git",
            "API Rest",
          ].map((skill) => (
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

{/* --- FORMACIÓN & CERTIFICACIONES (Diseño Unificado) --- */}
      <section className="py-20 px-6 max-w-6xl mx-auto border-t border-white/5">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">Formación Académica</h2>
        
        <div className="max-w-4xl mx-auto space-y-8">
          
          {/* 1. Título de Analista Programador */}
          <div className="relative group p-[2px] rounded-2xl bg-gradient-to-r from-jovy-celeste via-white/10 to-jovy-lila opacity-90 hover:opacity-100 transition-all duration-300 hover:shadow-[0_0_30px_rgba(125,211,252,0.15)]">
            <div className="bg-slate-900 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 relative h-full">
              
              {/* Icono */}
              <div className="flex-shrink-0 w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center border border-white/10 group-hover:scale-110 group-hover:bg-jovy-celeste/20 group-hover:border-jovy-celeste/50 transition-all duration-300">
                <span className="text-3xl">📜</span>
              </div>

              {/* Detalles */}
              <div className="flex-1 text-center md:text-left">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                  <h3 className="text-xl font-bold text-white group-hover:text-jovy-celeste transition-colors">Analista Programador</h3>
                  <span className="inline-block px-3 py-1 bg-jovy-celeste/10 text-jovy-celeste text-xs font-bold border border-jovy-celeste/20 rounded-full mt-2 md:mt-0 uppercase tracking-wider">
                    Título Profesional
                  </span>
                </div>
                <p className="text-slate-300 font-medium mb-2">Instituto Profesional (Santo Tomás)</p>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                  Formación integral en ingeniería de software. Bases sólidas en lógica, estructuras de datos, modelado UML y gestión de proyectos TI.
                </p>
                
                {/* Badges */}
                <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                  <span className="px-2 py-1 text-xs text-slate-300 bg-slate-800/50 border border-slate-700 rounded">Ingeniería de Software</span>
                  <span className="px-2 py-1 text-xs text-slate-300 bg-slate-800/50 border border-slate-700 rounded">Bases de Datos</span>
                  <span className="px-2 py-1 text-xs text-slate-300 bg-slate-800/50 border border-slate-700 rounded">Gestión Ágil</span>
                </div>
              </div>
            </div>
          </div>

          {/* 2. Certificación Java */}
          <div className="relative group p-[2px] rounded-2xl bg-gradient-to-r from-jovy-lila via-white/10 to-jovy-celeste opacity-90 hover:opacity-100 transition-all duration-300 hover:shadow-[0_0_30px_rgba(216,180,254,0.15)]">
            <div className="bg-slate-900 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 relative h-full">
              
              {/* Icono */}
              <div className="flex-shrink-0 w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center border border-white/10 group-hover:scale-110 group-hover:bg-jovy-lila/20 group-hover:border-jovy-lila/50 transition-all duration-300">
                <span className="text-3xl">🎓</span>
              </div>

              {/* Detalles */}
              <div className="flex-1 text-center md:text-left">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                  <h3 className="text-xl font-bold text-white group-hover:text-jovy-lila transition-colors">Desarrollador Full Stack Java</h3>
                  <span className="inline-block px-3 py-1 bg-jovy-lila/10 text-jovy-lila text-xs font-bold border border-jovy-lila/20 rounded-full mt-2 md:mt-0 uppercase tracking-wider">
                    Certificación Bootcamp
                  </span>
                </div>
                <p className="text-slate-300 font-medium mb-2">Bootcamp Intensivo Banco de Chile - Skillnest</p>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                  Especialización en arquitectura backend empresarial. Desarrollo de APIs seguras y escalables utilizando el ecosistema Spring.
                </p>
                
                {/* Badges */}
                <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                  {['Java 17', 'Spring Boot', 'Spring Security', 'JPA / Hibernate', 'MySQL'].map((tech) => (
                    <span key={tech} className="px-2 py-1 text-xs text-slate-300 bg-slate-800/50 rounded border border-slate-700">
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
            ¿Creamos algo increíble?
          </h2>
          <p className="text-slate-400 mb-8 text-lg max-w-2xl mx-auto">
            Me encanta colaborar en proyectos que requieren creatividad técnica.
            Si buscas una desarrolladora detallista, envíame un mensaje.
          </p>
          <a
            href="mailto:hello@jovyjs.com"
            className="inline-block px-10 py-4 bg-gradient-to-r from-jovy-lila to-jovy-celeste hover:from-white hover:to-white text-slate-900 font-bold rounded-full transition-all duration-300 shadow-xl shadow-purple-900/20 transform hover:-translate-y-1"
          >
            Enviar Correo
          </a>
        </div>
      </section>

      <footer className="py-8 text-center text-slate-500 text-sm border-t border-white/5">
        <p>&copy; {new Date().getFullYear()} JovyJS. Hecho con 💜 y React.</p>
      </footer>
    </div>
  );
}

export default App;
