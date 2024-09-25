import axios from "axios";

const instance = axios.create({
  // baseURL: "https://api.themoviedb.org/3",
  // params: {
  //   api_key: "224ce10a7d69928d35e14130ac08d7d8",
  //   language: "ko-KR",
  // },
});

export default instance;