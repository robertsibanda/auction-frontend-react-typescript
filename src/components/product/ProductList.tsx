import React, { useState } from 'react'
import Product from './Product'


function ProductList() {

    const [products, setProducts] = useState([])
  return (
    <div className='product-list-container'>
        {products.map((product,index)=>(
            <Product 
                key={index}
                _id={product['_id']} 
                title={product['title']} 
                image={product['image']} 
                price={product['price']} 
                bids={product['bids']} 
                minBid={product['minBid']} 
                maxBid={product['maxBid']} />
        ))}
    </div>
  )
}

export default ProductList