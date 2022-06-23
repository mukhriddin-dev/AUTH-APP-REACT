import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import PRODUCTS from "../../API/Apis";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Pricing = () => {
  const [data, setData] = useState([]);
// const loc=useLocation();
// console.log(loc);
  useEffect(() => {
    getData();
  }, []);

  console.log(data);

  async function getData() {
    try {
      const respons = await axios.get(PRODUCTS);
      setData(respons.data);
    } catch (e) {
      console.log(e.error);
    }
  }

  const deleteData=(id)=>{
    axios.delete(`${PRODUCTS}${id}`,{})
    toast.success("O'chirildi")
    window.location.reload();

  }

  return (
    <>
      <table className="table-bordered table table-striped table-hover w-50 mt-5 mx-auto">
        <thead>
          <tr>
            <th>No</th>

            <th>Name</th>

            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, idx) => {
            return (
              <tr>
                <td>{idx + 1}</td> <td>{item.isName}</td> <td>{item.price}</td>{" "}
                <td className="d-flex justify-content-center">
                  <button className="btn btn-primary">edit</button>
                  <button className="btn mx-3 btn-danger" onClick={()=>deleteData(item.id)}>x</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

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

export default Pricing;
