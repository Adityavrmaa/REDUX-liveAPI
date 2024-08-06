import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { add } from "../store/cardSlice";

const Products = () => {
  const [state, setstate] = useState([]);

  const dispatch = useDispatch();

  const fetchProduct = async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    setstate(data);
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  const handleAdd =(product)=>{
    dispatch(add(product))
  }

  return (
    <>
      <div className="producds">
        <div className="row row-cols-1 row-cols-md-4 g-5  ">
          {state.map((e) => (
            <div className="col text-center  shadow" key={e.id}>
              <div className="card " key={e.id}>
                <div className="text-center">
                  <img src={e.image} style={{ width: "10rem" }} alt="fgfg" />
                </div>
                <div className="card-body">
                  <h5 className="card-title">{e.title}</h5>
                  <p className="card-text">{e.price}</p>
                  <button
                    className="btn btn-info"
                    onClick={() =>handleAdd(e)}
                  >
                    add to card
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;
