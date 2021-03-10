import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import fakeData from '../../fakeData';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../cart/Cart';
import ProductTwo from '../Producttow/ProductTwo';
import './Product.css'
const Product = () => {

    const fakeData10 = fakeData.slice(0, 10);
    const [productobject, setproductobject] = useState(fakeData10);
    const [cart, setcart] = useState([]);
     useEffect(()=>{
         const saveCart = getDatabaseCart();
         const productKeys = Object.keys(saveCart);

         const OrderedProduct = productKeys.map(existingKey=>{
             const OrderdedProductMatch = fakeData.find(pd => pd.key === existingKey);
             OrderdedProductMatch.quantity = saveCart[existingKey];
             return OrderdedProductMatch;
             
         })
         setcart(OrderedProduct);
     },[])





    const handleProduct = (product) => {
        const toBeAdded = product.key;
        const sameProduct = cart.find(pd => pd.key === toBeAdded)
        let count = 1;
        let newCart;
        if(sameProduct){
            count =  product.quantity + 1;
            product.quantity = count;
           const others = cart.filter(pd => pd.key !== toBeAdded)
           newCart = [...others,sameProduct]
        }
        else{
            product.quantity = count;
            newCart = [...cart,product]
        }

        
        setcart(newCart);
        
        addToDatabaseCart(product.key,count);
    }

    return (
        <div className="shop-container">
            <div className="product-container">
                <ul>
                    {
                        productobject.map(pd => <ProductTwo values={true} key={pd.key} product={pd} handleProduct={handleProduct}></ProductTwo>)
                    }
                </ul>
            </div>
            <div className="cart-container">
               <Cart cart={cart}>
               <Link to="/review">  <button className="main-button">Review order</button></Link>
               </Cart>
            </div>
        </div>
    );
};

export default Product;