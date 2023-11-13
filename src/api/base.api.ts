import axios from 'axios';

const getProducts = async () => {
  try {
    const response = await axios.get('https://fakestoreapi.com/products');
    return response.data;
  } catch (error: any) {
      return error.message;
  }
};

export default getProducts;