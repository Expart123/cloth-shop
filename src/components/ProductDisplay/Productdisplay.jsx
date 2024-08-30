

import React, { useContext } from 'react'
import './Productdisplay.css'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from "../Assets/star_dull_icon.png"
import { ShopContext } from '../../context/ShopContext'

const Productdisplay = (props) => {
  const { product } = props;
const {addToCart} = useContext(ShopContext)
  // Add default values to avoid undefined errors
  const productImage = product?.image || 'path/to/default_image.png';
  const productName = product?.name || 'Unknown Product';
  const productOldPrice = product?.old_price || '0.00';
  const productNewPrice = product?.new_price || '0.00';

  return (
    <div className='productdisplay'>
      <div className='productdisplay-left'>
        <div className="productdisplay-img-list">
          <img src={productImage} alt="" />
          <img src={productImage} alt="" />
          <img src={productImage} alt="" />
          <img src={productImage} alt="" />
        </div>
        <div className='productdisplay-img'>
          <img className='productdisplay-main-img' src={productImage} alt='' />
        </div>
      </div>
      <div className='productdisplay-right'>
        <h1>{productName}</h1>
        <div className='productdisplay-right-star'>
          <img src={star_icon} alt='' />
          <img src={star_icon} alt='' />
          <img src={star_icon} alt='' />
          <img src={star_icon} alt='' />
          <img src={star_dull_icon} alt='' />
          <p>(122)</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className='productdisplay-right-price-old'>${productOldPrice}</div>
          <div className="productdisplay-right-price-new">${productNewPrice}</div>
        </div>
        <div className='productdisplay-right-description'>
          A light color and orange color shirt for kids looklike,
          and gray color shirt for medium generation, anrout neckline 
          and short sleeves, worn as an undershirt of outed garment.
        </div>
        <div className='productdisplay-right-size'>
          <h1>Select Size</h1>
          <div className='productdisplay-right-sizes'>
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>
        <button onClick={()=>{addToCart(product.id)}} >ADD TO CART</button>
        <p className='productdisplay-right-category'><span>Category :</span>Women , T-Shirt, Crop Top</p>
        <p className='productdisplay-right-category'><span>Tags :</span>Modern, Latest</p>
      </div>
    </div>
  )
}

export default Productdisplay;
