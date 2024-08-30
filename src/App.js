// import './App.css';
// import Cart from './Pages/Cart';
// import LoginSignup from './Pages/LoginSignup';
// import Product from './Pages/Product';
// import Shop from './Pages/Shop';
// import ShopCategory from './Pages/ShopCategory';
// import Footer from './components/Footer/Footer';
// import Navber from './components/Navber/Navber';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import men_banner from "./components/Assets/banner_mens.png"
// import kid_banner from "./components/Assets/banner_kids.png"
// import women_banner from './components/Assets/banner_women.png'
// function App() {
//   return (
//     <div>
//       <BrowserRouter>
     
//       <Navber />

// <Routes>
//   <Route path='/' element={<Shop/>} /> 
//   <Route path='/mens' element={<ShopCategory banner={men_banner} category="mens"/>} /> 
//   <Route path='/womens' element={<ShopCategory banner={women_banner} category="women"/>} /> 
//   <Route path='/kids' element={<ShopCategory banner={kid_banner} category="kid"/>} /> 
// <Route path='product' element={<Product />} />
// <Route path=':productId' element={<Product />}/>
// <Route path='/cart' element={<Cart/>} />
// <Route path='/login' element={<LoginSignup/>} />
// </Routes>
// <Footer /> 
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;


// import './App.css';
// import Cart from './Pages/Cart';
// import LoginSignup from './Pages/LoginSignup';
// import Product from './Pages/Product';
// import Shop from './Pages/Shop'; // Default export
// import ShopCategory from './Pages/ShopCategory'; // Default export
// import Footer from './components/Footer/Footer';
// import Navber from './components/Navber/Navber';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import men_banner from "./components/Assets/banner_mens.png";
// import kid_banner from "./components/Assets/banner_kids.png";
// import women_banner from './components/Assets/banner_women.png';

// function App() {
//   return (
//     <div>
//       <BrowserRouter>
//         <Navber />
//         <Routes>
//           <Route path='/' element={<Shop />} /> 
//           <Route path='/mens' element={<ShopCategory banner={men_banner} category="men" />} /> 
//           <Route path='/womens' element={<ShopCategory banner={women_banner} category="women" />} /> 
//           <Route path='/kids' element={<ShopCategory banner={kid_banner} category="kid" />} /> 
//           <Route path='product' element={<Product />} />
//           <Route path=':productId' element={<Product />} >
//             </Route>
//           <Route path='/cart' element={<Cart />} />
//           <Route path='/login' element={<LoginSignup />} />
//         </Routes>
//         <Footer /> 
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;


import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Product from './Pages/Product';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Footer from './components/Footer/Footer';
import Navber from './components/Navber/Navber';
import men_banner from "./components/Assets/banner_mens.png";
import kid_banner from "./components/Assets/banner_kids.png";
import women_banner from './components/Assets/banner_women.png';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navber />
        <Routes>
          <Route path='/' element={<Shop />} /> 
          <Route path='/mens' element={<ShopCategory banner={men_banner} category="men" />} /> 
          <Route path='/womens' element={<ShopCategory banner={women_banner} category="women" />} /> 
          <Route path='/kids' element={<ShopCategory banner={kid_banner} category="kid" />} /> 
          <Route path='/product/:productId' element={<Product />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<LoginSignup />} />
        </Routes>
        <Footer /> 
      </BrowserRouter>
    </div>
  );
}

export default App;
