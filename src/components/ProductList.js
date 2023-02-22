import React from 'react'
import Products from './Products'
import '../ProductList.css'
const ProductList = () => {

    const productsData = [
        {
          id: 1,
          name: 'Product 1',
          price: 10.99,
          description: 'This is the description for Product 1.',
        },
        {
          id: 2,
          name: 'Product 2',
          price: 19.99,
          description: 'This is the description for Product 2.',
        },
        {
          id: 3,
          name: 'Product 3',
          price: 5.99,
          description: 'This is the description for Product 3.',
        },
        {
            id: 4,
            name: 'Product 4',
            price: 5.99,
            description: 'This is the description for Product 3.',
          },
          {
            id: 5,
            name: 'Product 5',
            price: 5.99,
            description: 'This is the description for Product 3.',
          }
      ];
   

  return (
    <>
    {/* <ul className="product-list">
      {productsData.map((i) => (
        <li key={i.id} className="product-item">
          <Products data={i} />
        </li>
      ))}
    </ul> */}

    <div className="product-grid">
      {productsData.map((i) => (
        <div className="product" key={i.id}>
        <Products data={i} />
        </div>
      ))}
    </div>
    </>
    
  )
}

export default ProductList


  