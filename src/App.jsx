import { Routes, Route } from 'react-router-dom';
import AlfredLanding from './components/AlfredLanding';
import ProfessionalsPage from './pages/ProfessionalsPage';
import ProfessionalDetail from './pages/ProfessionalDetail';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import RegisterPage from './pages/RegisterPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<AlfredLanding />} />
        <Route path="/professionals" element={<ProfessionalsPage />} />
        <Route path="/professionals/:id" element={<ProfessionalDetail />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </div>
  );
}

export default App;