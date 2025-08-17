import axios from "axios";

export const BASE_URL = "http://localhost:5000/";
const request = async ({ method = "GET", path = "", data = {}, headers = {}, token = "" }) => {
  
  // if(token || token !== tokenCookie){
  //   window.location.reload();
  // }
  try {
    const res = await axios({
      method,
      baseURL: BASE_URL,
      url: path,
      data,
      headers: {
        ...headers,
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } catch (error) {
    const errorData = error?.response?.data;
    const errorMessages = errorData?.errors || [errorData?.message || "Đã xảy ra lỗi."];   
    return errorMessages;
  }
};
export {request};