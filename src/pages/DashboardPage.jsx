import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { UserIcon, BellIcon, CalendarIcon, SettingsIcon, LogOutIcon, UsersIcon, TrendingUpIcon, EyeIcon } from 'lucide-react';

const DashboardPage = () => {
  const navigate = useNavigate();
  const [professional, setProfessional] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [editData, setEditData] = useState({});
  
  useEffect(() => {
    // Check if user is logged in
    const currentUserId = localStorage.getItem('currentUser');
    if (!currentUserId) {
      navigate('/login');
      return;
    }
    
    // Get professionals from localStorage
    const professionals = JSON.parse(localStorage.getItem('professionals') || '[]');
    
    // Find the current professional
    const currentProfessional = professionals.find(p => p.id === currentUserId) || {
      id: 'default',
      name: 'Usuario Demo',
      profession: 'Psicólogo',
      specialty: 'Terapia Cognitivo-Conductual',
      education: 'Universidad de Chile',
      hasPostgraduate: true,
      price: 50,
      bio: 'Este es un usuario de demostración para Alfred.',
      rating: '4.5',
      reviews: 12,
      email: 'profesional',
    };
    
    setProfessional(currentProfessional);
    setEditData(currentProfessional);
  }, [navigate]);
  
  const handleEditChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setEditData({
      ...editData,
      [e.target.name]: value
    });
  };
  
  const handleSaveProfile = () => {
    // Get all professionals
    const professionals = JSON.parse(localStorage.getItem('professionals') || '[]');
    
    // Find and update current professional
    const updatedProfessionals = professionals.map(p => 
      p.id === professional.id ? { ...p, ...editData } : p
    );
    
    // Save back to localStorage
    localStorage.setItem('professionals', JSON.stringify(updatedProfessionals));
    
    // Update state
    setProfessional(editData);
    setEditMode(false);
    
    alert('Perfil actualizado correctamente');
  };
  
  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    navigate('/login');
  };
  
  if (!professional) {
    return <div className="min-h-screen flex items-center justify-center">Cargando...</div>;
  }
  
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navigation */}
      <nav className="bg-white shadow-sm py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold text-blue-600">Alfred</Link>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <BellIcon className="w-6 h-6 text-gray-600" />
              <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
            </div>
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                <UserIcon className="w-4 h-4 text-blue-600" />
              </div>
              <span className="ml-2 text-gray-700">{professional.name}</span>
            </div>
          </div>
        </div>
      </nav>
      
      {/* Dashboard Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="md:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-4">
              <div className="flex flex-col items-center mb-6">
                <div className="w-24 h-24 rounded-full bg-blue-100 flex items-center justify-center mb-3">
                  <UserIcon className="w-12 h-12 text-blue-600" />
                </div>
                <h3 className="font-bold text-lg">{professional.name}</h3>
                <p className="text-gray-600">{professional.profession}</p>
              </div>
              
              <ul className="space-y-2">
                <li>
                  <button className="w-full flex items-center py-2 px-3 bg-blue-50 text-blue-700 rounded-md">
                    <TrendingUpIcon className="w-5 h-5 mr-3" />
                    <span>Dashboard</span>
                  </button>
                </li>
                <li>
                  <button className="w-full flex items-center py-2 px-3 text-gray-700 hover:bg-gray-50 rounded-md">
                    <CalendarIcon className="w-5 h-5 mr-3" />
                    <span>Agenda</span>
                  </button>
                </li>
                <li>
                  <button className="w-full flex items-center py-2 px-3 text-gray-700 hover:bg-gray-50 rounded-md">
                    <UsersIcon className="w-5 h-5 mr-3" />
                    <span>Clientes</span>
                  </button>
                </li>
                <li>
                  <button className="w-full flex items-center py-2 px-3 text-gray-700 hover:bg-gray-50 rounded-md">
                    <SettingsIcon className="w-5 h-5 mr-3" />
                    <span>Configuración</span>
                  </button>
                </li>
                <li>
                  <button 
                    onClick={handleLogout} 
                    className="w-full flex items-center py-2 px-3 text-red-600 hover:bg-red-50 rounded-md"
                  >
                    <LogOutIcon className="w-5 h-5 mr-3" />
                    <span>Cerrar sesión</span>
                  </button>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Main Content */}
          <div className="md:col-span-3">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-white rounded-lg shadow-sm p-4">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-gray-500 font-medium">Oportunidades</h4>
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <TrendingUpIcon className="w-5 h-5 text-blue-600" />
                  </div>
                </div>
                <p className="text-2xl font-bold">24</p>
                <p className="text-sm text-green-500">+8% vs semana anterior</p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-4">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-gray-500 font-medium">Visitas al perfil</h4>
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <EyeIcon className="w-5 h-5 text-blue-600" />
                  </div>
                </div>
                <p className="text-2xl font-bold">156</p>
                <p className="text-sm text-green-500">+12% vs semana anterior</p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-4">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-gray-500 font-medium">Agendamientos</h4>
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <CalendarIcon className="w-5 h-5 text-blue-600" />
                  </div>
                </div>
                <p className="text-2xl font-bold">8</p>
                <p className="text-sm text-green-500">+3% vs semana anterior</p>
              </div>
            </div>
            
            {/* Profile Section */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-bold">Tu perfil profesional</h3>
                {!editMode ? (
                  <button 
                    onClick={() => setEditMode(true)} 
                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                  >
                    Editar perfil
                  </button>
                ) : (
                  <div className="flex space-x-2">
                    <button 
                      onClick={() => setEditMode(false)} 
                      className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400"
                    >
                      Cancelar
                    </button>
                    <button 
                      onClick={handleSaveProfile} 
                      className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                    >
                      Guardar
                    </button>
                  </div>
                )}
              </div>
              
              {!editMode ? (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-gray-500 text-sm">Nombre</p>
                      <p className="font-medium">{professional.name}</p>
                    </div>
                    <div>
                      <p className="text-gray-500 text-sm">Email</p>
                      <p className="font-medium">{professional.email}</p>
                    </div>
                    <div>
                      <p className="text-gray-500 text-sm">Profesión</p>
                      <p className="font-medium">{professional.profession}</p>
                    </div>
                    <div>
                      <p className="text-gray-500 text-sm">Especialidad</p>
                      <p className="font-medium">{professional.specialty}</p>
                    </div>
                    <div>
                      <p className="text-gray-500 text-sm">Educación</p>
                      <p className="font-medium">{professional.education}</p>
                    </div>
                    <div>
                      <p className="text-gray-500 text-sm">Precio por sesión</p>
                      <p className="font-medium">${professional.price}</p>
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-gray-500 text-sm">Biografía</p>
                    <p className="font-medium">{professional.bio}</p>
                  </div>
                  
                  <div>
                    <p className="text-gray-500 text-sm">Postgrado</p>
                    <p className="font-medium">{professional.hasPostgraduate ? 'Sí' : 'No'}</p>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-500 text-sm mb-1">Nombre</label>
                      <input
                        type="text"
                        name="name"
                        value={editData.name}
                        onChange={handleEditChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-gray-500 text-sm mb-1">Especialidad</label>
                      <input
                        type="text"
                        name="specialty"
                        value={editData.specialty}
                        onChange={handleEditChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-gray-500 text-sm mb-1">Educación</label>
                      <input
                        type="text"
                        name="education"
                        value={editData.education}
                        onChange={handleEditChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-gray-500 text-sm mb-1">Precio por sesión</label>
                      <input
                        type="number"
                        name="price"
                        value={editData.price}
                        onChange={handleEditChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-gray-500 text-sm mb-1">Biografía</label>
                    <textarea
                      name="bio"
                      value={editData.bio}
                      onChange={handleEditChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      rows="4"
                    ></textarea>
                  </div>
                  
                  <div>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        name="hasPostgraduate"
                        checked={editData.hasPostgraduate}
                        onChange={handleEditChange}
                        className="mr-2"
                      />
                      <span className="text-gray-700">Tengo postgrado</span>
                    </label>
                  </div>
                </div>
              )}
            </div>
            
            {/* Recent Activity */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-bold mb-4">Actividad reciente</h3>
              <div className="space-y-4">
                <div className="border-l-2 border-blue-500 pl-4">
                  <p className="text-sm text-gray-500">Hoy, 10:45 AM</p>
                  <p className="font-medium">Un cliente visitó tu perfil</p>
                </div>
                <div className="border-l-2 border-green-500 pl-4">
                  <p className="text-sm text-gray-500">Ayer, 15:30 PM</p>
                  <p className="font-medium">Nueva cita agendada para el Jueves</p>
                </div>
                <div className="border-l-2 border-yellow-500 pl-4">
                  <p className="text-sm text-gray-500">Marzo 02, 09:15 AM</p>
                  <p className="font-medium">Recordatorio: Cita con Juan Pérez a las 14:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;