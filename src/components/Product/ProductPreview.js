import React from 'react';
import { Link } from 'react-router-dom';
import './Product.css';

const ProductPreview = ({ product }) => {

    return (
        <Link to={`/products/${product.category}/${product.id}`} >
            <article className='preview-container'>
                <div className='preview-top'>
                    <img className='preview-img' src={require(`../../images/products/${product.title}.png`)} alt='product' />
                </div>
                <div className='preview-bot'>
                    <div style={{ fontWeight: 'bold', textAlign: 'center' }}>{product.title}</div>
                    <div className='divider'></div>
                    <div>{product.price.length ? `₪${product.price}` : 'בקרוב..'}</div>
                    <button className='btn'>לפרטים נוספים</button>
                </div>
            </article>
        </Link>
    );
}

export default ProductPreview;
