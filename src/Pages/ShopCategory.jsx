
////////////////////////////////////////////////////

import React, { useContext } from 'react';
import './CSS/ShopCategory.css';
import { ShopContext } from '../context/ShopContext';
import dropdown_icon from '../components/Assets/dropdown_icon.png';
import Item from '../components/items/item';


const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);
  
  return (
    <div className='shop-category'>
      <img className='shopcategory-banner' src={props?.banner} alt="" />
      <div className='shopcategory-indexSort'>
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="shopcategory-sort">
          Sort by <img src={dropdown_icon} alt=''/>
        </div>
      </div>
      <div className='shopcategory-products'>
        {all_product.map((item, i) => {
          if (props.category===item?.category) {
            return <Item key={i} id={item?.id} name={item?.name} image={item?.image} new_price={item?.new_price} old_price={item?.old_price} />;
          } else {
            return null;
          }
        })}
      </div>
      <div className='shopcategory-loadmore'>
    Explore More
      </div>
    </div>
  );
};

export default ShopCategory;



// import React, { useContext } from 'react';
// import './CSS/ShopCategory.css';
// import { ShopContext } from '../context/ShopContext';
// import dropdown_icon from '../components/Assets/dropdown_icon.png';
// import Item from '../components/items/item';

// const ShopCategory = (props) => {
//   const { all_product } = useContext(ShopContext);

//   // Handle cases where all_product might not be available yet
//   if (!all_product || all_product.length === 0) {
//     return <div>Loading products...</div>;
//   }

//   // Filter products based on category
//   const filteredProducts = all_product.filter(item => item.category === props.category);

//   return (
//     <div className='shop-category'>
//       {/* Ensure the banner exists before trying to use it */}
//       {props.banner && <img className='shopcategory-banner' src={props.banner} alt="" />}
      
//       <div className='shopcategory-indexSort'>
//         <p>
//           <span>Showing 1-12</span> out of {filteredProducts.length} products
//         </p>
//         <div className="shopcategory-sort">
//           Sort by <img src={dropdown_icon} alt=''/>
//         </div>
//       </div>

//       <div className='shopcategory-products'>
//         {filteredProducts.length > 0 ? (
//           filteredProducts.slice(0, 12).map((item, i) => (
//             <Item 
//               key={i} 
//               id={item.id} 
//               name={item.name} 
//               image={item.image} 
//               new_price={item.new_price} 
//               old_price={item.old_price} 
//             />
//           ))
//         ) : (
//           <p>No products found in this category.</p>
//         )}
//       </div>

//       {filteredProducts.length > 12 && (
//         <div className='shopcategory-loadmore'>
//           Explore More
//         </div>
//       )}
//     </div>
//   );
// };

// export default ShopCategory;
