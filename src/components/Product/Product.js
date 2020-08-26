import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';

const product = (props) => {
   const {img,name,price,seller,stock} =props.product;
  
    return (
       <div className="product">
            <div>
            
            <img src={img} alt=""/>
            </div>
            <div >
               <h4 className="product-name"> {name}</h4> <br/>
               <p>{price}</p>
               <p>{seller}</p>
               <p> Avilable product:  {stock}</p>
               <button  onClick={() =>props.handleAddProduct(props.product)} className="add-button"> <FontAwesomeIcon icon={ faShoppingCart}/> add a shop</button>
            </div>
       </div>
    );
};

export default product;