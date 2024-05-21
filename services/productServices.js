import axios from "axios";

const getListProduct = async (pageNo, pageSize, sortBy, sortDir) => {
  try {
    const res = await axios.get("http://localhost:8080/api/v1/products", {
      params: {
        pageNo,
        pageSize,
        sortBy,
        sortDir,
      },
    });
    if (res && res.data) {
      return res.data;
    }
  } catch (error) {
    console.log(error);
  }
};

const getProductById = async (productId) => {
  try {
    const res = await axios.get(
      `http://localhost:8080/api/v1/products/${productId}`
    );
    if (res && res.data) {
      return res.data;
    }
  } catch (error) {
    console.log(error);
  }
};

export { getListProduct, getProductById };
