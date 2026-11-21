import React,{useState} from 'react'
export default function CartApp() {
    const[cart,setCart]=useState([]);
    const products=[
        {id:1,pname:"samsung galaxy",price:45000},
        {id:2,pname:"Oppo A5",price:75000},
        {id:3,pname:"Vivo",price:65000},
        {id:4,pname:"Motorola",price:55000}
    ]

    // add to cart function
    const addToCart=(product)=>{
        setCart([...cart, product]);
    }

    // total 
    const total=cart.reduce(
        (sum,product) =>sum + product.price, 0
    );

  return (
    <div className='w-50 mx-auto mt-5 p-3'>

    <h2>Products</h2>

    <hr />

    {products.map((product)=>{

      return(
      <>   
      <div key={product.id}> 
      <table>
      <tr>
      <td>
      {product.pname} - 💲 {product.price} 

       <button  onClick={()=>addToCart(product)} className='btn btn-sm p-1 m-2 ms-5  btn-primary text-white '>AddToCart</button>
      </td>
      </tr>
      </table>
      </div>
      </>
      )
      
    })}

    <h2>Cart Items : <span className='badge badge-sm  bg-danger text-white rounded-circle'> {cart.length} </span></h2>
    <h3>Subtotal of Products Price : 💲 {total}</h3>
      
    </div>
  )
}
