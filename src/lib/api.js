const { default: axios } = require("axios");

const apiRequest = axios.create({
   baseURL: `${process.env.NEXT_PUBLIC_API_URL}/api/v1/`
 });

export default apiRequest