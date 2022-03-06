import './App.css';
import Metricas from './components/Metricas/Metricas'
import { Route, Routes } from 'react-router-dom';
import GogersContent from './components/GogersContent/GogersContent';

function App() {
  return (
    <div className='my-app'>
      <div className='content'>
        <Routes>
          <Route path="/" element={<Metricas />} />
          <Route path="/gogers" element={<GogersContent />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
