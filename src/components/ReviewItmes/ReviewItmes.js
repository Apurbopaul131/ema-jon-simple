import React from 'react';
import './ReviewItmes.css';

const ReviewItmes = (props) => {
    const {name,img,quantity,category,key,price} = props.product;
    return (
        <div className="main-div">
            <div className="image-part">
                <img src={img} />
            </div>
            <div className="written-part">
                <h4>{name}</h4>
                <p>Price: {price}</p>
                <p>quantity:{quantity}</p>
                <p>Category:{category}</p>
                <button onClick={()=>props.handleRemove(key)} className="main-button">Remove</button>
            </div>
        </div>
    );
};

export default ReviewItmes;