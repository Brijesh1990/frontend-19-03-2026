import React,{useState, useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'
export default function CartGUIApp() {

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

    // Aos initialzed & used in react components
     useEffect(() => {
     AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  return (
  
<div className="container py-5" data-aos="fade-right">
  <div className="row justify-content-center">
    <div className="col-lg-8 col-md-10">

      {/* Products Card */}
      <div className="card border-0 shadow-lg rounded-4 overflow-hidden mb-4">

        <div className="card-header bg-primary text-white p-4">
          <h2 className="mb-1 fw-bold" data-aos="fade-down">
            🛍️ Our Products
          </h2>
          <p className="mb-0 opacity-75">
            Choose your favorite products
          </p>
        </div>

        <div className="card-body p-4">

          {products.map((product) => {
            return (
              <>
                <div
                  key={product.id}
                  className="d-flex justify-content-between align-items-center
                  border rounded-3 p-3 mb-3 shadow-sm product-item"
                  data-aos="fade-up"
                >
                  <div>
                    <h5 className="mb-1 fw-semibold text-dark">
                      {product.pname}
                    </h5>

                    <h6 className="mb-0 text-success fw-bold">
                      💲 {product.price}
                    </h6>
                  </div>

                  <button
                    onClick={() => addToCart(product)}
                    className="btn btn-primary btn-sm px-3 py-2 rounded-pill shadow-sm"
                  >
                    <i className="bi bi-cart-plus me-1"></i>
                    Add To Cart
                  </button>
                </div>
              </>
            );
          })}

        </div>
      </div>

      {/* Cart Summary */}
      <div
        className="card border-0 shadow-lg rounded-4 overflow-hidden"
        data-aos="zoom-in"
      >
        <div className="card-header bg-dark text-white p-4">
          <h3 className="mb-0 fw-bold">
            🛒 Shopping Cart
          </h3>
        </div>

        <div className="card-body p-4">

          <div className="d-flex justify-content-between align-items-center mb-4">
            <h5 className="mb-0 text-secondary">
              Cart Items
            </h5>

            <span className="badge bg-danger rounded-pill px-3 py-2 fs-6">
              {cart.length}
            </span>
          </div>

          <hr />

          <div className="d-flex justify-content-between align-items-center">
            <h5 className="fw-semibold mb-0">
              Subtotal
            </h5>

            <h3 className="text-success fw-bold mb-0">
              💲 {total}
            </h3>
          </div>

          <p className="text-muted small mt-3 mb-0">
            Thank you for shopping with us!
          </p>

        </div>
      </div>

    </div>
  </div>
</div>

  )
}
