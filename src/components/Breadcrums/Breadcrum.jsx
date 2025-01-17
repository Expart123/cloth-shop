// import React from 'react'
// import './Breadcrums.css'
import arrow_icon from '../Assets/breadcrum_arrow.png'

// const Breadcrum = (props) => {
//   const {product} = props;

//     return (
//     <div className='breadcrum'>
// <img src={arrow_icon} alt='' />SHOP <img src={arrow_icon} alt='' />{product?.category} <img src={arrow_icon} alt='' /> {product.name}
//     </div>
//   )
// }

// export default Breadcrum


const Breadcrum = (props) => {
  const { product } = props;

  if (!product) {
    return <div>No product information available</div>;
  }

  return (
    <div className='breadcrum'>
      <img src={arrow_icon} alt='' /> SHOP <img src={arrow_icon} alt='' /> {product?.category} <img src={arrow_icon} alt='' /> {product?.name}
    </div>
  );
};
 export default Breadcrum