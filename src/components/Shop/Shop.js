import React, { useState } from 'react';
import fakeData from '../../fakeData';
import './Shop.css';
import Product from '../Product/Product';
import Card from '../Card/Card';

const Shop = () => {
    const firstTen = fakeData.slice(0, 10);
    const [products, setProduct] = useState(firstTen);
    const [card, setCard]=useState([]);
    

const handleAddProduct =(product) =>{
    console.log(product);
    const newCard = [...card , product];
    setCard(newCard);
}

    return (
        <div className="shop-container">
            <div className="product-container">

                {
                  products.map(pd => <Product handleAddProduct={handleAddProduct} product={pd}></Product>)
                }

            </div>

            <div className="card-container">
             <Card card={card}></Card>
            </div>

        </div>
    );
};

export default Shop;