import { useContext, useRef, useState } from 'react';
import React from 'react';
import './Navbar.css';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../context/ShopContext';
import nav_down from '../Assets/nav_down.png'


const Navber = () => {
const [menu, setMenu] = useState('shop');
const {getTotalCartItems}=useContext(ShopContext)
const menuRef = useRef();


const dropdown_toggle = (e)=>{
   menuRef.current.classList.toggle('nav-menu-visible');
   e.target.classList.toggle('open');
}


  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={logo} alt='' />
        <p>SHOPPER</p>
      </div>
      <img className='nav-dropdown' onClick={dropdown_toggle} src={nav_down} alt='' />
      <ul ref={menuRef} className='nav-menu'>
        <li onClick={() => setMenu('shop')}><Link state={{textDecoration:'none'}} to='/' >Shop</Link> {menu === 'shop' ? <h1 /> : <></>}</li>
        <li onClick={() => setMenu('mens')}><Link state={{textDecoration:'none'}} to='/mens'> Men</Link>  {menu === 'mens' ? <h1 /> : <></>}</li>
        <li onClick={() => setMenu('womens')}><Link state={{textDecoration:'none'}} to='/womens'>Women</Link> {menu === 'womens' ? <h1 /> : <></>}</li>
        <li onClick={() => setMenu('kids')}><Link state={{textDecoration:'none'}} to='/Kids'>Kids</Link>  {menu === 'kids' ? <h1 /> : <></>}</li>
      </ul>
      <div className='nav-login-cart'>
        {localStorage.getItem('auth-token')
        ?<button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/')}}>Logout</button>
        :<Link to='/login'> <button>Login</button></Link>}
        <Link to='/cart'><img src={cart_icon} alt='' /></Link>
        <div className='nav-cart-count'>{getTotalCartItems()}</div>
      </div>
    </div>
  );
};

export default Navber;
