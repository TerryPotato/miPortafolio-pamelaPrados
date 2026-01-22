import React, { useState } from 'react';
import { 
  Moon, 
  Sun, 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Code, 
  Server, 
  Smartphone, 
  Menu, 
  X,
  ChevronRight
} from 'lucide-react';
import profileImage from './assets/image.png';

export default function App() {
  // Estado para el modo oscuro
  const [darkMode, setDarkMode] = useState(false);
  // Estado para el menú en celular
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Función para cambiar modo oscuro
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Función para abrir/cerrar menú móvil
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    // Contenedor principal que maneja el modo oscuro
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen transition-colors duration-300 bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100 font-sans">
        
        {/* ==================== NAVBAR ==================== */}
        <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/70 dark:bg-gray-900/70 border-b border-gray-200 dark:border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              
              {/* Logo / Nombre en el menú */}
              <div className="flex-shrink-0 font-bold text-2xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                DevPortfolio
              </div>
              
              {/* Enlaces para Escritorio (Desktop) */}
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-8">
                  <a href="#inicio" className="hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-md font-medium transition-colors">Inicio</a>
                  <a href="#habilidades" className="hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-md font-medium transition-colors">Habilidades</a>
                  <a href="#proyectos" className="hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-md font-medium transition-colors">Proyectos</a>
                  <a href="#sobre-mi" className="hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-md font-medium transition-colors">Sobre Mí</a>
                  <a href="#contacto" className="hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-md font-medium transition-colors">Contacto</a>
                </div>
              </div>

              {/* Botones de Acción (Dark Mode y Menú Móvil) */}
              <div className="flex items-center gap-4">
                <button 
                  onClick={toggleDarkMode} 
                  className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
                  aria-label="Cambiar tema"
                >
                  {darkMode ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} className="text-gray-600" />}
                </button>
                
                {/* Botón Hamburguesa para Celular */}
                <div className="md:hidden">
                  <button onClick={toggleMenu} className="p-2 text-gray-600 dark:text-gray-300">
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Menú Desplegable para Celular */}
          {isMenuOpen && (
            <div className="md:hidden bg-white dark:bg-gray-900 border-b dark:border-gray-800">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <a href="#inicio" onClick={toggleMenu} className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100 dark:hover:bg-gray-800">Inicio</a>
                <a href="#habilidades" onClick={toggleMenu} className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100 dark:hover:bg-gray-800">Habilidades</a>
                <a href="#proyectos" onClick={toggleMenu} className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100 dark:hover:bg-gray-800">Proyectos</a>
                <a href="#sobre-mi" onClick={toggleMenu} className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100 dark:hover:bg-gray-800">Sobre Mí</a>
                <a href="#contacto" onClick={toggleMenu} className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100 dark:hover:bg-gray-800">Contacto</a>
              </div>
            </div>
          )}
        </nav>

        {/* ==================== SECCIÓN HERO (INICIO) ==================== */}
        <section id="inicio" className="pt-20 pb-20 lg:pt-32 lg:pb-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
          <div className="mb-6 relative">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 blur opacity-75"></div>
            <img 
              src={profileImage}
              alt="Foto de Perfil" 
              className="relative w-32 h-32 rounded-full object-cover border-4 border-white dark:border-gray-900 shadow-lg"
            />
          </div>
          
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-4">
            Hola, soy <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">[Pamela Prados]</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl">
            Estudiante de Ingeniería en Tecnologías de la Información y Negocios Digitales & Desarrolladora Full Stack
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#proyectos" className="px-8 py-3 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/30 flex items-center justify-center gap-2">
              Ver Mis Proyectos <ChevronRight size={18} />
            </a>
            <a href="#contacto" className="px-8 py-3 rounded-full bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 font-semibold hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors shadow-sm">
              Contactarme
            </a>
          </div>

          {/* Iconos Sociales */}
          <div className="mt-10 flex gap-6 text-gray-500 dark:text-gray-400">
            <a href="https://github.com/TerryPotato" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors transform hover:scale-110">
              <Github size={28} />
            </a>
            <a href="https://www.linkedin.com/in/pamela-prados-ing-ti/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors transform hover:scale-110">
              <Linkedin size={28} />
            </a>
            <a href="mailto:pamgendrop@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors transform hover:scale-110">
              <Mail size={28} />
            </a>
          </div>
        </section>

        {/* ==================== SECCIÓN HABILIDADES (SKILLS) ==================== */}
        <section id="habilidades" className="py-20 bg-white dark:bg-gray-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Mis Habilidades Técnicas</h2>
              <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              {/* --- Tarjeta 1: Frontend --- */}
              <div className="p-8 bg-gray-50 dark:bg-gray-800 rounded-2xl hover:shadow-xl transition-shadow border border-gray-100 dark:border-gray-700">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center text-blue-600 dark:text-blue-400 mb-6">
                  <Code size={24} />
                </div>
                <h3 className="text-xl font-bold mb-4">Frontend</h3>
                {/* EDITAR: Lista de Habilidades Frontend aquí abajo */}
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li className="flex items-center gap-2"><div className="w-2 h-2 bg-blue-500 rounded-full"></div>React.js</li>
                  <li className="flex items-center gap-2"><div className="w-2 h-2 bg-blue-500 rounded-full"></div>Tailwind CSS</li>
                  <li className="flex items-center gap-2"><div className="w-2 h-2 bg-blue-500 rounded-full"></div>HTML5 & CSS3</li>
                  <li className="flex items-center gap-2"><div className="w-2 h-2 bg-blue-500 rounded-full"></div>JavaScript (ES6+)</li>
                </ul>
              </div>

              {/* --- Tarjeta 2: Backend --- */}
              <div className="p-8 bg-gray-50 dark:bg-gray-800 rounded-2xl hover:shadow-xl transition-shadow border border-gray-100 dark:border-gray-700">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center text-purple-600 dark:text-purple-400 mb-6">
                  <Server size={24} />
                </div>
                <h3 className="text-xl font-bold mb-4">Backend</h3>
                {/* EDITAR: Lista de Habilidades Backend aquí abajo */}
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li className="flex items-center gap-2"><div className="w-2 h-2 bg-purple-500 rounded-full"></div>Node.js</li>
                  <li className="flex items-center gap-2"><div className="w-2 h-2 bg-purple-500 rounded-full"></div>Express</li>
                  <li className="flex items-center gap-2"><div className="w-2 h-2 bg-purple-500 rounded-full"></div>SQL / MySQL</li>
                  <li className="flex items-center gap-2"><div className="w-2 h-2 bg-purple-500 rounded-full"></div>API RESTful</li>
                </ul>
              </div>

              {/* --- Tarjeta 3: Mobile & Herramientas --- */}
              <div className="p-8 bg-gray-50 dark:bg-gray-800 rounded-2xl hover:shadow-xl transition-shadow border border-gray-100 dark:border-gray-700">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center text-green-600 dark:text-green-400 mb-6">
                  <Smartphone size={24} />
                </div>
                <h3 className="text-xl font-bold mb-4">Mobile & Otros</h3>
                {/* EDITAR: Lista de Habilidades Mobile aquí abajo */}
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li className="flex items-center gap-2"><div className="w-2 h-2 bg-green-500 rounded-full"></div>React Native</li>
                  <li className="flex items-center gap-2"><div className="w-2 h-2 bg-green-500 rounded-full"></div>Git & Github</li>
                  <li className="flex items-center gap-2"><div className="w-2 h-2 bg-green-500 rounded-full"></div>Figma Básicos</li>
                  <li className="flex items-center gap-2"><div className="w-2 h-2 bg-green-500 rounded-full"></div>VS Code</li>
                </ul>
              </div>

            </div>
          </div>
        </section>

        {/* ==================== SECCIÓN PROYECTOS ==================== */}
        <section id="proyectos" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Proyectos Destacados</h2>
              <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
              <p className="mt-4 text-gray-600 dark:text-gray-300">
                Una colección de mis desarrollos en web, sistemas de gestión y aplicaciones móviles.
              </p>
            </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              {/* --- PROYECTO 1: Hotel Posada (Full Stack / Web) --- */}
              <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700">
                <div className="h-48 overflow-hidden bg-gray-200 group">
                  <img 
                    src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                    alt="Hotel Posada" 
                    className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">Full Stack</span>
                    <span className="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full">Web & Admin</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Hotel Posada & Admin</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                    Solución integral compuesta por un sitio web público para huéspedes y un panel administrativo privado. 
                    Permite gestión de habitaciones, control de reservas y usuarios mediante una API propia documentada en Swagger.
                  </p>
                  {/* Etiquetas de tecnología usadas */}
                  <div className="flex flex-wrap gap-2 mb-4 text-xs text-gray-500 dark:text-gray-400">
                    <span className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">HTML/Bootstrap</span>
                    <span className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">Node.js</span>
                    <span className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">API REST</span>
                  </div>
                  <div className="flex gap-4 border-t border-gray-100 dark:border-gray-700 pt-4">
                    <a href="https://github.com/TerryPotato/adminHotel.git" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                      <Github size={16}/> Código
                    </a>
                    <a href="https://terrypotato.github.io/adminHotel/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-800 transition-colors">
                      <ExternalLink size={16}/> GitHub Pages
                    </a>
                  </div>
                </div>
              </div>

              {/* --- PROYECTO 2: Velora (Frontend / UI Design) --- */}
              <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700">
                <div className="h-48 overflow-hidden bg-gray-200 group">
                  <img 
                    src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                    alt="Velora Furniture" 
                    className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-bold text-purple-600 dark:text-purple-400 uppercase tracking-wider">Frontend</span>
                    <span className="text-xs px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 rounded-full">E-Commerce UI</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Velora - Muebles de Lujo</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                    "Diseños modernos para vidas modernas". Landing page responsiva con catálogo de productos interactivo y estética minimalista. 
                    Enfocada en la experiencia de usuario (UX) visual y adaptabilidad móvil.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4 text-xs text-gray-500 dark:text-gray-400">
                    <span className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">HTML5</span>
                    <span className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">CSS3 / Bootstrap</span>
                    <span className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">Diseño Responsive</span>
                  </div>
                  <div className="flex gap-4 border-t border-gray-100 dark:border-gray-700 pt-4">
                    <a href="https://github.com/TerryPotato/Velora.git" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                      <Github size={16}/> Código
                    </a>
                    <a href="https://terrypotato.github.io/Velora/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-800 transition-colors">
                      <ExternalLink size={16}/> GitHub Pages
                    </a>
                  </div>
                </div>
              </div>

              {/* --- PROYECTO 3: GeoTracker App (Mobile / React Native) --- */}
              <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700">
                <div className="h-48 overflow-hidden bg-gray-200 group">
                  <img 
                    src="https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                    alt="App Mapas" 
                    className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-bold text-green-600 dark:text-green-400 uppercase tracking-wider">Mobile</span>
                    <span className="text-xs px-2 py-1 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 rounded-full">App Nativa</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">GeoLocation Tracker</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                    Aplicación móvil para rastreo de ubicación en tiempo real. Utiliza la API nativa del dispositivo para obtener coordenadas 
                    precisas y renderizarlas en un mapa interactivo con marcadores dinámicos.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4 text-xs text-gray-500 dark:text-gray-400">
                    <span className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">React Native</span>
                    <span className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">Expo</span>
                    <span className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">Google Maps API</span>
                  </div>
                  <div className="flex gap-4 border-t border-gray-100 dark:border-gray-700 pt-4">
                    <a href="https://github.com/tu-usuario/mapas-app" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                      <Github size={16}/> Código
                    </a>
                    {/* video pon el link aquí */}
                    <span className="flex items-center gap-1 text-sm font-medium text-gray-400 cursor-not-allowed">
                      <Smartphone size={16}/> Solo App
                    </span>
                  </div>
                </div>
              </div>

              {/* --- PROYECTO 4: Focus Board API (Backend) --- */}
              <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700">
                <div className="h-48 overflow-hidden bg-gray-200 group relative">
                  {/* Imagen conceptual para Backend */}
                  <img 
                    src="https://images.unsplash.com/photo-1555099962-4199c345e5dd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                    alt="API Code" 
                    className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-500"
                  />
                  <div className="absolute inset-0 bg-blue-900/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Server size={48} className="text-white" />
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">Backend</span>
                    <span className="text-xs px-2 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 rounded-full">REST API</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Focus Board API</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                    Sistema backend robusto para gestión de tareas estilo Kanban. Maneja autenticación segura (JWT), 
                    estados de tareas (Todo, InProgress, Done) y categorización. Arquitectura MVC escalable.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4 text-xs text-gray-500 dark:text-gray-400">
                    <span className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">Node.js / Express</span>
                    <span className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">MongoDB</span>
                    <span className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">JWT Auth</span>
                  </div>
                  <div className="flex gap-4 border-t border-gray-100 dark:border-gray-700 pt-4">
                    <a href="https://github.com/TerryPotato/focus-board-backend.git" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                      <Github size={16}/> Codigo
                    </a>
                    <span className="flex items-center gap-1 text-sm font-medium text-gray-400 cursor-help" title="Sin interfaz gráfica, solo API">
                      <Code size={16}/> Solo Backend
                    </span>
                  </div>
                </div>
              </div>

              {/* --- PROYECTO 5: API Control Mascotas (DevOps) --- */}
              <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700">
                <div className="h-48 overflow-hidden bg-gray-200 group relative">
                  <img 
                    src="https://images.unsplash.com/photo-1607799275518-d58665d099db?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                    alt="DevOps y Servers" 
                    className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-500"
                  />
                  <div className="absolute inset-0 bg-orange-900/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="text-white font-bold text-lg">CI/CD Ready</div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-bold text-orange-600 dark:text-orange-400 uppercase tracking-wider">DevOps</span>
                    <span className="text-xs px-2 py-1 bg-orange-100 dark:bg-orange-900 text-orange-700 dark:text-orange-300 rounded-full">Dockerized</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Pet Control System</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                    API contenerizada para control veterinario. Destaca por su configuración de infraestructura: 
                    incluye Dockerización completa y pipelines de CI/CD con GitHub Workflows para despliegue automatizado.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4 text-xs text-gray-500 dark:text-gray-400">
                    <span className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">Docker</span>
                    <span className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">GitHub Actions</span>
                    <span className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">Express.js</span>
                  </div>
                  <div className="flex gap-4 border-t border-gray-100 dark:border-gray-700 pt-4">
                    <a href="https://github.com/TerryPotato/API_controlMascotas.git" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                      <Github size={16}/> Codigo
                    </a>
                  </div>
                </div>
              </div>

              {/* --- PROYECTO 6: Python Task Service (Backend Python) --- */}
              <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700">
                <div className="h-48 overflow-hidden bg-gray-200 group">
                  <img 
                    src="https://images.unsplash.com/photo-1526379095098-d400fd0bf935?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                    alt="Python Code" 
                    className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-bold text-yellow-600 dark:text-yellow-400 uppercase tracking-wider">Python</span>
                    <span className="text-xs px-2 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-300 rounded-full">Microservicio</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Python Task Service</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                    Implementación alternativa de servicios backend utilizando Python. Estructura modular con rutas dedicadas 
                    para usuarios y tareas, demostrando versatilidad en lenguajes de servidor y manejo de entornos virtuales (Pipenv).
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4 text-xs text-gray-500 dark:text-gray-400">
                    <span className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">Python 3</span>
                    <span className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">Pipenv</span>
                    <span className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">API Development</span>
                  </div>
                  <div className="flex gap-4 border-t border-gray-100 dark:border-gray-700 pt-4">
                    <a href="https://github.com/TerryPotato/Backend_PYTHON.git" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                      <Github size={16}/> Código
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ==================== SECCIÓN SOBRE MÍ ==================== */}
        <section id="sobre-mi" className="py-20 bg-gray-50 dark:bg-gray-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center gap-12">
              
              {/* Imagen Grande */}
              <div className="w-full md:w-1/2">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                    alt="Trabajando en equipo" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                    <p className="text-white italic font-medium">"El código es poesía lógica"</p>
                  </div>
                </div>
              </div>

              {/* Texto Sobre Mí */}
              <div className="w-full md:w-1/2">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Un poco sobre mí</h2>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  Estudiante de Ingeniería en Tecnologías de la Información y Negocios Digitales (8º Semestre) en busca de Prácticas Profesionales. Desarrolladora Web Full Stack con dominio técnico en PHP, MySQL, JavaScript (jQuery) y maquetación con Bootstrap, Tailwind y CSS puro.
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  Me apasiona el desarrollo de software administrativo y escalable. Busco integrarme a un equipo dinámico para aplicar mis habilidades en desarrollo Full Stack, consumo de APIs y creación de interfaces funcionales en proyectos reales.
                </p>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
                    <h4 className="font-bold text-2xl text-blue-600">2+</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Años Aprendiendo</p>
                  </div>
                  <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
                    <h4 className="font-bold text-2xl text-blue-600">10+</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Proyectos Completados</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ==================== SECCIÓN CONTACTO ==================== */}
        <section id="contacto" className="py-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">¿Hablamos?</h2>
              <p className="text-gray-600 dark:text-gray-300">
                Estoy disponible para proyectos freelance o prácticas profesionales. 
                <br/>¡Mándame un mensaje!
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-gray-700">
              <form 
                action="https://formsubmit.co/pamgendrop@gmail.com" 
                method="POST" 
                className="space-y-6"
              >
                <input type="hidden" name="_captcha" value="true" />
                <input type="hidden" name="_next" value="http://localhost:5173/" /> 

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Nombre</label>
                    <input 
                      type="text" 
                      name="name"
                      required
                      placeholder="Tu nombre"
                      className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
                    <input 
                      type="email" 
                      name="email"
                      required
                      placeholder="tucorreo@ejemplo.com"
                      className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Mensaje</label>
                  <textarea 
                    rows="4" 
                    name="message"
                    required
                    placeholder="Cuéntame sobre tu proyecto..."
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
                  ></textarea>
                </div>

                <button type="submit" className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-lg hover:opacity-90 transition-opacity shadow-lg">
                  Enviar Mensaje
                </button>
              </form>

              <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700 text-center">
                <p className="text-gray-500 dark:text-gray-400 mb-2">O envíame un correo directo a:</p>
                <a href="mailto:pamgendrop@gmail.com" className="text-blue-600 dark:text-blue-400 font-medium hover:underline">
                  pamgendrop@gmail.com
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ==================== FOOTER ==================== */}
        <footer className="py-8 bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 text-center">
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            © 2024 [PAMELA GENDROP PRADOS]. Creado con React y Tailwind CSS.
          </p>
        </footer>

      </div>
    </div>
  );
}