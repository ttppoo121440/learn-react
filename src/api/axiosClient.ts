import axios from 'axios';
import cookies from 'js-cookie';

const userCookie = cookies.get('token');

let token = '';
if (userCookie) {
  const user = JSON.parse(userCookie);
  token = user.token;
}
const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `${token}`,
  },
});

export default axiosClient;
