import './App.css';
import Navbar from './components/Navbar/Navbar.js';
import BodyLeft from './components/BodyLeft/BodyLeft';
import BodyRight from './components/BodyRight/BodyRight';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <div className='all'>
      <Navbar/>
      <div className='bodypart'>
        <div className='bodycontent'>
          <BodyLeft/>
          <BodyRight/>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
