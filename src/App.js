import './App.css';
import SideBar from './components/SideBar/SideBar';
import MainContent from './components/MainContent/MainContent';
import Gogers from './components/Gogers/TopGogers';
import {Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className='my-app'>
      <div className='content'>
        <Routes>
          <Route path="/" element={<SideBar/>}/>
          <Route path="/MainContent" element={<MainContent />} />
          <Route path="/gogers" element ={<Gogers />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
