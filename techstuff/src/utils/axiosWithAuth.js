import axios from 'axios';

export const axiosWithAuth = () => {
    const token = window.localStorage.getItem('token');
    return axios.create({
        headers: {
            authorization: token
        },
        baseURL: 'https://use-my-tech-stuff-api.herokuapp.com'
    });
};
export default axiosWithAuth;