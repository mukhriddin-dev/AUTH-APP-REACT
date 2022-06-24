import React, { useState, useEffect, useCallback } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import products from "../../API/Apis";
import Pagination from "../Pagination/Pagination";

const Pricing = () => {
  const [data, setData] = useState([]);

  // pagination

  const [currentPage, setCurrentPage] = useState(1);
  const [prevPage] = useState(10);
  const [loading, setLoading] = useState(false);

  // paginate index

  const indexOfLastPost = currentPage * prevPage;
  const indexOfFirstPost = indexOfLastPost - prevPage;
  const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);

  // const loc=useLocation();
  // console.log(loc);
  useEffect(() => {
    setLoading(true);
    getData();
    setLoading(false);
  }, []);

  console.log(data);

  async function getData() {
    try {
      const respons = products.getRequest();
      respons.then((item) => setData(item.data));
    } catch (e) {
      console.log(e.error);
    }
  }

  const deleteData = useCallback((id) => {
    products.deleteRequest(id);
    toast.success("O'chirildi");
    window.location.reload();
  }, []);

  if (loading) {
    return <h1 className="text-center mt-5">LOADING . . . </h1>;
  }

  const paginate = (num) => setCurrentPage(num);

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
          {currentPosts.map((item, idx) => {
            return (
              <tr>
                <td>{idx + 1}</td> <td>{item.title}</td> <td>{item.price}</td>{" "}
                <td className="d-flex justify-content-center">
                  <button className="btn btn-primary">edit</button>
                  <button
                    className="btn mx-3 btn-danger"
                    onClick={(e) => {
                      e.preventDefault();
                      return deleteData(item.id);
                    }}
                  >
                    x
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <Pagination
        paginate={paginate}
        prevPost={prevPage}
        totalPost={data.length}
      />

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
