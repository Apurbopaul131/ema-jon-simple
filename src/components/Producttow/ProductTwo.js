import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './ProductTow.css';
const ProductTwo = (props) => {
    
  const {img,name,seller,price,stock} = props.product;
    return (
        <div className="single-product">
            <div className="product-image-part">
                 <img src={img}/>
            </div>
            <div className="product-written-part">
                <h4>{name}</h4>
                
                <p style={{color:"gray"}}>by: {seller}</p>
                <h3 style={{color:"gray"}}>${price}</h3>
                <p style={{color:"gray"}}><small>Only {stock} left in stock-order soon</small> </p>
                <button className="main-button" onClick={()=>props.handleProduct(props.product)}><FontAwesomeIcon icon={faShoppingCart} />Add to cart</button>
            </div>
        </div>
    );
};

export default ProductTwo;