import axios from "axios";

axios.defaults.baseURL = 'https://api.escuelajs.co/api/v1/products';

const getAllProducts = async () => {
    const response = await axios.get('/');
    return response;
}

const getProduct = async ({ queryKey }) => {
    const [_, id] = queryKey;
    const response = await axios.get(`/${id}`);
    return response;
}

export {
    getAllProducts,
    getProduct
}