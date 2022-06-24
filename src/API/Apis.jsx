import axios from "axios";

const products = {
  getProductList: () => {
    axios.get("http://localhost:5000/product/", {
      headers: {
        "Content-Type": "application/json",
      },
    });
  },

  getRequest: async () => {
    return await axios.get("http://localhost:5000/product/");
  },

  postReuest: (params) => {
    return axios.post("http://localhost:5000/product/", params);
  },

  deleteRequest: (id) => {
    return axios.delete(`http://localhost:5000/product/${id}`, {});
  },

  posts: () => {
    return axios.get("https://jsonplaceholder.typicode.com/posts");
  },
};

export default products;
