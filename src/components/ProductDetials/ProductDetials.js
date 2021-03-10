import React from 'react';
import { useParams } from 'react-router';
import fakeData from '../../fakeData';
import ProductTwo from '../Producttow/ProductTwo';



const ProductDetials = () => {
    const {productKey}= useParams();
  
    const product = fakeData.find(pd => pd.key === productKey)
   
    return (
        <div>
            <ProductTwo values={false} product ={product}></ProductTwo>
        </div>
    );
};

export default ProductDetials;