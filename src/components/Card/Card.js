import React from 'react';

const Card = (props) => 
{
    const card = props.card;
    const totalPrice = card.reduce((total,prd) =>total +prd.price,0);
    let sheeping =0;
    if(totalPrice>35){
        sheeping =0;
    }
    
   else  if(totalPrice>15){
        sheeping=4.99;
    }
 else  if(totalPrice >0){
       sheeping=  12.99;
   }
   const tax = (totalPrice/10).toFixed(2);
   const gantTotal =(totalPrice +sheeping+Number(tax)).toFixed(2);
    return (
        <div>
                <h1>Order summery</h1>
                <p>item orderd:{card.length}</p>
                <p>product price:{totalPrice}</p>
                <p>sheeping cost:{sheeping}</p>
                <p>tax + VAT :{tax}</p>
                <p>total price:{gantTotal}</p>

        </div>
    );
};

export default Card;