// import './App.css';
import {Outlet} from 'react-router-dom'
import Navbar from './Navk';
import Footer from './Footer';
import NormalNavbar from './NormalNavbar';

function App() {
 return(
  <div className='App'>
<Navbar/>
  <Outlet/>
  <Footer/>
  </div>
 )
  
}

export default App;