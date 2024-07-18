import React from "react";

const Product = ({name, image, description, price, quantity }) =>{
return(
 <div>
<h2>{name}</h2>
<img src={image} alt={name}/>
<p>{description}</p>
<p>price: R{price}</p>
<p>quantity: {quantity}</p>
 </div>  
);
};
export default Product;