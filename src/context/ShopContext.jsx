import React, { createContext, useState, useEffect } from 'react';
export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < 300+1; index++) {
    cart[index] = 0;
  }
  return cart;
}


const ShopContextProvider = (props) => {
  const [all_product, setAll_Product] = useState([]);
  const [cartItems, setCartItems] = useState(getDefaultCart());

useEffect(()=>{
   fetch('http://localhost:5000/allproducts')
   .then((response)=>response.json())
   .then((data)=>setAll_Product(data))

   if(localStorage.getItem('auth-token'))
   {
    fetch("http://localhost:5000/getcart",{
    method:"POST",
    headers:{
   Accept:'application/form-data',
   'auth-token':`${localStorage.getItem('auth-token')}`,
   'Content-Type':'application/json',
 },
 body:"",
   })
   .then((response)=>response.json())
   .then((data)=>setCartItems(data));}

  },[])




  if (all_product.length === 0) {
    return <div>Loading...</div>; // Add a loading state if necessary
  }

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    if(localStorage.getItem('auth-token')){
      fetch("http://localhost:5000/addtocart",{
      method:"POST",
      headers:{
        Accept:'application/form-data',
        'auth-token':`${localStorage.getItem('auth-token')}`,
        'Content-Type':'application/json',
      },
      body: JSON.stringify({"itemId": itemId}),
    })
    .then((response) => {
      if (!response.ok) {
         throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((data) => console.log("Server Response:", data))
    .catch((error) => console.error('Fetch error:', error));
  
    }    
    }

  const removeFromCart = (itemId) => {
  setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId]-1}));
  if(localStorage.getItem('auth-token')){
    fetch("http://localhost:5000/removefromcart",{
    method:"POST",
    headers:{
   Accept:'application/form-data',
   'auth-token': `${localStorage.getItem('auth-token')}`,
   'Content-Type': 'application/json',
 },
 body:JSON.stringify({"itemId":itemId}),
   })
   .then((response)=>response.json())
   .then((data)=>console.log(data));
  }
  }

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = all_product.find((product) => product.id === Number(item));
        if (itemInfo) {
          totalAmount += itemInfo.new_price * cartItems[item];
        } else {
          console.error(`Product with ID ${item} not found in all_product array.`);
        }
      }
    }
    return totalAmount;
  }
  
  const getTotalCartItems = () => {
    let totalItem = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalItem += cartItems[item];
      }
    }
    return totalItem;
  }

  const contextValue = { 
    getTotalCartItems, 
    getTotalCartAmount, 
    all_product, 
    cartItems, 
    addToCart, 
    removeFromCart 
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
