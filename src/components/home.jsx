import React from "react"
import Product from "./Product"
const Home = () => {
const product = [

{name: 'Mike Tyson Display Case',
Image:'https://via.placeholder.com/150',
description:'This is a glove that belongs to Mike Tyson',
price:  500.00,
quantity: 1},

{name: 'Mike Tyson Display Case',
Image:'https://via.placeholder.com/150',
description:'This is a glove that belongs to Mike Tyson',
price: 500.00,
quantity: 1},

{name: 'Mike Tyson Display Case',
Image:'https://via.placeholder.com/150',
description:'This is a glove that belongs to Mike Tyson',
price: 500.00,
quantity: 1},

{name: 'Mike Tyson Display Case',
Image: <img src="../assets/Mike.jpg" alt="" />,
description:'This is a glove that belongs to Mike Tyson',
price:  500.00,
quantity: 1},
]
return(
    <div> <h1>Home Component</h1>
    {product.map((product, index) =>(
    <Product
    key={index}
    name={product.name}
    Image={product.Image}
    description={product.description}
    price={product.price}
    quantity={product.quantity}
    />   
        ))}</div>
    )
}

export default Home