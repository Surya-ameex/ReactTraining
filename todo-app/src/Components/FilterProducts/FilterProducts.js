import React from 'react';

const data = [
    { id: 1, name: "OPPO" ,image:'https://images-na.ssl-images-amazon.com/images/I/71KCwNV6MuL._SX679_.jpg',price:'13000',category:'mobile'},
    { id: 2, name: "VIVO" ,image:'https://images-na.ssl-images-amazon.com/images/I/71pYXdg9%2BIL._SL1500_.jpg',price:'12000',category:'watch'},
    { id: 3, name: "REALME" ,image:'https://fdn2.gsmarena.com/vv/bigpic/realme-7-5g.jpg',price:'151000',category:'mobile' },
    { id: 4, name: "SAMSUNG" ,image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQowe69-jbg4PbJQDe-iyhKU0aJVPY-69azFmH5EVSaWxz8oNkTFE_GuIyVSxRruShPu2Hxdi3K&usqp=CAc',price:'15000',category:'television'},
    { id: 5, name: "OPPO" ,image:'https://images-na.ssl-images-amazon.com/images/I/71pYXdg9%2BIL._SL1500_.jpg',price:'12000',category:'watch'},

  ];

class FilterProducts extends React.Component {
    constructor(props) {
        super(props);
          this.state = { items: [], filterBrand: '',filterCategory:'' ,minprice:'10000',maxprice:'200000' };
      }
render(){
    
const uniqueNames = Array.from(new Set(data));

const unique_category= [...new Set(data.map(item => item.category))];
const unique_brand= [...new Set(data.map(item => item.name))];
  return(
    <div >
   

   <div className='filer-wrapper'>
   <label>Product Category</label>
   <select id="category"  value={this.state.filterCategory}  onChange={this.handleFilterCategory}>
     <option value="">All</option>
   {unique_category.map((option) => {
           
            return ( <option key={option} value={option}>{option}</option> )
          })}
     </select>  
     <label>Brand</label>
   <select id="brand"  value={this.state.filterBrand}  onChange={this.handleFilterBrand}>
   <option value="">All</option>
   {unique_brand.map((option) => {
            return ( <option key={option} value={option}>{option}</option> )
          })}
     </select>  

     <input 
        			onChange={this.onRangeMinInputChange} 
        			type="range" 
        			value={this.state.minprice} 
        			min="8000" max="12000" 
        			step="2" 
        		/>   
       <h3>Min price Range:{this.state.minprice}</h3>       
       <input 
        			onChange={this.onRangeMaxInputChange} 
        			type="range" 
        			value={this.state.maxprice} 
        			min="12000" max="200000" 
        			step="2" 
        		/>   
       <h3>Maxprice Range:{this.state.maxprice}</h3>        
   </div>

   

{uniqueNames.map((item) => {
    if(item.category.includes(this.state.filterCategory) && item.name.includes(this.state.filterBrand) && (item.price>this.state.minprice && item.price<this.state.maxprice) ){
    return(
      <div key={item.id} className="card">
        <div className='image-wrapper'>
        <img className='image-css' src={item.image} alt={item.name}></img>  
        </div>
        <div className='text-wrapper'>
              <h1>{item.name}</h1>
              <p>Price:{item.price}</p>
              <p>category : {item.category}</p>
              </div>
          </div>
          );
    }
    else{
        return(
     null
        );}
})}
    </div>



  );
}
onRangeMinInputChange = (e) => {
    this.setState(state => ({
        minprice: e.target.value,
    }));
}
onRangeMaxInputChange = (e) => {
    this.setState(state => ({
        maxprice: e.target.value,
    }));
}
handleFilterCategory = (e) => {
    this.setState(state => ({
        filterCategory: e.target.value,
    }));

  }
  handleFilterBrand = (e) => {
    this.setState(state => ({
        filterBrand: e.target.value,
    }));

  }
}
export default FilterProducts;