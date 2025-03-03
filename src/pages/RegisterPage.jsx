import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const RegisterPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    profession: '',
    specialty: '',
    education: '',
    hasPostgraduate: false,
    price: 50,
    bio: '',
  });
  
  const handleChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setFormData({
      ...formData,
      [e.target.name]: value
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Generate a unique ID for the professional
    const id = Date.now().toString();
    
    // Get existing professionals or initialize empty array
    const existingProfessionals = JSON.parse(localStorage.getItem('professionals') || '[]');
    
    // Add new professional
    const newProfessional = {
      id,
      ...formData,
      rating: (Math.random() * 2 + 3).toFixed(1), // Random rating between 3.0 and 5.0
      reviews: Math.floor(Math.random() * 50) + 1, // Random number of reviews
      createdAt: new Date().toISOString(),
    };
    
    // Save updated list to localStorage
    localStorage.setItem(
      'professionals', 
      JSON.stringify([...existingProfessionals, newProfessional])
    );
    
    // Save credentials for login
    localStorage.setItem('credentials', JSON.stringify({
      email: formData.email,
      password: formData.password,
      id
    }));
    
    // Redirect to login page
    alert('¡Registro exitoso! Ahora puedes iniciar sesión.');
    navigate('/login');
  };
  
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden">
          <div className="py-4 px-6 bg-blue-600">
            <h2 className="text-xl font-bold text-white text-center">Regístrate en Alfred</h2>
          </div>
          
          <form onSubmit={handleSubmit} className="py-4 px-6">
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">Nombre completo</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">Correo electrónico</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">Contraseña</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">Profesión</label>
              <select
                name="profession"
                value={formData.profession}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="">Selecciona una profesión</option>
                <option value="Psicólogo">Psicólogo</option>
                <option value="Nutricionista">Nutricionista</option>
                <option value="Fisioterapeuta">Fisioterapeuta</option>
                <option value="Entrenador personal">Entrenador personal</option>
                <option value="Coach">Coach</option>
                <option value="Terapeuta">Terapeuta</option>
                <option value="Abogado">Abogado</option>
                <option value="Contador">Contador</option>
              </select>
            </div>
            
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">Especialidad</label>
              <input
                type="text"
                name="specialty"
                value={formData.specialty}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">Educación</label>
              <input
                type="text"
                name="education"
                value={formData.education}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            
            <div className="mb-4">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="hasPostgraduate"
                  checked={formData.hasPostgraduate}
                  onChange={handleChange}
                  className="mr-2"
                />
                <span className="text-gray-700">Tengo postgrado</span>
              </label>
            </div>
            
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">
                Precio por sesión ($)
              </label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                min="1"
                required
              />
            </div>
            
            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-2">Biografía</label>
              <textarea
                name="bio"
                value={formData.bio}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="4"
                required
              ></textarea>
            </div>
            
            <div className="flex flex-col md:flex-row items-center justify-between mb-4">
              <button
                type="submit"
                className="w-full md:w-auto bg-blue-600 text-white font-bold py-2 px-6 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2 md:mb-0"
              >
                Registrarse
              </button>
              <div className="text-sm text-gray-600">
                ¿Ya tienes una cuenta? <Link to="/login" className="text-blue-600 hover:underline">Inicia sesión</Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;