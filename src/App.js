import './App.css';
import SideBar from './components/SideBar/SideBar';
import MainContent from './components/MainContent/MainContent';

function App() {
  return (
    <div className='my-app'>
      {/* <h1 className='api-title'>GoService Api</h1> */}
      <div className='content'>
      <SideBar />
      <MainContent />
      </div>
    </div>
  );
}

export default App;
