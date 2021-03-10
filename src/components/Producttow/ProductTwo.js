import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './ProductTow.css';
import { Link } from 'react-router-dom';
const ProductTwo = (props) => {
    

    
    const { img, name, seller, price, stock,key} = props.product;
 
    const value = props.values;
    if(value){
        return (
            <div className="single-product">
                <div className="product-image-part">
                    <img src={img} />
                </div>
                <div className="product-written-part">
                    <h4><Link to={"/Product/"+key}>{name}</Link></h4>
        
                    <p style={{ color: "gray" }}>by: {seller}</p>
                    <h3 style={{ color: "gray" }}>${price}</h3>
                    <p style={{ color: "gray" }}><small>Only {stock} left in stock-order soon</small> </p>
                  <button className="main-button" onClick={() => props.handleProduct(props.product)}><FontAwesomeIcon icon={faShoppingCart} />Add to cart</button>
                          
                 
                </div>
            </div>
           );
    }
    else{
        return (
            <div className="single-product">
                <div className="product-image-part">
                    <img src={img} />
                </div>
                <div className="product-written-part">
                    <h4><Link to={"product/"+key}>{name}</Link></h4>
                    <p>by: {seller}</p>
                    <h3 style={{ color: "gray" }}>${price}</h3>
                    <p style={{ color: "gray" }}><small>Only {stock} left in stock-order soon</small> </p>
                 
                          
                 
                </div>
            </div>
           );
    }
  

    
   
};

export default ProductTwo;