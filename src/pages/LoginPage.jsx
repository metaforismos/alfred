import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });
  
  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Initialize with default if no saved credentials
    const defaultCredentials = { 
      email: 'profesional', 
      password: '12345', 
      id: 'default' 
    };
    
    // Get stored credentials
    const storedCredentials = JSON.parse(localStorage.getItem('credentials')) || defaultCredentials;
    
    // Check credentials
    if (
      credentials.email === storedCredentials.email && 
      credentials.password === storedCredentials.password
    ) {
      // Save logged in user
      localStorage.setItem('currentUser', storedCredentials.id);
      
      // Redirect to dashboard
      navigate('/dashboard');
    } else {
      alert('Credenciales incorrectas. Intenta nuevamente.');
    }
  };
  
  // Check if user is already logged in
  useEffect(() => {
    const currentUser = localStorage.getItem('currentUser');
    if (currentUser) {
      navigate('/dashboard');
    }
  }, [navigate]);
  
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-md overflow-hidden">
        <div className="py-4 px-6 bg-blue-600">
          <h2 className="text-xl font-bold text-white text-center">Iniciar sesión</h2>
        </div>
        
        <form onSubmit={handleSubmit} className="py-6 px-6">
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Correo electrónico
            </label>
            <input
              type="text"
              name="email"
              value={credentials.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">
              Contraseña
            </label>
            <input
              type="password"
              name="password"
              value={credentials.password}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          
          <div className="mb-6 text-sm text-gray-600">
            <p>
              Para la demo, puedes usar las credenciales por defecto:
            </p>
            <ul className="mt-1 list-disc list-inside">
              <li>Email: profesional</li>
              <li>Contraseña: 12345</li>
            </ul>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-between">
            <button
              type="submit"
              className="w-full md:w-auto bg-blue-600 text-white font-bold py-2 px-6 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2 md:mb-0"
            >
              Iniciar sesión
            </button>
            <div className="text-sm text-gray-600">
              ¿No tienes una cuenta? <Link to="/register" className="text-blue-600 hover:underline">Regístrate</Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;