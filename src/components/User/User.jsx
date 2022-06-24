import React, { useState, useEffect, useRef } from "react";
import products from "../../API/Apis";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const User = () => {
  const [isName, setIsName] = useState("");
  const [price, setPrice] = useState("");

  const nextEnter = useRef();

  const send = {
    id: new Date().getTime(),
    isName,
    price,
  };

  const check = {
    first: isName.trim().length === 0,
    second: price.trim().length === 0,
  };

  const senData = () => {
    if (check.first || check.second) {
      toast.error("Maydonlarni to'ldiring");
    } else {
      products.postReuest(send)
      setIsName("");
      setPrice("");
      toast.success("Muoffaqiyatli qo'shilid ");
    }
  };

  return (
    <>
      <div className=" card w-75 mx-auto my-5">
        <input
          type="text"
          className="form-control mt-4 p-3 w-75 mx-auto"
          placeholder="Enter product name"
          value={isName}
          onChange={(e) => setIsName(e.target.value)}
          onKeyPress={() => {
            if (!check.first) {
              nextEnter.current.focus();
            }
          }}
        />


        <input
          ref={nextEnter}
          type="text"
          className="form-control m-2 p-3 w-75 mx-auto"
          placeholder="Enter product price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <button
          className="btn btn-primary p-3 mx-auto d-block mb-3"
          onClick={() => senData()}
        >
          ADD PRODUCT
        </button>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};

export default User;
<h1> Users </h1>;
