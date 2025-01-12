import axios from 'axios';

const API_URL = 'https://fakestoreapi.com';

const fetchProducts = async () => {
  try {
    const response = await axios.get(`${API_URL}/products`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export { fetchProducts };