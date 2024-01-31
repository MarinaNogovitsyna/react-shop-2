import React, { useState } from 'react';
import { IProduct } from '../models';

interface ProductProps {
    product: IProduct
}

const Product = ({product}: ProductProps) => {
    const [details, setDetails] = useState(false)

    const buttonBgClassName = details ? 'bg-yellow-400' : 'bg-blue-400';
    const buttonClasses = ['py-2 px-4 border', buttonBgClassName]

    return (
        <div className='border py-2 px-4 rounded flex flex-col items-center mb-2'>
            <img src={product.image} className='w-1/6' alt={product.title}/>
            <p>{product.title}</p>
            <p className='font-bold'>{product.price}</p>
            <button 
                className={buttonClasses.join(' ')}
                onClick={() => setDetails(prev => !prev)}
            >
                { details ? 'Hide Details' : 'Show details'}
            </button>

            {details && <div>
                <p>{product.description}</p>
                <p>Rate: <span style={{fontWeight: 'bold'}}>{product?.rating?.rate}</span></p>
            </div>}
        </div>
    );
};

export default Product;