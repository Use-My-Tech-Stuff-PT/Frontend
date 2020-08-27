import axios from "axios";

export const axiosWithAuth = () => {
  const token = localStorage.getItem("token");
  return axios.create({
    baseURL: "https://use-my-tech-stuff-api.herokuapp.com",
    headers: {
      Authorization: token,
    },
  });
};
export default axiosWithAuth;
