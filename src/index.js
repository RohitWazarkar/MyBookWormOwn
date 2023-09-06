import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Product from "./Product";
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navk from './Navk';
import Ebook from "./Ebook"
import Home from './Home'
import Feedback from './Feedback'
import EbookSearch from "./EbookSearch"
import ErrorPage from './ErrorPage';
import LanguagePage from './LanguagePage';
import EbooksOfMarathi from './EbooksOf/EbooksOfMarathi';
import Library from './Library/Library'
import Videos from './Videos/Videos'; 
import Account from './Library/Account'
import LanguagesForMusic from './Music/LaguagePageForMusic';
import Login from './LoginPage/Login';
import MusicPage from '../src/Music/MusicPage'
import MusicCart from './Cart/Cart';
import Aboutus from './Aboutus'
import Contactus from './Contactus'
import SignUpPage from './LoginPage/SignUpPage';
import {DisplayEbook} from './DisplayEbook';
import SignIn from './New/SignIn';
import Gateway from './Gateway';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode> 
    <BrowserRouter>
      <Routes>
        <Route path="/" element={< App/>} >
          <Route path="Product" element={<Product />} />
          <Route path='Navk' element={<Navk/>}/>
          <Route path='Ebook' element={<Ebook/>}/>
          <Route path='Home' element={<Home/>}/>
          <Route path='Feedback' element={<Feedback/>}/>
          <Route path='EbookSearch' element={<EbookSearch/>}/>
          <Route path='ErrorPage' element={<ErrorPage/>}/>
          <Route path='EbooksOfMarathi' element={<EbooksOfMarathi/>}/>
          <Route path='*' element={<ErrorPage/>}/>
          <Route path='LanguagePage' element={<LanguagePage/>}/>
          <Route path='Library' element={<Library/>}/>
          <Route path='Account' element={<Account/>}/>
          <Route path='Music' element ={<LanguagesForMusic/>}/>
          <Route path='Videos' element ={<Videos/>}/>
          <Route path='Login' element ={<Login/>}/>
          <Route path='SignUpPage' element ={<SignUpPage/>}/>
          <Route path='Gateway' element ={<Gateway/>}/>
          <Route path='MusicPage' element ={<MusicPage/>}/>
          <Route path='AboutUs' element ={<Aboutus/>}/>
          <Route path='ContactUs' element ={<Contactus/>}/>
          <Route path='MusicCart' element ={<MusicCart/>}/>
          <Route path="DisplayEbook/:id" element={<DisplayEbook />} />

          <Route path="SignIn" element={<SignIn/>} />
         


         
         
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();




// // src/index.js
// import React, { useEffect, useState } from 'react';
// import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import store from './Trial/store';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Product from './Trial/Product';
// import Cart from './Trial/Cart';

// const App = () => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     fetch('https://fakestoreapi.com/products') // Replace with your API URL
//       .then(response => response.json())
//       .then(data => setProducts(data))
//       .catch(error => console.error('Error fetching products:', error));
//   }, []);

//   return (
//     <Provider store={store}>
//       <div className="container">
//         <h1>Book Store</h1>
//         <div className="row">
//           <div className="col-md-8">
//             <div className="row">
//               {products.map(product => (
//                 <div className="col-md-4" key={product.id}>
//                   <Product product={product} />
//                 </div>
//               ))}
//             </div>
//           </div>
//           <div className="col-md-4">
//             <Cart />
//           </div>
//         </div>
//       </div>
//     </Provider>
//   );
// };

// ReactDOM.render(<App />, document.getElementById('root'));
