// import './App.css';
import {Outlet} from 'react-router-dom'
import Navbar from './Navk';
import Footer from './Footer';




function App() {
  return (
    <div className="App">
      
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  );
}

export default App;