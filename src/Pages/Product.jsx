// import React, { useContext } from 'react'
// import { useParams } from 'react-router-dom'
// import Breadcrum from '../components/Breadcrums/Breadcrum';
// import { ShopContext } from '../context/ShopContext';
// import Productdisplay from '../components/ProductDisplay/Productdisplay';
// import DescriptionBox from '../components/DescriptionBox/DescriptionBox';
// import RelatedProducts from '../components/RelatedProducts/RelatedProducts';

// const Product = () => {
//   const {all_product}= useContext(ShopContext)
// const {productId} = useParams();
// const product = all_product.find((e)=> e.id === Number(productId));



//   return (
//     <div>
// <Breadcrum product={product}/>
// <Productdisplay product={product}/>
// <DescriptionBox />
// <RelatedProducts />
//     </div>
//   )
// }

// export default Product


// Product.jsx
import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import Breadcrum from '../components/Breadcrums/Breadcrum';
import { ShopContext } from '../context/ShopContext';
import Productdisplay from '../components/ProductDisplay/Productdisplay';
import DescriptionBox from '../components/DescriptionBox/DescriptionBox';
import RelatedProducts from '../components/RelatedProducts/RelatedProducts';

const Product = () => {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_product.find((e) => e.id === Number(productId));

  return (
    <div>
      <Breadcrum product={product} />
      <Productdisplay product={product} />
      <DescriptionBox />
      <RelatedProducts />
    </div>
  );
};

export default Product;
