import React, { useState } from 'react';
import fakeData from '../../fakeData';
import Cart from '../cart/Cart';
import ProductTwo from '../Producttow/ProductTwo';
import './Product.css'
const Product = () => {

    const fakeData10 = fakeData.slice(0, 10);
    const [productobject, setproductobject] = useState(fakeData10);
    const [cart, setcart] = useState([]);
    const handleProduct = (product) => {

        const newCart = [...cart, product];
        setcart(newCart);
    }

    return (
        <div className="shop-container">
            <div className="product-container">
                <ul>
                    {
                        productobject.map(pd => <ProductTwo product={pd} handleProduct={handleProduct}></ProductTwo>)
                    }
                </ul>
            </div>
            <div className="cart-container">
               <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Product;