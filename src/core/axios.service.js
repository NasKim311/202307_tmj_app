import axios from 'axios';
import authService from 'services/auth.service'

// axios.defaults.baseURL = process.env.REACT_APP_BASE_URI;

axios.interceptors.request.use(
  (config) => {
    var token = localStorage.getItem('token')
    if (token && config.url != "/admin-api/auth") {
      let tokenObj = JSON.parse(token);
      config.headers['Authorization'] = `Bearer ${tokenObj.access_token}`;
    }
    return config
  },

  (error) => {
    return Promise.reject(error)
  }
)

axios.interceptors.response.use(
  (response) => {

    // 새로고침될때 response.data 가 않오고 response 로 오는 경우
    return response.data ? response.data : response;
  },

  async(error) => {
    const originalRequest = error.config;

    //console.log("interceptors.response.err" , error , error.code);

    if (error.code == "ERR_CANCELED"){    // axios cancel
      //console.log("ERR_CANCELED");
      return Promise.reject(error);
    }

    if (error.response && error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      
      try{
        let data = await authService.refreshToken();
        let token = data;
        //console.log("token",token);

        originalRequest.headers.Authorization = `Bearer ${token.access_token}`;
        authService.saveToken(token);
  //        console.log("refreshToken complete" , originalRequest);
        return axios(originalRequest);

      }catch(e){
        console.log("use exception" , e);
        authService.signOut();
      }
  
    }

    return Promise.reject(error);
  }
);

export default axios;