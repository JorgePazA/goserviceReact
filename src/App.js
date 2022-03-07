import './App.css';
import Metricas from './components/Metricas/Metricas'
import { Route, Routes } from 'react-router-dom';
import GogersContent from './components/GogersContent/GogersContent';
import UsersContent from './components/UsersContent/UsersContent';

function App() {
  return (
    <div className='my-app'>
      <div className='content'>
        <Routes>
          <Route path="/" element={<Metricas />} />
          <Route path="/gogers" element={<GogersContent />} />
          <Route path="/users" element={<UsersContent />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
