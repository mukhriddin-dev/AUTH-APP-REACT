import React, { useState, useEffect } from "react";
import products from "../../API/Apis";

function Home(props) {
  const [data, setData] = useState([]);

  console.log(data);
  useEffect(() => {
    getData();
  }, []);

  console.log(data);

  async function getData() {
    try {
      const respons = products.getRequest();
      console.log(respons);
      respons.then((data) => setData(data.data));
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
          {data.map((item, idx) => {
            return (
              <tr>
                <td>{idx + 1}</td> <td>{item.isName}</td> <td>{item.price}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default Home;
