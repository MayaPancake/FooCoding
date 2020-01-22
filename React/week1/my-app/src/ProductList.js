import React, { useState } from 'react';
import ShoeDetails from './ShoeDetails'


const ProductLists = () => {
  const [product, setProduct] = useState([
    {
      image: 'https://c.static-nike.com/a/images/f_auto/q_auto/t_PDP_864_v1/a91af7f3-bff5-4063-b802-50da7f52eeb8/air-max-90-shoe-Dgc4gT.jpg',
      name: 'Nike Air Max 90',
      category: 'Womens Shoes',
      price: '1 499 kr',
      id: '001'
    },
    {
      image: 'https://c.static-nike.com/a/images/f_auto/q_auto/t_PDP_864_v1/c2f706f9-75ba-4bea-95c6-f54d6e42da42/air-max-90-ltr-older-shoe-Ssr3GF.jpg',
      name: 'Nike Air Max 90 LTR',
      category: 'Olders Kids Shoe',
      price: '1 199 kr',
      id: '002'
    },
    {
      image: 'https://c.static-nike.com/a/images/f_auto/q_auto/t_PDP_864_v1/90e1ac6d-106e-49e0-8166-211b71dc306b/air-max-90-and-shoe-x0T79v.jpg',
      name: 'Nike Air Max 90',
      category: 'Baby and Toddler Shoe',
      price: '679 kr',
      id: '003'
    },
    {
      image: 'https://c.static-nike.com/a/images/f_auto/q_auto/t_PDP_864_v1/321aa3cb-1ec1-4044-9ad4-1abaa9023bff/react-element-55-shoe-x935p4.jpg',
      name: 'Nike React Element 55',
      category: 'Mens Shoe',
      price: '1 399 kr',
      id: '004'
    }
  ]);
  return (
    <div className="shoeDetails">
      {product.map(product => (
        <ShoeDetails name={product.name} price={product.price} image={product.image} category={product.category} key={product.id} />
    ))}
    </div>
  );
}

export default ProductLists;