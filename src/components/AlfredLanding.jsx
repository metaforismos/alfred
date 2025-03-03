import { Link } from 'react-router-dom';
import { LightbulbIcon, UsersIcon, CalendarIcon, BadgeDoIcon } from 'lucide-react';

const AlfredLanding = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="bg-white shadow-sm py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-xl font-bold text-blue-600">Alfred</span>
          </div>
          <div className="hidden md:flex space-x-6">
            <a href="#benefits" className="text-gray-600 hover:text-blue-600">Beneficios</a>
            <a href="#how-it-works" className="text-gray-600 hover:text-blue-600">Cómo funciona</a>
            <Link to="/professionals" className="text-gray-600 hover:text-blue-600">Profesionales</Link>
            <a href="#pricing" className="text-gray-600 hover:text-blue-600">Precios</a>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/login" className="text-blue-600 hover:text-blue-800">Iniciar sesión</Link>
            <Link to="/register" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
              Regístrate
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 to-blue-700 py-20 flex-grow">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Aumenta tu cartera de clientes con Alfred
          </h1>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Alfred es el asistente virtual que encuentra y agenda clientes para profesionales 
            como tú, mientras te enfocas en lo que mejor sabes hacer.
          </p>
          <Link 
            to="/register" 
            className="bg-white text-blue-600 px-8 py-3 text-lg font-medium rounded-md hover:bg-blue-50"
          >
            ¡Empieza ahora mismo!
          </Link>
        </div>
      </section>

      {/* Benefits */}
      <section id="benefits" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Beneficios de usar Alfred</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <LightbulbIcon className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Más tiempo libre</h3>
              <p className="text-gray-600">
                Dedícate a lo que mejor sabes hacer, mientras Alfred busca y agenda clientes por ti.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <UsersIcon className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Más clientes</h3>
              <p className="text-gray-600">
                Alfred busca constantemente personas que necesiten servicios como los tuyos.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <CalendarIcon className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Agenda optimizada</h3>
              <p className="text-gray-600">
                Integración con tu calendario para evitar conflictos y maximizar tu disponibilidad.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* How it works */}
      <section id="how-it-works" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Cómo funciona Alfred</h2>
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-col md:flex-row items-center mb-10">
              <div className="bg-blue-100 rounded-full w-10 h-10 flex items-center justify-center font-bold text-blue-600 mr-4">
                1
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2">Regístrate y configura tu perfil</h3>
                <p className="text-gray-600">
                  Crea una cuenta, establece tu especialidad, tarifa y disponibilidad.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center mb-10">
              <div className="bg-blue-100 rounded-full w-10 h-10 flex items-center justify-center font-bold text-blue-600 mr-4">
                2
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2">Alfred busca clientes potenciales</h3>
                <p className="text-gray-600">
                  Nuestro asistente encuentra personas que necesitan tus servicios en tiempo real.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center">
              <div className="bg-blue-100 rounded-full w-10 h-10 flex items-center justify-center font-bold text-blue-600 mr-4">
                3
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2">Recibe citas en tu calendario</h3>
                <p className="text-gray-600">
                  Alfred agenda automáticamente a los clientes en tu calendario según tu disponibilidad.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Pricing */}
      <section id="pricing" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Planes y precios</h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
              <BadgeDoIcon className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-2xl font-bold mb-4">Plan Básico</h3>
              <p className="text-4xl font-bold mb-6">$29<span className="text-lg text-gray-500">/mes</span></p>
              <ul className="mb-8 space-y-3">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Hasta 10 clientes al mes</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Integración con Google Calendar</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Perfil público en directorio</span>
                </li>
              </ul>
              <Link 
                to="/register" 
                className="block w-full text-center bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700"
              >
                Comenzar gratis
              </Link>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md border border-blue-200 relative">
              <span className="absolute top-0 right-0 bg-blue-600 text-white text-xs uppercase font-bold py-1 px-3 rounded-bl-lg rounded-tr-lg">
                Popular
              </span>
              <BadgeDoIcon className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-2xl font-bold mb-4">Plan Pro</h3>
              <p className="text-4xl font-bold mb-6">$79<span className="text-lg text-gray-500">/mes</span></p>
              <ul className="mb-8 space-y-3">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Clientes ilimitados</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Integración con cualquier calendario</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Perfil destacado en directorio</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Estadísticas avanzadas</span>
                </li>
              </ul>
              <Link 
                to="/register" 
                className="block w-full text-center bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700"
              >
                Comenzar gratis
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">Alfred</h3>
              <p className="text-gray-400">
                Tu asistente personal para encontrar y agendar clientes automáticamente.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Empresa</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Sobre nosotros</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Contacto</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Términos</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Privacidad</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Cookies</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Siguenos</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">Twitter</a>
                <a href="#" className="text-gray-400 hover:text-white">LinkedIn</a>
                <a href="#" className="text-gray-400 hover:text-white">Instagram</a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            &copy; {new Date().getFullYear()} Alfred. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AlfredLanding;