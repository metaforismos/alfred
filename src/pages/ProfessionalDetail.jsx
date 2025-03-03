import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { StarIcon, UserIcon, MapPinIcon, CalendarIcon, ClockIcon, CertificateIcon, ArrowLeftIcon } from 'lucide-react';

const ProfessionalDetail = () => {
  const { id } = useParams();
  const [professional, setProfessional] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Get professionals from localStorage
    const professionals = JSON.parse(localStorage.getItem('professionals') || '[]');
    
    // Find the professional by ID
    const foundProfessional = professionals.find(p => p.id === id);
    
    if (foundProfessional) {
      setProfessional(foundProfessional);
    }
    
    setLoading(false);
  }, [id]);
  
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Cargando...</p>
      </div>
    );
  }
  
  if (!professional) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-sm p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Profesional no encontrado</h2>
            <p className="text-gray-600 mb-6">
              Lo sentimos, el profesional que buscas no existe o ha sido eliminado.
            </p>
            <Link 
              to="/professionals" 
              className="inline-flex items-center text-blue-600 hover:underline"
            >
              <ArrowLeftIcon className="w-4 h-4 mr-2" />
              Volver a la lista de profesionales
            </Link>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-gray-50 pb-12">
      {/* Navigation */}
      <nav className="bg-white shadow-sm py-4 mb-8">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link to="/" className="text-xl font-bold text-blue-600">Alfred</Link>
          <div className="flex items-center space-x-4">
            <Link to="/login" className="text-blue-600 hover:text-blue-800">Iniciar sesión</Link>
            <Link to="/register" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
              Regístrate
            </Link>
          </div>
        </div>
      </nav>
      
      <div className="container mx-auto px-4">
        {/* Back link */}
        <Link 
          to="/professionals" 
          className="inline-flex items-center text-blue-600 hover:underline mb-6"
        >
          <ArrowLeftIcon className="w-4 h-4 mr-2" />
          Volver a la lista de profesionales
        </Link>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Column: Professional Info */}
          <div className="md:col-span-2">
            <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
              <div className="flex flex-col md:flex-row">
                <div className="flex-shrink-0 mr-6 mb-4 md:mb-0">
                  <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center">
                    <UserIcon className="w-12 h-12 text-blue-600" />
                  </div>
                </div>
                
                <div className="flex-1">
                  <h1 className="text-2xl font-bold mb-2">{professional.name}</h1>
                  
                  <div className="mb-2">
                    <span className="font-medium">{professional.profession}</span>
                    <span className="mx-2 text-gray-300">|</span>
                    <span>{professional.specialty}</span>
                  </div>
                  
                  <div className="flex items-center mb-4">
                    <StarIcon className="w-5 h-5 text-yellow-400 mr-1" />
                    <span className="font-medium">{professional.rating}</span>
                    <span className="text-gray-500 ml-1">
                      ({professional.reviews} reseñas)
                    </span>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full">
                      {professional.education}
                    </span>
                    {professional.hasPostgraduate && (
                      <span className="px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full">
                        Con postgrado
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
            
            {/* About */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
              <h2 className="text-xl font-bold mb-4">Acerca de</h2>
              <p className="text-gray-700">
                {professional.bio}
              </p>
            </div>
            
            {/* Education & Experience */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
              <h2 className="text-xl font-bold mb-4">Educación y experiencia</h2>
              
              <div className="mb-4">
                <h3 className="font-semibold text-lg mb-2">Educación</h3>
                <div className="flex items-start">
                  <CertificateIcon className="w-5 h-5 text-blue-600 mt-1 mr-3" />
                  <div>
                    <p className="font-medium">{professional.education}</p>
                    <p className="text-gray-600">{professional.profession}</p>
                  </div>
                </div>
                
                {professional.hasPostgraduate && (
                  <div className="flex items-start mt-4">
                    <CertificateIcon className="w-5 h-5 text-blue-600 mt-1 mr-3" />
                    <div>
                      <p className="font-medium">Postgrado en {professional.specialty}</p>
                      <p className="text-gray-600">{professional.education}</p>
                    </div>
                  </div>
                )}
              </div>
              
              <div>
                <h3 className="font-semibold text-lg mb-2">Experiencia</h3>
                <div className="flex items-start">
                  <ClockIcon className="w-5 h-5 text-blue-600 mt-1 mr-3" />
                  <div>
                    <p className="font-medium">+5 años de experiencia en {professional.specialty}</p>
                    <p className="text-gray-600">Atención personalizada y resultados garantizados</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Location */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-bold mb-4">Ubicación</h2>
              
              <div className="flex items-start">
                <MapPinIcon className="w-5 h-5 text-blue-600 mt-1 mr-3" />
                <div>
                  <p className="font-medium">Consulta online y presencial</p>
                  <p className="text-gray-600">Santiago, Chile (y remotamente para todo el país)</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column: Booking & Price */}
          <div>
            <div className="bg-white rounded-lg shadow-sm p-6 mb-8 sticky top-4">
              <h2 className="text-xl font-bold mb-4">Agenda una cita</h2>
              
              <div className="bg-gray-50 p-4 rounded-md mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-600">Precio por sesión</span>
                  <span className="font-bold text-2xl">${professional.price}</span>
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <ClockIcon className="w-4 h-4 mr-1" />
                  <span>60 minutos</span>
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="font-semibold mb-3">Próximas disponibilidades</h3>
                <div className="grid grid-cols-2 gap-2 mb-4">
                  <button className="py-2 px-3 border border-gray-300 rounded-md hover:bg-gray-50 flex flex-col items-center">
                    <span className="text-sm font-medium">Hoy</span>
                    <span className="text-xs text-gray-500">15:00</span>
                  </button>
                  <button className="py-2 px-3 border border-gray-300 rounded-md hover:bg-gray-50 flex flex-col items-center">
                    <span className="text-sm font-medium">Mañana</span>
                    <span className="text-xs text-gray-500">10:00</span>
                  </button>
                  <button className="py-2 px-3 border border-gray-300 rounded-md hover:bg-gray-50 flex flex-col items-center">
                    <span className="text-sm font-medium">Miércoles</span>
                    <span className="text-xs text-gray-500">14:30</span>
                  </button>
                  <button className="py-2 px-3 border border-gray-300 rounded-md hover:bg-gray-50 flex flex-col items-center">
                    <span className="text-sm font-medium">Jueves</span>
                    <span className="text-xs text-gray-500">16:15</span>
                  </button>
                </div>
                
                <button className="flex items-center justify-center text-blue-600 hover:underline w-full">
                  <CalendarIcon className="w-4 h-4 mr-1" />
                  <span>Ver más horarios</span>
                </button>
              </div>
              
              <button className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 mb-4">
                Agendar ahora
              </button>
              
              <button className="w-full text-blue-600 border border-blue-600 py-3 rounded-md hover:bg-blue-50">
                Contactar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalDetail;