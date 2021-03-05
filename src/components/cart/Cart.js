import React from 'react';
import Product from '../Shop/Product';

const Cart = (props) => {
    const cart = props.cart;
    let total= 0;
    for(let i=0;i<cart.length;i++)
    {
       let product = cart[i];
        total = total + product.price; 
    }
    let shipping = 0;
    if(total > 35)
    {
        shipping = 0;
    }
    else if(total > 15){
        shipping = 4.99;
    }
    else if(total > 0)
    {
        shipping = 12.99;
    }
    const tax = total * 0.1;
    const handleDecimal = (num)=>{
      const decimal =  num.toFixed(2);
      return Number(decimal);
    }
    const grandtotal = shipping + total + tax;
    return (
        <div>
            <h4>Item Ordered: {cart.length}</h4>
            <p>Product price: <small>{handleDecimal(total)}</small></p>
            <p>VAT: <small>{handleDecimal(tax)}</small></p>
            <p> Shipping cost: <small>{shipping}</small></p>
            <p>Total:<b>${handleDecimal(grandtotal)}</b></p>
           
        </div>
    );
};

export default Cart;