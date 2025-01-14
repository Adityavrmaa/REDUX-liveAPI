import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../store/cardSlice";

const Cart = () => {
  const products = useSelector((state) => state.card.cart);
  console.log(products,"products cart")
  const dispatch = useDispatch()

  const handleRemove = (data)=>{
      dispatch(remove(data))

  }

  return (
    <>
      <section className="h-100">
        <div className="container h-100 py-5">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-10">
              <div className="d-flex justify-content-between align-items-center mb-4">
                <h3 className="fw-normal mb-0 text-black">Shopping Cart</h3>
                <div>
                  <p className="mb-0">
                    <span className="text-muted">Sort by:</span>{" "}
                    <a href="#!" className="text-body">
                      price <i className="fas fa-angle-down mt-1"></i>
                    </a>
                  </p>
                </div>
              </div>

        {
          products.map((e)=>(
            <div className="card border-0 rounded-3 mb-4" key={e.id} >
            <div className="card-body ">
              <div className="row d-flex justify-content-between align-items-center">
                <div className="col-md-2 col-lg-2 col-xl-2">
                  <img
                    src={e.image}
                    className="img-fluid rounded-3"
                    alt="Cotton T-shirt"
                  />
                </div>
                <div className="col-md-3 col-lg-3 col-xl-3">
                  <p className="lead fw-normal mb-2">{e.title}</p>
                </div>

                <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                  <h5 className="mb-0">{e.price}</h5>
                </div>
                <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                   <button className="btn btn-danger" onClick={()=>handleRemove(e.id)} >remove</button>
                </div>
              </div>
            </div>
          </div>
          ))
        }
    
    
              
                
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
