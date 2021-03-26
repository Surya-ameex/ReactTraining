import React from 'react';
import '/var/www/html/React/todo-app/src/Components/ProductCards/ProductCards.css'

const data = [
    { id: 1, name: "OPPO" ,image:'https://images-na.ssl-images-amazon.com/images/I/71KCwNV6MuL._SX679_.jpg',price:'13000'},
    { id: 2, name: "VIVO" ,image:'https://images-na.ssl-images-amazon.com/images/I/71pYXdg9%2BIL._SL1500_.jpg',price:'12000'},
    { id: 3, name: "REALME" ,image:'https://fdn2.gsmarena.com/vv/bigpic/realme-7-5g.jpg',price:'151000' },
    { id: 4, name: "SAMSUNG" ,image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQowe69-jbg4PbJQDe-iyhKU0aJVPY-69azFmH5EVSaWxz8oNkTFE_GuIyVSxRruShPu2Hxdi3K&usqp=CAc',price:'15000'},

  ];
class ProductCards extends React.Component {


render(){
    return(
    <div className='product-wrapper'>

   

        {data.map((item) => {
            return(
        <div key={item.id} className="card">
          <div className='image-wrapper'>
          <img className='image-css' src={item.image} alt={item.name}></img>  
          </div>
          <div className='text-wrapper'>
        <h1>{item.name}</h1>
        <p>Price:{item.price}</p>
        </div>
      </div>
            );
        })}
            </div>
    );



}



}

export default ProductCards;