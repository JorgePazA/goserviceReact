import './App.css';
import TopTotales from './components/TopTotales/TopTotales'; 
import LastProduct from './components/LastProduct/LastProduct';
import LastUser from './components/LastUser.js/LastUser';
import Categorias from './components/Categorias/Categorias';
import TopGogers from './components/Gogers/TopGogers'

function App() {
  return (
    <div>
      <TopTotales />

      <LastProduct />

      <LastUser />

      <Categorias />

      <TopGogers />
    </div>
  );
}

export default App;
