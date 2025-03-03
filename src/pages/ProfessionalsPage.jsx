import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { StarIcon, ArrowDownIcon, ArrowUpIcon, SearchIcon, UserIcon } from 'lucide-react';

// Function to generate mock data if needed
const generateMockProfessionals = () => {
  const professions = [
    'Psicólogo', 'Nutricionista', 'Fisioterapeuta', 
    'Entrenador personal', 'Coach', 'Terapeuta', 'Abogado', 'Contador'
  ];
  
  const specialties = {
    'Psicólogo': ['Terapia Cognitivo-Conductual', 'Psicoanálisis', 'Terapia Familiar', 'Psicología Infantil'],
    'Nutricionista': ['Nutrición Deportiva', 'Pérdida de Peso', 'Nutrición Clínica', 'Dietas Especiales'],
    'Fisioterapeuta': ['Rehabilitación Física', 'Terapia Manual', 'Fisioterapia Deportiva', 'Neurorrehabilitación'],
    'Entrenador personal': ['Fitness', 'Pérdida de Peso', 'Entrenamiento de Fuerza', 'Entrenamiento Funcional'],
    'Coach': ['Coaching de Vida', 'Coaching Ejecutivo', 'Coaching de Carrera', 'Desarrollo Personal'],
    'Terapeuta': ['Terapia de Pareja', 'Terapia Ocupacional', 'Terapia del Habla', 'Arte Terapia'],
    'Abogado': ['Derecho Familiar', 'Derecho Laboral', 'Derecho Civil', 'Derecho Penal'],
    'Contador': ['Impuestos Personales', 'Contabilidad Empresarial', 'Asesoría Fiscal', 'Auditoría']
  };
  
  const education = [
    'Universidad de Chile', 'Pontificia Universidad Católica', 
    'Universidad de Santiago', 'Universidad de Los Andes',
    'Universidad Diego Portales', 'Universidad Andrés Bello',
    'Universidad de Concepción', 'Universidad Adolfo Ibáñez'
  ];
  
  const professionals = [];
  
  for (let i = 1; i <= 50; i++) {
    const profession = professions[Math.floor(Math.random() * professions.length)];
    const specialty = specialties[profession][Math.floor(Math.random() * specialties[profession].length)];
    
    professionals.push({
      id: `mock-${i}`,
      name: `Profesional ${i}`,
      profession,
      specialty,
      education: education[Math.floor(Math.random() * education.length)],
      hasPostgraduate: Math.random() > 0.5,
      price: Math.floor(Math.random() * 50) * 1000 + 30000,
      bio: `Profesional con experiencia en ${specialty}. Atención personalizada y resultados garantizados.`,
      rating: (Math.random() * 2 + 3).toFixed(1), // Random rating between 3.0 and 5.0
      reviews: Math.floor(Math.random() * 50) + 1, // Random number of reviews
      email: `profesional${i}@example.com`,
      createdAt: new Date(Date.now() - Math.random() * 10000000000).toISOString() // Random date in the past
    });
  }
  
  return professionals;
};

const ProfessionalsPage = () => {
  const [professionals, setProfessionals] = useState([]);
  const [filteredProfessionals, setFilteredProfessionals] = useState([]);
  const [filter, setFilter] = useState({
    profession: '',
    sortBy: 'rating',
    sortDirection: 'desc',
    search: ''
  });
  
  useEffect(() => {
    // Get professionals from localStorage or generate mock data
    const storedProfessionals = JSON.parse(localStorage.getItem('professionals') || '[]');
    
    if (storedProfessionals.length === 0) {
      // Generate and store mock data if none exists
      const mockProfessionals = generateMockProfessionals();
      localStorage.setItem('professionals', JSON.stringify(mockProfessionals));
      setProfessionals(mockProfessionals);
    } else {
      setProfessionals(storedProfessionals);
    }
  }, []);
  
  useEffect(() => {
    // Apply filters and sorting
    let result = [...professionals];
    
    // Filter by profession
    if (filter.profession) {
      result = result.filter(p => p.profession === filter.profession);
    }
    
    // Filter by search term
    if (filter.search) {
      const searchLower = filter.search.toLowerCase();
      result = result.filter(p => 
        p.name.toLowerCase().includes(searchLower) || 
        p.specialty.toLowerCase().includes(searchLower) ||
        p.bio.toLowerCase().includes(searchLower)
      );
    }
    
    // Sort results
    result.sort((a, b) => {
      if (filter.sortBy === 'rating') {
        return filter.sortDirection === 'desc' 
          ? parseFloat(b.rating) - parseFloat(a.rating)
          : parseFloat(a.rating) - parseFloat(b.rating);
      } else if (filter.sortBy === 'price') {
        return filter.sortDirection === 'desc' 
          ? parseFloat(b.price) - parseFloat(a.price)
          : parseFloat(a.price) - parseFloat(b.price);
      } else if (filter.sortBy === 'reviews') {
        return filter.sortDirection === 'desc' 
          ? b.reviews - a.reviews
          : a.reviews - b.reviews;
      }
      return 0;
    });
    
    setFilteredProfessionals(result);
  }, [professionals, filter]);
  
  const handleProfessionFilter = (e) => {
    setFilter({
      ...filter,
      profession: e.target.value
    });
  };
  
  const handleSort = (sortBy) => {
    setFilter({
      ...filter,
      sortBy,
      sortDirection: 
        filter.sortBy === sortBy && filter.sortDirection === 'desc' 
          ? 'asc' 
          : 'desc'
    });
  };
  
  const handleSearchChange = (e) => {
    setFilter({
      ...filter,
      search: e.target.value
    });
  };
  
  // Get unique professions for the filter dropdown
  const uniqueProfessions = [...new Set(professionals.map(p => p.profession))];
  
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
                          
                          <div className="flex items-center">
                            <span className="font-bold text-xl mr-3">${professional.price}</span>
                            <Link
                              to={`/professionals/${professional.id}`}
                              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                            >
                              Ver perfil
                            </Link>
                          </div>
                          
        </div>
      </nav>
      
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">Encuentra un profesional</h1>
        
        {/* Filters */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex flex-col md:flex-row md:items-end space-y-4 md:space-y-0 md:space-x-4">
            <div className="flex-1">
              <label className="block text-gray-700 text-sm font-medium mb-2">
                Buscar por nombre o especialidad
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={filter.search}
                  onChange={handleSearchChange}
                  className="w-full px-3 py-2 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Ej: Terapia, Nutrición..."
                />
                <SearchIcon className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
              </div>
            </div>
            
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-2">
                Filtrar por profesión
              </label>
              <select
                value={filter.profession}
                onChange={handleProfessionFilter}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Todas las profesiones</option>
                {uniqueProfessions.sort().map((profession) => (
                  <option key={profession} value={profession}>
                    {profession}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        
        {/* Results */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="flex justify-between items-center p-4 border-b">
            <p className="font-medium">
              {filteredProfessionals.length} profesionales encontrados
            </p>
            <div className="flex space-x-4 text-sm">
              <button 
                onClick={() => handleSort('rating')}
                className={`flex items-center ${filter.sortBy === 'rating' ? 'text-blue-600 font-semibold' : 'text-gray-600'}`}
              >
                Calificación
                {filter.sortBy === 'rating' && (
                  filter.sortDirection === 'desc' 
                    ? <ArrowDownIcon className="w-4 h-4 ml-1" /> 
                    : <ArrowUpIcon className="w-4 h-4 ml-1" />
                )}
              </button>
              
              <button 
                onClick={() => handleSort('price')}
                className={`flex items-center ${filter.sortBy === 'price' ? 'text-blue-600 font-semibold' : 'text-gray-600'}`}
              >
                Precio
                {filter.sortBy === 'price' && (
                  filter.sortDirection === 'desc' 
                    ? <ArrowDownIcon className="w-4 h-4 ml-1" /> 
                    : <ArrowUpIcon className="w-4 h-4 ml-1" />
                )}
              </button>
              
              <button 
                onClick={() => handleSort('reviews')}
                className={`flex items-center ${filter.sortBy === 'reviews' ? 'text-blue-600 font-semibold' : 'text-gray-600'}`}
              >
                Reseñas
                {filter.sortBy === 'reviews' && (
                  filter.sortDirection === 'desc' 
                    ? <ArrowDownIcon className="w-4 h-4 ml-1" /> 
                    : <ArrowUpIcon className="w-4 h-4 ml-1" />
                )}
              </button>
            </div>
          </div>
          
          {/* Professional List */}
          <div className="divide-y">
            {filteredProfessionals.length > 0 ? (
              filteredProfessionals.map(professional => (
                <div key={professional.id} className="p-6 hover:bg-gray-50">
                  <div className="flex flex-col md:flex-row">
                    <div className="flex-shrink-0 mr-6 mb-4 md:mb-0">
                      <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center">
                        <UserIcon className="w-10 h-10 text-blue-600" />
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                        <Link 
                          to={`/professionals/${professional.id}`}
                          className="text-xl font-bold text-blue-600 hover:underline mb-1 md:mb-0"
                        >
                          {professional.name}
                        </Link>
                        
                        <div className="flex items-center">
                          <StarIcon className="w-5 h-5 text-yellow-400 mr-1" />
                          <span className="font-medium">{professional.rating}</span>
                          <span className="text-gray-500 ml-1">({professional.reviews} reseñas)</span>
                        </div>
                      </div>
                      
                      <div className="mb-2">
                        <span className="font-medium">{professional.profession}</span>
                        <span className="mx-2 text-gray-300">|</span>
                        <span>{professional.specialty}</span>
                      </div>
                      
                      <p className="text-gray-600 mb-4 line-clamp-2">{professional.bio}</p>
                      
                      <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                        <div className="flex flex-wrap gap-2 mb-3 md:mb-0">
                          <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full">
                            {professional.education}
                          </span>
                          {professional.hasPostgraduate && (
                            <span className="px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full">
                              Con postgrado
                            </span>
                          )}