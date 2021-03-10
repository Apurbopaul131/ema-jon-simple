import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart, processOrder, removeFromDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../cart/Cart';
import ReviewItmes from '../ReviewItmes/ReviewItmes';
import happyImage from '../../images/giphy.gif';
const Review = () => {
    const [cart, setcart] = useState([]);
    const [placeOrder,setplaceOrder] = useState(false);
    const handlePlaceOrder = ()=> {
        setcart([]);
        setplaceOrder(true);
        processOrder();
    }
    const handleRemove = (productKey) => {
        const newCart = cart.filter(pd => pd.key !== productKey)
        setcart(newCart);
        removeFromDatabaseCart(productKey);
    }
    useEffect(() => {
        const saveCart = getDatabaseCart();
        const productKeys = Object.keys(saveCart);
        const cartProduct = productKeys.map(key => {
            const productObject = fakeData.find(pd => pd.key === key);
            productObject.quantity = saveCart[key];
            return productObject;
        })
        setcart(cartProduct);
        // console.log(cartProduct);


    }, [])
    let thankYou;
    if(placeOrder){
        thankYou = <img src={happyImage}/>
    }

    return (
        <div className="shop-container">

           <div className="product-container">
           {
                cart.map(pd => <ReviewItmes handleRemove={handleRemove} product={pd}></ReviewItmes>)
            }
            {thankYou}
           </div>
           
           <div className="cart-container">
             <Cart cart={cart}>
                 <button onClick={handlePlaceOrder} className="main-button">Place Order</button>
             </Cart>
           </div>
        </div>



    );
};

export default Review;