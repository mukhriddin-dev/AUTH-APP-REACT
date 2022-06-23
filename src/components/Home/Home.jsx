import React, { useState, useEffect } from "react";
import PRODUCTS from "../../API/Apis";
import axios from "axios";

function Home(props) {
  const [data, setData] = useState([]);

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
         {data.map((item,idx)=>{
            return (
               <tr>
                  <td>{idx+1}</td> <td>{item.isName}</td> <td>{item.price}</td>
               </tr>
            )
         })}
      </tbody>
    </table>
  </>
  
  );
}

export default Home;
