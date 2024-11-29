import React, { useState } from 'react'

interface Product {
    _id: string,
    title: string,
    image: string,
    price: number,
    bids: number,
    minBid: number,
    maxBid: number,
}

function Product({ _id, title, price, bids, minBid, maxBid} : Product) {

    const [amount,setAmount] = useState(0)

    const placeBid = async () => {

    }

    const handleAmount = () => {
    }

  return (
    <div className='product-container'>
        <h2>{title}</h2>
        <img src="img" alt={`${title} image`} />
        <div className='bids-container'>
            <p>Price (US$) {price}</p>
            <p>bids {bids}</p>
            <p>Max {maxBid}</p>
            <p>Min {minBid}</p>
        </div>

        <div className='new-bid'>
            <input type="text" name="amount" id="bid-amount" onChange={handleAmount}/>
            <button onClick={placeBid}>Bid</button>
        </div>
    </div>
  )
}

export default Product